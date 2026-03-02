"use client";

import { useEffect, useState, useRef, useCallback } from "react";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  className?: string;
  characters?: string;
}

const SCRAMBLE_INTERVAL = 30;

export default function DecryptedText({
  text,
  speed = 80,
  className = "",
  characters = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
}: DecryptedTextProps) {
  const [display, setDisplay] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const revealedRef = useRef(0);
  const scrambleTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const revealTimer = useRef<ReturnType<typeof setInterval> | null>(null);

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
  }, []);

  useEffect(() => {
    if (!isHovering) {
      clearTimers();
      revealedRef.current = 0;
      setDisplay(text);
      return;
    }

    // Hovering: start scramble + reveal
    revealedRef.current = 0;

    // Fast interval: update scrambled characters every tick
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

    // Slower interval: reveal one character at a time
    revealTimer.current = setInterval(() => {
      revealedRef.current += 1;
      if (revealedRef.current >= text.length) {
        clearTimers();
        setDisplay(text);
      }
    }, speed);

    return clearTimers;
  }, [isHovering, text, speed, randomChar, clearTimers]);

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
