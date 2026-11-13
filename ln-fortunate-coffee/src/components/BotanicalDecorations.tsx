import React from 'react';

export const LeafSprigTopLeft: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`pointer-events-none select-none ${className}`}>
    <svg width="90" height="110" viewBox="0 0 90 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M-5 15 C15 35 45 40 75 70" stroke="#7A8F72" strokeWidth="2.5" strokeLinecap="round" opacity="0.75"/>
      {/* Leaves */}
      <path d="M12 24 C10 10 28 8 32 20 C32 30 18 32 12 24 Z" fill="#99AB91" opacity="0.8"/>
      <path d="M38 38 C32 22 52 18 56 32 C58 44 42 46 38 38 Z" fill="#84997C" opacity="0.8"/>
      <path d="M60 55 C54 40 74 36 78 50 C80 62 64 64 60 55 Z" fill="#99AB91" opacity="0.85"/>
      <path d="M-2 5 C8 0 20 4 18 16 C16 26 2 22 -2 5 Z" fill="#84997C" opacity="0.7"/>
    </svg>
  </div>
);

export const LeafSprigTopRight: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`pointer-events-none select-none ${className}`}>
    <svg width="85" height="95" viewBox="0 0 85 95" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M85 10 C65 25 45 45 20 80" stroke="#7A8F72" strokeWidth="2.5" strokeLinecap="round" opacity="0.75"/>
      {/* Leaves */}
      <path d="M68 20 C72 8 55 5 50 16 C46 26 60 28 68 20 Z" fill="#84997C" opacity="0.8"/>
      <path d="M48 38 C54 24 36 20 30 32 C28 44 42 46 48 38 Z" fill="#99AB91" opacity="0.85"/>
      <path d="M28 58 C32 44 14 42 10 54 C8 66 22 68 28 58 Z" fill="#84997C" opacity="0.8"/>
    </svg>
  </div>
);

export const BottomDunesWave: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`pointer-events-none select-none w-full relative overflow-hidden ${className}`}>
    <svg viewBox="0 0 390 120" preserveAspectRatio="none" className="w-full h-24 block" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Light tan dune */}
      <path d="M0 65 Q90 40 195 55 T390 45 L390 120 L0 120 Z" fill="#D6C6B2" opacity="0.75" />
      {/* Sand warm dune */}
      <path d="M0 78 Q110 55 220 70 T390 60 L390 120 L0 120 Z" fill="#B9A48E" opacity="0.9" />
      {/* Dark earth brown foundation */}
      <path d="M0 92 Q100 80 200 95 T390 85 L390 120 L0 120 Z" fill="#3D271D" />
    </svg>
  </div>
);

export const LeafBranchBottom: React.FC<{ className?: string; flip?: boolean }> = ({ className = '', flip = false }) => (
  <div className={`pointer-events-none select-none ${className} ${flip ? '-scale-x-100' : ''}`}>
    <svg width="100" height="150" viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 150 C25 110 40 70 65 30" stroke="#7A8F72" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
      <path d="M30 115 C10 105 15 85 32 92 C42 98 40 115 30 115 Z" fill="#84997C" opacity="0.85" />
      <path d="M42 85 C62 75 60 55 42 62 C32 68 35 85 42 85 Z" fill="#99AB91" opacity="0.85" />
      <path d="M52 55 C32 45 35 25 55 32 C65 38 60 55 52 55 Z" fill="#84997C" opacity="0.85" />
      <path d="M65 30 C75 12 90 20 85 35 C80 45 68 40 65 30 Z" fill="#99AB91" opacity="0.9" />
    </svg>
  </div>
);
