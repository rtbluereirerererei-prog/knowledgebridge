import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "ナレッジブリッジの会社概要。ECモール運営支援（運用代行・コンサルティング・伴走支援）を提供しています。",
};

const companyInfo = [
  { label: "会社名", value: "株式会社ナレッジブリッジ" },
  { label: "代表者", value: "鳥居 礼" },
  { label: "所在地", value: "神奈川県横浜市西区みなとみらい２丁目２−１" },
  { label: "事業内容", value: "ECモール運営支援（運用代行・コンサルティング・伴走支援）" },
  { label: "メール", value: "info@knowledgebridge.co.jp" },
];

export default function CompanyPage() {
  return (
    <>
      <section className="pt-36 pb-16 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm font-bold tracking-widest text-accent uppercase">COMPANY</p>
          <h1 className="mt-4 text-2xl md:text-3xl font-bold">会社概要</h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <dl className="divide-y divide-gray-200">
            {companyInfo.map((info) => (
              <div key={info.label} className="py-5 flex flex-col sm:flex-row sm:gap-8">
                <dt className="text-sm font-bold text-navy-900 sm:w-32 shrink-0">
                  {info.label}
                </dt>
                <dd className="mt-1 sm:mt-0 text-gray-600">{info.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CTASection />
    </>
  );
}
