"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

/** 以 1920×1080 為設計稿基準等比縮放 */
const s = (px: number) =>
  `min(${px}px, calc(${px} / 1920 * 100vw), calc(${px} / 1080 * 100dvh))`;

interface Project {
  title: string;
  category: string;
  tag: string;
  image: string;
  color: string;
}

interface ScrollCardsProps {
  projects: Project[];
}

export default function ScrollCards({ projects }: ScrollCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const count = projects.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const floatIndex = useTransform(scrollYProgress, [0, 1], [0, count - 1]);

  useMotionValueEvent(floatIndex, "change", (v) => {
    setActiveIndex(Math.round(v));
  });

  return (
    <section
      ref={containerRef}
      style={{ height: `${count * 100}vh` }}
      className="relative bg-dark"
    >
      {/* SVG clipPath 定義 — 倒梯形 + 上下圓弧 */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="card-shape" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.035 Q 0.5,-0.015 1,0.035 L 0.96,0.965 Q 0.5,0.935 0.04,0.965 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden" style={{ paddingTop: s(160) }}>
        {/* Cards area */}
        <div
          className="relative flex items-center justify-center"
          style={{ width: "100vw", height: s(520), perspective: "1800px", transformStyle: "preserve-3d" }}
        >
          {projects.map((project, i) => (
            <CardItem
              key={i}
              project={project}
              index={i}
              floatIndex={floatIndex}
            />
          ))}
        </div>

        {/* Category + tag — 堆疊排列 */}
        <div
          className="flex flex-col"
          style={{ marginTop: s(32), gap: s(2), width: s(1000) }}
        >
          <span
            className="font-bold leading-none text-white/90"
            style={{ fontSize: s(60) }}
          >
            {projects[activeIndex]?.category}
          </span>
          <span className="text-white/50" style={{ fontSize: s(36) }}>
            {projects[activeIndex]?.tag}
          </span>
        </div>

    
      </div>
    </section>
  );
}

/**
 * 照片折邊卡片
 *
 * 用 clip-path polygon 裁出左右內折的形狀，
 * 再用漸層 overlay 模擬折面的明暗。
 *
 *   ┌──────────────────┐  ← 頂部略窄
 *  ╱                    ╲
 * │                      │ ← 中間最寬
 *  ╲                    ╱
 *   └──────────────────┘  ← 底部略窄
 */
function CardItem({
  project,
  index,
  floatIndex,
}: {
  project: Project;
  index: number;
  floatIndex: motion.MotionValue<number>;
}) {
  const offset = useTransform(floatIndex, (v) => index - v);

  // 球面佈局：rotateY 繞球心旋轉，z 控制前後深度，x 微調水平位置
  const rotateY = useTransform(
    offset,
    [-2, -1, 0, 1, 2],
    [-40, -20, 0, 20, 40]
  );

  // translateZ：中間卡片最前，兩側推遠（貼球面後退）
  const z = useTransform(
    offset,
    [-2, -1, 0, 1, 2],
    [-600, -250, 100, -250, -600]
  );

  // x 輔助水平展開
  const x = useTransform(
    offset,
    [-2, -1, 0, 1, 2],
    ["-190%", "-100%", "0%", "100%", "190%"]
  );

  // 階梯排列：中間最高、左邊居中偏上、右邊偏下
  const y = useTransform(
    offset,
    [-2, -1, 0, 1, 2],
    [-20, -80, -30, 160, 180]
  );

  const scale = useTransform(
    offset,
    [-2, -1, 0, 1, 2],
    [0.45, 0.65, 1, 0.65, 0.45]
  );
  const opacity = useTransform(
    offset,
    [-2, -1, 0, 1, 2],
    [0, 0.5, 1, 0.5, 0]
  );
  const zIndex = useTransform(offset, (v) =>
    10 - Math.round(Math.abs(v) * 3)
  );

  return (
    <motion.div
      className="absolute"
      style={{
        x,
        y,
        z,
        rotateY,
        scale,
        opacity,
        zIndex,
        width: s(1100),
        height: s(620),
      }}
    >
      {/*
        倒梯形卡片：上寬下窄，頂部圓弧
        用多點 polygon 模擬頂部弧線
      */}
      <div
        className="relative h-full w-full overflow-hidden"
        style={{
          clipPath: "url(#card-shape)",
          backgroundColor: project.color,
        }}
      >
        {/* 標題 */}
        <div className="flex h-full w-full flex-col items-center justify-center">
          <span
            className="font-mono font-bold uppercase leading-none tracking-wider text-white"
            style={{ fontSize: s(64) }}
          >
            {project.title}
          </span>
        </div>
      </div>

      {/* 底部陰影 */}
      <div
        className="absolute left-1/2"
        style={{
          bottom: `-${s(12)}`,
          width: "80%",
          height: s(20),
          transform: "translateX(-50%)",
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.35) 0%, transparent 70%)",
          filter: "blur(10px)",
        }}
      />
    </motion.div>
  );
}
