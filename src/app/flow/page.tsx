import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "12ヶ月卒業設計",
  description:
    "可視化→共同運用→移管準備→卒業設計。原則12ヶ月で外部の知見を社内に橋渡しし、担当者が変わっても回る運営体制をつくります。",
};

const phases = [
  {
    label: "Phase 1",
    period: "1〜3ヶ月",
    title: "可視化",
    purpose: "現在の運営状態を見える化し、課題と優先順位を明確にするフェーズです。",
    items: [
      "属人化している業務の特定と整理",
      "KPIの設計とモニタリング体制の構築",
      "課題の洗い出しと優先順位づけ",
      "現状の運営フローの可視化",
      "初期レポートフォーマットの設計",
    ],
  },
  {
    label: "Phase 2",
    period: "4〜6ヶ月",
    title: "共同運用",
    purpose: "可視化した課題をもとに、再現可能な運営の型を整備するフェーズです。",
    items: [
      "施策テンプレートの作成と標準化",
      "判断基準の言語化とドキュメント化",
      "報告フォーマットと会議進行ルールの整備",
      "改善サイクル（PDCA）の運用ルール策定",
      "施策履歴・ナレッジの蓄積運用の開始",
    ],
  },
  {
    label: "Phase 3",
    period: "7〜9ヶ月",
    title: "移管準備",
    purpose: "クライアント主導への切り替えを進め、社内で運営できる体制を整えるフェーズです。",
    items: [
      "SOP（業務手順書）の作成と確認",
      "チェックリストの整備と運用テスト",
      "社内担当者への役割移管と責任範囲の明確化",
      "クライアント主導での定例会議運営の実施",
      "想定トラブルへの対応フローの整備",
    ],
  },
  {
    label: "Phase 4",
    period: "10〜12ヶ月",
    title: "卒業設計",
    purpose: "社内で継続できる状態を最終確認し、支援を完了するフェーズです。",
    items: [
      "社内運営の自走状態の最終確認",
      "引き継ぎ資料の最終整備と納品",
      "卒業後の運営チェックリストの作成",
      "残課題の整理と今後のアクションプランの策定",
      "必要に応じたスポット支援・機能別伴走支援への移行設計",
    ],
  },
];

const afterOptions = [
  {
    title: "スポット支援",
    text: "イベント対応やページ改修など、特定のタイミングで必要な支援を単発でご依頼いただけます。",
  },
  {
    title: "機能別伴走支援への移行",
    text: "広告運用やレポート設計など、特定の領域だけ継続的に支援するモジュール型プランへ移行できます。",
  },
  {
    title: "定期レビュー",
    text: "四半期に一度の振り返りミーティングで、運営状態の確認と改善アドバイスを行います。",
  },
];

export default function FlowPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm font-bold tracking-widest text-accent uppercase">FLOW</p>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold">
            原則12ヶ月で、社内に橋渡しする卒業設計
          </h1>
          <p className="mt-6 text-gray-300 leading-relaxed">
            ナレッジブリッジの支援は、依存を前提としていません。
            外部の知見を社内に移管し、担当者が変わっても回り続ける運営体制をつくるために、原則12ヶ月の卒業設計を組み込んでいます。
            支援を長引かせることではなく、社内に残る形をつくることが目的です。
          </p>
        </div>
      </section>

      {/* Phases */}
      {phases.map((phase, i) => (
        <section
          key={phase.label}
          className={`py-20 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-baseline gap-4">
              <span className="text-sm font-bold text-accent uppercase tracking-wider">
                {phase.label}
              </span>
              <span className="text-sm text-gray-400">{phase.period}</span>
            </div>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-navy-900">
              {phase.title}
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">{phase.purpose}</p>
            <ul className="mt-8 space-y-3">
              {phase.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span className="text-accent font-bold mt-0.5">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      {/* After Graduation */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            卒業後も、必要に応じた支援が可能です
          </h2>
          <p className="mt-4 text-gray-600">
            12ヶ月の卒業設計が完了した後も、状況に応じて柔軟にサポートします。
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {afterOptions.map((opt) => (
              <div
                key={opt.title}
                className="border border-gray-200 rounded-xl p-6"
              >
                <h3 className="font-bold text-navy-900">{opt.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {opt.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
