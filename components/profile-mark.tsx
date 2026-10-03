type ProfileMarkProps = {
  className?: string;
};

/**
 * Signature graphic: a line-drawing of an aluminium window-frame profile
 * cross-section, the way it would appear cut on an extrusion catalogue.
 * Used as a recurring motif across the site (hero, process markers, CTA
 * background) instead of a generic decorative shape.
 */
export function ProfileMark({ className }: ProfileMarkProps) {
  return (
    <svg
      viewBox="0 0 160 200"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10 H140 V50 H100 V190 H20 Z" />
      <rect x="35" y="68" width="30" height="52" rx="4" />
      <rect x="35" y="138" width="30" height="36" rx="4" />
      <circle cx="112" cy="170" r="5" />
      <path d="M100 50 L140 10" strokeDasharray="4 5" />
    </svg>
  );
}
