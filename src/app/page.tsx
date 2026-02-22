import Marquee from "@/components/Marquee";
import NeuralNetwork from "@/components/NeuralNetwork";
import NeuronLogo from "@/components/NeuronLogo";
import ScrollCards from "@/components/ScrollCards";

/** 以 1920×1080 為設計稿基準，根據 vw / dvh 等比縮放，不超過原始 px */
const s = (px: number) =>
  `min(${px}px, calc(${px} / 1920 * 100vw), calc(${px} / 1080 * 100dvh))`;

const MARQUEE_ROWS = [
  {
    texts: ["DEGREE SHOW"],
    reverse: false,
    speed: "normal" as const,
  },
  {
    texts: ["INFO COMMUNICATION"],
    reverse: false,
    speed: "fast" as const,
  },
  {
    texts: ["2026"],
    reverse: false,
    speed: "slow" as const,
  },
  {
    texts: ["YUAN ZE UNIVERSITY"],
    reverse: false,
    speed: "normal" as const,
  },
  {
    texts: ["YUAN ZE UNIVERSITY"],
    reverse: false,
    speed: "fast" as const,
  },
];

const EXHIBITION_GROUPS = [
  {
    label: "校外展",
    dates: [
      { date: "05.08", location: "松山文創園區" },
      { date: "05.11", location: "二號倉庫" },
    ],
    separator: "·",
  },
  {
    label: "校內展",
    dates: [
      { date: "04.13", location: "五館三樓" },
      { date: "04.17", location: "六館玻璃屋" },
    ],
    separator: "/",
  },
];

const DESCRIPTION_LINES = [
  "資訊傳播系的核心，在於促進「感性與理性」的共融。",
  "感性不是理性的對立，而是它的延伸與補足。",
  "理性讓我們用結構化的方式理解世界，感性則讓我們感受其中的細節與溫度。",
  "當兩者並存時，便能以多元視角回應社會，並以更開放的態度進行創新。",
  "",
  "在這樣的網絡中，創意不再屬於單一面向，",
  "而是由不同視角的交會——感性中的理性，理性中的感性。",
  "神經元成為兩者之間的橋樑，在訊號的傳遞與交流中完成「轉譯」，在理性與感性之間尋找共鳴",
  "的過程，最終編織出思考與創意的網絡。",
];

const PROJECTS = [
  { title: "ALL OF YOU", category: "DIGITAL EXPERIENCE", tag: "互動", image: "/assets/project-1.jpg", color: "#2a3a4a" },
  { title: "INNER WAVE", category: "FILM", tag: "影像", image: "/assets/project-2.jpg", color: "#3a2a4a" },
  { title: "ECHO CHAMBER", category: "INSTALLATION", tag: "裝置", image: "/assets/project-3.jpg", color: "#4a3a2a" },
  { title: "NEURAL LINK", category: "WEB DESIGN", tag: "網頁", image: "/assets/project-4.jpg", color: "#2a4a3a" },
  { title: "VOID SPACE", category: "MOTION GRAPHICS", tag: "動態", image: "/assets/project-5.jpg", color: "#3a3a3a" },
];

