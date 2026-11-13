import React from 'react';
import { BrandLogo } from './BrandLogo';
import { TableBadge } from './TableBadge';
import {
  LeafSprigTopLeft,
  LeafSprigTopRight,
  BottomDunesWave,
  LeafBranchBottom,
} from './BotanicalDecorations';
import { ArrowRight } from 'lucide-react';

interface WelcomeScreenProps {
  tableNumber: string;
  onStartOrder: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  tableNumber,
  onStartOrder,
}) => {
  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-[#FAF7F2] text-[#3D271D] overflow-hidden select-none pt-8">
      {/* Decorative leaf sprigs top corners */}
      <LeafSprigTopLeft className="absolute top-2 left-0 -translate-x-3 pointer-events-none z-10" />
      <LeafSprigTopRight className="absolute top-2 right-0 translate-x-2 pointer-events-none z-10" />

      {/* Main Content Area */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-6 py-6 text-center">
        {/* Brand Lockup */}
        <div className="mb-2">
          <h1 className="font-serif-brand font-bold text-2xl tracking-tight text-[#3D271D]">
            Fortunate Coffee
          </h1>
          <p className="font-serif-brand italic text-[#486B42] text-sm font-medium mt-1">
            Loving Nature
          </p>
        </div>

        {/* Tree Emblem */}
        <div className="my-6">
          <BrandLogo layout="vertical" size="lg" showSubtitle={false} />
        </div>

        {/* Table Number Card (Static) */}
        <div className="my-3 w-full flex justify-center">
          <TableBadge
            tableNumber={tableNumber}
            size="lg"
          />
        </div>

        {/* Greeting Copy */}
        <div className="mt-5 mb-8">
          <p className="text-xs text-[#6F5B4E] tracking-wide">
            Selamat datang di
          </p>
          <h2 className="font-serif-brand font-bold text-base text-[#3D271D] mt-0.5">
            Fortunate Coffee!
          </h2>
        </div>

        {/* Mulai Pesan Button */}
        <button
          type="button"
          onClick={onStartOrder}
          className="w-full max-w-[240px] py-3.5 px-6 rounded-full bg-[#3D271D] hover:bg-[#2C1911] active:scale-95 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#3D271D]/20 transition-all cursor-pointer"
        >
          <span>Mulai Pesan</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Bottom botanical leaves and dunes */}
      <div className="relative w-full z-10 mt-auto">
        <LeafBranchBottom className="absolute -bottom-2 -left-4 z-20 pointer-events-none" />
        <LeafBranchBottom className="absolute -bottom-2 -right-4 z-20 pointer-events-none" flip />
        <BottomDunesWave />
      </div>
    </div>
  );
};
