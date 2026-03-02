"use client";

import DecryptedText from "./DecryptedText";

const NAV_LINKS = [
  { label: "資訊", href: "/info" },
  { label: "作品", href: "/works" },
  { label: "預約", href: "/reserve" },
];

interface NavbarProps {
  activePath: string;
}

export default function Navbar({ activePath }: NavbarProps) {
  const isContactActive = activePath === "/contact";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-dark/90 backdrop-blur-md">
      <div className="mx-auto flex h-[80px] max-w-[1920px] items-center px-6 lg:px-16">
        <a href="/">
          <img
            src="/navbar-logo.webp"
            alt="神經元"
            className="h-20 w-auto"
            draggable={false}
          />
        </a>
        <div className="hidden flex-1 items-center justify-center gap-16 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === activePath ||
              (link.href === "/works" && activePath.startsWith("/works"));
            return (
              <a
                key={link.href}
                href={link.href}
                className={`font-mono text-sm tracking-wider transition-colors hover:text-white ${
                  isActive ? "text-white" : "text-foreground/80"
                }`}
              >
                <DecryptedText
                  text={link.label}
                  animateOn="hover"
                  speed={50}
                  maxIterations={10}
                  sequential
                  revealDirection="start"
                />
              </a>
            );
          })}
        </div>
        <a
          href="/contact"
          className={`hidden rounded-full border px-8 py-2.5 font-mono text-sm tracking-wider transition-all md:block ${
            isContactActive
              ? "border-white text-white hover:bg-white hover:text-dark"
              : "border-foreground/30 hover:border-white hover:bg-white hover:text-dark"
          }`}
        >
          <DecryptedText
            text="聯絡我們"
            animateOn="hover"
            speed={50}
            maxIterations={10}
            sequential
            revealDirection="start"
          />
        </a>
        {/* Mobile menu button */}
        <button
          className="ml-auto flex flex-col gap-1.5 md:hidden"
          aria-label="選單"
        >
          <span className="block h-0.5 w-6 bg-foreground" />
          <span className="block h-0.5 w-6 bg-foreground" />
        </button>
      </div>
    </nav>
  );
}
