import Link from "next/link";
import { CTASection } from "@/components/CTASection";

const challenges = [
  {
    title: "担当者交代のたびに、運営品質がリセットされる",
    text: "前任者の判断基準が文書化されていない。引き継ぎのたびに施策設計をゼロからやり直し、改善の積み上げが止まる。",
  },
  {
    title: "外注先に依存し、社内にナレッジが蓄積されない",
    text: "支援会社が変わるたびに説明コストが発生。施策履歴も判断根拠も外部に閉じたまま、内製化の足がかりがない。",
  },
  {
    title: "内製化を目指したいが、移行設計ができていない",
    text: "「いつか内製化」と考えているが、何を・いつ・どう移管するかのロードマップがなく、外注が長期化している。",
  },
  {
    title: "経営と現場で、KPIの認識が揃っていない",
    text: "経営層が見たい数字と現場が追う指標にずれがある。会議が報告会で終わり、意思決定と改善が進まない。",
  },
];

const approach = [
  {
    num: "01",
    title: "現場を止めない",
    text: "日常業務を確実に回す。売上・施策・イベント対応の実務を支えながら、並行して運営基盤の整備を進めます。",
  },
  {
    num: "02",
    title: "ナレッジを体系化する",
    text: "施策履歴・判断基準・KPI・会議設計・SOPを文書化。担当者が変わっても運営品質が維持できる仕組みをつくります。",
  },
  {
    num: "03",
    title: "社内移管を設計する",
    text: "依存を前提としない支援。段階的に社内主導へ切り替え、外部支援なしで改善サイクルが回る状態をつくります。",
  },
];

const deliverables = [
  {
    title: "施策管理シート",
    text: "実行施策の目的・仮説・結果・次アクションを一元記録。担当者が交代しても、判断の文脈と改善履歴が残る。",
  },
  {
    title: "KPIモニタリング設計",
    text: "売上・ROAS・転換率・LTVなど、事業フェーズに応じた指標を設計。経営と現場が同じ数字で意思決定できる構造をつくる。",
  },
  {
    title: "定例会議フォーマット",
    text: "報告→分析→意思決定→アクション設定の4段階構成。アジェンダ・議事録・タスク管理を標準化する。",
  },
  {
    title: "SOP（業務手順書）",
    text: "日次・週次・月次の業務フローを手順レベルで文書化。チェックリスト付きで属人化を排除する。",
  },
  {
    title: "移管パッケージ",
    text: "判断基準・運用ルール・改善履歴・テンプレート一式を統合納品。卒業後の自走を支える完全ドキュメント。",
  },
];

const services = [
  {
    name: "運用代行",
    price: "月額40万円",
    copy: "実務を担いながら、運営知見を社内へ移管する",
    items: [
      "運営方針整理",
      "イベント対応",
      "施策実行",
      "改善提案",
      "定例会議",
      "月次レポート",
      "施策履歴蓄積",
      "引き継ぎ設計",
    ],
    target: "社内リソースが不足し、まず運営を安定させる必要がある企業向け",
    href: "/service/operation",
  },
  {
    name: "コンサルティング",
    price: "月額20万円",
    copy: "判断力と改善サイクルを社内チームに定着させる",
    items: [
      "戦略設計",
      "現状分析",
      "KPI整理",
      "課題の優先順位化",
      "定例会議支援",
      "判断基準の言語化",
      "運用ルール設計",
    ],
    target: "担当者はいるが、意思決定や改善設計に課題がある企業向け",
    href: "/service/consulting",
  },
  {
    name: "機能別伴走支援",
    price: "月額5万円〜",
    copy: "必要な領域だけ、小さく始められるモジュール型",
    items: [
      "広告運用",
      "CRM",
      "販促企画",
      "商品登録",
      "クリエイティブ",
      "レポート設計",
      "SOP整備",
    ],
    target: "課題が特定領域に集中しており、部分的な支援で十分な企業向け",
    href: "/service/module",
  },
];

const phases = [
  {
    label: "Phase 1",
    period: "1-3ヶ月目",
    title: "可視化",
    text: "属人化業務の特定、KPI設計、課題の優先順位化。現状の運営を構造的に見える化する。",
  },
  {
    label: "Phase 2",
    period: "4-6ヶ月目",
    title: "型の整備",
    text: "テンプレート・判断基準・報告フォーマットを標準化。再現可能な運営の型をつくる。",
  },
  {
    label: "Phase 3",
    period: "7-9ヶ月目",
    title: "移管準備",
    text: "SOP作成、社内担当への役割移管、クライアント主導の定例運営を開始する。",
  },
  {
    label: "Phase 4",
    period: "10-12ヶ月目",
    title: "卒業・移管完了",
    text: "社内自走状態の最終確認、引き継ぎ資料の納品。支援を完了する。",
  },
];

