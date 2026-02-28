import { notFound } from "next/navigation";
import HeroCarousel from "@/components/HeroCarousel";

/* ─────────────────────── 作品資料 ─────────────────────── */

interface Project {
  slug: string;
  title: string;
  englishName: string;
  categoryId: string;
  members: string[];
  description: string;
  /** 預設使用 placeholder，之後替換為真實圖片 */
  heroImage: string;
  galleryImages: string[];
}

const CATEGORIES: Record<
  string,
  { zh: string; en: string; color: string }
> = {
  interactive: {
    zh: "互動",
    en: "DIGITAL\nEXCIPERENCE",
    color: "rgb(99,149,149)",
  },
  game: {
    zh: "遊戲",
    en: "GAME",
    color: "rgb(237,239,241)",
  },
  marketing: {
    zh: "行銷",
    en: "MARKETING",
    color: "rgb(237,239,241)",
  },
  media: {
    zh: "影視",
    en: "MEDIA",
    color: "rgb(99,149,149)",
  },
};

const PROJECTS: Project[] = [
  // ── 互動 ──
  {
    slug: "xu-yu-huan-cun",
    title: "須臾 · 緩存",
    englishName: "Resonate Collective",
    categoryId: "interactive",
    members: ["莊菀萍、周芷舲、洪嘉駿", "江語檬、張家毓、陳思佑"],
    description:
      "在被不斷記錄與保存的時代，我們留下了太多痕跡，卻很少真正停下來問自己：「我真正想被留下的是什麼？」\n《須臾・緩存》從這個提問出發，嘗試引導觀者以不同的角度重新面對生命的倒數，邀請觀者透過行動與感官，親身感受存在的重量。每一次觸碰、移動與選擇，都是對自身價值的回應；而在體驗的尾聲，你將面對是否留下這一刻的決定。\n我們試圖在生成與消逝之間，創造一個緩慢而溫柔的空間，將其視為一次重新定義存在痕跡的機會，與自己展開對話。讓人在沒有標準答案的狀態下，重新思考是否被記得以及重新找回留下與否的主動權。",
    heroImage: "",
    galleryImages: [],
  },
  {
    slug: "yi-xiang-de-can-zhuo",
    title: "異鄉的餐桌",
    englishName: "A Table Far From Home",
    categoryId: "interactive",
    members: ["組員資料待補"],
    description: "作品介紹待補。",
    heroImage: "",
    galleryImages: [],
  },
  {
    slug: "ni-qian-mian-you-che",
    title: "你前面有車",
    englishName: "Car Ahead",
    categoryId: "interactive",
    members: ["組員資料待補"],
    description: "作品介紹待補。",
    heroImage: "",
    galleryImages: [],
  },
  {
    slug: "zen-me-zhe-yang-zi",
    title: "怎麼這樣字",
    englishName: "What A Word",
    categoryId: "interactive",
    members: ["組員資料待補"],
    description: "作品介紹待補。",
    heroImage: "",
    galleryImages: [],
  },
  {
    slug: "resetroom",
    title: "RESeTROOM",
    englishName: "RESeTROOM",
    categoryId: "interactive",
    members: ["組員資料待補"],
    description: "作品介紹待補。",
    heroImage: "",
    galleryImages: [],
  },
  {
    slug: "bao-gai-ren-sheng",
    title: "爆改人生",
    englishName: "Life Makeover",
    categoryId: "interactive",
    members: ["組員資料待補"],
    description: "作品介紹待補。",
    heroImage: "",
    galleryImages: [],
  },
  {
    slug: "chu-zip",
    title: "觸.zip",
    englishName: "Touch.zip",
    categoryId: "interactive",
    members: ["組員資料待補"],
    description: "作品介紹待補。",
    heroImage: "",
    galleryImages: [],
  },
  {
    slug: "yin",
    title: "隱 yǐn",
    englishName: "Hidden",
    categoryId: "interactive",
    members: ["組員資料待補"],
    description: "作品介紹待補。",
    heroImage: "",
    galleryImages: [],
  },
  {
    slug: "jin-su-pei",
    title: "今速配 Drive-in Love",
    englishName: "Drive-in Love",
    categoryId: "interactive",
    members: ["組員資料待補"],
    description: "作品介紹待補。",
    heroImage: "",
    galleryImages: [],
  },
  // ── 遊戲 ──
  {
    slug: "sheng-ying-shen-wen",
    title: "聲影審問",
    englishName: "Shadow Interrogation",
    categoryId: "game",
    members: ["組員資料待補"],
    description: "作品介紹待補。",
    heroImage: "",
    galleryImages: [],
  },
  {
    slug: "nu-li-pai",
    title: "奴隸牌",
    englishName: "Slave Card",
    categoryId: "game",
    members: ["組員資料待補"],
    description: "作品介紹待補。",
    heroImage: "",
    galleryImages: [],
  },
  {
    slug: "tong-hua-shen-yuan",
    title: "童話深淵",
    englishName: "Fairy Tale Abyss",
    categoryId: "game",
    members: ["組員資料待補"],
    description: "作品介紹待補。",
    heroImage: "",
    galleryImages: [],
  },
  {
    slug: "ni-yan-zhe",
    title: "逆衍者",
    englishName: "Reverser",
    categoryId: "game",
    members: ["組員資料待補"],
    description: "作品介紹待補。",
    heroImage: "",
    galleryImages: [],
  },
  {
    slug: "its-mine",
    title: "It's MIne",
    englishName: "It's Mine",
    categoryId: "game",
    members: ["組員資料待補"],
    description: "作品介紹待補。",
    heroImage: "",
    galleryImages: [],
  },
  {
    slug: "faraway",
    title: "Faraway",
    englishName: "Faraway",
    categoryId: "game",
    members: ["組員資料待補"],
    description: "作品介紹待補。",
    heroImage: "",
    galleryImages: [],
  },
  {
    slug: "wu-shen-zhi-guo",
    title: "無神之國的倪斯",
    englishName: "Godless Nation",
    categoryId: "game",
    members: ["組員資料待補"],
    description: "作品介紹待補。",
    heroImage: "",
    galleryImages: [],
  },
  // ── 行銷 ──
  {
    slug: "novus",
    title: "NOVUS",
    englishName: "NOVUS",
    categoryId: "marketing",
    members: ["組員資料待補"],
    description: "作品介紹待補。",
    heroImage: "",
    galleryImages: [],
  },
  // ── 影視 ──
  {
    slug: "qing-wa-xia-dan",
    title: "青蛙下蛋",
    englishName: "Frog Eggs",
    categoryId: "media",
    members: ["組員資料待補"],
    description: "作品介紹待補。",
    heroImage: "",
    galleryImages: [],
  },
  {
    slug: "shi-nv-er",
    title: "是女兒，也是接班人",
    englishName: "Daughter and Successor",
    categoryId: "media",
    members: ["組員資料待補"],
    description: "作品介紹待補。",
    heroImage: "",
    galleryImages: [],
  },
];

