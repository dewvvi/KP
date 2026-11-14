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
      const cardMargin = 22;
      const cardWidth = 640;
      const padX = 42;
      const lineHeight = 32;
      const noteHeight = 24;
      const itemsBlockHeight = receipt.items.reduce(
        (acc, item) => acc + 44 + (item.note ? noteHeight : 0),
        0
      );

      // Calculate exact card height so only the receipt paper and its contents appear
      const headerHeight = 250; // Tree emblem + brand + status pill
      const metaHeight = 134; // 3 metadata rows + divider + spacing
      const footerHeight = 180; // Dashed divider + total + cashier notice + bottom padding
      const cardHeight = headerHeight + metaHeight + itemsBlockHeight + footerHeight;

      const width = cardWidth + cardMargin * 2;
      const height = cardHeight + cardMargin * 2;

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        // Transparent outside the rounded receipt paper (no outer background, with clean margin from edges)
        ctx.clearRect(0, 0, width, height);

        ctx.save();
        ctx.translate(cardMargin, cardMargin);

        // Rounded white receipt paper matching the on-screen rounded-3xl card
        const cardRadius = 40;

        ctx.beginPath();
        ctx.roundRect(0, 0, cardWidth, cardHeight, cardRadius);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();

        // Crisp rounded border matching the digital receipt card
        ctx.strokeStyle = '#D8C7B4';
        ctx.lineWidth = 3.5;
        ctx.stroke();

        // Clip contents neatly inside the rounded receipt paper
        ctx.beginPath();
        ctx.roundRect(0, 0, cardWidth, cardHeight, cardRadius);
        ctx.clip();

        // Draw Fortunate Coffee Tree Emblem at top center
        const treeCenterX = cardWidth / 2;
        const treeTopY = 34;
        const s = 0.72; // scale factor for 100x100 tree viewBox
        const tx = (x: number) => treeCenterX + (x - 50) * s;
        const ty = (y: number) => treeTopY + y * s;

        ctx.fillStyle = '#2B4B27';
        ctx.strokeStyle = '#2B4B27';

        const leafCircles: [number, number, number][] = [
          [50, 22, 5], [41, 26, 4.5], [59, 26, 4.5],
          [33, 32, 4.5], [49, 31, 5], [67, 32, 4.5],
          [26, 40, 4.5], [40, 38, 4.5], [60, 38, 4.5], [74, 40, 4.5],
          [21, 50, 4.5], [34, 48, 4.5], [50, 46, 5], [66, 48, 4.5], [79, 50, 4.5],
          [18, 62, 4], [29, 59, 4], [43, 58, 4], [57, 58, 4], [71, 59, 4], [82, 62, 4],
        ];
        leafCircles.forEach(([cx, cy, r]) => {
          ctx.beginPath();
          ctx.arc(tx(cx), ty(cy), r * s, 0, Math.PI * 2);
          ctx.fill();
        });

        // Trunk
        ctx.beginPath();
        ctx.moveTo(tx(48), ty(48));
        ctx.quadraticCurveTo(tx(49), ty(70), tx(46), ty(80));
        ctx.lineTo(tx(44), ty(86));
        ctx.lineTo(tx(56), ty(86));
        ctx.lineTo(tx(54), ty(80));
        ctx.quadraticCurveTo(tx(51), ty(70), tx(52), ty(48));
        ctx.closePath();
        ctx.fill();

        // Branches
        ctx.lineCap = 'round';
        ctx.lineWidth = 2.4 * s;
        ctx.beginPath();
        ctx.moveTo(tx(49), ty(60));
        ctx.quadraticCurveTo(tx(38), ty(48), tx(30), ty(52));
        ctx.moveTo(tx(51), ty(60));
        ctx.quadraticCurveTo(tx(62), ty(48), tx(70), ty(52));
        ctx.stroke();

        ctx.lineWidth = 2 * s;
        ctx.beginPath();
        ctx.moveTo(tx(49), ty(52));
        ctx.quadraticCurveTo(tx(36), ty(38), tx(28), ty(42));
        ctx.moveTo(tx(51), ty(52));
        ctx.quadraticCurveTo(tx(64), ty(38), tx(72), ty(42));
        ctx.stroke();

        // Brand Header
        ctx.textAlign = 'center';
        ctx.fillStyle = '#3D271D';
        ctx.font = 'bold 30px Georgia, serif';
        ctx.fillText('Fortunate Coffee', cardWidth / 2, 134);

        ctx.fillStyle = '#486B42';
        ctx.font = 'italic 16px Georgia, serif';
        ctx.fillText('Loving Nature', cardWidth / 2, 160);

        // Status pill
        const pillW = 264;
        const pillH = 36;
        const pillX = (cardWidth - pillW) / 2;
        const pillY = 182;
        ctx.fillStyle = '#FCEEE2';
        ctx.beginPath();
        ctx.roundRect(pillX, pillY, pillW, pillH, 18);
        ctx.fill();
        ctx.strokeStyle = '#F5DEC9';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.fillStyle = '#7A4B29';
        ctx.font = '600 14px sans-serif';
        ctx.fillText(`Status: ${receipt.status}`, cardWidth / 2, pillY + 23);

        // Metadata
        let y = 264;
        const leftX = padX;
        const rightX = cardWidth - padX;

        const drawMetaRow = (label: string, val: string, boldVal = true) => {
          ctx.textAlign = 'left';
          ctx.fillStyle = '#6B5749';
          ctx.font = '15px sans-serif';
          ctx.fillText(label, leftX, y);

          ctx.textAlign = 'right';
          ctx.fillStyle = '#3D271D';
          ctx.font = boldVal ? 'bold 15px sans-serif' : '500 15px sans-serif';
          ctx.fillText(val, rightX, y);
          y += lineHeight;
        };

        drawMetaRow('No. Pesanan', receipt.orderNumber);
        drawMetaRow('Meja', receipt.tableNumber);
        drawMetaRow('Tanggal', receipt.createdAt, false);

        // Divider
        y += 4;
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
          ctx.font = 'bold 16px sans-serif';
          ctx.fillText(cartItem.item.name, leftX, y, rightX - 225 - leftX);

          ctx.textAlign = 'right';
          ctx.fillStyle = '#7B6A5E';
          ctx.font = '14px sans-serif';
          ctx.fillText(`${cartItem.quantity}x ${formatRupiah(cartItem.item.price)}`, rightX - 115, y);

          ctx.fillStyle = '#3D271D';
          ctx.font = 'bold 16px sans-serif';
          ctx.fillText(formatRupiah(itemTotal), rightX, y);

          if (cartItem.note) {
            y += 22;
            ctx.textAlign = 'left';
            ctx.fillStyle = '#867568';
            ctx.font = 'italic 13px sans-serif';
            ctx.fillText(`Catatan: ${cartItem.note}`, leftX, y, rightX - leftX);
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
        y += 38;

        // Total
        ctx.textAlign = 'left';
        ctx.fillStyle = '#3D271D';
        ctx.font = 'bold 18px sans-serif';
        ctx.fillText('Total', leftX, y);

        ctx.textAlign = 'right';
        ctx.font = 'bold 22px Georgia, serif';
        ctx.fillText(formatRupiah(receipt.total), rightX, y);

        // Cashier notice
        y += 32;
        ctx.fillStyle = '#F7EFE4';
        ctx.beginPath();
        ctx.roundRect(leftX, y, cardWidth - padX * 2, 50, 16);
        ctx.fill();
        ctx.strokeStyle = '#E9DFD0';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Info circle icon
        ctx.fillStyle = '#42281D';
        ctx.beginPath();
        ctx.arc(leftX + 28, y + 25, 11, 0, Math.PI * 2);
        ctx.fill();
        ctx.textAlign = 'center';
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'italic bold 13px Georgia, serif';
        ctx.fillText('i', leftX + 28, y + 30);

        ctx.textAlign = 'left';
        ctx.fillStyle = '#5D4A3D';
        ctx.font = '600 15px sans-serif';
        ctx.fillText('Pembayaran dilakukan di kasir.', leftX + 50, y + 30);

        ctx.restore();

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
              {receipt.items.map((cartItem, idx) => {
                const itemTotal = cartItem.item.price * cartItem.quantity;

                return (
                  <div key={`${cartItem.item.id}-${idx}`} className="text-xs">
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
