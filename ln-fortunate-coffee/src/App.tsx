import { useState, useEffect, useCallback } from 'react';
import { MenuItem, CartItem, OrderReceipt } from './types';
import { MENU_ITEMS } from './data/menuData';
import { WelcomeScreen } from './components/WelcomeScreen';
import { CatalogScreen } from './components/CatalogScreen';
import { MenuDetailScreen } from './components/MenuDetailScreen';
import { CartScreen } from './components/CartScreen';
import { ReceiptScreen } from './components/ReceiptScreen';
import { QrCode } from 'lucide-react';

type ScreenType = 'welcome' | 'catalog' | 'detail' | 'cart' | 'receipt';

// Helper to extract table number from URL query string (?meja=... or ?table=...) or hash
const extractTableFromUrl = (): string => {
  try {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      const queryTable = searchParams.get('meja') || searchParams.get('table') || searchParams.get('t');
      if (queryTable) {
        const clean = queryTable.trim();
        return clean.length === 1 ? `0${clean}` : clean;
      }

      if (window.location.hash) {
        const hashClean = window.location.hash.replace('#', '');
        const hashParams = new URLSearchParams(hashClean);
        const hashTable = hashParams.get('meja') || hashParams.get('table');
        if (hashTable) {
          const clean = hashTable.trim();
          return clean.length === 1 ? `0${clean}` : clean;
        }
      }
    }
  } catch (err) {
    console.error('Error parsing table parameter:', err);
  }
  return '05'; // Default table from mockup
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('welcome');
  const [tableNumber, setTableNumber] = useState<string>(() => extractTableFromUrl());
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);

  // Sync tableNumber if URL query changes (e.g. simulated QR scan or popstate)
  useEffect(() => {
    const handleUrlChange = () => {
      const detected = extractTableFromUrl();
      setTableNumber(detected);
    };

    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  // Initialize with an empty cart
  const [cart, setCart] = useState<CartItem[]>([]);

  // Active receipt data
  const [receipt, setReceipt] = useState<OrderReceipt | null>(null);

  // Ensure scroll position resets to top on screen change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentScreen]);

  // Handle adding an item to the cart
  const handleAddToCart = (item: MenuItem, quantity: number = 1, note?: string) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((c) => c.item.id === item.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
          note: note !== undefined ? note : updated[existingIndex].note,
        };
        return updated;
      }
      return [...prev, { item, quantity, note: note || '' }];
    });
  };

  // Handle updating quantity
  const handleUpdateCartQuantity = (itemId: string, change: number) => {
    setCart((prev) => {
      return prev
        .map((c) => {
          if (c.item.id === itemId) {
            const newQty = c.quantity + change;
            return newQty > 0 ? { ...c, quantity: newQty } : null;
          }
          return c;
        })
        .filter((c): c is CartItem => c !== null);
    });
  };

  // Handle removing item completely
  const handleRemoveCartItem = (itemId: string) => {
    setCart((prev) => prev.filter((c) => c.item.id !== itemId));
  };

  // Open detail view for an item
  const handleSelectItem = (item: MenuItem) => {
    setSelectedMenuItem(item);
    setCurrentScreen('detail');
  };

  // Merge new confirmed items into existing receipt items (summing identical item + note)
  const mergeOrderItems = (existingItems: CartItem[], newItems: CartItem[]): CartItem[] => {
    const merged = existingItems.map((ci) => ({ ...ci }));
    newItems.forEach((newItem) => {
      const normalizedNote = (newItem.note || '').trim();
      const matchIndex = merged.findIndex(
        (m) => m.item.id === newItem.item.id && (m.note || '').trim() === normalizedNote
      );
      if (matchIndex > -1) {
        merged[matchIndex] = {
          ...merged[matchIndex],
          quantity: merged[matchIndex].quantity + newItem.quantity,
        };
      } else {
        merged.push({ ...newItem, note: newItem.note || '' });
      }
    });
    return merged;
  };

  // Handle placing the order (creates initial receipt or merges into combined final receipt)
  const handleConfirmOrder = useCallback(() => {
    if (cart.length === 0) {
      if (receipt) {
        setCurrentScreen('receipt');
      }
      return;
    }

    // Format current date and time matching screenshot style: 01 Mei 2025, 09:41
    const now = new Date();
    const months = [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
    const dateFormatted = `${String(now.getDate()).padStart(2, '0')} ${
      months[now.getMonth()]
    } ${now.getFullYear()}, ${String(now.getHours()).padStart(2, '0')}:${String(
      now.getMinutes()
    ).padStart(2, '0')}`;

    setReceipt((prev) => {
      if (prev) {
        const mergedItems = mergeOrderItems(prev.items, cart);
        const combinedTotal = mergedItems.reduce(
          (sum, ci) => sum + ci.item.price * ci.quantity,
          0
        );
        return {
          ...prev,
          tableNumber,
          createdAt: dateFormatted,
          items: mergedItems,
          total: combinedTotal,
          status: 'Menunggu Pembayaran',
          orderCount: (prev.orderCount || 1) + 1,
        };
      }

      const total = cart.reduce(
        (sum, item) => sum + item.item.price * item.quantity,
        0
      );

      return {
        orderNumber: '#P250501-001',
        tableNumber,
        createdAt: dateFormatted,
        items: cart.map((ci) => ({ ...ci })),
        total,
        status: 'Menunggu Pembayaran',
        orderCount: 1,
      };
    });

    // Clear cart so any future additional order stays separated from confirmed orders
    setCart([]);
    setCurrentScreen('receipt');
  }, [cart, receipt, tableNumber]);

  // Start new / additional order
  const handleNewOrder = () => {
    setCurrentScreen('catalog');
  };

  // Switch table via URL simulation (for testing QR links without changing static UI)
  const handleSimulateQrTable = (newTable: string) => {
    setTableNumber(newTable);
    const url = new URL(window.location.href);
    url.searchParams.set('meja', newTable);
    window.history.pushState({}, '', url.toString());
  };

  return (
    <div className="min-h-screen bg-[#251811] flex flex-col items-center justify-start antialiased font-sans">
      {/* 
        Mobile Device Wrapper:
        The table badge at top-right is completely static and non-clickable,
        strictly determined by the QR code link scanned for each table.
      */}
      <div className="w-full max-w-md min-h-screen bg-[#FAF7F2] shadow-2xl relative flex flex-col overflow-x-clip">
        {currentScreen === 'welcome' && (
          <WelcomeScreen
            tableNumber={tableNumber}
            onStartOrder={() => setCurrentScreen('catalog')}
          />
        )}

        {currentScreen === 'catalog' && (
          <CatalogScreen
            tableNumber={tableNumber}
            cart={cart}
            existingReceipt={receipt}
            onSelectItem={handleSelectItem}
            onAddToCart={handleAddToCart}
            onUpdateCartQuantity={handleUpdateCartQuantity}
            onViewCart={() => setCurrentScreen('cart')}
            onViewReceipt={() => setCurrentScreen('receipt')}
          />
        )}

        {currentScreen === 'detail' && selectedMenuItem && (
          <MenuDetailScreen
            item={selectedMenuItem}
            initialQuantity={
              cart.find((c) => c.item.id === selectedMenuItem.id)?.quantity || 1
            }
            initialNote={
              cart.find((c) => c.item.id === selectedMenuItem.id)?.note || ''
            }
            onBack={() => setCurrentScreen('catalog')}
            onAddToCart={handleAddToCart}
          />
        )}

        {currentScreen === 'cart' && (
          <CartScreen
            tableNumber={tableNumber}
            cart={cart}
            existingReceipt={receipt}
            onBack={() => setCurrentScreen('catalog')}
            onUpdateQuantity={handleUpdateCartQuantity}
            onRemoveItem={handleRemoveCartItem}
            onConfirmOrder={handleConfirmOrder}
            onNavigateToCatalog={() => setCurrentScreen('catalog')}
            onViewReceipt={() => setCurrentScreen('receipt')}
          />
        )}

        {currentScreen === 'receipt' && receipt && (
          <ReceiptScreen
            receipt={receipt}
            onBackToHome={() => setCurrentScreen('catalog')}
            onNewOrder={handleNewOrder}
          />
        )}
      </div>

      {/* Screen & QR Link testing toolbar (Desktop preview only) */}
      {/* <aside className="hidden lg:flex fixed bottom-4 right-4 z-50 bg-[#352319]/90 backdrop-blur-md border border-[#4D3325] rounded-2xl p-2.5 text-white/90 text-xs shadow-xl items-center gap-2">
        <div className="flex items-center gap-1.5 pr-2 border-r border-[#543828]">
          <QrCode className="w-3.5 h-3.5 text-[#C8B8A6]" />
          <span className="text-[11px] font-medium text-[#C8B8A6]">QR Meja:</span>
          {['01', '05', '08', '12'].map((tbl) => (
            <button
              key={tbl}
              type="button"
              onClick={() => handleSimulateQrTable(tbl)}
              className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                tableNumber === tbl
                  ? 'bg-[#8F6A4F] text-white font-bold'
                  : 'text-[#C8B8A6] hover:bg-[#432D21]'
              }`}
              title={`Simulasi scan QR dengan parameter ?meja=${tbl}`}
            >
              Meja {tbl}
            </button>
          ))}
        </div>

        <span className="text-[11px] font-medium text-[#C8B8A6] px-1">Layar:</span>
        {(['welcome', 'catalog', 'cart', 'receipt'] as ScreenType[]).map((scr) => (
          <button
            key={scr}
            type="button"
            onClick={() => {
              if (scr === 'receipt' && !receipt) {
                if (cart.length > 0) {
                  handleConfirmOrder();
                }
              } else {
                setCurrentScreen(scr);
              }
            }}
            disabled={scr === 'receipt' && !receipt && cart.length === 0}
            className={`px-2.5 py-1 rounded-lg capitalize transition-colors ${
              scr === 'receipt' && !receipt && cart.length === 0
                ? 'text-[#7C685A] opacity-50 cursor-not-allowed'
                : currentScreen === scr
                ? 'bg-[#614534] text-white font-semibold'
                : 'text-[#C8B8A6] hover:bg-[#432D21]'
            }`}
          >
            {scr === 'welcome'
              ? '1. Welcome'
              : scr === 'catalog'
              ? '2. Menu'
              : scr === 'cart'
              ? '4. Keranjang'
              : '7. Nota'}
          </button>
        ))}
      </aside> */}
    </div>
  );
}
