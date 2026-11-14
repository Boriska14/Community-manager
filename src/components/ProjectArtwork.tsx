import { useState } from 'react';
import { ArtworkVariant } from '../data/portfolioData';

interface ProjectArtworkProps {
  title: string;
  image?: string;
  variant: ArtworkVariant;
  className?: string;
}

export function SolarEmblem({ className = 'w-6 h-6' }: { className?: string }) {
  const rays = Array.from({ length: 20 }, (_, i) => i * 18);
  return (
    <svg
      viewBox="-64 -64 128 128"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
    >
      <circle r="14" fill="currentColor" stroke="none" />
      <circle r="26" strokeWidth="3" />
      <circle r="32" strokeWidth="1.5" strokeDasharray="2 5" />
      {rays.map((deg, idx) => (
        <line
          key={deg}
          x1="0"
          y1="-38"
          x2="0"
          y2={idx % 2 === 0 ? '-60' : '-50'}
          transform={`rotate(${deg})`}
          strokeWidth={idx % 2 === 0 ? 3.5 : 2.5}
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

function GeometricComposition({ variant }: { variant: ArtworkVariant }) {
  // 1. Ocellus / Indigo Concentric Grain (inspired by visual #4)
  if (variant === 'orbits') {
    return (
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full object-cover"
        aria-hidden="true"
      >
        <defs>
          <pattern id="ocellusWeave" width="6" height="6" patternUnits="userSpaceOnUse">
            <rect width="6" height="6" fill="#0B3B68" />
            <circle cx="2" cy="2" r="1" fill="#175EA3" opacity="0.5" />
            <circle cx="5" cy="5" r="0.8" fill="#07223D" opacity="0.6" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#ocellusWeave)" />
        {/* Organic concentric eye-spot rings */}
        <ellipse cx="220" cy="148" rx="112" ry="96" fill="none" stroke="#E8C988" strokeWidth="14" opacity="0.9" />
        <ellipse cx="220" cy="148" rx="92" ry="78" fill="none" stroke="#E5A11A" strokeWidth="9" />
        <ellipse cx="220" cy="148" rx="74" ry="62" fill="#0A0B10" />
        <circle cx="220" cy="148" r="26" fill="#C8231A" opacity="0.85" />
        <circle cx="212" cy="142" r="10" fill="#F5F2EB" />
        {/* Secondary small ocellus */}
        <circle cx="88" cy="64" r="34" fill="none" stroke="#E5A11A" strokeWidth="6" opacity="0.85" />
        <circle cx="88" cy="64" r="20" fill="#0A0B10" />
        <circle cx="85" cy="61" r="6" fill="#F5F2EB" />
      </svg>
    );
  }

  // 2. Pop-Art Halftone Color-Blocked Forms (inspired by visual #1)
  if (variant === 'bauhaus') {
    return (
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full object-cover"
        aria-hidden="true"
      >
        <defs>
          <pattern id="popHalftone" width="8" height="8" patternUnits="userSpaceOnUse">
            <rect width="8" height="8" fill="#F2C14E" />
            <circle cx="4" cy="4" r="2.2" fill="#0D0E14" opacity="0.65" />
          </pattern>
          <pattern id="popStripes" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(28)">
            <rect width="8" height="16" fill="#D52B1E" />
            <rect x="8" width="8" height="16" fill="#1860B8" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="#0E8A5F" />
        <path d="M 0 0 L 210 0 L 175 225 L 0 225 Z" fill="#D52B1E" />
        <circle cx="255" cy="128" r="118" fill="#1E73BE" />
        <circle cx="195" cy="96" r="44" fill="url(#popHalftone)" />
        <circle cx="308" cy="96" r="44" fill="url(#popHalftone)" />
        <ellipse cx="250" cy="192" rx="68" ry="30" fill="url(#popHalftone)" />
        <rect x="0" y="232" width="400" height="68" fill="url(#popStripes)" />
        <rect x="180" y="185" width="96" height="115" fill="#141413" opacity="0.9" />
      </svg>
    );
  }

  // 3. Basel Swiss Poster Composition (inspired directly by visual #2)
  if (variant === 'stripes') {
    return (
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full object-cover"
        aria-hidden="true"
      >
        <rect width="400" height="300" fill="#F2EFE9" />
        {/* Bold organic vermilion wedges inspired by Gewerbemuseum Basel */}
        <path d="M 400 20 L 220 112 Q 168 138 228 156 L 400 176 Z" fill="#C8231A" />
        <path d="M 400 204 L 288 188 Q 248 186 276 226 L 348 300 L 400 300 Z" fill="#C8231A" />
        <path d="M 0 300 L 286 300 L 238 222 Q 214 190 170 208 L 0 278 Z" fill="#C8231A" />
        <path d="M 0 180 L 118 202 Q 152 214 114 238 L 0 264 Z" fill="#C8231A" />
        {/* Swiss grotesque structural typography accents */}
        <text
          x="24"
          y="48"
          fill="#C8231A"
          fontSize="16"
          fontWeight="800"
          fontFamily="Archivo, system-ui, sans-serif"
          letterSpacing="-0.03em"
        >
          LINNOV
        </text>
        <text
          x="24"
          y="66"
          fill="#C8231A"
          fontSize="13"
          fontWeight="700"
          fontFamily="Archivo, system-ui, sans-serif"
        >
          Douala · Tech
        </text>
        <text
          x="24"
          y="83"
          fill="#C8231A"
          fontSize="13"
          fontWeight="700"
          fontFamily="Archivo, system-ui, sans-serif"
        >
          Manifeste LinkedIn
        </text>
        <text
          x="166"
          y="44"
          fill="#C8231A"
          fontSize="9.5"
          fontWeight="600"
          fontFamily="JetBrains Mono, monospace"
        >
          Voix inaugurale
        </text>
        <text
          x="166"
          y="58"
          fill="#C8231A"
          fontSize="9.5"
          fontWeight="600"
          fontFamily="JetBrains Mono, monospace"
        >
          Positionnement B2B
        </text>
      </svg>
    );
  }

  // 4. Risograph Screenprint Concert Poster (inspired directly by visual #3)
  if (variant === 'grid') {
    return (
      <div className="relative w-full h-full bg-[#EFECE4] p-3 sm:p-4 overflow-hidden">
        <div className="relative w-full h-full overflow-hidden flex flex-col justify-between p-4 sm:p-5 bg-[#12409A] text-[#EFECE4]">
          {/* Risograph magenta/amber dual gradient fields */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 72% 28%, #E5A11A 0%, #D11F5B 38%, rgba(18, 64, 154, 0.92) 72%)',
            }}
          />
          {/* Halftone dot screen layer */}
          <div
            className="absolute inset-0 opacity-65 mix-blend-multiply"
            style={{
              backgroundImage:
                'radial-gradient(#09090B 1.5px, transparent 1.5px)',
              backgroundSize: '5px 5px',
            }}
          />
          {/* Geometric ocellus cutout */}
          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono-num uppercase tracking-[0.2em] text-[#EFECE4]">
            <span>UCAC-ICAM · DOUALA</span>
            <span className="bg-[#0D0E14] px-2 py-0.5 text-[#E5A11A]">16.01.2026</span>
          </div>

          <div className="relative z-10 my-auto py-3">
            <div className="w-20 h-20 rounded-full border-4 border-[#EFECE4] flex items-center justify-center mb-3 bg-[#D11F5B]/60 backdrop-blur-[1px]">
              <div className="w-7 h-7 rounded-full bg-[#EFECE4]" />
            </div>
            <div className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight leading-none text-white drop-shadow-sm">
              ETSIA SALON
            </div>
            <p className="mt-1.5 text-[11px] font-mono-num uppercase tracking-[0.14em] text-[#F5F2EB]">
              Agritech · IA · Cybersécurité PME · EdTech
            </p>
          </div>

          <div className="relative z-10 pt-2 border-t border-[#EFECE4]/40 flex items-center justify-between text-[10px] font-mono-num uppercase tracking-widest">
            <span>IMMEUBLE DE L’ÉLITE · AKWA</span>
            <span>ÉDITION 01</span>
          </div>
        </div>
      </div>
    );
  }

  // 5. GLITCH Solar Pop-Art Halftone Poster (blending visual #1 + #4 + GLITCH)
  return (
    <div className="relative w-full h-full bg-[#0D0E14] text-[#F5EFE6] flex items-center justify-center overflow-hidden p-6 sm:p-8">
      <div
        className="absolute inset-0 opacity-85"
        style={{
          background:
            'radial-gradient(circle at 22% 25%, #C8231A 0%, transparent 45%), radial-gradient(circle at 82% 72%, #152D7A 0%, transparent 50%), radial-gradient(circle at 52% 52%, #0E8A5F 0%, transparent 38%)',
        }}
      />
      <div className="absolute inset-0 halftone-screen-light opacity-50" />
      <div className="relative z-10 flex flex-col items-center gap-3 text-center">
        <SolarEmblem className="w-16 h-16 sm:w-20 sm:h-20 text-[#E5A11A]" />
        <span className="font-display text-2xl sm:text-3xl font-extrabold tracking-[0.16em] text-white">
          GLITCH
        </span>
        <span className="font-mono-num text-[11px] uppercase tracking-[0.2em] text-[#E5A11A]">
          Vol. 01 &amp; 02 · Système · Corps · Machine
        </span>
      </div>
    </div>
  );
}

export function ProjectArtwork({
  title,
  image,
  variant,
  className = '',
}: ProjectArtworkProps) {
  const [imgError, setImgError] = useState(false);

  if (image && !imgError) {
    // Apply subtle Risograph/Halftone print treatment + variant color-grade for artistic unity
    const tintOverlay =
      variant === 'orbits'
        ? 'bg-[#152D7A]/25 mix-blend-multiply'
        : variant === 'bauhaus'
        ? 'bg-[#C8231A]/18 mix-blend-multiply'
        : variant === 'grid'
        ? 'bg-gradient-to-tr from-[#12409A]/30 via-[#D11F5B]/20 to-[#E5A11A]/20 mix-blend-multiply'
        : 'bg-[#E5A11A]/14 mix-blend-multiply';

    return (
      <div className={`relative overflow-hidden bg-[#0D0E14] ${className}`}>
        <img
          src={image}
          alt={`Illustration éditoriale du projet ${title}`}
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className="w-full h-full object-cover contrast-[1.12] saturate-[1.18] transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />
        {/* Cohesive color print tint + tactile halftone screen dot matrix */}
        <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${tintOverlay}`} />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 halftone-screen opacity-25 mix-blend-multiply" />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="w-full h-full transition-transform duration-300 ease-out group-hover:scale-[1.03]">
        <GeometricComposition variant={variant} />
      </div>
    </div>
  );
}