const fitList = [
  "担当者の異動・退職のたびに、運営品質が不安定になっている",
  "外注先を変えるたびに、ゼロから説明し直している",
  "内製化を目指しているが、移行の道筋が見えていない",
  "経営層と現場で、KPI・優先順位の認識がずれている",
  "属人化した業務が多く、組織変更のたびに混乱が起きる",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 pt-36 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            EC Operations Consulting
          </p>
          <h1 className="mt-6 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white">
            EC運営の知見を、
            <br />
            仕組みごと社内へ移管する。
          </h1>
          <p className="mt-6 text-gray-400 leading-relaxed max-w-2xl text-base md:text-lg">
            施策履歴・判断基準・KPI・SOP——属人化した運営ノウハウを体系化し、
            <br className="hidden md:inline" />
            原則12ヶ月で内製化可能な状態をつくるEC運営支援です。
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-block bg-accent text-white font-medium px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors text-center"
            >
              無料相談を申し込む
            </Link>
            <Link
              href="/flow"
              className="inline-block border border-gray-500 text-gray-300 font-medium px-8 py-4 rounded-lg hover:border-gray-300 hover:text-white transition-colors text-center"
            >
              導入の流れを見る
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            初回30分・オンライン対応・2営業日以内にご連絡
          </p>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Problem
          </p>
          <h2 className="mt-4 text-xl md:text-2xl font-bold">
            EC運営に、こうした構造課題はありませんか。
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-8">
            {challenges.map((c) => (
              <div key={c.title} className="flex gap-4">
                <div className="w-1 shrink-0 rounded-full bg-accent/30" />
                <div>
                  <h3 className="font-bold text-navy-900">{c.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {c.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Approach
          </p>
          <h2 className="mt-4 text-xl md:text-2xl font-bold">
            代行して終わらない。アドバイスして終わらない。
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl leading-relaxed">
            ナレッジブリッジは「任せながら、社内に残す」支援です。
            実務を支えながら、運営知見を体系化し、社内移管まで設計します。
          </p>
          <div className="mt-14 grid md:grid-cols-3 gap-10">
            {approach.map((a) => (
              <div key={a.num}>
                <span className="text-3xl font-bold text-accent/70">
                  {a.num}
                </span>
                <h3 className="mt-3 text-lg font-bold text-navy-900">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {a.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology / Deliverables */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Methodology
          </p>
          <h2 className="mt-4 text-xl md:text-2xl font-bold">
            支援の過程で、社内に残る成果物。
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl leading-relaxed">
            施策実行だけでなく、再現可能な運営基盤の構築を含みます。
            以下は支援を通じて整備・納品する主な成果物です。
          </p>
          <div className="mt-12 divide-y divide-gray-200">
            {deliverables.map((d, i) => (
              <div
                key={d.title}
                className="flex gap-6 items-start py-6 first:pt-0"
              >
                <span className="text-sm font-bold text-accent/50 mt-0.5 w-6 shrink-0 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-bold text-navy-900">{d.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {d.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Lineup */}
      <section id="services" className="py-24 scroll-mt-16">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Service
          </p>
          <h2 className="mt-4 text-xl md:text-2xl font-bold">
            課題とフェーズに合わせた、3つの支援プラン。
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.name}
                className="border border-gray-200 rounded-xl p-8 flex flex-col hover:border-gray-300 transition-colors"
              >
                <p className="text-sm text-gray-500">{s.copy}</p>
                <h3 className="mt-2 text-lg font-bold text-navy-900">
                  {s.name}
                </h3>
                <div className="mt-3">
                  <span className="text-2xl font-bold text-navy-900">
                    {s.price}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">（税別）</span>
                </div>
                <ul className="mt-6 space-y-2 flex-1">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs text-gray-500">{s.target}</p>
                <Link
                  href={s.href}
                  className="mt-4 block text-center text-sm font-medium text-accent border border-accent py-2.5 rounded-lg hover:bg-accent hover:text-white transition-colors"
                >
                  詳しく見る
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Flow
          </p>
          <h2 className="mt-4 text-xl md:text-2xl font-bold">
            原則12ヶ月で、社内移管を完了する。
          </h2>
          <p className="mt-4 text-gray-600">
            可視化→型の整備→移管準備→卒業設計。段階的に社内主導へ切り替えます。
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((p, i) => (
              <div key={p.label} className="relative">
                <div className="bg-white rounded-xl p-6 border border-gray-200 h-full">
                  <span className="text-xs font-semibold tracking-[0.15em] text-accent uppercase">
                    {p.label}
                  </span>
                  <span className="block text-xs text-gray-400 mt-1">
                    {p.period}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-navy-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {p.text}
                  </p>
                </div>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 text-gray-300">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/flow"
              className="inline-block text-sm font-medium text-accent border border-accent px-6 py-2.5 rounded-lg hover:bg-accent hover:text-white transition-colors"
            >
              導入の流れを詳しく見る
            </Link>
          </div>
        </div>
      </section>

      {/* Fit */}
      <section className="py-24 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Fit
          </p>
          <h2 className="mt-4 text-xl md:text-2xl font-bold">
            こうした課題を持つ企業に、最も効果を発揮します。
          </h2>
          <ul className="mt-10 space-y-4">
            {fitList.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
