import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "神經元 NEURON | 元智大學資訊傳播學系 第29屆畢業展",
  description:
    "神經元 NEURON — 2026 元智大學資訊傳播學系第29屆畢業展。感性與理性的共融，編織思考與創意的網絡。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
