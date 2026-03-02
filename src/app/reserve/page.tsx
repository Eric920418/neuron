import Navbar from "@/components/Navbar";

const SOCIAL_LINKS = [
  { name: "INSTAGRAM", href: "#" },
  { name: "THREADS", href: "#" },
  { name: "LINE", href: "#" },
];

export default function ReservePage() {
  return (
    <div className="min-h-screen bg-dark text-foreground">
      <Navbar activePath="/reserve" />

      {/* ===== MAIN CONTENT ===== */}
      <main className="flex min-h-screen flex-col items-center justify-center px-6 pt-20">
        <div className="w-full max-w-[560px]">
          <h1
            className="mb-10 text-center text-[36px] font-normal text-foreground"
          >
            請選擇觀展場地
          </h1>

          <div className="space-y-6">
            {/* 卡片 1 — 校內展 */}
            <a
              href="#"
              className="block cursor-pointer rounded border border-white/30 px-8 py-6 transition-all hover:border-white/60"
            >
              <p className="mb-3 text-[24px] font-bold text-white">校內展</p>
              <div className="flex items-baseline justify-between">
                <span className="text-[24px]" style={{ color: "rgb(99,149,149)" }}>
                  元智大學 五館/六館
                </span>
                <span className="text-[24px]" style={{ color: "rgb(99,149,149)" }}>
                  4/13-4/17
                </span>
              </div>
            </a>

            {/* 卡片 2 — 校外展 */}
            <a
              href="#"
              className="block cursor-pointer rounded border border-white/30 px-8 py-6 transition-all hover:border-white/60"
            >
              <p className="mb-3 text-[24px] font-bold text-white">校外展</p>
              <div className="flex items-baseline justify-between">
                <span className="text-[24px]" style={{ color: "rgb(99,149,149)" }}>
                  松山文創園區 二號倉庫
                </span>
                <span className="text-[24px]" style={{ color: "rgb(99,149,149)" }}>
                  5/08-5/11
                </span>
              </div>
            </a>
          </div>
        </div>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="relative overflow-hidden pt-16">
        {/* Social Links */}
        <div className="space-y-16 px-6 lg:px-16">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className=" block"
            >
              <span className="block text-[24px] tracking-[0.15em] text-foreground/90 transition-colors group-hover:text-white"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                {link.name}
              </span>
            </a>
          ))}
        </div>

        {/* Copyright + Large Logo */}
        <div className="relative ">
          {/* Large Footer Logo with green glow */}
          <div
            style={{
              filter: "drop-shadow(0px 0px 57px rgba(107, 183, 140, 0.55))",
            }}
          >
            <img
              src="/footer.png"
              alt="神經元"
              className="block w-full translate-y-[15%]"
              draggable={false}
            />
          </div>
        </div>
      </footer>

      {/* ===== 裝飾元素 ===== */}
      <img
        src="/Group.png"
        alt=""
        aria-hidden="true"
        draggable={false}
        className="pointer-events-none fixed bottom-0 right-0 z-0 w-[35%] max-w-[500px] select-none opacity-60"
      />
    </div>
  );
}
