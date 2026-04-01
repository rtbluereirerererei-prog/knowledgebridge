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
      <section className="pt-32 pb-16 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm font-bold tracking-widest text-accent uppercase">
            {props.label}
          </p>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold">{props.name}</h1>
          <div className="mt-4">
            <span className="text-3xl font-bold text-accent">{props.price}</span>
            <span className="text-gray-300 ml-1">（税別）</span>
          </div>
          <p className="mt-4 text-gray-300 text-lg">{props.copy}</p>
        </div>
      </section>

      {/* Value */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold">{props.valueHeading}</h2>
          <p className="mt-6 text-gray-600 leading-relaxed whitespace-pre-line">
            {props.valueText}
          </p>
        </div>
      </section>

      {/* Items */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            {props.itemsHeading}
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {props.items.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
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
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold">{props.fitHeading}</h2>
          <ul className="mt-8 space-y-4">
            {props.fitItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <span className="text-accent font-bold mt-0.5">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Graduation Link */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-xl font-bold text-navy-900">
            原則12ヶ月で、社内に橋渡しする卒業設計
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            {props.graduationText}
          </p>
          <Link
            href="/flow"
            className="mt-6 inline-block border-2 border-accent text-accent font-medium px-6 py-2.5 rounded-lg hover:bg-accent hover:text-white transition-colors"
          >
            卒業設計の詳細を見る
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
