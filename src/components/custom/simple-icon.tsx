import type { SimpleIcon } from 'simple-icons';

interface SimpleIconProps {
  icon: SimpleIcon;
  size?: number;
  className?: string;
}

export function SimpleIcon({ icon, size = 16, className }: SimpleIconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-label={icon.title}
    >
      <path d={icon.path} />
    </svg>
  );
}
