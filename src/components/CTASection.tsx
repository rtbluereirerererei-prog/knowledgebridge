import Link from "next/link";

export function CTASection() {
  return (
    <section className="bg-navy-900 py-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          まずは30分の無料相談から。
        </h2>
        <p className="mt-4 text-gray-300 leading-relaxed">
          現状の課題やお悩みをお聞かせください。
          <br />
          御社に合った支援の形をご提案します。
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block bg-accent text-white font-medium px-10 py-4 rounded-lg text-lg hover:bg-accent-dark transition-colors"
        >
          無料相談を申し込む
        </Link>
      </div>
    </section>
  );
}
