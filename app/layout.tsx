import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Load Noto Sans KR with a wider range of weights for design flexibility
const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SSMHR [선한이웃] | Premium HR Solution",
  description: "기업과 사회의 가치를 높이는 선한이웃입니다. 진실되고 실질적인 HR 솔루션을 제공합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body
        // Added tracking-tight which is crucial for Korean fonts to look modern and professional
        className={`${notoSansKr.className} tracking-tight antialiased bg-white text-slate-900 flex flex-col min-h-screen selection:bg-brand-navy selection:text-white`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
