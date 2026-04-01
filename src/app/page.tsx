import Link from "next/link";
import { CTASection } from "@/components/CTASection";

const challenges = [
  {
    icon: "👤",
    title: "担当者が変わるたびに運営が崩れる",
    text: "前任者がなぜそうしていたのか分からない。引き継ぎのたびにゼロからやり直し。",
  },
  {
    icon: "📦",
    title: "外注しているが、社内に何も残っていない",
    text: "支援会社が変わるたびに説明が必要。改善の積み上げが止まる。",
  },
  {
    icon: "⚙️",
    title: "内製化したいが、今すぐは難しい",
    text: "現場を止めずに、段階的に社内へ戻していきたい。",
  },
  {
    icon: "📊",
    title: "経営者と現場の認識にギャップがある",
    text: "KPI・会議・判断基準が整理されず、改善の優先順位が曖昧。",
  },
];

const promises = [
  {
    num: "01",
    title: "現場を止めない",
    text: "まずは、いま必要な運営を回し、事業を安定させます。",
  },
  {
    num: "02",
    title: "社内に残す",
    text: "施策履歴、判断基準、会議の進め方、KPI、SOP、チェックリストを残し、再現可能な運営へ変えていきます。",
  },
  {
    num: "03",
    title: "卒業を前提に設計する",
    text: "依存を生む支援ではなく、原則12ヶ月で社内へ橋渡しできる形を目指します。",
  },
];

const services = [
  {
    name: "運用代行",
    price: "月額40万円",
    tax: "（税別）",
    copy: "実務を担いながら、運営知見を社内へ橋渡し",
    items: "運営方針整理 / イベント対応 / 施策実行 / 改善提案 / 定例会議 / レポート / 施策履歴蓄積 / 引き継ぎ設計",
    target: "社内リソースが足りず、まず回す必要がある企業",
    href: "/service/operation",
  },
  {
    name: "コンサルティング",
    price: "月額20万円",
    tax: "（税別）",
    copy: "判断力と運営力を社内チームに定着させる",
    items: "戦略設計 / 現状分析 / 課題整理 / KPI整理 / 定例会議支援 / 判断基準の言語化 / ルール設計",
    target: "担当者はいるが、意思決定や改善設計に不安がある企業",
    href: "/service/consulting",
  },
  {
    name: "機能別伴走支援",
    price: "月額5万円〜",
    tax: "（税別）",
    copy: "必要な領域だけ、小さく始められるモジュール型",
    items: "広告運用 / CRM / 販促企画 / 商品登録 / クリエイティブ / レポート設計 / SOP整備",
    target: "課題が特定領域に集中している企業",
    href: "/service/module",
  },
];

const phases = [
  {
    label: "Phase 1",
    period: "1〜3ヶ月",
    title: "可視化",
    text: "現在の運営を見える化。属人化業務の特定、KPI整理、課題の優先順位を設定。",
  },
  {
    label: "Phase 2",
    period: "4〜6ヶ月",
    title: "共同運用",
    text: "再現可能な型として整備。テンプレート、判断基準、報告フォーマットを標準化。",
  },
  {
    label: "Phase 3",
    period: "7〜9ヶ月",
    title: "移管準備",
    text: "クライアント主導へ切り替え。SOP、チェックリスト、役割分担を整備。",
  },
  {
    label: "Phase 4",
    period: "10〜12ヶ月",
    title: "卒業設計",
    text: "社内で継続できる状態を確認し、最終移管。必要に応じてスポット支援へ移行。",
  },
];

const fitList = [
  "担当者が変わるたびに運用品質が下がる",
  "外注しているが、社内に運営ノウハウが残っていない",
  "内製化したいが、今すぐ完全内製は難しい",
  "経営者と現場のKPI認識にギャップがある",
  "組織変更・異動が起こりやすく、属人化が課題",
];

