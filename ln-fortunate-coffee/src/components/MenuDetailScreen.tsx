import React, { useState } from 'react';
import { MenuItem } from '../types';
import { formatRupiah } from '../data/menuData';
import { LeafBranchBottom } from './BotanicalDecorations';
import { ChevronLeft, Plus, Minus, FileText, ArrowRight } from 'lucide-react';

interface MenuDetailScreenProps {
  item: MenuItem;
  initialQuantity?: number;
  initialNote?: string;
  onBack: () => void;
  onAddToCart: (item: MenuItem, quantity: number, note?: string) => void;
}

export const MenuDetailScreen: React.FC<MenuDetailScreenProps> = ({
  item,
  initialQuantity = 1,
  initialNote = '',
  onBack,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState<number>(initialQuantity);
  const [note, setNote] = useState<string>(initialNote);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => Math.max(1, prev - 1));

  const handleAdd = () => {
    onAddToCart(item, quantity, note.trim() || undefined);
    onBack();
  };

  return (
    <div className="relative min-h-screen bg-[#FAF7F2] text-[#3D271D] flex flex-col justify-between overflow-x-hidden pt-4">
      {/* Top Section */}
      <div className="relative z-10 w-full max-w-md mx-auto">
        {/* Back Button & Top Navigation */}
        <div className="px-5 py-2 flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-white border border-[#EDE2D3] shadow-xs flex items-center justify-center text-[#3D271D] hover:bg-[#F5EDE1] active:scale-95 transition-all cursor-pointer"
            aria-label="Kembali ke menu"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>

        {/* Decorative Top Leaf Sprig */}
        <div className="absolute top-12 left-0 -translate-x-4 pointer-events-none opacity-60">
          <svg width="80" height="100" viewBox="0 0 80 100" fill="none">
            <path d="M10 20 C25 40 40 60 45 90" stroke="#7A8F72" strokeWidth="2.5" />
            <path d="M22 35 C35 25 50 40 40 55 C30 65 15 50 22 35 Z" fill="#99AB91" />
            <path d="M38 65 C55 55 65 75 52 85 C40 95 30 80 38 65 Z" fill="#84997C" />
          </svg>
        </div>

        {/* Center Circular Dish Hero Image */}
        <div className="flex justify-center my-4 px-6">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden p-1.5 bg-[#FAF7F2] shadow-2xl border border-[#E9DFCE]">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Dish Title & Price */}
        <div className="px-6 text-left mt-3">
          <h1 className="font-serif-brand font-bold text-2xl text-[#3D271D] leading-tight">
            {item.name}
          </h1>
          <p className="font-serif-brand font-bold text-lg text-[#3D271D] mt-1">
            {formatRupiah(item.price)}
          </p>

          {/* Description */}
          <p className="text-xs text-[#6F5C4F] leading-relaxed mt-3">
            {item.description}
          </p>
        </div>

        {/* Stepper Quantity Selector */}
        <div className="flex justify-center my-6">
          <div className="inline-flex items-center gap-6 px-6 py-2.5 rounded-full bg-[#F3ECE0] border border-[#E7DDCF] shadow-xs">
            <button
              type="button"
              onClick={handleDecrement}
              className="w-7 h-7 flex items-center justify-center text-[#3D271D] hover:opacity-75 transition-opacity"
              aria-label="Kurangi jumlah"
            >
              <Minus className="w-4 h-4 stroke-[2.5]" />
            </button>
            <span className="font-serif-brand font-bold text-base text-[#3D271D] min-w-[20px] text-center">
              {quantity}
            </span>
            <button
              type="button"
              onClick={handleIncrement}
              className="w-7 h-7 flex items-center justify-center text-[#3D271D] hover:opacity-75 transition-opacity"
              aria-label="Tambah jumlah"
            >
              <Plus className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Notes Input Field */}
        <div className="px-6 mb-6">
          <div className="relative rounded-2xl bg-white border border-[#E8DFD1] shadow-2xs p-3 flex items-start gap-2.5">
            <FileText className="w-4 h-4 text-[#8C7A6D] shrink-0 mt-0.5" />
            <input
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Catatan (opsional)... misal: Extra sayur, tidak pedas"
              className="w-full text-xs text-[#3D271D] placeholder-[#A49485] bg-transparent focus:outline-hidden"
              maxLength={100}
            />
          </div>
        </div>
      </div>

      {/* Decorative Botanical Branch bottom right */}
      <LeafBranchBottom className="absolute -bottom-4 right-2 pointer-events-none opacity-80 z-0" flip />

      {/* Sticky Bottom Action Button */}
      <div className="relative z-10 w-full max-w-md mx-auto px-6 pb-8 pt-2">
        <button
          type="button"
          onClick={handleAdd}
          className="w-full py-4 px-6 rounded-full bg-[#3D271D] hover:bg-[#2C1911] active:scale-[0.98] text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#3D271D]/20 transition-all cursor-pointer"
        >
          <span>Tambah ke Keranjang</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
