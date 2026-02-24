const SOCIAL_LINKS = [
  { name: "INSTAGRAM", href: "#" },
  { name: "THREADS", href: "#" },
  { name: "LINE", href: "#" },
];

const INFO_SECTIONS = [
  { title: "展覽地圖", subtitle: "校內展、校外展覽地點這裡看" },
  { title: "展覽日程", subtitle: "校內展、展覽日程，不要錯過！" },
  { title: "交通資訊", subtitle: "看展路線怎麼走看這裡" },
];

const EXHIBITION_RULES = [
  "遵循開放時間和指導原則。留意展場開放日期和時間變動，展場關閉後提前離場。",
  "展覽期間不得攜帶食物和飲料進場。",
  "請勿觸碰展品或任何展場設施，除非該展品設計為可互動。若不確定可否互動，請向工作人員確認。",
  "如需拍照或攝影，請確認是否允許。部分展區可能禁止拍攝。拍攝時請勿使用閃光燈，以避免損壞作品。",
  "在展場內請保持安靜，以尊重其他觀展者。請將手機調至靜音或震動模式。",
  "遵循參觀路線和指示。請按照指定路線參觀，不要擅自進入未開放區域。",
  "如有需求請向工作人員求助。如遇任何問題或有特殊需求（如無障礙服務），請隨時聯繫現場工作人員。",
  "兒童需在成人陪同下參觀。兒童在展場內應由成人陪同，並注意安全。",
  "尊重其他觀展者。避免遮擋其他觀展者的視線，保持適當距離。在繁忙時段請配合現場人流管理。",
  "愛護展場環境。請勿在展場內亂丟垃圾，垃圾請丟入指定垃圾桶。如發現任何損壞或異常情況，請立即通報工作人員。",
];

export default function InfoPage() {
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
              className="font-mono text-sm tracking-wider text-white transition-colors hover:text-white"
            >
              資訊
            </a>
            <a
              href="/#works"
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
          <button className="ml-auto flex flex-col gap-1.5 md:hidden" aria-label="選單">
            <span className="block h-0.5 w-6 bg-foreground" />
            <span className="block h-0.5 w-6 bg-foreground" />
          </button>
        </div>
      </nav>

      {/* ===== MAIN CONTENT ===== */}
      <main className="mx-auto max-w-[1920px] px-6 pt-[80px] pb-0 lg:px-16">
        {/* 頁面標題 */}
        <div className="relative">
          <h1
            className="my-[160px] text-white"
            style={{ fontSize: "clamp(36px, 3.125vw, 60px)" }}
          >
            展覽資訊
          </h1>
          <img
            src="/Group3.png"
            alt=""
            aria-hidden="true"
            draggable={false}
            className="absolute right-0 top-[-200%] w-[35%]"
          />
          <img
            src="/Group4.png"
            alt=""
            aria-hidden="true"
            draggable={false}
            className="absolute right-0 top-[60%] w-[20%]"
          />
        </div>

        {/* 三個資訊區塊 */}
        <div className="flex flex-col" style={{ gap: "30px" }}>
          {INFO_SECTIONS.map((section, idx) => (
            <div key={section.title}>
              {/* 分隔線 */}
              {idx === 0 && (
                <div
                  className="mb-[30px] h-px w-full max-w-[1723px] "
                  style={{ backgroundColor: "rgb(99,149,149)" }}
                />
              )}
              <div className="py-[24px]"  style={{ paddingInline: "clamp(10px, 8.333vw, 60px)" }}>
                <h2
                  className="font-bold text-white "
                  style={{ fontSize: "clamp(24px, 1.875vw, 36px)" }}
                >
                  {section.title}
                </h2>
                <p
                  className="mt-[34px]"
                  style={{
                    fontSize: "clamp(16px, 1.25vw, 24px)",
                    color: "rgb(237,239,241)",
                  }}
                >
                  {section.subtitle}
                </p>
              </div>
              {/* 下方分隔線 */}
              <div
                className="mt-[30px] h-px w-full max-w-[1723px]"
                style={{ backgroundColor: "rgb(99,149,149)" }}
              />
                 <div
                className="mt-[30px] h-px w-full max-w-[1723px]"
                style={{ backgroundColor: "rgb(99,149,149)" }}
              />
            </div>
          ))}
        </div>

        {/* ===== 觀展須知區塊 ===== */}
        <section className="relative my-20 max-w-[1579px] px-[60px]">
          <h3
            className="mb-8 text-white"
            style={{ fontSize: "clamp(18px, 1.25vw, 24px)" }}
          >
            很重要！觀展注意事項一次看清
          </h3>

          <div className="relative flex flex-col gap-6 lg:flex-row">
            {/* 左側規則列表 */}
            <ol className="flex-1 space-y-4 lg:pr-16">
              {EXHIBITION_RULES.map((rule, idx) => (
                <li
                  key={idx}
                  className="flex gap-3 leading-relaxed"
                  style={{
                    fontSize: "clamp(14px, 1.25vw, 24px)",
                    color: "rgb(237,239,241)",
                  }}
                >
                  <span className="flex-shrink-0 tabular-nums">
                    {idx + 1}.
                  </span>
                  <span>{rule}</span>
                </li>
              ))}
            </ol>

 
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="relative overflow-hidden pt-16">
           <img
            src="/Group.png"
            alt=""
            aria-hidden="true"
            draggable={false}
            className="absolute left-[-8%] top-[0] w-[35%] opacity-40"
          />
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
