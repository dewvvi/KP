import React from 'react';
import { BrandLogo } from './BrandLogo';
import { TableBadge } from './TableBadge';

interface StickyHeaderProps {
  tableNumber: string;
  showShadow?: boolean;
}

export const StickyHeader: React.FC<StickyHeaderProps> = ({
  tableNumber,
  showShadow = true,
}) => {
  return (
    <header className={`sticky top-0 z-30 w-full bg-[#FAF7F2]/95 backdrop-blur-md transition-shadow duration-200 border-b border-[#EDE4D6]/70 ${
      showShadow ? 'shadow-xs' : ''
    }`}>
      {/* Main Header Bar: Brand Logo & Static Table Indicator */}
      <div className="flex items-center justify-between px-5 py-3.5">
        <BrandLogo size="sm" layout="horizontal" />
        <TableBadge tableNumber={tableNumber} />
      </div>
    </header>
  );
};