const SOCIAL_LINKS = [
  { name: "INSTAGRAM", href: "#" },
  { name: "THREADS", href: "#" },
  { name: "LINE", href: "#" },
];

/* ─────────────────────── helpers ─────────────────────── */

function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

/* ─────────────────────── static params ─────────────────────── */

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then((p) => {
    const project = getProject(p.slug);
    return {
      title: project
        ? `${project.title} | 神經元 NEURON`
        : "作品 | 神經元 NEURON",
    };
  });
}

/* ─────────────────────── page ─────────────────────── */

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const category = CATEGORIES[project.categoryId];
  /** placeholder 色塊 (之後替換為真實圖片) */
  const heroPlaceholder = project.heroImage || "";
  const galleryCount = project.galleryImages.length || 5;
  const galleryImages =
    project.galleryImages.length > 0
      ? project.galleryImages
      : Array.from({ length: galleryCount }, () => "");

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
          <button
            className="ml-auto flex flex-col gap-1.5 md:hidden"
            aria-label="選單"
          >
            <span className="block h-0.5 w-6 bg-foreground" />
            <span className="block h-0.5 w-6 bg-foreground" />
          </button>
        </div>
      </nav>

      {/* ===== 裝飾神經元圖片 ===== */}
      <img
        src="/Group.png"
        alt=""
        aria-hidden="true"
        draggable={false}
        className="pointer-events-none absolute right-[20%] top-[-10%] z-0 w-[40%] max-w-[800px] select-none opacity-60"
      />
      <img
        src="/Group4.png"
        alt=""
        aria-hidden="true"
        draggable={false}
        className="pointer-events-none absolute right-[10%] top-[25%] z-0 w-[25%] max-w-[500px] select-none opacity-60"
      />
      <img
        src="/Group.png"
        alt=""
        aria-hidden="true"
        draggable={false}
        className="pointer-events-none absolute left-[-8%] top-[120%] z-0 w-[25%] max-w-[800px] select-none "
      />

      {/* ===== CATEGORY HEADER ===== */}
      <section className="relative z-10 mx-auto max-w-[1920px] px-6 pt-[374px] lg:px-16">
        <div className="flex items-start justify-between">
          {/* 左：中文分類名 */}
          <span
            className="font-bold"
            style={{
              fontSize: "clamp(36px, 3.125vw, 60px)",
              color: category.color,
            }}
          >
            {category.zh}
          </span>
          {/* 右：英文分類名 */}
          <span
            className="text-right font-bold leading-tight"
            style={{
              fontSize: "clamp(36px, 3.125vw, 60px)",
              color: category.color,
              fontFamily: "Arial, sans-serif",
              whiteSpace: "pre-line",
            }}
          >
            {category.en}
          </span>
        </div>
      </section>

      {/* ===== HERO 圖片輪播區 ===== */}
      <HeroCarousel
        title={project.title}
        categoryLabel={category.zh}
        images={[heroPlaceholder, ...galleryImages]}
      />

      {/* ===== 作品詳細資訊 ===== */}
      <main className="relative z-10 mx-auto max-w-[1920px] px-6 lg:px-16 mb-[360px] w-full">
        <div className="flex gap-[30px] items-start ">
          {/* teal 裝飾線 */}
          <div
            style={{
              width: "15px",
              height: "90px",
              backgroundColor: "rgb(99,149,149)",
            }}
          />

          {/* 作品資訊區 */}
          <div className="w-full">
            {/* 作品標題 */}
            <h1
              className="font-bold"
              style={{
                fontSize: "clamp(36px, 3.125vw, 60px)",
                color: "rgb(237,239,241)",
              }}
            >
              {project.title}
            </h1>

            {/* 英文組名 */}
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

            {/* 組員名單 */}
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

            {/* 作品描述 */}
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

            {/* 前往預約 按鈕 */}
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

        {/* ===== 作品圖片展示 ===== */}
        <section className="mx-auto mt-20 flex max-w-[1526px] flex-col gap-[60px]">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="w-full overflow-hidden rounded-sm"
              style={{ aspectRatio: "1526 / 905" }}
            >
              {img ? (
                <img
                  src={img}
                  alt={`${project.title} - ${idx + 1}`}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-white text-lg text-neutral-400">
                  作品圖片 {idx + 1}
                </div>
              )}
            </div>
          ))}
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="relative z-10 overflow-hidden pt-16">
        <div className="space-y-16 px-6 lg:px-16">
          {SOCIAL_LINKS.map((link) => (
            <a key={link.name} href={link.href} className="block">
              <span
                className="block text-[24px] tracking-[0.15em] text-foreground/90 transition-colors hover:text-white"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                {link.name}
              </span>
            </a>
          ))}
        </div>

        <div className="relative">
          <div
            style={{
              filter:
                "drop-shadow(0px 0px 57px rgba(107, 183, 140, 0.55))",
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
