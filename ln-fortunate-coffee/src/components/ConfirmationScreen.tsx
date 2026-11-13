import React from 'react';
import { CartItem } from '../types';
import { formatRupiah } from '../data/menuData';
import { TableBadge } from './TableBadge';
import { LeafBranchBottom, BottomDunesWave } from './BotanicalDecorations';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ConfirmationScreenProps {
  tableNumber: string;
  cart: CartItem[];
  onBack: () => void;
  onEditOrder: () => void;
  onConfirmOrder: () => void;
}

export const ConfirmationScreen: React.FC<ConfirmationScreenProps> = ({
  tableNumber,
  cart,
  onBack,
  onEditOrder,
  onConfirmOrder,
}) => {
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.item.price * item.quantity,
    0
  );

  return (
    <div className="relative min-h-screen bg-[#FAF7F2] text-[#3D271D] flex flex-col justify-between overflow-x-hidden pt-3">
      {/* Upper Content */}
      <div className="relative z-10 w-full max-w-md mx-auto flex-1 flex flex-col">
        {/* Top Header */}
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
            Konfirmasi Pesanan
          </h1>
        </div>

        {/* Table Number Banner (Static) */}
        <div className="px-5 pt-4 pb-3">
          <TableBadge tableNumber={tableNumber} size="md" />
        </div>

        {/* Summary of Items */}
        <div className="px-5 py-2 divide-y divide-[#EFE5D6]/90">
          {cart.map((cartItem) => {
            const itemTotal = cartItem.item.price * cartItem.quantity;

            return (
              <div key={cartItem.item.id} className="py-3.5 flex items-start gap-3.5">
                {/* Food Image */}
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#F2ECE1] shrink-0 border border-[#EAE0D3]">
                  <img
                    src={cartItem.item.image}
                    alt={cartItem.item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info & Quantity */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <h4 className="font-semibold text-sm text-[#3D271D]">
                      {cartItem.item.name}{' '}
                      <span className="font-normal text-xs text-[#7B695B]">
                        x{cartItem.quantity}
                      </span>
                    </h4>
                    <span className="font-semibold text-xs text-[#3D271D]">
                      {formatRupiah(itemTotal)}
                    </span>
                  </div>

                  {cartItem.note ? (
                    <p className="text-xs text-[#7B695B] mt-1 leading-snug">
                      Catatan: {cartItem.note}
                    </p>
                  ) : (
                    <p className="text-[11px] text-[#A6978A] mt-1 italic">
                      Tidak ada catatan khusus
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Total Price Section */}
        <div className="px-6 py-4 flex items-center justify-between border-t border-[#EDE1D1] mt-2">
          <span className="font-bold text-base text-[#3D271D]">Total</span>
          <span className="font-serif-brand font-bold text-lg text-[#3D271D]">
            {formatRupiah(totalPrice)}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="px-6 pt-3 pb-6 space-y-3 z-20">
          <button
            type="button"
            onClick={onEditOrder}
            className="w-full py-3.5 px-6 rounded-full bg-[#F3ECE0] hover:bg-[#EAE1D3] active:scale-[0.98] text-[#3D271D] font-semibold text-xs border border-[#E7DDCF] shadow-2xs transition-all cursor-pointer"
          >
            Ubah Pesanan
          </button>

          <button
            type="button"
            onClick={onConfirmOrder}
            className="w-full py-4 px-6 rounded-full bg-[#3D271D] hover:bg-[#2C1911] active:scale-[0.98] text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#3D271D]/20 transition-all cursor-pointer"
          >
            <span>Konfirmasi & Kirim Pesanan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Botanical foliage and dune waves bottom decoration */}
      <div className="relative w-full max-w-md mx-auto pointer-events-none mt-auto">
        <LeafBranchBottom className="absolute -bottom-4 left-2 z-10 opacity-70" />
        <LeafBranchBottom className="absolute -bottom-4 right-2 z-10 opacity-70" flip />
        <BottomDunesWave />
      </div>
    </div>
  );
};
