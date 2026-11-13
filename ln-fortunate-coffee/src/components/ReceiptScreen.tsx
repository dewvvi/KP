import React, { useState } from 'react';
import { OrderReceipt } from '../types';
import { formatRupiah } from '../data/menuData';
import { BrandLogo } from './BrandLogo';
import { LeafBranchBottom, BottomDunesWave, LeafSprigTopLeft, LeafSprigTopRight } from './BotanicalDecorations';
import { ArrowLeft, Info, Check, Printer, RotateCcw } from 'lucide-react';

interface ReceiptScreenProps {
  receipt: OrderReceipt;
  onBackToHome: () => void;
  onNewOrder: () => void;
}

export const ReceiptScreen: React.FC<ReceiptScreenProps> = ({
  receipt,
  onBackToHome,
  onNewOrder,
}) => {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyOrderNumber = () => {
    navigator.clipboard?.writeText(receipt.orderNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen bg-[#FAF7F2] text-[#3D271D] flex flex-col justify-between overflow-x-hidden pt-3">
      {/* Decorative top leaves */}
      <LeafSprigTopLeft className="absolute top-2 left-0 -translate-x-3 pointer-events-none opacity-50 z-0" />
      <LeafSprigTopRight className="absolute top-2 right-0 translate-x-2 pointer-events-none opacity-50 z-0" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-md mx-auto flex-1 flex flex-col pb-8">
        {/* Top Header */}
        <div className="px-5 py-3 flex items-center justify-between">
          <button
            type="button"
            onClick={onBackToHome}
            className="p-1 -ml-1 text-[#3D271D] hover:opacity-75 transition-opacity"
            aria-label="Kembali"
          >
            <ArrowLeft className="w-6 h-6 stroke-[2.2]" />
          </button>
          <h1 className="font-serif-brand font-bold text-lg text-[#3D271D] flex-1 text-center pr-5">
            Nota Digital
          </h1>
        </div>

        {/* The White Receipt Paper Card */}
        <div className="px-4 py-2">
          <div className="bg-white rounded-3xl p-6 shadow-xl border border-[#ECE0D2] relative overflow-hidden">
            {/* Top Brand Logo with tree emblem */}
            <div className="flex flex-col items-center text-center">
              <BrandLogo layout="vertical" size="md" showSubtitle={true} />

              {/* Status Pill Badge */}
              <div className="mt-4 px-4 py-1.5 rounded-full bg-[#FCEEE2] border border-[#F5DEC9] text-[#7A4B29] text-xs font-semibold">
                Status: {receipt.status}
              </div>
            </div>

            {/* Order Metadata */}
            <div className="mt-6 space-y-1.5 text-xs text-[#6B5749] border-b border-[#EFE5D7] pb-4">
              <div className="flex items-center justify-between">
                <span>No. Pesanan</span>
                <button
                  type="button"
                  onClick={handleCopyOrderNumber}
                  className="font-bold text-[#3D271D] hover:underline flex items-center gap-1 cursor-pointer"
                  title="Salin nomor pesanan"
                >
                  <span>{receipt.orderNumber}</span>
                  {copied && <Check className="w-3 h-3 text-emerald-600" />}
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span>Meja</span>
                <span className="font-bold text-[#3D271D]">{receipt.tableNumber}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Tanggal</span>
                <span className="font-medium text-[#3D271D]">{receipt.createdAt}</span>
              </div>
            </div>

            {/* Ordered Line Items */}
            <div className="py-4 space-y-4">
              {receipt.items.map((cartItem) => {
                const itemTotal = cartItem.item.price * cartItem.quantity;

                return (
                  <div key={cartItem.item.id} className="text-xs">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 pr-2">
                        <span className="font-semibold text-[#3D271D]">
                          {cartItem.item.name}
                        </span>
                      </div>
                      <div className="text-right text-[#7B6A5E] pr-3 shrink-0">
                        {cartItem.quantity}x {formatRupiah(cartItem.item.price)}
                      </div>
                      <div className="font-semibold text-[#3D271D] shrink-0 text-right min-w-[70px]">
                        {formatRupiah(itemTotal)}
                      </div>
                    </div>

                    {/* Notes line */}
                    {cartItem.note && (
                      <p className="text-[11px] text-[#867568] mt-0.5 pl-0.5 italic">
                        Catatan: {cartItem.note}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Dotted Divider */}
            <div className="border-t border-dashed border-[#D9CABB] my-1" />

            {/* Total Row */}
            <div className="py-3 flex items-center justify-between">
              <span className="font-bold text-sm text-[#3D271D]">Total</span>
              <span className="font-serif-brand font-bold text-base text-[#3D271D]">
                {formatRupiah(receipt.total)}
              </span>
            </div>

            {/* Callout Notice: Pembayaran dilakukan di kasir */}
            <div className="mt-3 p-3.5 rounded-2xl bg-[#F7EFE4] border border-[#E9DFD0] flex items-center gap-3 text-xs text-[#5D4A3D]">
              <div className="w-5 h-5 rounded-full bg-[#42281D] text-white flex items-center justify-center shrink-0">
                <Info className="w-3 h-3 stroke-[2.5]" />
              </div>
              <p className="font-medium leading-snug">
                Pembayaran dilakukan di kasir.
              </p>
            </div>
          </div>

          {/* Quick Actions Under Receipt */}
          <div className="mt-5 space-y-2.5">
            <button
              type="button"
              onClick={onNewOrder}
              className="w-full py-3.5 px-6 rounded-full bg-[#3D271D] hover:bg-[#2C1911] active:scale-[0.98] text-white font-medium text-xs flex items-center justify-center gap-2 shadow-md shadow-[#3D271D]/15 transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Pesan Menu Tambahan</span>
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="w-full py-3 px-6 rounded-full bg-[#F3ECE0] hover:bg-[#EAE1D3] active:scale-[0.98] text-[#3D271D] font-semibold text-xs border border-[#E7DDCF] shadow-2xs flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Simpan / Cetak Nota</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom landscape wave decoration */}
      <div className="relative w-full max-w-md mx-auto pointer-events-none mt-auto">
        <LeafBranchBottom className="absolute -bottom-4 left-2 z-10 opacity-70" />
        <LeafBranchBottom className="absolute -bottom-4 right-2 z-10 opacity-70" flip />
        <BottomDunesWave />
      </div>
    </div>
  );
};
