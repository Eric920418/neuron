"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: "view" | "hover";
  revealDirection?: "start" | "end" | "center";
  sequential?: boolean;
  useOriginalCharsOnly?: boolean;
  onAnimationComplete?: () => void;
}

export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
  className = "",
  parentClassName = "",
  encryptedClassName = "",
  animateOn = "hover",
  revealDirection = "start",
  sequential = false,
  useOriginalCharsOnly = false,
  onAnimationComplete,
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [isScrambling, setIsScrambling] = useState(false);
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(
    new Set()
  );
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLSpanElement | null>(null);

  const getRevealOrder = useCallback(() => {
    const indices = Array.from({ length: text.length }, (_, i) => i);
    switch (revealDirection) {
      case "end":
        return indices.reverse();
      case "center": {
        const center = Math.floor(text.length / 2);
        return indices.sort(
          (a, b) => Math.abs(a - center) - Math.abs(b - center)
        );
      }
      default:
        return indices;
    }
  }, [text, revealDirection]);

  const getRandomChar = useCallback(
    (originalChar: string) => {
      if (useOriginalCharsOnly) {
        const availableChars = text.split("");
        return availableChars[Math.floor(Math.random() * availableChars.length)];
      }
      if (originalChar === " ") return " ";
      return characters[Math.floor(Math.random() * characters.length)];
    },
    [characters, text, useOriginalCharsOnly]
  );

  useEffect(() => {
    if (!isHovering && !isScrambling) {
      setDisplayText(text);
      setRevealedIndices(new Set());
      return;
    }

    if (isHovering) {
      setIsScrambling(true);
      let currentIteration = 0;
      const revealOrder = getRevealOrder();
      let revealIndex = 0;
      const revealed = new Set<number>();

      const interval = setInterval(() => {
        if (sequential) {
          if (revealIndex < revealOrder.length) {
            revealed.add(revealOrder[revealIndex]);
            setRevealedIndices(new Set(revealed));
            revealIndex++;
          }

          setDisplayText(
            text
              .split("")
              .map((char, i) => (revealed.has(i) ? char : getRandomChar(char)))
              .join("")
          );

          if (revealIndex >= revealOrder.length) {
            clearInterval(interval);
            setIsScrambling(false);
            onAnimationComplete?.();
          }
        } else {
          currentIteration++;
          setDisplayText(
            text
              .split("")
              .map((char, i) => {
                if (char === " ") return " ";
                if (currentIteration >= maxIterations) return char;
                return Math.random() > 0.5 ? getRandomChar(char) : char;
              })
              .join("")
          );

          if (currentIteration >= maxIterations) {
            clearInterval(interval);
            setIsScrambling(false);
            onAnimationComplete?.();
          }
        }
      }, speed);

      return () => clearInterval(interval);
    }
  }, [
    isHovering,
    text,
    speed,
    maxIterations,
    getRandomChar,
    getRevealOrder,
    sequential,
    onAnimationComplete,
    isScrambling,
  ]);

  useEffect(() => {
    if (animateOn !== "view") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsHovering(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    const el = containerRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, [animateOn, hasAnimated]);

  const hoverProps =
    animateOn === "hover"
      ? {
          onMouseEnter: () => setIsHovering(true),
          onMouseLeave: () => {
            setIsHovering(false);
            setIsScrambling(false);
          },
        }
      : {};

  return (
    <span ref={containerRef} className={parentClassName} {...hoverProps}>
      <AnimatePresence mode="wait">
        <motion.span
          key={displayText}
          className={className}
          initial={false}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.05 }}
        >
          {displayText.split("").map((char, index) => {
            const isRevealed = revealedIndices.has(index);
            const isOriginal = char === text[index];

            return (
              <span
                key={index}
                className={
                  isRevealed || isOriginal ? className : encryptedClassName
                }
              >
                {char}
              </span>
            );
          })}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
