import React from 'react';

interface BrandLogoProps {
  layout?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  layout = 'horizontal',
  size = 'md',
  className = '',
  showSubtitle = true,
}) => {
  // Tree icon SVG replicating the LN Fortunate Coffee Loving Nature motif
  const treeSvg = (
    <svg
      viewBox="0 0 100 100"
      className={`${
        size === 'sm' ? 'w-8 h-8' : size === 'md' ? 'w-10 h-10' : 'w-24 h-24'
      } text-[#2B4B27] shrink-0 fill-current`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Crown leaf clusters */}
      <circle cx="50" cy="22" r="5" />
      <circle cx="41" cy="26" r="4.5" />
      <circle cx="59" cy="26" r="4.5" />
      <circle cx="33" cy="32" r="4.5" />
      <circle cx="49" cy="31" r="5" />
      <circle cx="67" cy="32" r="4.5" />
      <circle cx="26" cy="40" r="4.5" />
      <circle cx="40" cy="38" r="4.5" />
      <circle cx="60" cy="38" r="4.5" />
      <circle cx="74" cy="40" r="4.5" />
      <circle cx="21" cy="50" r="4.5" />
      <circle cx="34" cy="48" r="4.5" />
      <circle cx="50" cy="46" r="5" />
      <circle cx="66" cy="48" r="4.5" />
      <circle cx="79" cy="50" r="4.5" />
      <circle cx="18" cy="62" r="4" />
      <circle cx="29" cy="59" r="4" />
      <circle cx="43" cy="58" r="4" />
      <circle cx="57" cy="58" r="4" />
      <circle cx="71" cy="59" r="4" />
      <circle cx="82" cy="62" r="4" />

      {/* Trunk and branches */}
      <path
        d="M48 48 Q49 70 46 80 L44 86 L56 86 L54 80 Q51 70 52 48 Z"
        fill="currentColor"
      />
      {/* Supporting branch lines */}
      <path
        d="M49 60 Q38 48 30 52"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M51 60 Q62 48 70 52"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M49 52 Q36 38 28 42"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M51 52 Q64 38 72 42"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Stylized LN root baseline */}
      <path
        d="M41 86 C45 84 55 84 59 86 C58 87 42 87 41 86 Z"
        fill="currentColor"
      />
      <text
        x="50"
        y="85"
        textAnchor="middle"
        fontSize="6.5"
        fontWeight="bold"
        fontFamily="sans-serif"
        fill="currentColor"
        letterSpacing="1"
      >
        LN
      </text>
    </svg>
  );

  if (layout === 'vertical') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        {treeSvg}
        <div className="mt-3">
          <h1
            className={`font-serif-brand font-bold text-[#3D271D] leading-tight ${
              size === 'lg' ? 'text-2xl tracking-normal' : 'text-lg'
            }`}
          >
            Fortunate Coffee
          </h1>
          {showSubtitle && (
            <p className="font-serif-brand italic text-[#486B42] text-xs mt-0.5 font-medium tracking-wide">
              Loving Nature
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {treeSvg}
      <div className="flex flex-col">
        <span
          className={`font-serif-brand font-bold text-[#3D271D] leading-none ${
            size === 'sm' ? 'text-base' : 'text-lg'
          }`}
        >
          Fortunate Coffee
        </span>
        {showSubtitle && (
          <span className="font-serif-brand italic text-[#486B42] text-[11px] font-medium leading-tight mt-0.5">
            Loving Nature
          </span>
        )}
      </div>
    </div>
  );
};
