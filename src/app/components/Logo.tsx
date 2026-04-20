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
      {/* Seal — inherits currentColor from parent so it adapts to context */}
      <rect width="100" height="100" rx="20" fill="currentColor" />

      {/* Hairline inner frame */}
      <rect
        x="6"
        y="6"
        width="88"
        height="88"
        rx="14"
        fill="none"
        stroke="#60A5FA"
        strokeOpacity="0.35"
        strokeWidth="1"
      />

      {/* 한교 wordmark — center */}
      <text
        x="50"
        y="60"
        textAnchor="middle"
        fontFamily='"Pretendard Variable", Pretendard, "Apple SD Gothic Neo", sans-serif'
        fontWeight="900"
        fontSize="38"
        letterSpacing="-1.5"
        fill="#2563EB"
      >
        한교
      </text>

      {/* Azure horizon — the bridge span */}
      <line
        x1="18"
        y1="76"
        x2="82"
        y2="76"
        stroke="#2563EB"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="18" cy="76" r="2.2" fill="#2563EB" />
      <circle cx="82" cy="76" r="2.2" fill="#2563EB" />
    </svg>
  );
}
