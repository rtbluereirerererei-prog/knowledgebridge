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
    default: "ナレッジブリッジ｜任せながら、ノウハウを社内に残すEC運営支援",
    template: "%s｜ナレッジブリッジ",
  },
  description:
    "ECモール運営を支えながら、施策履歴・判断基準・運営ルールを社内へ橋渡し。原則12ヶ月で続く運営体制をつくるEC運営支援サービスです。",
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