const SOCIAL_LINKS = [
  { name: "INSTAGRAM", href: "#", lineWidth: "w-[200px]" },
  { name: "THREADS", href: "#", lineWidth: "w-[160px]" },
  { name: "LINE", href: "#", lineWidth: "w-[98px]" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-dark text-foreground">
      {/* ===== NAVBAR ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-dark/90 backdrop-blur-md">
        <div className="mx-auto flex h-[80px] max-w-[1920px] items-center px-6 lg:px-16">
          <img src="/navbar-logo.webp" alt="神經元" className="h-20 w-auto" draggable={false} />
          <div className="hidden flex-1 items-center justify-center gap-16 md:flex">
            <a
              href="/info"
              className="font-mono text-sm tracking-wider text-foreground/80 transition-colors hover:text-white"
            >
              資訊
            </a>
            <a
              href="/works"
              className="font-mono text-sm tracking-wider text-foreground/80 transition-colors hover:text-white"
            >
              作品
            </a>
            <a
              href="/reserve"
              className="font-mono text-sm tracking-wider text-foreground/80 transition-colors hover:text-white"
            >
              預約
            </a>
          </div>
          <a
            href="/contact"
            className="hidden rounded-full border border-foreground/30 px-8 py-2.5 font-mono text-sm tracking-wider transition-all hover:border-white hover:bg-white hover:text-dark md:block"
          >
            聯絡我們
          </a>
          {/* Mobile menu button */}
          <button className="flex flex-col gap-1.5 md:hidden" aria-label="選單">
            <span className="block h-0.5 w-6 bg-foreground" />
            <span className="block h-0.5 w-6 bg-foreground" />
          </button>
        </div>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-20">
        {/* 大 Logo */}
        <img
          src="/navbar-logo.webp"
          alt=""
          aria-hidden="true"
          draggable={false}
          className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 select-none"
          style={{ width: s(1600) }}
        />
        {/* Marquee Text Rows */}
        <div className="space-y-0">
          {MARQUEE_ROWS.map((row, idx) => (
            <Marquee
              key={idx}
              reverse={row.reverse}
              speed={row.speed}
              className=" border-white/5 "
            >
              <div
                className="flex min-w-[100vw] items-center"
                style={{ gap: s(32), paddingInline: s(16) }}
              >
                {row.texts.map((text, i) => (
                  <span
                    key={i}
                    className={`font-bold tracking-tight ${
                      /[\u4e00-\u9fff]/.test(text)
                        ? "font-sans"
                        : "font-mono uppercase"
                    } text-white/40`}
                    style={{ fontSize: s(140) }}
                  >
                    {text}
                  </span>
                ))}
              </div>
            </Marquee>
          ))}
        </div>

        {/* 展覽日期 - 右下角 */}
        <div
          className="absolute bottom-[10%] right-0 z-20 flex  text-white"
          style={{ gap: s(64), padding: `${s(28)} ${s(48)}` }}
        >
          {EXHIBITION_GROUPS.map((group) => (
            <div key={group.label} className="flex items-start" style={{ gap: s(8) }}>
              {/* 直排標籤 */}
              <span
                className="flex-shrink-0 font-bold text-white tracking-[0.15em]"
                style={{ writingMode: "vertical-rl", fontSize: s(24) }}
              >
                {group.label}
              </span>
              {/* 日期組 */}
              <div className="flex items-center">
                {group.dates.map((d, i) => (
                  <div key={i} className="flex items-center">
                    {i > 0 && (
                      <div
                        className="bg-white/60"
                        style={{ width: s(48), height: '1px', marginInline: s(12) }}
                      />
                    )}
                    <div className="flex flex-col items-start">
                      <span
                        className="font-mono font-bold leading-none text-white"
                        style={{ fontSize: s(44) }}
                      >
                        {d.date}
                      </span>
                      <div className="flex items-center" style={{ marginTop: s(6) }}>
                        <span className="text-white" style={{ fontSize: s(24) }}>
                          {d.location}
                        </span>
                        {i < group.dates.length - 1 && (
                          <span
                            className="text-white/60"
                            style={{ fontSize: s(24), marginInline: s(12) }}
                          >
                            {group.separator}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SCROLL CARDS / 作品展示 SECTION ===== */}
      <ScrollCards projects={PROJECTS} />

      {/* ===== ABOUT / 主視覺 SECTION ===== */}
      <section className="relative h-screen overflow-hidden bg-[#f0f0ea]">
        <div className="mx-auto flex h-full max-w-[1920px] flex-row">
          {/* 左側 - 主視覺圖 */}
          <div className="relative flex w-auto flex-shrink-0 items-end justify-start">
            <img
              src="/主視覺網頁用去背 1.png"
              alt="神經元主視覺"
              draggable={false}
              className="relative z-10 h-full w-auto object-contain object-bottom"
            />
          </div>

          {/* 右側 - 文字內容 */}
          <div
            className="relative flex-1 flex-col justify-center overflow-hidden"
            style={{ paddingTop: s(300), paddingRight: s(32) }}
          >
            {/* 標題區塊 */}
            <div className="flex items-start justify-end  pr-[10%]" style={{ gap: s(20) }}>
              {/* 神經元 L型排列 */}
              <div className="flex flex-shrink-0 flex-col">
                <div className="flex" style={{ gap: s(4) }}>
                  <img src="/神.png" alt="神" draggable={false} style={{ height: s(144), width: "auto" }} />
                  <img src="/經.png" alt="經" draggable={false} style={{ height: s(144), width: "auto" }} />
                </div>
                <div className="flex justify-end" style={{ marginTop: s(32) }}>
                  <img src="/元.png" alt="元" draggable={false} style={{ height: s(144), width: "auto" }} />
                </div>
              </div>

              {/* 右側直排文字群 */}
              <div className="flex" style={{ gap: s(12), paddingTop: s(4) }}>
                {/* 英文直排 */}
                <div
                  className="leading-tight text-neutral-400"
                  style={{ writingMode: "vertical-rl", fontSize: s(20) }}
                >
                  <p>Degree Show 2026</p>
                  <p>Dept. of Information Communication,</p>
                  <p>Yuan Ze University</p>
                </div>
                {/* 29 + (屆·畢業展 | 元智大學資訊傳播學系) */}
                <div className="flex flex-col">
                  {/* 29 */}
                  <span
                    className="font-bold leading-none text-neutral-800"
                    style={{ fontSize: s(60) }}
                  >
                    29
                  </span>
                  {/* 屆·畢業展 和 元智大學資訊傳播學系 並排 */}
                  <div className="flex" style={{ gap: s(24), marginInline: `calc(-1 * ${s(16)})` }}>
                    <div
                      className="font-bold leading-[1.6] text-neutral-800"
                      style={{ writingMode: "vertical-lr", width: "1.2em", fontSize: s(48) }}
                    >
                      屆 · 畢業展
                    </div>
                    <div
                      className="leading-[1.8] tracking-[0.15em] text-neutral-400"
                      style={{ writingMode: "vertical-rl", width: "0.9em", fontSize: s(20) }}
                    >
                      元智大學資訊傳播學系
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 說明文字 */}
            <div className="text-right pr-[10%]" style={{ marginTop: s(64) }}>
              {DESCRIPTION_LINES.map((line, i) =>
                line === "" ? (
                  <br key={i} />
                ) : (
                  <p
                    key={i}
                    className="leading-loose text-neutral-800"
                    style={{ fontSize: s(16) }}
                  >
                    {line}
                  </p>
                )
              )}
            </div>
          </div>
        </div>

      </section>

      {/* ===== ORGANIZERS SECTION ===== */}
      <section className="relative overflow-hidden bg-dark px-6 py-24 lg:px-16">
        {/* 裝飾圖片 - 右側 */}
        <img
          src="/Group.png"
          alt=""
          aria-hidden="true"
          draggable={false}
          className="pointer-events-none absolute -right-[5%] top-[-30%] h-full w-auto max-w-[40%] select-none object-contain opacity-80"
        />

        <div className="relative z-10 mx-auto max-w-[1000px]">
          {/* 主辦單位 & 執行單位 */}
          <div className="grid grid-cols-1  sm:grid-cols-2">
            <div>
              <h3 className="text-center text-lg tracking-widest text-foreground/70">
                主辦單位
              </h3>
              <div className="mt-8 flex items-center justify-center gap-8">
                {/* 放置主辦單位 Logo */}
              </div>
            </div>
            <div>
              <h3 className="text-center text-lg tracking-widest text-foreground/70">
                執行單位
              </h3>
              <div className="mt-8 flex items-center justify-center gap-8">
                {/* 放置執行單位 Logo */}
              </div>
            </div>
          </div>

          {/* 指導單位 */}
          <div className="mt-24">
            <h3 className="text-center text-lg tracking-widest text-foreground/70">
              指導單位
            </h3>
            <div className="mt-8 flex items-center justify-center gap-8">
              {/* 放置指導單位 Logo */}
            </div>
          </div>

          {/* 贊助單位 */}
          <div className="mt-24">
            <h3 className="text-center text-lg tracking-widest text-foreground/70">
              贊助單位
            </h3>
            <div className="mt-8 flex items-center justify-center gap-8">
              {/* 放置贊助單位 Logo */}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer id="contact" className="relative overflow-hidden pt-16">
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
    </div>
  );
}
