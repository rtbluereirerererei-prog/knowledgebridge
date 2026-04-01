import Link from "next/link";

export function CTASection() {
  return (
    <section className="bg-navy-900 py-24">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          Contact
        </p>
        <h2 className="mt-4 text-xl md:text-2xl font-bold text-white">
          まず、現状の課題を整理するところから。
        </h2>
        <p className="mt-4 text-gray-400 leading-relaxed">
          30分の無料相談で、御社のEC運営における構造課題を整理し、
          <br className="hidden md:inline" />
          最適な支援の形をご提案します。
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block bg-accent text-white font-medium px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors"
        >
          無料相談を申し込む
        </Link>
        <p className="mt-3 text-sm text-gray-500">
          初回30分・オンライン対応・2営業日以内にご連絡
        </p>
      </div>
    </section>
  );
}
