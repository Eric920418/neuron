"use client";

import { useRef, useState, useCallback } from "react";

interface CarouselItem {
  slug: string;
  title: string;
  heroImage: string;
}

interface Props {
  current: CarouselItem;
  siblings: CarouselItem[];
  categoryLabel: string;
}

export default function HeroCarousel({
  current,
  siblings,
  categoryLabel,
}: Props) {
  const allItems = [current, ...siblings];
  const count = allItems.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const wheelCooldown = useRef(false);

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (count <= 1) return;
      if (wheelCooldown.current) return;
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) return;
      const delta = e.deltaX;
      if (Math.abs(delta) < 10) return;

      e.preventDefault();
      wheelCooldown.current = true;
      setTimeout(() => { wheelCooldown.current = false; }, 400);

      setActiveIndex((prev) =>
        delta > 0 ? Math.min(prev + 1, count - 1) : Math.max(prev - 1, 0)
      );
    },
    [count]
  );

  const active = allItems[activeIndex];

  return (
    <section
      onWheel={handleWheel}
      className="relative z-10 mt-[60px] mb-[240px]"
    >
      <div
        className="flex items-start px-6 lg:px-16"
        style={{ gap: "clamp(8px, 0.8vw, 16px)" }}
      >
        {/* 主圖 */}
        <div
          className="relative flex-shrink-0 overflow-hidden rounded-sm bg-white/5"
          style={{
            width: "clamp(400px, 58vw, 1113px)",
            aspectRatio: "1113 / 648",
          }}
        >
          {active.heroImage ? (
            <img
              src={active.heroImage}
              alt={active.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-white/5 text-white/20">
              {active.title}
            </div>
          )}
        </div>

        {/* 右側：縮圖 + 作品名稱 */}
        <div className="flex flex-col">
          <div className="flex items-start" style={{ gap: "clamp(8px, 0.8vw, 16px)" }}>
            {allItems
              .filter((_, i) => i !== activeIndex)
              .map((item) => (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() =>
                    setActiveIndex(allItems.findIndex((a) => a.slug === item.slug))
                  }
                  className="relative block flex-shrink-0 overflow-hidden rounded-sm bg-white/5 text-left opacity-60 hover:opacity-80 transition-opacity"
                  style={{
                    width: "clamp(240px, 20vw, 384px)",
                    aspectRatio: "563 / 328",
                  }}
                >
                  {item.heroImage ? (
                    <img
                      src={item.heroImage}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-white/10 text-sm text-white/30">
                      {item.title}
                    </div>
                  )}
                </button>
              ))}
          </div>
          <div className="mt-4">
            <p
              className="font-bold"
              style={{
                fontSize: "clamp(14px, 1.4vw, 28px)",
                color: "rgb(237,239,241)",
              }}
            >
              {active.title}
            </p>
            <p
              className="mt-0.5 text-foreground/60"
              style={{ fontSize: "clamp(10px, 0.8vw, 16px)" }}
            >
              組別{categoryLabel}
            </p>
          </div>
        </div>
      </div>

    
    </section>
  );
}
