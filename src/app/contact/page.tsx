"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

const SOCIAL_LINKS = [
  { name: "INSTAGRAM", href: "#" },
  { name: "THREADS", href: "#" },
  { name: "LINE", href: "#" },
];

const TABS = [
  { id: "general", label: "一般建議" },
  { id: "website", label: "網站問題" },
  { id: "collab", label: "合作邀約" },
];

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState("general");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setErrorMsg("請填寫所有欄位");
      return;
    }
    setStatus("sending");
    setErrorMsg("");

    try {
      // TODO: 接入實際 API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "送出失敗，請稍後再試");
    }
  };

  return (
    <div className="min-h-screen bg-dark text-foreground">
      <Navbar activePath="/contact" />

      {/* ===== 裝飾圖 ===== */}
      <img
        src="/Group.png"
        alt=""
        aria-hidden="true"
        draggable={false}
        className="pointer-events-none absolute right-[35%] top-[-10%] z-0 w-[35%] max-w-[800px] select-none "
      />
      <img
        src="/Group5.png"
        alt=""
        aria-hidden="true"
        draggable={false}
        className="pointer-events-none absolute left-[65%] top-[0%] z-0 w-[25%] max-w-[800px] select-none"
      />
      <img
        src="/Group4.png"
        alt=""
        aria-hidden="true"
        draggable={false}
        className="pointer-events-none absolute left-[74%] top-[30%] z-0 w-[25%] max-w-[800px] select-none"
      />
      <img
        src="/Group.png"
        alt=""
        aria-hidden="true"
        draggable={false}
        className="pointer-events-none absolute left-[-15%] top-[140%] z-0 w-[40%] max-w-[800px] select-none "
      />

      {/* ===== MAIN CONTENT ===== */}
      <main className="relative z-10 mx-auto max-w-[1920px] px-6 pt-[417px] pb-24 lg:px-16">
        {/* 頁面標題 */}
        <h1
          className="mb-24 lowercase font-bold"
          style={{
            fontSize: "clamp(36px, 3.125vw, 60px)",
            color: "rgb(237,239,241)",
          }}
        >
          contact <span className="text-[#639595]">us</span>
        </h1>

        {/* 意見回饋表單 */}
        <div className="ml-auto max-w-[800px]">
          <h2
            className="mb-10 text-left font-bold"
            style={{
              fontSize: "clamp(32px, 2.5vw, 48px)",
              color: "rgb(237,239,241)",
            }}
          >
            意見回饋
          </h2>

          {/* Tabs */}
          <div className="mb-12 flex items-center justify-start gap-12">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="transition-colors"
                style={{
                  fontSize: "clamp(16px, 1.25vw, 24px)",
                  color:
                    activeTab === tab.id
                      ? "rgb(99,149,149)"
                      : "rgb(237,239,241)",
                  borderBottom:
                    activeTab === tab.id
                      ? "2px solid rgb(99,149,149)"
                      : "2px solid transparent",
                  paddingBottom: "4px",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* NAME */}
            <div>
              <label
                htmlFor="name"
                className="block font-bold"
                style={{
                  fontSize: "clamp(20px, 1.56vw, 30px)",
                  color: "rgb(100,137,138)",
                }}
              >
                NAME
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-3 w-full border-b bg-transparent pb-3 text-white outline-none transition-colors focus:border-white"
                style={{
                  fontSize: "clamp(16px, 1.25vw, 24px)",
                  borderBottomColor: "rgb(100,137,138)",
                }}
              />
            </div>

            {/* EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="block font-bold"
                style={{
                  fontSize: "clamp(20px, 1.56vw, 30px)",
                  color: "rgb(100,137,138)",
                }}
              >
                EMAIL
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-3 w-full border-b bg-transparent pb-3 text-white outline-none transition-colors focus:border-white"
                style={{
                  fontSize: "clamp(16px, 1.25vw, 24px)",
                  borderBottomColor: "rgb(100,137,138)",
                }}
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label
                htmlFor="message"
                className="block font-bold"
                style={{
                  fontSize: "clamp(20px, 1.56vw, 30px)",
                  color: "rgb(100,137,138)",
                }}
              >
                MESSAGE
              </label>
              <textarea
                id="message"
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="請輸入文字..."
                className="mt-3 w-full resize-none rounded-sm bg-white p-4 text-dark outline-none"
                style={{
                  fontSize: "clamp(16px, 1.25vw, 24px)",
                }}
              />
            </div>

            {/* Error / Success message */}
            {status === "error" && errorMsg && (
              <p className="text-red-400" style={{ fontSize: "16px" }}>
                {errorMsg}
              </p>
            )}
            {status === "sent" && (
              <p style={{ fontSize: "16px", color: "rgb(99,149,149)" }}>
                已成功送出，感謝您的回饋！
              </p>
            )}

            {/* Submit */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-full border border-foreground/30 px-10 py-3 tracking-wider text-white transition-all hover:border-white hover:bg-white hover:text-dark disabled:opacity-50"
                style={{
                  fontSize: "clamp(18px, 1.56vw, 30px)",
                }}
              >
                {status === "sending" ? "送出中..." : "送出"}
              </button>
            </div>
          </form>
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
