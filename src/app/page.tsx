import Link from "next/link";
import { CTASection } from "@/components/CTASection";

const problems = [
  "担当者が変わるたびにやり方が変わり、成果が不安定になる",
  "前任者の判断理由が分からず、同じミスが繰り返される",
  "外部パートナーを変えるたびに、また一から説明し直す",
  "採用しても教育に時間がかかる",
  "改善の積み上げができない",
  "「なぜその運用なのか」がブラックボックス化する",
];

const approach = [
  {
    num: "01",
    title: "運営の巻き取り支援",
    text: "社内にリソースが足りない場合は、まず実務を巻き取り、現場を止めずに運営を安定させます。その過程で施策履歴・判断基準・改善ノウハウを蓄積し、将来的に社内へ引き継げる状態をつくります。",
  },
  {
    num: "02",
    title: "仕組みを社内に残す支援",
    text: "社内に担当者はいるが、運用が属人的になっている場合は、判断基準、運用ルール、SOP、会議設計、KPI設計、ナレッジ整理を通じて、再現可能な運営体制へ変えていきます。",
  },
];

const services = [
  {
    name: "運用代行プラン",
    price: "月額40万円",
    copy: "代行しながら、再現できる運営を社内に残す",
    items: [
      "運営実務の巻き取り",
      "イベント対応",
      "施策実行・改善提案",
      "定例会議・月次レポート",
      "施策履歴・判断基準の蓄積",
      "ナレッジ蓄積の運用設計",
      "引き継ぎ設計",
    ],
    target: "現場を回す人手が足りない企業向け。実務を巻き取りながら、将来的に社内へ引き継げる状態をつくる",
    href: "/service/operation",
  },
  {
    name: "仕組み構築支援プラン",
    price: "月額20万円",
    copy: "属人的な運用を、再現可能な体制に変える",
    items: [
      "判断基準の言語化",
      "運用ルール・SOP設計",
      "KPI設計・会議設計",
      "ナレッジ整理・標準化",
      "定例会議支援",
      "EC×AIによる記録・整理支援",
    ],
    target: "社内に担当者はいるが、運用が人によって変わってしまう企業向け",
    href: "/service/consulting",
  },
  {
    name: "機能別伴走支援",
    price: "月額5万円〜",
    copy: "必要な機能から小さく導入できる",
    items: [
      "広告運用",
      "CRM",
      "販促企画",
      "商品登録",
      "レポート設計",
      "SOP整備",
      "AI活用設計",
    ],
    target: "属人化が一部の機能に集中している、またはまずは小さく試したい企業向け",
    href: "/service/module",
  },
];

const comparison = [
  {
    type: "一般的な運用代行",
    desc: "業務を回してくれる",
    knowledge: false,
  },
  {
    type: "一般的なコンサルティング",
    desc: "改善案を示してくれる",
    knowledge: false,
  },
  {
    type: "ナレッジブリッジ",
    desc: "業務を回し、改善を示し、さらにノウハウを社内に残す",
    knowledge: true,
  },
];

const fitList = [
  "担当者の異動・退職のたびに、運営品質が不安定になっている",
  "外注先を変えるたびに、ゼロから説明し直している",
  "ノウハウを社内資産として残したい",
  "判断基準やルールが整理されていない",
  "外注依存を減らしたい",
  "属人化した業務が多く、組織変更のたびに混乱が起きる",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 pt-36 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            EC × AI Operations
          </p>
          <h1 className="mt-6 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white">
            EC運営を、
            <br />
            属人化から再現性へ。
          </h1>
          <p className="mt-6 text-gray-400 leading-relaxed max-w-2xl text-base md:text-lg">
            EC×AIで施策・判断・運用ノウハウを蓄積し、誰が担当しても回る体制をつくる。
            <br className="hidden md:inline" />
            人手が足りなければ運用を巻き取り、体制があるなら社内に仕組みを残す。
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

      {/* Concept */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Concept
          </p>
          <h2 className="mt-4 text-xl md:text-2xl font-bold">
            EC運営を、属人化から再現性へ。
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-gray-600 leading-relaxed">
            <p>
              ナレッジブリッジは、
              <strong className="text-navy-900">属人化しやすいECモール運営を、EC×AIで再現可能な運営体制へ変えていく支援サービス</strong>
              です。
            </p>
            <p>
              EC運営の現場では、広告運用、販促企画、商品ページ改善、CRM、在庫判断、イベント対応など、日々さまざまな判断が行われています。
            </p>
            <p>
              しかし、その多くは担当者個人の経験や勘に依存しやすく、施策の意図、判断基準、改善の履歴、運用のコツが社内に十分残らないまま運営されているケースが少なくありません。
            </p>
          </div>
          <ul className="mt-10 space-y-3">
            {problems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-gray-600 leading-relaxed max-w-3xl">
            ナレッジブリッジは、この属人化の問題を、
            <strong className="text-navy-900">EC×AIによる記録・整理・標準化・再利用</strong>
            で解決します。
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="py-24 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Solution
          </p>
          <h2 className="mt-4 text-xl md:text-2xl font-bold">
            EC×AIで、誰が担当しても回るEC運営へ。
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl leading-relaxed">
            ナレッジブリッジの中核は、<strong className="text-navy-900">EC×AI（ECxAI）を活用した脱属人化の仕組み</strong>です。
            日々の運営の中で生まれる情報を、単なる作業記録としてではなく、再現可能な運営ノウハウとして蓄積します。
          </p>
          <div className="mt-14 grid md:grid-cols-2 gap-10">
            {approach.map((a) => (
              <div key={a.num} className="bg-gray-50 rounded-xl p-8">
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
          <div className="mt-12 text-center">
            <p className="text-lg font-bold text-navy-900">
              足りないのが&quot;手&quot;なら巻き取る。
              <br />
              足りないのが&quot;仕組み&quot;なら整える。
            </p>
            <p className="mt-3 text-gray-600">
              そのどちらにも対応できるのがナレッジブリッジです。
            </p>
          </div>
        </div>
      </section>

      {/* Service Lineup */}
      <section id="services" className="py-24 bg-gray-50 scroll-mt-16">
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
                className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col hover:border-gray-300 transition-colors"
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

      {/* Comparison */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Difference
          </p>
          <h2 className="mt-4 text-xl md:text-2xl font-bold">
            他社との違い。
          </h2>
          <div className="mt-12 space-y-4">
            {comparison.map((c) => (
              <div
                key={c.type}
                className={`rounded-xl p-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 ${
                  c.knowledge
                    ? "bg-navy-900 text-white"
                    : "bg-gray-50 text-gray-700"
                }`}
              >
                <span
                  className={`text-sm font-bold shrink-0 w-56 ${
                    c.knowledge ? "text-accent" : "text-navy-900"
                  }`}
                >
                  {c.type}
                </span>
                <span className={`text-sm leading-relaxed ${c.knowledge ? "text-gray-300" : "text-gray-600"}`}>
                  {c.desc}
                </span>
                {c.knowledge && (
                  <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full shrink-0">
                    ノウハウを社内に残す
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="mt-8 text-gray-600 leading-relaxed max-w-3xl">
            運用代行も、コンサルティングも、目的は同じです。
            <br />
            <strong className="text-navy-900">担当者が変わっても成果がブレにくい、社内に残るEC運営体制をつくること。</strong>
          </p>
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

      {/* CTA */}
      <CTASection />
    </>
  );
}
