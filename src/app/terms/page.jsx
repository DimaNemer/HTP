import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions — HTP Consultancy",
};

const sections = [
  {
    title: "Introduction",
    content: `These terms and conditions outline the rules and regulations for the use of HTP Consultancy's website, located at https://www.htpconsultancy.com/

By accessing this website we assume you accept these terms and conditions. Do not continue to use HTP Consultancy's website if you do not agree to take all of the terms and conditions stated on this page.

The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person logged on to this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us" refers to HTP Consultancy. "Party", "Parties", or "Us" refers to both the Client and ourselves.`,
  },
  {
    title: "Cookies",
    content: `We employ the use of cookies. By accessing HTP Consultancy's website, you agreed to use cookies in agreement with HTP Consultancy's Privacy Policy.

Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. When you first visit, you will be asked to give your consent before non-essential cookies are set.`,
  },
  {
    title: "Licence",
    content: `Unless otherwise stated, HTP Consultancy and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may access this from HTP Consultancy for your own personal use subject to restrictions set in these terms and conditions.

You must not:
• Republish material from HTP Consultancy
• Sell, rent or sub-license material from HTP Consultancy
• Reproduce, duplicate or copy material from HTP Consultancy
• Redistribute content from HTP Consultancy`,
  },
  {
    title: "Hyperlinking to our content",
    content: `The following organisations may link to our website without prior written approval:

• Government agencies
• Search engines
• News organisations
• Online directory distributors may link to our website in the same manner as they hyperlink to the websites of other listed businesses

These organisations may link to our home page, to publications or to other website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.

No use of HTP Consultancy's logo or other artwork will be allowed for linking absent a trademark licence agreement.`,
  },
  {
    title: "iFrames",
    content: `Without prior approval and written permission, you may not create frames around our web pages that alter in any way the visual presentation or appearance of our website.`,
  },
  {
    title: "Content liability",
    content: `We shall not be held responsible for any content that appears on your website. You agree to protect and defend us against all claims that are rising on your website. No link(s) should appear on any website that may be interpreted as libellous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.`,
  },
  {
    title: "Reservation of rights",
    content: `We reserve the right to request that you remove all links or any particular link to our website. You approve to immediately remove all links to our website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our website, you agree to be bound to and follow these linking terms and conditions.`,
  },
  {
    title: "Disclaimer",
    content: `To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:

• Limit or exclude our or your liability for death or personal injury
• Limit or exclude our or your liability for fraud or fraudulent misrepresentation
• Limit any of our or your liabilities in any way that is not permitted under applicable law
• Exclude any of our or your liabilities that may not be excluded under applicable law

As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.`,
  },
];

export default function TermsPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* Hero */}
      <div className="bg-primary px-8 py-24 md:py-32">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold text-htpRed tracking-[2px] uppercase mb-3">
            Legal
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm text-[#94afc8]">
            HTP Consultancy &nbsp;·&nbsp; htpconsultancy.com
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 md:px-8 py-14 space-y-10">

        <div className="border-l-4 border-accent pl-4 bg-secondary py-3 pr-4 rounded-r-xl">
          <p className="text-sm text-textMuted leading-relaxed">
            Please read these terms carefully before using our website or engaging
            our services. If you have any questions, contact us before proceeding.
          </p>
        </div>

        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="text-lg font-bold text-primary mb-3 pb-2 border-b border-borderLight">
              {s.title}
            </h2>
            <p className="text-sm text-textMain leading-relaxed whitespace-pre-line">
              {s.content}
            </p>
          </div>
        ))}

        <div className="border-t border-borderLight pt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <p className="text-xs text-textMuted">
            Questions? Contact us at{" "}
            <a href="mailto:hc@htpconsultancy.com" className="text-accent underline">
              hc@htpconsultancy.com
            </a>
          </p>
          <Link href="/privacy" className="text-xs font-semibold text-accent hover:underline">
            View Privacy Policy →
          </Link>
        </div>

      </div>
    </main>
  );
}