"use client";

import { useEffect, useState, useRef, useCallback } from "react";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  scrambleDuration?: number;
  className?: string;
  characters?: string;
}

const SCRAMBLE_INTERVAL = 30;

export default function DecryptedText({
  text,
  speed = 120,
  scrambleDuration = 500,
  className = "",
  characters = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
}: DecryptedTextProps) {
  const [display, setDisplay] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const revealedRef = useRef(0);
  const scrambleTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const revealTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const delayTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const randomChar = useCallback(
    () => characters[Math.floor(Math.random() * characters.length)],
    [characters]
  );

  const clearTimers = useCallback(() => {
    if (scrambleTimer.current) {
      clearInterval(scrambleTimer.current);
      scrambleTimer.current = null;
    }
    if (revealTimer.current) {
      clearInterval(revealTimer.current);
      revealTimer.current = null;
    }
    if (delayTimer.current) {
      clearTimeout(delayTimer.current);
      delayTimer.current = null;
    }
  }, []);

  useEffect(() => {
    if (!isHovering) {
      clearTimers();
      revealedRef.current = 0;
      setDisplay(text);
      return;
    }

    // Hovering: start scramble, then reveal after delay
    revealedRef.current = 0;

    // Phase 1: all characters scramble
    scrambleTimer.current = setInterval(() => {
      const count = revealedRef.current;
      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            return i < count ? char : randomChar();
          })
          .join("")
      );
    }, SCRAMBLE_INTERVAL);

    // Phase 2: after scrambleDuration, start revealing left-to-right
    delayTimer.current = setTimeout(() => {
      revealTimer.current = setInterval(() => {
        revealedRef.current += 1;
        if (revealedRef.current >= text.length) {
          clearTimers();
          setDisplay(text);
        }
      }, speed);
    }, scrambleDuration);

    return clearTimers;
  }, [isHovering, text, speed, scrambleDuration, randomChar, clearTimers]);

  return (
    <span
      className={`inline-block ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {display}
    </span>
  );
}
