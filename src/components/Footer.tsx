import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <Image
              src="/logo.png"
              alt="ナレッジブリッジ"
              width={144}
              height={48}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-sm text-gray-400 mt-2">
              EC運営の知見を、仕組みごと社内へ移管する。
            </p>
          </div>
          <nav className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-gray-300">
            <Link href="/#services" className="hover:text-white transition-colors">
              サービス
            </Link>
            <Link href="/flow" className="hover:text-white transition-colors">
              導入の流れ
            </Link>
            <Link href="/company" className="hover:text-white transition-colors">
              会社概要
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              お問い合わせ
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              プライバシーポリシー
            </Link>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-navy-700 text-center text-sm text-gray-400">
          &copy; 2026 ナレッジブリッジ All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
