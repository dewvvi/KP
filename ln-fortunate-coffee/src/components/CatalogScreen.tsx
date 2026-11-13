import React, { useState, useMemo, useEffect, useRef } from 'react';
import { BrandLogo } from './BrandLogo';
import { TableBadge } from './TableBadge';
import { MenuItem, CategoryType, CartItem } from '../types';
import { MENU_ITEMS, CATEGORIES, formatRupiah } from '../data/menuData';
import { Search, Plus, Minus, ShoppingBag, ArrowRight, X, Sparkles } from 'lucide-react';

interface CatalogScreenProps {
  tableNumber: string;
  cart: CartItem[];
  onSelectItem: (item: MenuItem) => void;
  onAddToCart: (item: MenuItem, quantity?: number, note?: string) => void;
  onUpdateCartQuantity: (itemId: string, change: number) => void;
  onViewCart: () => void;
}

export const CatalogScreen: React.FC<CatalogScreenProps> = ({
  tableNumber,
  cart,
  onSelectItem,
  onAddToCart,
  onUpdateCartQuantity,
  onViewCart,
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('Noodles');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryScrollRef = useRef<HTMLDivElement>(null);
  const categoryTabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const isClickScrolling = useRef<boolean>(false);

  // Cart totals calculation
  const totalItemsCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );
  const totalPrice = useMemo(
    () => cart.reduce((sum, item) => sum + item.item.price * item.quantity, 0),
    [cart]
  );

  const isSearching = searchQuery.trim().length > 0;

  // Search results
  const searchResults = useMemo(() => {
    if (!isSearching) return [];
    const q = searchQuery.toLowerCase().trim();
    return MENU_ITEMS.filter((item) => {
      const nameMatch =
        item.name.toLowerCase().includes(q) ||
        (item.shortName ? item.shortName.toLowerCase().includes(q) : false);
      const categoryMatch =
        item.category.toLowerCase() === q ||
        (q.length >= 3 && item.category.toLowerCase().startsWith(q));
      return nameMatch || categoryMatch;
    });
  }, [searchQuery, isSearching]);

  // Group items by category in the exact requested order
  const itemsByCategory = useMemo(() => {
    const grouped: Record<CategoryType, MenuItem[]> = {
      Noodles: [],
      Soup: [],
      Rice: [],
      Food: [],
      Coffee: [],
      'Soy Milk': [],
      'Ice Cream': [],
      Drink: [],
      Bread: [],
      Burger: [],
      Pizza: [],
    };

    MENU_ITEMS.forEach((item) => {
      if (grouped[item.category]) {
        grouped[item.category].push(item);
      }
    });

    return grouped;
  }, []);

  // Check if item is already in cart to display counter
  const getItemCartQuantity = (itemId: string) => {
    const found = cart.find((c) => c.item.id === itemId);
    return found ? found.quantity : 0;
  };

  // Scroll spy: Update active category based on scroll position without affecting window scroll
  useEffect(() => {
    if (isSearching) return;

    const handleScroll = () => {
      if (isClickScrolling.current) return;

      // Top static bar height is around 160px
      const scrollPos = window.scrollY + 175;
      for (let i = CATEGORIES.length - 1; i >= 0; i--) {
        const cat = CATEGORIES[i];
        const sectionId = `section-${cat.id.toLowerCase().replace(/\s+/g, '-')}`;
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPos) {
          setActiveCategory(cat.id as CategoryType);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSearching]);

  // Automatically scroll horizontal category tabs safely using container.scrollLeft
  // (NEVER call Element.scrollIntoView which jumps the window scroll position!)
  useEffect(() => {
    if (isSearching) return;
    const btn = categoryTabRefs.current[activeCategory];
    const container = categoryScrollRef.current;
    if (btn && container) {
      const containerRect = container.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();
      const offset =
        btnRect.left -
        containerRect.left -
        container.clientWidth / 2 +
        btn.clientWidth / 2;

      container.scrollTo({
        left: container.scrollLeft + offset,
        behavior: 'smooth',
      });
    }
  }, [activeCategory, isSearching]);

  // Handle clicking a category tab: smoothly scrolls to that section
  const handleCategoryClick = (catId: CategoryType) => {
    setActiveCategory(catId);
    isClickScrolling.current = true;

    const sectionId = `section-${catId.toLowerCase().replace(/\s+/g, '-')}`;
    const sectionEl = document.getElementById(sectionId);
    if (sectionEl) {
      // Offset for the static top bar (header + search + categories ~165px)
      const topBarOffset = 165;
      const elementPosition = sectionEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topBarOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });
    }

    // Release click scroll lock after smooth scroll animation completes
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#3D271D] pb-44 flex flex-col">
      {/* 
        ========================================================================
        PERMANENTLY FIXED TOP HEADER:
        1. Brand Header (Logo & Meja 05)
        2. Search Bar
        3. Category Tabs (placed neatly under the search bar)
        Stays firmly pinned to the top of the user's viewport at all times!
        Never moves when scrolling.
        ========================================================================
      */}
      <div className="fixed top-0 left-0 right-0 max-w-md mx-auto z-40 bg-[#FAF7F2] border-b border-[#EDE4D6]/90 shadow-xs">
        <div className="w-full">
          {/* Header Row: Logo & Table Number */}
          <div className="flex items-center justify-between px-5 pt-3.5 pb-2">
            <BrandLogo size="sm" layout="horizontal" />
            <TableBadge tableNumber={tableNumber} />
          </div>

          {/* Search Bar Row */}
          <div className="px-4 pb-2.5">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8A796C]">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari menu favorit kamu..."
                className="w-full pl-10 pr-9 py-2.5 rounded-full bg-white border border-[#E8DEC8] text-sm text-[#3D271D] placeholder-[#A09285] shadow-2xs focus:outline-hidden focus:ring-1.5 focus:ring-[#3D271D]/30 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#8A796C] hover:text-[#3D271D]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs: Placed below search bar, scrollable & fixed */}
          {!isSearching && (
            <div
              ref={categoryScrollRef}
              className="flex items-center gap-2 overflow-x-auto no-scrollbar px-4 pb-3 pt-0.5"
            >
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    ref={(el) => {
                      categoryTabRefs.current[cat.id] = el;
                    }}
                    type="button"
                    onClick={() => handleCategoryClick(cat.id as CategoryType)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 shadow-2xs cursor-pointer ${
                      isActive
                        ? 'bg-[#3D271D] text-white shadow-xs scale-[1.02]'
                        : 'bg-white text-[#5C4A3E] border border-[#E9DFCE] hover:bg-[#F5EFE5]'
                    }`}
                  >
                    {cat.emoji && <span className="text-xs">{cat.emoji}</span>}
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* 
        SPACER:
        Guarantees that the scrollable feed starts exactly below the fixed header!
      */}
      <div className={isSearching ? "h-[110px]" : "h-[156px]"} aria-hidden="true" />

      {/* 
        ========================================================================
        SCROLLABLE CONTENT AREA:
        Only this area moves when scrolling: starts from Card 'Good Food, Good Mood'
        and continues down through all 11 sections to Pizza!
        ========================================================================
      */}
      <main className="flex-1 px-4 pt-4 max-w-md mx-auto w-full">
        {/* ============================================================== */}
        {/* SEARCH MODE (When user types a search query)                  */}
        {/* ============================================================== */}
        {isSearching && (
          <div>
            <div className="flex items-center justify-between mb-3.5 px-0.5">
              <div className="flex items-center gap-2">
                <span className="text-base">🔍</span>
                <h2 className="font-serif-brand font-bold text-base text-[#3D271D]">
                  Hasil Pencarian
                </h2>
              </div>
              <span className="text-xs text-[#806E61]">
                {searchResults.length} Menu Ditemukan
              </span>
            </div>

            {searchResults.length > 0 ? (
              <div className="grid grid-cols-2 gap-3.5">
                {searchResults.map((item) => {
                  const qtyInCart = getItemCartQuantity(item.id);

                  return (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl p-2.5 flex flex-col justify-between border border-[#EDE2D2] shadow-2xs hover:shadow-xs transition-shadow"
                    >
                      <div
                        onClick={() => onSelectItem(item)}
                        className="relative cursor-pointer group"
                      >
                        <div className="w-full aspect-square rounded-xl overflow-hidden bg-[#F2ECE1]">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                        {item.tag && (
                          <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-[#486B42] text-white text-[10px] font-semibold tracking-wide shadow-xs">
                            {item.tag}
                          </span>
                        )}
                      </div>

                      <div className="mt-2.5 flex flex-col flex-1 justify-between">
                        <h4
                          onClick={() => onSelectItem(item)}
                          className="font-medium text-xs text-[#3D271D] line-clamp-1 hover:underline cursor-pointer"
                          title={item.name}
                        >
                          {item.name}
                        </h4>

                        <div className="mt-2 pt-1 flex items-center justify-between">
                          <span className="font-semibold text-xs text-[#3D271D]">
                            {formatRupiah(item.price)}
                          </span>

                          {qtyInCart > 0 ? (
                            <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-[#F5EFE5] text-[#3D271D] text-xs font-semibold">
                              <button
                                type="button"
                                onClick={() => onUpdateCartQuantity(item.id, -1)}
                                className="w-4 h-4 flex items-center justify-center hover:opacity-70 transition-opacity"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="w-3 text-center">{qtyInCart}</span>
                              <button
                                type="button"
                                onClick={() => onUpdateCartQuantity(item.id, 1)}
                                className="w-4 h-4 flex items-center justify-center hover:opacity-70 transition-opacity"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          ) : (
                            <button
                              type="button"
                              onClick={() => onAddToCart(item, 1)}
                              className="w-7 h-7 rounded-full bg-[#3D271D] hover:bg-[#2C1911] active:scale-90 text-white flex items-center justify-center shadow-xs transition-all cursor-pointer"
                              aria-label={`Tambah ${item.name}`}
                            >
                              <Plus className="w-4 h-4 stroke-[2.5]" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12 px-4 bg-white/60 rounded-2xl border border-dashed border-[#DFD3C1] my-4">
                <span className="text-3xl">🍲</span>
                <p className="font-serif-brand font-bold text-sm text-[#3D271D] mt-2">
                  Menu tidak ditemukan
                </p>
                <p className="text-xs text-[#7E6C5E] mt-1">
                  Coba cari dengan kata kunci lain seperti "Noodles", "Soup", atau "Coffee".
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-3 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#EFE6D8] text-[#3D271D] hover:bg-[#E5D9C7]"
                >
                  Tampilkan Semua Menu
                </button>
              </div>
            )}
          </div>
        )}

        {/* ============================================================== */}
        {/* NORMAL MODE: Good Food Card & All 11 Sections Sequentially     */}
        {/* ============================================================== */}
        {!isSearching && (
          <>
            {/* 
              HERO PROMO BANNER:
              "Good Food, Good Mood at Fortunate Coffee"
              This moves smoothly with the scroll below the static top controls!
            */}
            <div className="relative rounded-2xl bg-[#EFE6D8]/85 border border-[#E4D8C5] p-4 mb-6 overflow-hidden flex items-center justify-between shadow-2xs">
              <div className="relative z-10 max-w-[58%]">
                <div className="flex items-center gap-1 text-[#486B42] mb-1">
                  <Sparkles className="w-3 h-3 text-[#B09B7A]" />
                </div>
                <h3 className="font-serif-brand text-lg font-bold text-[#3D271D] leading-snug">
                  Good Food, <br />
                  <span className="italic text-[#486B42] font-semibold">Good Mood</span>
                </h3>
                <p className="text-[11px] text-[#786658] mt-1 font-medium">
                  at Fortunate Coffee
                </p>
              </div>

              {/* Circular Dish Showcase Image */}
              <div className="relative z-10 shrink-0">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <img
                    src="/assets/menu/lucky_noodle.png"
                    alt="Featured Dish"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="absolute -bottom-1 -left-2 text-sm select-none">🌿</span>
              </div>
            </div>

            {/* Render Each Category Section in Sequence (Noodles to Pizza) */}
            <div className="space-y-8">
              {CATEGORIES.map((cat) => {
                const sectionItems = itemsByCategory[cat.id as CategoryType] || [];
                const sectionId = `section-${cat.id.toLowerCase().replace(/\s+/g, '-')}`;

                return (
                  <section
                    key={cat.id}
                    id={sectionId}
                    className="scroll-mt-44"
                  >
                    {/* Section Header */}
                    <div className="flex items-center justify-between mb-3 px-0.5 border-b border-[#EFE5D7]/80 pb-2">
                      <div className="flex items-center gap-2">
                        {cat.emoji && <span className="text-base">{cat.emoji}</span>}
                        <h2 className="font-serif-brand font-bold text-base text-[#3D271D]">
                          {cat.label}
                        </h2>
                        <span className="text-[11px] text-[#9A8778] font-normal">
                          ({sectionItems.length})
                        </span>
                      </div>
                      <span className="text-[11px] text-[#867568] font-medium">
                        Loving Nature
                      </span>
                    </div>

                    {/* Section Grid */}
                    <div className="grid grid-cols-2 gap-3.5">
                      {sectionItems.map((item) => {
                        const qtyInCart = getItemCartQuantity(item.id);

                        return (
                          <div
                            key={item.id}
                            className="bg-white rounded-2xl p-2.5 flex flex-col justify-between border border-[#EDE2D2] shadow-2xs hover:shadow-xs transition-shadow"
                          >
                            {/* Card Thumbnail */}
                            <div
                              onClick={() => onSelectItem(item)}
                              className="relative cursor-pointer group"
                            >
                              <div className="w-full aspect-square rounded-xl overflow-hidden bg-[#F2ECE1]">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                  loading="lazy"
                                />
                              </div>
                              {item.tag && (
                                <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-[#486B42] text-white text-[10px] font-semibold tracking-wide shadow-xs">
                                  {item.tag}
                                </span>
                              )}
                            </div>

                            {/* Card Information */}
                            <div className="mt-2.5 flex flex-col flex-1 justify-between">
                              <h4
                                onClick={() => onSelectItem(item)}
                                className="font-medium text-xs text-[#3D271D] line-clamp-1 hover:underline cursor-pointer"
                                title={item.name}
                              >
                                {item.name}
                              </h4>

                              {/* Price & Action Button */}
                              <div className="mt-2 pt-1 flex items-center justify-between">
                                <span className="font-semibold text-xs text-[#3D271D]">
                                  {formatRupiah(item.price)}
                                </span>

                                {qtyInCart > 0 ? (
                                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-[#F5EFE5] text-[#3D271D] text-xs font-semibold">
                                    <button
                                      type="button"
                                      onClick={() => onUpdateCartQuantity(item.id, -1)}
                                      className="w-4 h-4 flex items-center justify-center hover:opacity-70 transition-opacity"
                                    >
                                      <Minus className="w-3 h-3" />
                                    </button>
                                    <span className="w-3 text-center">{qtyInCart}</span>
                                    <button
                                      type="button"
                                      onClick={() => onUpdateCartQuantity(item.id, 1)}
                                      className="w-4 h-4 flex items-center justify-center hover:opacity-70 transition-opacity"
                                    >
                                      <Plus className="w-3 h-3" />
                                    </button>
                                  </div>
                                ) : (
                                  <button
                                    type="button"
                                    onClick={() => onAddToCart(item, 1)}
                                    className="w-7 h-7 rounded-full bg-[#3D271D] hover:bg-[#2C1911] active:scale-90 text-white flex items-center justify-center shadow-xs transition-all cursor-pointer"
                                    aria-label={`Tambah ${item.name}`}
                                  >
                                    <Plus className="w-4 h-4 stroke-[2.5]" />
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                );
              })}
            </div>
          </>
        )}
      </main>

      {/* 
        FLOATING BOTTOM CART BAR:
        Visible whenever there is at least 1 item in the cart.
      */}
      {totalItemsCount > 0 && (
        <div className="fixed bottom-4 left-0 right-0 z-40 px-4 flex justify-center pointer-events-none">
          <div className="w-full max-w-sm pointer-events-auto bg-[#F7EFE4] border border-[#E9DFCE] rounded-full p-2 pl-3 shadow-xl flex items-center justify-between gap-3 animate-in fade-in slide-in-from-bottom-3 duration-200">
            {/* Bag Icon & Info */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#3D271D] shadow-2xs">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] text-[#7A695B] leading-none">
                  {totalItemsCount} Menu
                </span>
                <span className="font-bold text-xs text-[#3D271D] mt-0.5">
                  {formatRupiah(totalPrice)}
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              type="button"
              onClick={onViewCart}
              className="py-2.5 px-4 rounded-full bg-[#3D271D] hover:bg-[#2C1911] active:scale-95 text-white text-xs font-medium flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
            >
              <span>{isSearching ? 'Lihat Keranjang' : 'Ringkasan Pesanan'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
