// Hand-drawn line icons for BADOU GROUP's four trades. Kept to a single
// 24x24 grid, 1.6 stroke, round joins — see AGENTS.md for why these exist
// instead of a generic icon-pack glyph.

type IconProps = {
  className?: string;
};

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Vitrerie aluminium — a glazed bay divided into four panes. */
export function WindowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M12 3v18M3 12h18" />
    </svg>
  );
}

/** Menuiserie aluminium — a single door leaf with its handle. */
export function DoorIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <rect x="5" y="2.5" width="14" height="19" rx="1" />
      <path d="M9 2.5v19" />
      <circle cx="15" cy="12" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Ferronnerie — a wrought-iron gate scroll between two posts. */
export function GateIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M4 21V6M20 21V6" />
      <path d="M4 21h16" />
      <path d="M4 9h16" />
      <path d="M9 21v-8c0-2 1.5-3 3-3s3 1 3 3-1.5 3-3 3" />
    </svg>
  );
}

/** Antivols & sécurité — a protective grille of crossed bars. */
export function LockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M8 3v18M16 3v18M3 9h18M3 15h18" />
    </svg>
  );
}

export const tradeIcons = {
  window: WindowIcon,
  door: DoorIcon,
  gate: GateIcon,
  lock: LockIcon,
};

/** WhatsApp glyph — kept close to the official mark so it stays recognizable. */
export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-1.746-.873-2.888-1.559-4.035-3.534-.305-.523.305-.485.874-1.613.098-.198.05-.371-.05-.52-.098-.148-.669-1.61-.916-2.208-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.05 3.13 4.976 4.267 2.925 1.138 2.925.759 3.45.71.526-.05 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347z"
      />
      <path
        fill="currentColor"
        d="M12.043 2C6.556 2 2.09 6.44 2.09 11.9c0 1.955.573 3.775 1.562 5.318L2 22l4.94-1.582a10.04 10.04 0 0 0 5.103 1.39h.004c5.487 0 9.953-4.44 9.953-9.9C21.996 6.44 17.53 2 12.043 2zm0 18.008h-.003a8.24 8.24 0 0 1-4.21-1.157l-.302-.18-3.13 1.001.99-3.037-.198-.313a8.03 8.03 0 0 1-1.28-4.35c0-4.47 3.667-8.107 8.136-8.107 4.469 0 8.096 3.637 8.096 8.107 0 4.47-3.627 8.036-8.099 8.036z"
      />
    </svg>
  );
}
