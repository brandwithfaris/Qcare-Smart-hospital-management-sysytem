import React from 'react';

interface QCareLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showTagline?: boolean;
  layout?: 'horizontal' | 'stacked' | 'icon-only';
  className?: string;
}

export const QCareLogo: React.FC<QCareLogoProps> = ({
  size = 'md',
  showTagline = true,
  layout = 'horizontal',
  className = '',
}) => {
  // Dimension tokens
  const config = {
    sm: {
      iconSize: 32,
      titleSize: 'text-lg',
      taglineSize: 'text-[9px] tracking-[0.2em]',
      gap: 'gap-2.5',
    },
    md: {
      iconSize: 44,
      titleSize: 'text-2xl',
      taglineSize: 'text-[10px] tracking-[0.22em]',
      gap: 'gap-3',
    },
    lg: {
      iconSize: 64,
      titleSize: 'text-3xl sm:text-4xl',
      taglineSize: 'text-xs tracking-[0.25em]',
      gap: 'gap-4',
    },
    xl: {
      iconSize: 96,
      titleSize: 'text-4xl sm:text-5xl',
      taglineSize: 'text-sm tracking-[0.28em]',
      gap: 'gap-5',
    },
    hero: {
      iconSize: 140,
      titleSize: 'text-5xl sm:text-6xl',
      taglineSize: 'text-base tracking-[0.3em]',
      gap: 'gap-6',
    },
  }[size];

  // The custom vector SVG precisely recreating the uploaded QCare emblem
  const LogoIcon = (
    <svg
      width={config.iconSize}
      height={config.iconSize}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 drop-shadow-sm select-none"
      aria-label="QCare Healthcare Logo Mark"
    >
      <defs>
        {/* Main Q-ring dark teal gradient */}
        <linearGradient id="qRingMainGrad" x1="40" y1="20" x2="160" y2="160" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2A5C54" />
          <stop offset="25%" stopColor="#1E4740" />
          <stop offset="70%" stopColor="#183B35" />
          <stop offset="100%" stopColor="#16342E" />
        </linearGradient>

        {/* Soft mint inner ribbon sash gradient */}
        <linearGradient id="qRibbonMintGrad" x1="45" y1="70" x2="160" y2="140" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3C8B7D" />
          <stop offset="35%" stopColor="#67BBAE" />
          <stop offset="75%" stopColor="#A8E0D5" />
          <stop offset="100%" stopColor="#D4F3ED" />
        </linearGradient>

        {/* Lower tail outer wave gradient */}
        <linearGradient id="qTailDarkGrad" x1="80" y1="110" x2="175" y2="135" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#173933" />
          <stop offset="45%" stopColor="#1E4740" />
          <stop offset="85%" stopColor="#2D665D" />
          <stop offset="100%" stopColor="#62B6A9" />
        </linearGradient>

        {/* Cross healthcare gradient */}
        <linearGradient id="qCrossGrad" x1="100" y1="52" x2="100" y2="114" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#62B9AC" />
          <stop offset="40%" stopColor="#489F91" />
          <stop offset="100%" stopColor="#24574E" />
        </linearGradient>

        {/* Subtle inner soft shadow */}
        <filter id="softInnerGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#122A25" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* 1. Main Outer Ring of 'Q' */}
      <path
        d="M 100 20
           C 142 20, 172 52, 172 94
           C 172 118, 160 138, 142 150
           C 134 140, 120 130, 105 124
           C 122 118, 134 102, 134 84
           C 134 65, 119 50, 100 50
           C 81 50, 66 65, 66 84
           C 66 94, 70 102, 77 109
           C 60 108, 45 116, 38 126
           C 31 113, 28 100, 28 86
           C 28 50, 60 20, 100 20 Z"
        fill="url(#qRingMainGrad)"
      />

      {/* 2. Soft Mint-Green Ribbon Inner Sash (the glowing inner sweep) */}
      <path
        d="M 38 126
           C 48 110, 68 98, 92 108
           C 112 116, 126 128, 146 128
           C 162 128, 175 120, 176 116
           C 178 122, 174 132, 164 138
           C 148 148, 126 138, 106 132
           C 82 126, 62 134, 48 148
           C 40 142, 36 134, 38 126 Z"
        fill="url(#qRibbonMintGrad)"
      />

      {/* 3. Dark Outer Waving Tail of 'Q' (Sweeping dynamically to the bottom right) */}
      <path
        d="M 78 124
           C 96 120, 114 126, 132 138
           C 148 148, 164 152, 174 142
           C 176 139, 177 135, 176 132
           C 173 135, 166 138, 154 134
           C 138 128, 124 116, 102 116
           C 88 116, 76 122, 70 130
           C 72 127, 75 125, 78 124 Z"
        fill="url(#qTailDarkGrad)"
        filter="url(#softInnerGlow)"
      />

      {/* 4. Elegant 3D Ribbon Under-Turn (Accent light curve at tail tip) */}
      <path
        d="M 154 134
           C 166 138, 173 135, 176 132
           C 178 136, 175 142, 168 146
           C 158 152, 148 148, 142 144
           C 146 140, 150 136, 154 134 Z"
        fill="#82D3C4"
        opacity="0.9"
      />

      {/* 5. Central Medical Healthcare Cross (+) with rounded corners */}
      <g filter="url(#softInnerGlow)">
        {/* Vertical cross bar */}
        <rect
          x="88"
          y="56"
          width="24"
          height="54"
          rx="8"
          fill="url(#qCrossGrad)"
        />
        {/* Horizontal cross bar */}
        <rect
          x="73"
          y="71"
          width="54"
          height="24"
          rx="8"
          fill="url(#qCrossGrad)"
        />
      </g>
    </svg>
  );

  // If icon-only requested
  if (layout === 'icon-only') {
    return <div className={`inline-flex items-center ${className}`}>{LogoIcon}</div>;
  }

  // Stacked Layout (Directly matching the uploaded image!)
  if (layout === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center text-center select-none ${className}`}>
        {LogoIcon}
        <div className="flex flex-col items-center mt-3">
          <span className={`font-black tracking-tight text-[#1F3D38] leading-none ${config.titleSize}`}>
            QCare
          </span>
          {showTagline && (
            <span
              className={`font-semibold uppercase text-[#3D5E57] mt-1.5 ${config.taglineSize}`}
            >
              Smart Hospital Queue
            </span>
          )}
        </div>
      </div>
    );
  }

  // Horizontal Layout (Standard for Header / Slide tops)
  return (
    <div className={`inline-flex items-center ${config.gap} select-none ${className}`}>
      {LogoIcon}
      <div className="flex flex-col justify-center text-left leading-none">
        <span className={`font-black tracking-tight text-[#1F3D38] ${config.titleSize}`}>
          QCare
        </span>
        {showTagline && (
          <span className={`font-semibold uppercase text-[#3D5E57] mt-1 ${config.taglineSize}`}>
            Smart Hospital Queue
          </span>
        )}
      </div>
    </div>
  );
};
