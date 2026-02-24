const SOCIAL_LINKS = [
  { name: "INSTAGRAM", href: "#" },
  { name: "THREADS", href: "#" },
  { name: "LINE", href: "#" },
];

const CATEGORIES = [
  {
    id: "all",
    label: "全部",
    count: 19,
  },
  {
    id: "interactive",
    label: "互動",
    count: 9,
  },
  {
    id: "media",
    label: "影視",
    count: 2,
  },
  {
    id: "game",
    label: "遊戲",
    count: 7,
  },
  {
    id: "marketing",
    label: "行銷",
    count: 1,
  },
];

const CATEGORY_CARDS = [
  {
    id: "interactive",
    enName: "DIGITAL EXPERIENCE",
    zhName: "互動",
    enSize: 48,
    textColor: "rgb(99,149,149)",
    bgStyle: "linear-gradient(135deg, rgba(220,230,228,0.15) 0%, rgba(99,149,149,0.08) 100%)",
    borderColor: "rgba(99,149,149,0.3)",
    works: [
      "須臾·緩存",
      "異鄉的餐桌",
      "你前面有車",
      "怎麼這樣字",
      "RESeTROOM",
      "爆改人生",
      "觸.zip",
      "隱 yǐn",
      "今速配 Drive-in Love",
    ],
  },
  {
    id: "game",
    enName: "GAME",
    zhName: "遊戲",
    enSize: 60,
    textColor: "rgb(237,239,241)",
    bgStyle: "linear-gradient(135deg, rgba(99,149,149,0.25) 0%, rgba(99,149,149,0.08) 100%)",
    borderColor: "rgba(99,149,149,0.4)",
    works: [
      "聲影審問",
      "奴隸牌",
      "童話深淵",
      "逆衍者",
      "It's MIne",
      "Faraway",
      "無神之國的倪斯",
    ],
  },
  {
    id: "marketing",
    enName: "MARKETING",
    zhName: "行銷",
    enSize: 60,
    textColor: "rgb(237,239,241)",
    bgStyle: "linear-gradient(135deg, rgba(99,149,149,0.25) 0%, rgba(99,149,149,0.08) 100%)",
    borderColor: "rgba(99,149,149,0.4)",
    works: ["NOVUS"],
  },
  {
    id: "media",
    enName: "MEDIA",
    zhName: "影視",
    enSize: 60,
    textColor: "rgb(99,149,149)",
    bgStyle: "linear-gradient(135deg, rgba(220,230,228,0.15) 0%, rgba(99,149,149,0.08) 100%)",
    borderColor: "rgba(99,149,149,0.3)",
    works: ["青蛙下蛋", "是女兒，也是接班人"],
  },
];

export default function WorksPage() {
  return (
    <div className="min-h-screen bg-dark text-foreground">
      {/* ===== NAVBAR ===== */}
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
            <a
              href="/info"
              className="font-mono text-sm tracking-wider text-foreground/80 transition-colors hover:text-white"
            >
              資訊
            </a>
            <a
              href="/works"
              className="font-mono text-sm tracking-wider text-white transition-colors hover:text-white"
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
          <button className="ml-auto flex flex-col gap-1.5 md:hidden" aria-label="選單">
            <span className="block h-0.5 w-6 bg-foreground" />
            <span className="block h-0.5 w-6 bg-foreground" />
          </button>
        </div>
      </nav>

      {/* ===== 裝飾圖 ===== */}
      <img
        src="/Group.png"
        alt=""
        aria-hidden="true"
        draggable={false}
        className="pointer-events-none absolute right-[20%] top-[0] z-0 w-[35%] max-w-[450px] select-none "
      />
      <img
        src="/Group4.png"
        alt=""
        aria-hidden="true"
        draggable={false}
        className="pointer-events-none absolute right-[14%] top-[20%] z-0 w-[20%] max-w-[500px] select-none "
      />
     <img
        src="/Group.png"
        alt=""
        aria-hidden="true"
        draggable={false}
        className="pointer-events-none absolute left-[0%] top-[180%] z-0 w-[35%] max-w-[500px] select-none "
      />

      {/* ===== MAIN CONTENT ===== */}
      <main className="relative z-10 mx-auto max-w-[1920px] px-6 pt-[304px] pb-[500px] lg:px-16">
        {/* 頁面標題 */}
        <h1
          className="mb-16"
          style={{
            fontSize: "clamp(36px, 3.125vw, 60px)",
            color: "rgb(99,149,149)",
          }}
        >
          作品介紹
        </h1>

        {/* 左篩選 + 右卡片 */}
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* 左側分類篩選 */}
          <aside className="flex-shrink-0 lg:w-[500px]">
            <ul className="flex flex-row flex-wrap gap-6 lg:flex-col lg:gap-0">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <span
                    className="block cursor-default transition-colors hover:text-white"
                    style={{
                      fontSize: "clamp(18px, 1.25vw, 24px)",
                      color: "rgb(237,239,241)",
                      fontFamily: "Arial, sans-serif",
                      lineHeight: "100px",
                    }}
                  >
                    {cat.label}({cat.count})
                  </span>
                </li>
              ))}
            </ul>
          </aside>

          {/* 右側內容 */}
          <section className="flex-1 mt-[160px]">
            {/* 2×2 卡片格 */}
            <div className="grid grid-cols-1 gap-[60px] sm:grid-cols-2">
              {CATEGORY_CARDS.map((card) => (
                <div key={card.id}>
                  {/* 卡片主體 */}
                  <div
                    className="relative flex flex-col justify-center overflow-hidden rounded-sm px-8 py-6"
                    style={{
                      width: "100%",
                      aspectRatio: "480 / 279",
                      background: card.bgStyle,
                      border: `1px solid ${card.borderColor}`,
                    }}
                  >
                    {/* 英文分類名 */}
                    <span
                      className="font-bold leading-tight"
                      style={{
                        fontSize: `clamp(${card.enSize * 0.5}px, ${card.enSize / 19.2}vw, ${card.enSize}px)`,
                        color: card.textColor,
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      {card.enName}
                    </span>
                    {/* 中文分類名 */}
                    <span
                      className="mt-1"
                      style={{
                        fontSize: "clamp(24px, 2.08vw, 40px)",
                        color: card.textColor,
                      }}
                    >
                      {card.zhName}
                    </span>
                  </div>

                  {/* 卡片下方作品列表 */}
                  <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 pb-8">
                    {card.works.map((work) => (
                      <span
                        key={work}
                        className="text-white"
                        style={{
                          fontSize: "clamp(14px, 1.25vw, 24px)",
                        }}
                      >
                        {work}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="relative z-10 overflow-hidden pt-16">
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
