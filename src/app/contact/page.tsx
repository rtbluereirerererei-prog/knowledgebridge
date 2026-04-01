"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";

const inquiryTypes = [
  "運用代行について",
  "コンサルティングについて",
  "機能別伴走支援について",
  "その他",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <>
        <section className="pt-32 pb-16 bg-navy-900 text-white">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-sm font-bold tracking-widest text-accent uppercase">CONTACT</p>
            <h1 className="mt-4 text-2xl md:text-3xl font-bold">お問い合わせ・無料相談</h1>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-navy-900">
              お問い合わせありがとうございます。
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              内容を確認の上、2営業日以内に担当者よりご連絡いたします。
              <br />
              しばらくお待ちくださいませ。
            </p>
            <Link
              href="/"
              className="mt-8 inline-block border-2 border-accent text-accent font-medium px-8 py-3 rounded-lg hover:bg-accent hover:text-white transition-colors"
            >
              トップページに戻る
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="pt-32 pb-16 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm font-bold tracking-widest text-accent uppercase">CONTACT</p>
          <h1 className="mt-4 text-2xl md:text-3xl font-bold">お問い合わせ・無料相談</h1>
          <p className="mt-4 text-gray-300">
            ECモール運営に関する課題やお悩みをお聞かせください。
            <br />
            2営業日以内に担当者よりご連絡いたします。
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-bold text-navy-900 mb-2">
                会社名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="例：株式会社サンプル"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-navy-900 mb-2">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="例：山田 太郎"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-navy-900 mb-2">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="例：info@example.co.jp"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-navy-900 mb-2">
                電話番号
              </label>
              <input
                type="tel"
                placeholder="例：03-1234-5678"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-navy-900 mb-2">
                ご相談内容の種類 <span className="text-red-500">*</span>
              </label>
              <select
                required
                defaultValue=""
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              >
                <option value="" disabled>
                  選択してください
                </option>
                {inquiryTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-navy-900 mb-2">
                ご相談内容
              </label>
              <textarea
                rows={5}
                placeholder="現在の課題やご状況をご記入ください。"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-vertical"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                required
                id="privacy"
                className="mt-1 w-4 h-4 accent-accent"
              />
              <label htmlFor="privacy" className="text-sm text-gray-600">
                <Link href="/privacy" className="text-accent underline" target="_blank">
                  プライバシーポリシー
                </Link>
                に同意する
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-accent text-white font-medium py-4 rounded-lg text-lg hover:bg-accent-dark transition-colors"
            >
              送信する
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
