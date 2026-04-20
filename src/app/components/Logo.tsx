export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      aria-label="한교 법률사무소 로고"
      role="img"
    >
      {/* Background */}
      <rect width="100" height="100" rx="24" fill="currentColor" />

      {/* Bridge arches */}
      <path
        d="M 18 75 Q 50 35 82 75"
        stroke="#c6a87c"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M 28 75 Q 50 48 72 75"
        stroke="#c6a87c"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Scale pillar */}
      <line
        x1="50"
        y1="25"
        x2="50"
        y2="75"
        stroke="#c6a87c"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Scale crossbar */}
      <line
        x1="28"
        y1="35"
        x2="72"
        y2="35"
        stroke="#c6a87c"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Dangling threads */}
      <line
        x1="28"
        y1="35"
        x2="28"
        y2="52"
        stroke="#c6a87c"
        strokeWidth="2"
        strokeDasharray="3 3"
      />
      <path d="M 20 52 L 36 52 Q 28 62 20 52 Z" fill="#c6a87c" />

      <line
        x1="72"
        y1="35"
        x2="72"
        y2="52"
        stroke="#c6a87c"
        strokeWidth="2"
        strokeDasharray="3 3"
      />
      <path d="M 64 52 L 80 52 Q 72 62 64 52 Z" fill="#c6a87c" />
    </svg>
  );
}
