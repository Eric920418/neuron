interface NeuronLogoProps {
  className?: string;
  color?: string;
}

export default function NeuronLogo({
  className = "",
  color = "currentColor",
}: NeuronLogoProps) {
  return (
    <svg
      viewBox="0 0 360 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="神經元"
    >
      {/* 神 */}
      <g fill={color}>
        {/* Left radical ネ */}
        <rect x="8" y="0" width="5" height="115" />
        <rect x="0" y="22" width="42" height="5" />
        <rect x="24" y="0" width="5" height="50" />
        <polygon points="10,58 6,115 11,115 15,58" />
        <polygon points="20,58 30,115 25,115 15,58" />

        {/* Right part 申 */}
        <rect x="48" y="12" width="62" height="5" />
        <rect x="48" y="48" width="62" height="5" />
        <rect x="48" y="85" width="62" height="5" />
        <rect x="48" y="12" width="5" height="78" />
        <rect x="105" y="12" width="5" height="78" />
        <rect x="73" y="0" width="5" height="115" />
      </g>

      {/* 經 */}
      <g fill={color}>
        {/* Left radical 糸 */}
        <rect x="126" y="6" width="30" height="4.5" />
        <rect x="126" y="28" width="30" height="4.5" />
        <rect x="138" y="0" width="5" height="52" />
        <polygon points="133,56 127,115 132,115 138,56" />
        <polygon points="143,56 149,115 144,115 138,56" />
        <rect x="128" y="68" width="20" height="3.5" />
        <rect x="128" y="82" width="20" height="3.5" />
        <rect x="128" y="96" width="20" height="3.5" />

        {/* Right part */}
        <rect x="164" y="3" width="60" height="4.5" />
        <rect x="164" y="24" width="60" height="4.5" />
        <rect x="164" y="48" width="60" height="4.5" />
        <rect x="164" y="72" width="60" height="4.5" />
        <rect x="164" y="105" width="60" height="4.5" />
        <rect x="190" y="0" width="5" height="115" />
        <rect x="164" y="3" width="5" height="107" />
        <rect x="219" y="3" width="5" height="107" />
      </g>

      {/* 元 */}
      <g fill={color}>
        <rect x="240" y="0" width="110" height="5" />
        <rect x="240" y="42" width="110" height="5" />
        <rect x="264" y="0" width="5" height="47" />
        <polygon points="244,47 236,115 241,115 249,47" />
        <rect x="308" y="42" width="5" height="58" />
        <rect x="300" y="100" width="22" height="15" rx="7.5" />
      </g>
    </svg>
  );
}
