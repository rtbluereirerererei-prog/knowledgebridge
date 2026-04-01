import Link from "next/link";
import { CTASection } from "@/components/CTASection";

const challenges = [
  {
    title: "担当者が変わるたびに運営が崩れる",
    text: "前任者がなぜそうしていたのか分からない。引き継ぎのたびにゼロからやり直し。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-accent">
        <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.118a7.5 7.5 0 0 1 14.998 0A17.9 17.9 0 0 1 12 21.75c-2.676 0-5.216-.584-7.5-1.632Z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "外注しているが、社内に何も残っていない",
    text: "支援会社が変わるたびに説明が必要。改善の積み上げが止まる。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-accent">
        <path d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "内製化したいが、今すぐは難しい",
    text: "現場を止めずに、段階的に社内へ戻していきたい。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-accent">
        <path d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.048.58.024 1.194-.14 1.743" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "経営者と現場の認識にギャップがある",
    text: "KPI・会議・判断基準が整理されず、改善の優先順位が曖昧。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-accent">
        <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
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
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-navy-900">
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
            <div className="w-full max-w-sm aspect-[4/3] relative rounded-2xl overflow-hidden bg-navy-900">
              {/* Abstract bridge illustration */}
              <svg viewBox="0 0 400 300" fill="none" className="absolute inset-0 w-full h-full">
                {/* Sky gradient */}
                <defs>
                  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0f1b2d"/>
                    <stop offset="100%" stopColor="#1a2a42"/>
                  </linearGradient>
                  <linearGradient id="bridge" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#e07b2e"/>
                    <stop offset="50%" stopColor="#f0a050"/>
                    <stop offset="100%" stopColor="#e07b2e"/>
                  </linearGradient>
                </defs>
                <rect width="400" height="300" fill="url(#sky)"/>
                {/* Stars */}
                <circle cx="50" cy="40" r="1.5" fill="#fff" opacity="0.6"/>
                <circle cx="120" cy="25" r="1" fill="#fff" opacity="0.4"/>
                <circle cx="300" cy="35" r="1.5" fill="#fff" opacity="0.5"/>
                <circle cx="350" cy="60" r="1" fill="#fff" opacity="0.3"/>
                <circle cx="220" cy="20" r="1" fill="#fff" opacity="0.5"/>
                <circle cx="170" cy="55" r="1.2" fill="#fff" opacity="0.4"/>
                {/* Bridge towers */}
                <rect x="110" y="100" width="12" height="120" rx="2" fill="url(#bridge)"/>
                <rect x="278" y="100" width="12" height="120" rx="2" fill="url(#bridge)"/>
                {/* Bridge cables - left tower */}
                <line x1="116" y1="105" x2="40" y2="200" stroke="#e07b2e" strokeWidth="2" opacity="0.8"/>
                <line x1="116" y1="105" x2="70" y2="200" stroke="#e07b2e" strokeWidth="1.5" opacity="0.6"/>
                <line x1="116" y1="105" x2="100" y2="200" stroke="#e07b2e" strokeWidth="1.5" opacity="0.6"/>
                {/* Bridge cables - between towers */}
                <path d="M116 105 Q200 170 284 105" stroke="#e07b2e" strokeWidth="2.5" opacity="0.9"/>
                <line x1="150" y1="140" x2="150" y2="200" stroke="#e07b2e" strokeWidth="1.5" opacity="0.5"/>
                <line x1="180" y1="155" x2="180" y2="200" stroke="#e07b2e" strokeWidth="1.5" opacity="0.5"/>
                <line x1="200" y1="162" x2="200" y2="200" stroke="#e07b2e" strokeWidth="1.5" opacity="0.5"/>
                <line x1="220" y1="155" x2="220" y2="200" stroke="#e07b2e" strokeWidth="1.5" opacity="0.5"/>
                <line x1="250" y1="140" x2="250" y2="200" stroke="#e07b2e" strokeWidth="1.5" opacity="0.5"/>
                {/* Bridge cables - right tower */}
                <line x1="284" y1="105" x2="320" y2="200" stroke="#e07b2e" strokeWidth="1.5" opacity="0.6"/>
                <line x1="284" y1="105" x2="345" y2="200" stroke="#e07b2e" strokeWidth="1.5" opacity="0.6"/>
                <line x1="284" y1="105" x2="370" y2="200" stroke="#e07b2e" strokeWidth="2" opacity="0.8"/>
                {/* Bridge deck */}
                <rect x="20" y="196" width="360" height="8" rx="2" fill="url(#bridge)"/>
                {/* Water reflection */}
                <rect x="0" y="220" width="400" height="80" fill="#0a1420" opacity="0.6"/>
                <line x1="30" y1="240" x2="90" y2="240" stroke="#e07b2e" strokeWidth="1" opacity="0.15"/>
                <line x1="150" y1="250" x2="250" y2="250" stroke="#e07b2e" strokeWidth="1" opacity="0.12"/>
                <line x1="300" y1="235" x2="370" y2="235" stroke="#e07b2e" strokeWidth="1" opacity="0.1"/>
              </svg>
              {/* Overlay text */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
                <p className="text-white/90 font-bold text-base tracking-wide">Knowledge Bridge</p>
                <p className="text-white/50 text-xs mt-1">知見を、社内に橋渡す</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Challenges */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-center">
            こんな課題、ありませんか？
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {challenges.map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 rounded-lg bg-accent-light flex items-center justify-center mb-3">{c.icon}</div>
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
          <h2 className="text-xl md:text-2xl font-bold">
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
              { icon: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z", text: "実務を支える安心感がある" },
              { icon: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z", text: "課題整理や改善設計の視点がある" },
              { icon: "M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z", text: "社内に残る仕組みまで設計する" },
            ].map((t) => (
              <div
                key={t.text}
                className="bg-accent-light rounded-lg px-5 py-4 text-sm font-medium text-navy-900 flex items-center gap-3"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-accent shrink-0"><path d={t.icon} strokeLinecap="round" strokeLinejoin="round"/></svg>
                {t.text}
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
          <h2 className="text-xl md:text-2xl font-bold text-center">
            ナレッジブリッジの3つの約束
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {promises.map((p) => (
              <div key={p.num} className="text-center">
                <div className="text-3xl font-bold text-accent">{p.num}</div>
                <h3 className="mt-4 text-lg font-bold text-navy-900">
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
          <h2 className="text-xl md:text-2xl font-bold text-center">
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
          <h2 className="text-xl md:text-2xl font-bold text-center">
            原則12ヶ月で、社内に橋渡しする卒業設計
          </h2>
          <p className="mt-4 text-center text-gray-600">
            支援を長引かせることではなく、社内に残る形をつくることが目的です。
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((p, i) => (
              <div key={p.label} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full border-t-4 border-t-accent">
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
          <h2 className="text-xl md:text-2xl font-bold text-center">
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
          <h2 className="text-xl md:text-2xl font-bold">導入事例</h2>
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
