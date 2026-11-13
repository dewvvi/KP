import React from 'react';

interface TableBadgeProps {
  tableNumber: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const TableIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Tabletop */}
    <path d="M4 10h16" />
    <path d="M6 10v7" />
    <path d="M18 10v7" />
    {/* Left Chair */}
    <path d="M2 14v-4a2 2 0 0 1 2-2h0" />
    <path d="M2 14v3" />
    {/* Right Chair */}
    <path d="M22 14v-4a2 2 0 0 0-2-2h0" />
    <path d="M22 14v3" />
  </svg>
);

export const TableBadge: React.FC<TableBadgeProps> = ({
  tableNumber,
  size = 'sm',
  className = '',
}) => {
  if (size === 'lg') {
    // Large card for Welcome Screen
    return (
      <div
        className={`w-full max-w-[260px] py-4 px-6 rounded-2xl bg-[#F6EFE6]/90 border border-[#E9DECF] shadow-xs flex flex-col items-center justify-center gap-1.5 select-none ${className}`}
      >
        <TableIcon className="w-6 h-6 text-[#3D271D]" />
        <span className="font-serif-brand font-bold text-lg text-[#3D271D]">
          Meja {tableNumber}
        </span>
      </div>
    );
  }

  if (size === 'md') {
    // Medium banner for Cart and Confirmation
    return (
      <div
        className={`w-full py-3 px-4 rounded-xl bg-[#F6EFE6]/90 border border-[#E9DECF] shadow-xs flex items-center justify-center gap-2.5 select-none ${className}`}
      >
        <TableIcon className="w-5 h-5 text-[#3D271D]" />
        <span className="font-serif-brand font-bold text-base text-[#3D271D]">
          Meja {tableNumber}
        </span>
      </div>
    );
  }

  // Small static pill in sticky header (top-right)
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F3ECE0] border border-[#E7DDCD] text-[#3D271D] text-xs font-semibold shadow-2xs select-none ${className}`}
    >
      <TableIcon className="w-3.5 h-3.5 text-[#3D271D]" />
      <span className="font-serif-brand font-medium tracking-tight">
        Meja {tableNumber}
      </span>
    </div>
  );
};
