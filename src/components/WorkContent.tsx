"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  slug: string;
  title: string;
  englishName: string;
  members: string[];
  description: string;
  heroImage: string;
  galleryImages: string[];
}

interface Props {
  projects: Project[];
  initialSlug: string;
  categoryLabel: string;
}

export default function WorkContent({
  projects,
  initialSlug,
  categoryLabel,
}: Props) {
  const idx = projects.findIndex((p) => p.slug === initialSlug);
  const [activeIndex, setActiveIndex] = useState(idx >= 0 ? idx : 0);
  const wheelCooldown = useRef(false);

  const project = projects[activeIndex];

  // 靜默更新 URL（不觸發導航）
  useEffect(() => {
    window.history.replaceState(null, "", `/works/${project.slug}`);
  }, [project.slug]);

  // 水平滾動切換作品
  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (projects.length <= 1) return;
      if (wheelCooldown.current) return;
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) return;
      const delta = e.deltaX;
      if (Math.abs(delta) < 10) return;

      e.preventDefault();
      wheelCooldown.current = true;
      setTimeout(() => {
        wheelCooldown.current = false;
      }, 400);

      setActiveIndex((prev) =>
        delta > 0
          ? (prev + 1) % projects.length
          : (prev - 1 + projects.length) % projects.length
      );
    },
    [projects.length]
  );

  // 右側縮圖：顯示 active 之後的 2 個作品（循環）
  const thumbIndices: number[] = [];
  for (
    let offset = 1;
    offset < projects.length && thumbIndices.length < 2;
    offset++
  ) {
    thumbIndices.push((activeIndex + offset) % projects.length);
  }

  const galleryImages =
    project.galleryImages.length > 0
      ? project.galleryImages
      : Array.from({ length: 5 }, () => "");

  return (
    <>
      {/* ===== HERO 圖片輪播區 ===== */}
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
            <AnimatePresence mode="wait">
              <motion.div
                key={project.slug + "-hero"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="h-full w-full"
              >
                {project.heroImage ? (
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-white/5 text-white/20">
                    {project.title}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 右側：縮圖 + 作品名稱 */}
          <div className="flex flex-col">
            <div
              className="flex items-start"
              style={{ gap: "clamp(8px, 0.8vw, 16px)" }}
            >
              {thumbIndices.map((i) => (
                <button
                  key={projects[i].slug}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className="relative block flex-shrink-0 overflow-hidden rounded-sm bg-white/5 text-left opacity-60 hover:opacity-80 transition-opacity"
                  style={{
                    width: "clamp(320px, 24vw, 640px)",
                    aspectRatio: "563 / 328",
                  }}
                >
                  {projects[i].heroImage ? (
                    <img
                      src={projects[i].heroImage}
                      alt={projects[i].title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-white/10 text-sm text-white/30">
                      {projects[i].title}
                    </div>
                  )}
                </button>
              ))}
            </div>
            <div className="mt-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={project.slug + "-label"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <p
                    className="font-bold"
                    style={{
                      fontSize: "clamp(14px, 1.4vw, 28px)",
                      color: "rgb(237,239,241)",
                    }}
                  >
                    {project.title}
                  </p>
                  <p
                    className="mt-0.5 text-foreground/60"
                    style={{ fontSize: "clamp(10px, 0.8vw, 16px)" }}
                  >
                    組別{categoryLabel}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 作品詳細資訊 ===== */}
      <main className="relative z-10 mx-auto max-w-[1920px] px-6 lg:px-16 mb-[360px] w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={project.slug + "-detail"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex gap-[30px] items-start">
              <div
                style={{
                  width: "15px",
                  height: "90px",
                  backgroundColor: "rgb(99,149,149)",
                }}
              />
              <div className="w-full">
                <h1
                  className="font-bold"
                  style={{
                    fontSize: "clamp(36px, 3.125vw, 60px)",
                    color: "rgb(237,239,241)",
                  }}
                >
                  {project.title}
                </h1>
                <p
                  className="mt-4"
                  style={{
                    fontSize: "clamp(16px, 1.25vw, 24px)",
                    color: "rgb(255,255,255)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {project.englishName}
                </p>
                <div className="mt-3">
                  {project.members.map((line, i) => (
                    <p
                      key={i}
                      style={{
                        fontSize: "clamp(16px, 1.25vw, 24px)",
                        color: "rgb(255,255,255)",
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
                <div className="mt-8 max-w-[1331px]">
                  {project.description.split("\n").map((paragraph, i) => (
                    <p
                      key={i}
                      className="mb-4 leading-relaxed"
                      style={{
                        fontSize: "clamp(16px, 1.25vw, 24px)",
                        color: "rgb(255,255,255)",
                      }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="mt-12 flex justify-end">
                  <a
                    href="/reserve"
                    className="inline-flex items-center justify-center transition-colors hover:bg-[rgb(99,149,149)] hover:text-dark"
                    style={{
                      padding: "20px 40px",
                      border: "1px solid rgb(99,149,149)",
                      fontSize: "clamp(16px, 1.25vw, 24px)",
                      color: "rgb(99,149,149)",
                    }}
                  >
                    前往預約
                  </a>
                </div>
              </div>
            </div>

            <section className="mx-auto mt-20 flex max-w-[1526px] flex-col gap-[60px]">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="w-full overflow-hidden rounded-sm"
                  style={{ aspectRatio: "1526 / 905" }}
                >
                  {img ? (
                    <img
                      src={img}
                      alt={`${project.title} - ${i + 1}`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-white text-lg text-neutral-400">
                      作品圖片 {i + 1}
                    </div>
                  )}
                </div>
              ))}
            </section>
          </motion.div>
        </AnimatePresence>
      </main>
    </>
  );
}
