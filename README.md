# 神經元 NEURON

元智大學資訊傳播學系 第29屆畢業展 官方網站

## 技術棧

- **Next.js** 16.1.6 (App Router + Turbopack)
- **React** 19.2.3
- **TypeScript** 5.x
- **Tailwind CSS** 4.x
- **Framer Motion** 12.x (scroll-driven 動畫)
- **pnpm** 套件管理

## 開發

```bash
pnpm dev
```

開啟 [http://localhost:3000](http://localhost:3000) 查看。

## 建置

```bash
pnpm build
pnpm start
```

## 專案結構

```
src/
  app/
    layout.tsx        # 根版面 (Inter + Roboto Mono 字體)
    page.tsx          # 首頁
    info/page.tsx     # 展覽資訊頁面 (/info)
    works/page.tsx    # 作品介紹頁面 (/works)
    reserve/page.tsx  # 預約觀展頁面 (/reserve)
    contact/page.tsx  # 聯絡我們頁面 (/contact)
    globals.css       # 全域樣式 + Marquee 動畫
  components/
    NeuronLogo.tsx    # 神經元 SVG Logo
    Marquee.tsx       # 跑馬燈組件
    NeuralNetwork.tsx # 神經網絡視覺圖
    ScrollCards.tsx   # Scroll-driven 作品卡片展示 (Framer Motion)
public/
  assets/             # 設計素材
```

## 頁面

### 首頁 (`/`)

1. **Navbar** — 固定導覽列 (Logo + 資訊/作品/預約/聯絡我們)
2. **Hero** — 跑馬燈文字列 + 展覽日期
3. **作品展示** — Scroll-driven 卡片切換 (Framer Motion useScroll + useTransform)
4. **About / 主視覺** — 神經元 29屆畢業展資訊 + 展覽描述
5. **信用區** — 主辦/執行/指導/贊助單位
6. **Footer** — 社群連結 + 大 Logo

### 展覽資訊頁 (`/info`)

1. **Navbar** — 與首頁共用 (固定頂部)
2. **頁面標題** — "展覽資訊" (60px)
3. **資訊區塊** — 展覽地圖 / 展覽日程 / 交通資訊 (teal 分隔線)
4. **觀展須知** — 10 條觀展規則 + 裝飾性神經元圖片
5. **Footer** — 社群連結 (INSTAGRAM / THREADS / LINE) + 綠色發光大 Logo

### 作品介紹頁 (`/works`)

1. **Navbar** — 與首頁共用 (固定頂部，「作品」高亮)
2. **頁面標題** — "作品介紹" (60px, teal 色)
3. **分類篩選** — 左側分類列表：全部(19) / 互動(9) / 影視(2) / 遊戲(7) / 行銷(1)
4. **作品卡片** — 2×2 卡片格 (互動 DIGITAL EXPERIENCE / 遊戲 GAME / 行銷 MARKETING / 影視 MEDIA)
5. **作品名稱** — 每張卡片下方列出該分類所有作品，2 欄排列
6. **裝飾元素** — 3 組 Group.png 神經元裝飾圖 (半透明背景)
7. **Footer** — 社群連結 (INSTAGRAM / THREADS / LINE) + 綠色發光大 Logo

### 預約觀展頁 (`/reserve`)

1. **Navbar** — 與首頁共用 (固定頂部，「預約」高亮)
2. **頁面標題** — "請選擇觀展場地" (36px, 白色, 置中)
3. **場地卡片** — 校內展 (元智大學 五館/六館, 4/13-4/17) + 校外展 (松山文創園區 二號倉庫, 5/08-5/11)
4. **Footer** — 社群連結 (INSTAGRAM / THREADS / LINE) + 綠色發光大 Logo
5. **裝飾元素** — Group.png 神經元裝飾圖 (右下角, 半透明)

### 聯絡我們頁 (`/contact`)

1. **Navbar** — 與首頁共用 (固定頂部，「聯絡我們」按鈕高亮)
2. **頁面標題** — "contact us" (60px, 白色, 小寫)
3. **意見回饋表單** — Tab 切換 (一般建議/網站問題/合作邀約) + NAME/EMAIL/MESSAGE 欄位 + 送出按鈕
4. **裝飾元素** — 2 組 Group.png 神經元裝飾圖 (半透明背景)
5. **Footer** — 社群連結 (INSTAGRAM / THREADS / LINE) + 綠色發光大 Logo
