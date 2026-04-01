import Link from "next/link";
import { CTASection } from "./CTASection";

type ServiceItem = {
  title: string;
  text: string;
};

type ServicePageProps = {
  label: string;
  name: string;
  price: string;
  copy: string;
  valueHeading: string;
  valueText: string;
  itemsHeading: string;
  items: ServiceItem[];
  fitHeading: string;
  fitItems: string[];
  graduationText: string;
};

export function ServicePage(props: ServicePageProps) {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-20 bg-navy-900 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            {props.label}
          </p>
          <h1 className="mt-6 text-2xl md:text-3xl font-bold">{props.name}</h1>
          <div className="mt-4">
            <span className="text-2xl font-bold text-white">{props.price}</span>
            <span className="text-gray-400 ml-1 text-sm">（税別）</span>
          </div>
          <p className="mt-4 text-gray-400 text-lg">{props.copy}</p>
        </div>
      </section>

      {/* Value */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold">{props.valueHeading}</h2>
          <p className="mt-6 text-gray-600 leading-relaxed whitespace-pre-line">
            {props.valueText}
          </p>
        </div>
      </section>

      {/* Items */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold">
            {props.itemsHeading}
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {props.items.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <h3 className="font-bold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fit */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold">{props.fitHeading}</h2>
          <ul className="mt-8 space-y-4">
            {props.fitItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Flow Link */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-xl font-bold text-navy-900">
            原則12ヶ月で、社内移管を完了する卒業設計
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            {props.graduationText}
          </p>
          <Link
            href="/flow"
            className="mt-6 inline-block text-sm font-medium text-accent border border-accent px-6 py-2.5 rounded-lg hover:bg-accent hover:text-white transition-colors"
          >
            導入の流れを見る
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
