import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "機能別伴走支援",
  description:
    "月額5万円〜。広告運用・CRM・販促企画など、必要な領域だけ小さく始められるモジュール型EC運営支援。",
};

const items = [
  { title: "広告運用", text: "RPP広告、クーポンアドバンス、TDA広告など、モール内広告の運用と改善を支援します。" },
  { title: "CRM", text: "メルマガ・LINE・リピート施策など、既存顧客との関係構築を設計・運用します。" },
  { title: "販促企画", text: "セール・イベント・季節企画など、販促施策の企画立案と実行を支援します。" },
  { title: "商品登録運用", text: "商品ページの作成・更新・最適化を代行し、登録ルールを標準化します。" },
  { title: "クリエイティブ運用", text: "バナー・サムネイル・特集ページなど、販促クリエイティブの制作・運用を支援します。" },
  { title: "レポート設計", text: "売上・広告・アクセスデータのレポートフォーマットを設計し、運用ルールを整備します。" },
  { title: "ナレッジ整理", text: "施策履歴・判断基準・改善記録など、社内ナレッジの整理と蓄積の仕組みをつくります。" },
  { title: "SOP整備", text: "業務手順書・チェックリスト・マニュアルを作成し、運営の標準化を支援します。" },
  { title: "会議設計", text: "定例会議のアジェンダ設計・進行ルール・議事録フォーマットを整備します。" },
];

const fitItems = [
  "課題が特定の領域に集中しており、全体を任せる必要はない",
  "まず小さく始めて、効果を確認してから拡張したい",
  "社内に担当者はいるが、特定業務の知見やリソースが不足している",
  "運用代行やコンサルティングの前に、まず一部分だけ試してみたい",
];

export default function ModulePage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm font-bold tracking-widest text-accent uppercase">SERVICE</p>
          <h1 className="mt-4 text-xl md:text-2xl font-bold">ナレッジブリッジ 機能別伴走支援</h1>
          <div className="mt-4">
            <span className="text-2xl font-bold text-accent">月額5万円〜</span>
            <span className="text-gray-300 ml-1">（税別）</span>
          </div>
          <p className="mt-4 text-gray-300 text-lg">必要な領域だけ、小さく始められるモジュール型</p>
        </div>
      </section>

      {/* Value */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold">必要な機能だけ、スモールスタート。</h2>
          <p className="mt-6 text-gray-600 leading-relaxed">
            すべてを一括で任せる必要はありません。課題が明確な領域だけ、ピンポイントで支援します。
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            「広告運用だけ相談したい」「レポート設計だけ整えたい」「SOPの整備を手伝ってほしい」。
            そうした具体的なニーズに対して、必要な領域だけを選んで始められるモジュール型の支援です。
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            まず小さく始めて、必要に応じてプランを拡張することもできます。
          </p>
        </div>
      </section>

      {/* Items */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-center">対応可能な支援領域</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fit */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold">こんな企業に向いています</h2>
          <ul className="mt-8 space-y-4">
            {fitItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <span className="text-accent font-bold mt-0.5">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Other Plans */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-xl font-bold text-navy-900">段階的な拡張も可能です</h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            機能別伴走支援からスタートし、必要に応じて運用代行やコンサルティングへ拡張することもできます。
            御社の状況やフェーズに合わせて、最適な支援の形をご提案します。
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link
              href="/service/operation"
              className="border-2 border-accent text-accent font-medium px-6 py-2.5 rounded-lg hover:bg-accent hover:text-white transition-colors text-center"
            >
              運用代行プランを見る
            </Link>
            <Link
              href="/service/consulting"
              className="border-2 border-accent text-accent font-medium px-6 py-2.5 rounded-lg hover:bg-accent hover:text-white transition-colors text-center"
            >
              コンサルティングプランを見る
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
