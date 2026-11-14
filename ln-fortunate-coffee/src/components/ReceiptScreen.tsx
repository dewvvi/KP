import React, { useState } from 'react';
import { OrderReceipt } from '../types';
import { formatRupiah } from '../data/menuData';
import { BrandLogo } from './BrandLogo';
import { LeafBranchBottom, BottomDunesWave, LeafSprigTopLeft, LeafSprigTopRight } from './BotanicalDecorations';
import { ArrowLeft, Info, Check, Download, RotateCcw } from 'lucide-react';

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
  const [saved, setSaved] = useState(false);

  const handleSaveReceipt = () => {
    try {
      const width = 760;
      const lineHeight = 32;
      const noteHeight = 24;
      const itemsBlockHeight = receipt.items.reduce(
        (acc, item) => acc + 46 + (item.note ? noteHeight : 0),
        0
      );
      const height = Math.max(760, 480 + itemsBlockHeight);

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        // Warm cream background
        ctx.fillStyle = '#FAF7F2';
        ctx.fillRect(0, 0, width, height);

        // White receipt card
        const cardX = 48;
        const cardY = 48;
        const cardW = width - 96;
        const cardH = height - 96;
        const radius = 32;

        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.roundRect(cardX, cardY, cardW, cardH, radius);
        ctx.fill();
        ctx.strokeStyle = '#ECE0D2';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Brand Header
        ctx.textAlign = 'center';
        ctx.fillStyle = '#3D271D';
        ctx.font = 'bold 34px Georgia, serif';
        ctx.fillText('Fortunate Coffee', width / 2, cardY + 72);

        ctx.fillStyle = '#486B42';
        ctx.font = 'italic 18px Georgia, serif';
        ctx.fillText('Loving Nature', width / 2, cardY + 102);

        // Status pill
        const pillW = 280;
        const pillH = 38;
        const pillX = (width - pillW) / 2;
        const pillY = cardY + 128;
        ctx.fillStyle = '#FCEEE2';
        ctx.beginPath();
        ctx.roundRect(pillX, pillY, pillW, pillH, 19);
        ctx.fill();
        ctx.strokeStyle = '#F5DEC9';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.fillStyle = '#7A4B29';
        ctx.font = '600 15px sans-serif';
        ctx.fillText(`Status: ${receipt.status}`, width / 2, pillY + 24);

        // Metadata
        let y = pillY + 80;
        const leftX = cardX + 42;
        const rightX = cardX + cardW - 42;

        const drawMetaRow = (label: string, val: string, boldVal = true) => {
          ctx.textAlign = 'left';
          ctx.fillStyle = '#6B5749';
          ctx.font = '16px sans-serif';
          ctx.fillText(label, leftX, y);

          ctx.textAlign = 'right';
          ctx.fillStyle = '#3D271D';
          ctx.font = boldVal ? 'bold 16px sans-serif' : '500 16px sans-serif';
          ctx.fillText(val, rightX, y);
          y += lineHeight;
        };

        drawMetaRow('No. Pesanan', receipt.orderNumber);
        drawMetaRow('Meja', receipt.tableNumber);
        drawMetaRow('Tanggal', receipt.createdAt, false);

        // Divider
        y += 6;
        ctx.strokeStyle = '#EFE5D7';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(leftX, y);
        ctx.lineTo(rightX, y);
        ctx.stroke();
        y += 34;

        // Items
        receipt.items.forEach((cartItem) => {
          const itemTotal = cartItem.item.price * cartItem.quantity;

          ctx.textAlign = 'left';
          ctx.fillStyle = '#3D271D';
          ctx.font = 'bold 17px sans-serif';
          ctx.fillText(cartItem.item.name, leftX, y);

          ctx.textAlign = 'right';
          ctx.fillStyle = '#7B6A5E';
          ctx.font = '15px sans-serif';
          ctx.fillText(`${cartItem.quantity}x ${formatRupiah(cartItem.item.price)}`, rightX - 130, y);

          ctx.fillStyle = '#3D271D';
          ctx.font = 'bold 17px sans-serif';
          ctx.fillText(formatRupiah(itemTotal), rightX, y);

          if (cartItem.note) {
            y += 22;
            ctx.textAlign = 'left';
            ctx.fillStyle = '#867568';
            ctx.font = 'italic 14px sans-serif';
            ctx.fillText(`Catatan: ${cartItem.note}`, leftX, y);
          }

          y += 42;
        });

        // Dashed divider
        ctx.save();
        ctx.setLineDash([6, 6]);
        ctx.strokeStyle = '#D9CABB';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(leftX, y);
        ctx.lineTo(rightX, y);
        ctx.stroke();
        ctx.restore();
        y += 42;

        // Total
        ctx.textAlign = 'left';
        ctx.fillStyle = '#3D271D';
        ctx.font = 'bold 20px sans-serif';
        ctx.fillText('Total', leftX, y);

        ctx.textAlign = 'right';
        ctx.font = 'bold 24px Georgia, serif';
        ctx.fillText(formatRupiah(receipt.total), rightX, y);

        // Cashier notice
        y += 36;
        ctx.fillStyle = '#F7EFE4';
        ctx.beginPath();
        ctx.roundRect(leftX, y, cardW - 84, 52, 16);
        ctx.fill();
        ctx.strokeStyle = '#E9DFD0';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.textAlign = 'left';
        ctx.fillStyle = '#5D4A3D';
        ctx.font = '600 16px sans-serif';
        ctx.fillText('Pembayaran dilakukan di kasir.', leftX + 24, y + 32);

        const dataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = `Nota-Fortunate-Coffee-${receipt.orderNumber.replace('#', '')}.png`;
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (err) {
      console.error('Gagal menyimpan nota:', err);
    }

    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
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
            className="p-1 -ml-1 text-[#3D271D] hover:opacity-75 transition-opacity cursor-pointer"
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
                      <div className="text-right text-[#7B6A5E] pr-3 shrink-0 tabular-nums">
                        {cartItem.quantity}x {formatRupiah(cartItem.item.price)}
                      </div>
                      <div className="font-semibold text-[#3D271D] shrink-0 text-right min-w-[70px] tabular-nums">
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
              <span className="font-serif-brand font-bold text-base text-[#3D271D] tabular-nums">
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
              onClick={handleSaveReceipt}
              className="w-full py-3 px-6 rounded-full bg-[#F3ECE0] hover:bg-[#EAE1D3] active:scale-[0.98] text-[#3D271D] font-semibold text-xs border border-[#E7DDCF] shadow-2xs flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              {saved ? (
                <>
                  <Check className="w-4 h-4 text-[#486B42]" />
                  <span>Nota Tersimpan</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Simpan Nota</span>
                </>
              )}
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
