interface MarqueeProps {
  children: React.ReactNode;
  reverse?: boolean;
  speed?: "fast" | "normal" | "slow";
  className?: string;
}

export default function Marquee({
  children,
  reverse = false,
  speed = "normal",
  className = "",
}: MarqueeProps) {
  const animClass = reverse
    ? "animate-marquee-reverse"
    : speed === "fast"
      ? "animate-marquee-fast"
      : speed === "slow"
        ? "animate-marquee-slow"
        : "animate-marquee";

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className={`inline-flex ${animClass}`}>
        <div className="inline-flex items-center">{children}</div>
        <div className="inline-flex items-center">{children}</div>
      </div>
    </div>
  );
}
