"use client";

import { useRef, useState, useCallback } from "react";

interface Props {
  title: string;
  categoryLabel: string;
  images: string[];
}

export default function HeroCarousel({
  title,
  categoryLabel,
  images,
}: Props) {
  const count = images.length;
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

  /* 右側最多顯示 2 張縮圖，優先顯示 active 後面的圖片 */
  const thumbIndices: number[] = [];
  for (let offset = 1; offset < count && thumbIndices.length < 2; offset++) {
    thumbIndices.push((activeIndex + offset) % count);
  }

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
          {images[activeIndex] ? (
            <img
              src={images[activeIndex]}
              alt={`${title} - ${activeIndex + 1}`}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-white/5 text-white/20">
              {title}
            </div>
          )}
        </div>

        {/* 右側：縮圖 + 作品名稱 */}
        <div className="flex flex-col">
          <div className="flex items-start" style={{ gap: "clamp(8px, 0.8vw, 16px)" }}>
            {thumbIndices.map((i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                className="relative block flex-shrink-0 overflow-hidden rounded-sm bg-white/5 text-left opacity-60 hover:opacity-80 transition-opacity"
                style={{
                  width: "clamp(320px, 24vw, 640px)",
                  aspectRatio: "563 / 328",
                }}
              >
                {images[i] ? (
                  <img
                    src={images[i]}
                    alt={`${title} - ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-white/10 text-sm text-white/30">
                    圖片 {i + 1}
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
              {title}
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
