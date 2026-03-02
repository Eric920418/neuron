"use client";

import { useRef, useEffect, useCallback, useState } from "react";

interface HeroVideoProps {
  src: string;
  crossfadeDuration?: number;
}

export default function HeroVideo({
  src,
  crossfadeDuration = 1.5,
}: HeroVideoProps) {
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  const [activeIndex, setActiveIndex] = useState<0 | 1>(0);
  const transitioningRef = useRef(false);

  const getVideos = useCallback(() => {
    const a = videoARef.current;
    const b = videoBRef.current;
    if (!a || !b) return null;
    return activeIndex === 0
      ? { active: a, standby: b }
      : { active: b, standby: a };
  }, [activeIndex]);

  const startTransition = useCallback(() => {
    const videos = getVideos();
    if (!videos || transitioningRef.current) return;
    transitioningRef.current = true;

    const { active, standby } = videos;

    // 備用視頻從頭開始播放
    standby.currentTime = 0;
    standby.play().catch(() => {});

    // 交叉淡入淡出：備用視頻淡入，活躍視頻淡出
    standby.style.transition = `opacity ${crossfadeDuration}s ease-in-out`;
    active.style.transition = `opacity ${crossfadeDuration}s ease-in-out`;
    standby.style.opacity = "1";
    active.style.opacity = "0";
  }, [getVideos, crossfadeDuration]);

  const handleTimeUpdate = useCallback(() => {
    const videos = getVideos();
    if (!videos || transitioningRef.current) return;

    const { active } = videos;
    const remaining = active.duration - active.currentTime;

    if (remaining <= crossfadeDuration && remaining > 0) {
      startTransition();
    }
  }, [getVideos, crossfadeDuration, startTransition]);

  const handleEnded = useCallback(() => {
    const videos = getVideos();
    if (!videos) return;

    const { active } = videos;
    active.pause();

    // 切換角色
    setActiveIndex((prev) => (prev === 0 ? 1 : 0));
    transitioningRef.current = false;
  }, [getVideos]);

  // 初始播放
  useEffect(() => {
    const a = videoARef.current;
    if (!a) return;
    a.style.opacity = "1";
    a.play().catch(() => {});
  }, []);

  // 綁定事件
  useEffect(() => {
    const videos = getVideos();
    if (!videos) return;

    const { active } = videos;
    active.addEventListener("timeupdate", handleTimeUpdate);
    active.addEventListener("ended", handleEnded);

    return () => {
      active.removeEventListener("timeupdate", handleTimeUpdate);
      active.removeEventListener("ended", handleEnded);
    };
  }, [activeIndex, getVideos, handleTimeUpdate, handleEnded]);

  const sharedProps = {
    muted: true,
    playsInline: true,
    preload: "auto" as const,
    className: "absolute inset-0 h-full w-full object-cover",
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        ref={videoARef}
        src={src}
        style={{ opacity: 1 }}
        {...sharedProps}
      />
      <video
        ref={videoBRef}
        src={src}
        style={{ opacity: 0 }}
        {...sharedProps}
      />
    </div>
  );
}
