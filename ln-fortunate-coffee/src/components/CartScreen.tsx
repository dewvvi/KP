import React from 'react';
import { CartItem } from '../types';
import { formatRupiah } from '../data/menuData';
import { TableBadge } from './TableBadge';
import { LeafBranchBottom } from './BotanicalDecorations';
import { ArrowLeft, Trash2, Plus, Minus, FileText, ArrowRight, UtensilsCrossed } from 'lucide-react';

interface CartScreenProps {
  tableNumber: string;
  cart: CartItem[];
  onBack: () => void;
  onUpdateQuantity: (itemId: string, change: number) => void;
  onRemoveItem: (itemId: string) => void;
  onProceedToConfirmation: () => void;
  onNavigateToCatalog: () => void;
}

export const CartScreen: React.FC<CartScreenProps> = ({
  tableNumber,
  cart,
  onBack,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToConfirmation,
  onNavigateToCatalog,
}) => {
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.item.price * item.quantity,
    0
  );

  return (
    <div className="relative min-h-screen bg-[#FAF7F2] text-[#3D271D] flex flex-col justify-between overflow-x-hidden pt-3">
      {/* Scrollable Container */}
      <div className="relative z-10 w-full max-w-md mx-auto flex-1 flex flex-col">
        {/* Top App Bar */}
        <div className="px-5 py-3.5 flex items-center justify-between border-b border-[#EFE5D6]/80">
          <button
            type="button"
            onClick={onBack}
            className="p-1 -ml-1 text-[#3D271D] hover:opacity-75 transition-opacity"
            aria-label="Kembali"
          >
            <ArrowLeft className="w-6 h-6 stroke-[2.2]" />
          </button>
          <h1 className="font-serif-brand font-bold text-lg text-[#3D271D] flex-1 text-center pr-5">
            Ringkasan Pesanan
          </h1>
        </div>

        {/* Table Number Banner (Static) */}
        <div className="px-5 pt-4 pb-2">
          <TableBadge
            tableNumber={tableNumber}
            size="md"
          />
        </div>

        {/* Cart Items List */}
        <div className="flex-1 px-5 py-3 space-y-5">
          {cart.length === 0 ? (
            <div className="text-center py-16 px-4 bg-white/70 rounded-3xl border border-dashed border-[#DFD3C1] my-4">
              <UtensilsCrossed className="w-10 h-10 mx-auto text-[#8B796D] stroke-1" />
              <h3 className="font-serif-brand font-bold text-base text-[#3D271D] mt-3">
                Keranjang masih kosong
              </h3>
              <p className="text-xs text-[#7A695B] mt-1 max-w-xs mx-auto">
                Anda belum memilih menu makanan atau minuman lezat dari LN Fortunate Coffee.
              </p>
              <button
                type="button"
                onClick={onNavigateToCatalog}
                className="mt-5 px-6 py-2.5 rounded-full text-xs font-semibold bg-[#3D271D] text-white hover:bg-[#2C1911] shadow-xs"
              >
                Lihat Katalog Menu
              </button>
            </div>
          ) : (
            cart.map((cartItem) => {
              const itemTotal = cartItem.item.price * cartItem.quantity;

              return (
                <div
                  key={cartItem.item.id}
                  className="pb-3 border-b border-[#EFE5D6]/80 last:border-b-0"
                >
                  {/* Top Row: Thumbnail + Info & Subtotal */}
                  <div className="flex items-start gap-3.5">
                    {/* Thumbnail */}
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#F2ECE1] shrink-0 border border-[#EBE0D2]">
                      <img
                        src={cartItem.item.image}
                        alt={cartItem.item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Middle Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="font-semibold text-sm text-[#3D271D] truncate">
                          {cartItem.item.name}
                        </h4>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(cartItem.item.id)}
                          className="text-[#968476] hover:text-red-700 p-0.5 transition-colors"
                          title="Hapus menu"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <p className="text-xs text-[#756457] mt-0.5">
                        {formatRupiah(cartItem.item.price)}
                      </p>

                      {/* Stepper + Row Subtotal */}
                      <div className="mt-2.5 flex items-center justify-between">
                        <div className="inline-flex items-center gap-3 px-2.5 py-1 rounded-full bg-[#F3ECE0] border border-[#E7DDCF] text-xs font-semibold text-[#3D271D]">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(cartItem.item.id, -1)}
                            className="hover:opacity-70 transition-opacity p-0.5"
                          >
                            <Minus className="w-3 h-3 stroke-[2.5]" />
                          </button>
                          <span className="w-3 text-center">{cartItem.quantity}</span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(cartItem.item.id, 1)}
                            className="hover:opacity-70 transition-opacity p-0.5"
                          >
                            <Plus className="w-3 h-3 stroke-[2.5]" />
                          </button>
                        </div>

                        <span className="font-bold text-sm text-[#3D271D]">
                          {formatRupiah(itemTotal)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Note pill if provided */}
                  {cartItem.note && (
                    <div className="mt-2.5 py-2 px-3.5 rounded-xl bg-[#F6EFE6] border border-[#ECE0D0] flex items-center gap-2 text-xs text-[#5D4A3D]">
                      <FileText className="w-3.5 h-3.5 text-[#887567] shrink-0" />
                      <span className="truncate">Catatan: {cartItem.note}</span>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Total Price Row */}
        {cart.length > 0 && (
          <div className="px-6 py-4 flex items-center justify-between border-t border-[#EDE1D1] bg-[#FAF7F2]">
            <span className="font-bold text-base text-[#3D271D]">Total</span>
            <span className="font-serif-brand font-bold text-lg text-[#3D271D]">
              {formatRupiah(totalPrice)}
            </span>
          </div>
        )}
      </div>

      {/* Decorative foliage bottom */}
      <div className="relative w-full max-w-md mx-auto">
        <LeafBranchBottom className="absolute -bottom-6 right-2 pointer-events-none opacity-40 z-0" flip />
      </div>

      {/* Sticky Bottom Action Button */}
      {cart.length > 0 && (
        <div className="relative z-10 w-full max-w-md mx-auto px-6 pb-8 pt-2">
          <button
            type="button"
            onClick={onProceedToConfirmation}
            className="w-full py-4 px-6 rounded-full bg-[#3D271D] hover:bg-[#2C1911] active:scale-[0.98] text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#3D271D]/20 transition-all cursor-pointer"
          >
            <span>Buat Pesanan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
