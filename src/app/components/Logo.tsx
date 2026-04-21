export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      aria-label="BECOME 법률사무소 로고"
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

      {/* BECOME wordmark — center */}
      <text
        x="50"
        y="56"
        textAnchor="middle"
        fontFamily='"Playfair Display", "Times New Roman", Georgia, serif'
        fontWeight="900"
        fontSize="22"
        letterSpacing="0.5"
        fill="#2563EB"
      >
        BECOME
      </text>

      {/* Divider rule */}
      <line
        x1="22"
        y1="66"
        x2="78"
        y2="66"
        stroke="#2563EB"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* LAW FIRM subtitle */}
      <text
        x="50"
        y="80"
        textAnchor="middle"
        fontFamily='"Pretendard Variable", Pretendard, "Apple SD Gothic Neo", sans-serif'
        fontWeight="700"
        fontSize="10"
        letterSpacing="3"
        fill="#2563EB"
      >
        LAW FIRM
      </text>
    </svg>
  );
}