export default function Home() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-navy-900">
              任せながら、
              <br />
              ノウハウを社内に残す。
              <br />
              <span className="text-accent">
                担当者が変わっても、
                <br />
                回り続けるECへ。
              </span>
            </h1>
            <p className="mt-6 text-gray-600 leading-relaxed max-w-lg">
              ECモール運営を支えながら、施策履歴・判断基準・運営ルールを社内へ橋渡しし、
              原則12ヶ月で&ldquo;続く運営体制&rdquo;をつくるEC運営支援です。
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block bg-accent text-white font-medium px-8 py-4 rounded-lg text-lg hover:bg-accent-dark transition-colors"
              >
                無料相談はこちら
              </Link>
              <p className="mt-3 text-sm text-gray-500">
                まずは30分の無料相談から
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-md aspect-square bg-gradient-to-br from-accent-light via-white to-gray-100 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🌉</div>
                <p className="text-navy-800 font-bold text-lg">Knowledge Bridge</p>
                <p className="text-gray-500 text-sm mt-1">知見を、社内に橋渡す</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Challenges */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            こんな課題、ありませんか？
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {challenges.map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="font-bold text-lg text-navy-900">{c.title}</h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Essence */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            代行して終わらない。
            <br />
            コンサルして終わらない。
          </h2>
          <h3 className="mt-4 text-lg text-accent font-medium">
            任せながら、残す。支えながら、渡す。
          </h3>
          <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl mx-auto">
            ナレッジブリッジは、一般的な運用代行とも、一般的なコンサルティングとも異なります。
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            {[
              "実務を支える安心感がある",
              "課題整理や改善設計の視点がある",
              "社内に残る仕組みまで設計する",
            ].map((t) => (
              <div
                key={t}
                className="bg-accent-light rounded-lg px-5 py-3 text-sm font-medium text-navy-900"
              >
                {t}
              </div>
            ))}
          </div>
          <p className="mt-8 text-navy-900 font-medium">
            &ldquo;任せながら、社内に運営力を残す&rdquo;ところまで含めた支援です。
          </p>
        </div>
      </section>

      {/* Section 4: 3 Promises */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            ナレッジブリッジの3つの約束
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {promises.map((p) => (
              <div key={p.num} className="text-center">
                <div className="text-4xl font-bold text-accent">{p.num}</div>
                <h3 className="mt-4 text-xl font-bold text-navy-900">
                  {p.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Service Lineup */}
      <section id="services" className="py-20 bg-white scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            サービスラインナップ
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.name}
                className="border border-gray-200 rounded-xl p-6 flex flex-col hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-navy-900">
                  ナレッジブリッジ {s.name}
                </h3>
                <div className="mt-2">
                  <span className="text-2xl font-bold text-accent">
                    {s.price}
                  </span>
                  <span className="text-sm text-gray-500">{s.tax}</span>
                </div>
                <p className="mt-3 text-sm text-gray-600">{s.copy}</p>
                <div className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500 leading-relaxed flex-1">
                  {s.items}
                </div>
                <p className="mt-4 text-xs text-accent font-medium">
                  {s.target}
                </p>
                <Link
                  href={s.href}
                  className="mt-4 block text-center border-2 border-accent text-accent font-medium py-2.5 rounded-lg hover:bg-accent hover:text-white transition-colors"
                >
                  詳しく見る
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Graduation Design */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            原則12ヶ月で、社内に橋渡しする卒業設計
          </h2>
          <p className="mt-4 text-center text-gray-600">
            支援を長引かせることではなく、社内に残る形をつくることが目的です。
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((p, i) => (
              <div key={p.label} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full">
                  <div className="text-xs font-bold text-accent uppercase tracking-wider">
                    {p.label}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{p.period}</div>
                  <h3 className="mt-3 text-lg font-bold text-navy-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {p.text}
                  </p>
                </div>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 text-gray-300 text-xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/flow"
              className="inline-block border-2 border-accent text-accent font-medium px-8 py-3 rounded-lg hover:bg-accent hover:text-white transition-colors"
            >
              卒業設計の詳細を見る
            </Link>
          </div>
        </div>
      </section>

      {/* Section 7: Target */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            こんな企業に向いています
          </h2>
          <ul className="mt-10 space-y-4">
            {fitList.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-gray-700"
              >
                <span className="text-accent font-bold mt-0.5">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 8: Case Studies (placeholder) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">導入事例</h2>
          <p className="mt-4 text-gray-500">
            現在、掲載準備中です。導入事例は順次公開予定です。
          </p>
        </div>
      </section>

      {/* Section 9: CTA */}
      <CTASection />
    </>
  );
}
