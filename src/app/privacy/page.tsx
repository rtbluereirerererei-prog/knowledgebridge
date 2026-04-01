import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "ナレッジブリッジの個人情報保護方針について。",
};

const sections = [
  {
    title: "1. 個人情報の定義",
    text: "本ポリシーにおける「個人情報」とは、お名前、ご住所、電話番号、メールアドレスなど、特定の個人を識別できる情報を指します。",
  },
  {
    title: "2. 個人情報の収集",
    text: "当社は、以下の場合に個人情報を取得することがあります。",
    list: [
      "お問い合わせフォームからのご連絡",
      "サービスのお申し込み・ご契約",
      "その他、業務上必要な場合",
    ],
  },
  {
    title: "3. 個人情報の利用目的",
    text: "当社は、取得した個人情報を以下の目的で利用いたします。",
    list: [
      "お問い合わせへの回答およびご連絡",
      "サービスの提供・運営・改善",
      "ご案内やお知らせの送付",
      "契約の履行および関連業務",
    ],
  },
  {
    title: "4. 個人情報の第三者提供",
    text: "当社は、以下の場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。",
    list: [
      "法令に基づく場合",
      "人の生命、身体または財産の保護のために必要がある場合",
      "お客様の同意がある場合",
    ],
  },
  {
    title: "5. 個人情報の管理",
    text: "当社は、個人情報の漏洩、滅失、毀損の防止その他の安全管理のために、必要かつ適切な措置を講じます。",
  },
  {
    title: "6. 個人情報の開示・訂正・削除",
    text: "お客様ご本人から、個人情報の開示・訂正・削除のご請求があった場合は、本人確認を行った上で、合理的な範囲で速やかに対応いたします。",
  },
  {
    title: "7. Cookieの使用について",
    text: "当社のウェブサイトでは、サービスの利便性向上およびアクセス解析のためにCookieを使用する場合があります。Cookieの使用により個人を特定する情報を取得することはありません。ブラウザの設定によりCookieの受け取りを拒否することも可能です。",
  },
  {
    title: "8. アクセス解析ツールについて",
    text: "当社のウェブサイトでは、Googleが提供するアクセス解析ツール「Google Analytics」を使用しています。Google Analyticsはデータ収集のためにCookieを使用しますが、このデータは匿名で収集されており、個人を特定するものではありません。",
  },
  {
    title: "9. 本ポリシーの変更",
    text: "当社は、必要に応じて本ポリシーの内容を変更することがあります。変更後のポリシーは、当ウェブサイトに掲載した時点から効力を生じます。",
  },
  {
    title: "10. お問い合わせ",
    text: "個人情報の取り扱いに関するお問い合わせは、以下の窓口までご連絡ください。",
    contact: true,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-36 pb-16 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm font-bold tracking-widest text-accent uppercase">
            PRIVACY POLICY
          </p>
          <h1 className="mt-4 text-2xl md:text-3xl font-bold">
            プライバシーポリシー
          </h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-gray-600 leading-relaxed">
            ナレッジブリッジ（以下「当社」）は、お客様の個人情報の保護を重要な責務と認識し、以下のとおりプライバシーポリシーを定め、適切な管理・保護に努めます。
          </p>

          <div className="mt-12 space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-lg font-bold text-navy-900">{s.title}</h2>
                <p className="mt-3 text-gray-600 leading-relaxed">{s.text}</p>
                {s.list && (
                  <ul className="mt-3 space-y-1">
                    {s.list.map((item) => (
                      <li key={item} className="text-gray-600 flex items-start gap-2">
                        <span className="text-gray-400">・</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {s.contact && (
                  <div className="mt-4 bg-gray-50 rounded-lg p-5">
                    <p className="font-bold text-navy-900">ナレッジブリッジ</p>
                    <p className="text-gray-600 mt-1">担当：鳥居 礼</p>
                    <p className="text-gray-600">メール：rei.torii@careerprime.co</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="mt-12 text-sm text-gray-400">制定日：2026年4月1日</p>
        </div>
      </section>
    </>
  );
}
