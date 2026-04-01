"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/#services", label: "サービス" },
  { href: "/flow", label: "導入の流れ" },
  { href: "/company", label: "会社概要" },
  { href: "/contact", label: "お問い合わせ" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="ナレッジブリッジ"
            width={280}
            height={56}
            className="h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-gray-600 hover:text-navy-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-accent text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-accent-dark transition-colors"
          >
            無料相談はこちら
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニューを開く"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-navy-900 transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 bg-navy-900 transition-opacity ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 bg-navy-900 transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 px-4 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-gray-600 hover:text-navy-900"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-accent text-white text-sm font-medium px-5 py-2.5 rounded-lg text-center hover:bg-accent-dark transition-colors"
            onClick={() => setIsOpen(false)}
          >
            無料相談はこちら
          </Link>
        </nav>
      )}
    </header>
  );
}
