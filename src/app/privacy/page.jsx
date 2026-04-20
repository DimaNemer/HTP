import Link from "next/link";

export const metadata = {
  title: "Privacy Policy HTP Consultancy",
};

const sections = [
  {
    title: "Overview",
    content: `At HTP Consultancy, accessible from https://www.htpconsultancy.com/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by HTP Consultancy and how we use it.

If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.

This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect on htpconsultancy.com. This policy is not applicable to any information collected offline or via channels other than this website.`,
  },
  {
    title: "Consent",
    content: `By using our website, you hereby consent to our Privacy Policy and agree to its terms. For our Terms and Conditions, please visit the Terms & Conditions page.`,
  },
  {
    title: "Information we collect",
    content: `The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.

If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.

When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.`,
  },
  {
    title: "How we use your information",
    content: `We use the information we collect in various ways, including to:

• Provide, operate, and maintain our website
• Improve, personalise, and expand our website
• Understand and analyse how you use our website
• Develop new products, services, features, and functionality
• Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes
• Send you emails
• Find and prevent fraud`,
  },
  {
    title: "Log files",
    content: `HTP Consultancy follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analysing trends, administering the site, tracking users' movement on the website, and gathering demographic information.`,
  },
  {
    title: "Cookies and web beacons",
    content: `Like any other website, HTP Consultancy uses cookies. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimise the users' experience by customising our web page content based on visitors' browser type and/or other information.

When you first visit our website, a cookie consent banner will appear asking for your permission before any non-essential cookies are set. You may accept all cookies or reject non-essential ones. Essential cookies (required for the site to function) are always active.

You can also choose to disable cookies through your individual browser options at any time.`,
  },
  {
    title: "GDPR data protection rights",
    content: `We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:

• The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.
• The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete information you believe is incomplete.
• The right to erasure – You have the right to request that we erase your personal data, under certain conditions.
• The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.
• The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.
• The right to data portability – You have the right to request that we transfer the data that we have collected to another organisation, or directly to you, under certain conditions.

If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.`,
  },
  {
    title: "Third party privacy policies",
    content: `HTP Consultancy's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party servers for more detailed information. It may include their practices and instructions about how to opt out of certain options.`,
  },
  {
    title: "Children's information",
    content: `Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.

HTP Consultancy does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.`,
  },
];

export default function PrivacyPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* Hero */}
      <div className="bg-primary px-8 py-24 md:py-32">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold text-htpRed tracking-[2px] uppercase mb-3">
            Legal
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Privacy Policy
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
            Your privacy matters to us. This policy explains what data we collect,
            why we collect it, and your rights as a visitor to our website.
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
          <Link href="/terms" className="text-xs font-semibold text-accent hover:underline">
            View Terms &amp; Conditions →
          </Link>
        </div>

      </div>
    </main>
  );
}