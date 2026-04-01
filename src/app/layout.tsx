import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ナレッジブリッジ｜EC運営の知見を、仕組みごと社内へ移管する",
    template: "%s｜ナレッジブリッジ",
  },
  description:
    "施策履歴・判断基準・KPI・SOPを体系化し、原則12ヶ月で内製化可能な状態をつくるEC運営支援。運用代行・コンサルティング・機能別伴走支援。",
  openGraph: {
    siteName: "ナレッジブリッジ",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.className}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
