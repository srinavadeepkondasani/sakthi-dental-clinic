import Link from "next/link";
import {
  ShieldCheck,
  LockKeyhole,
  Database,
  Mail,
  Phone,
  ArrowLeft,
} from "lucide-react";

const lastUpdated = "October 19, 2026";

const sections = [
  {
    title: "1. Introduction",
    content:
      "Sakthi Dental Clinic respects your privacy and is committed to protecting personal information shared with us. This Privacy Policy explains how information may be collected, used, and protected when you visit our website or contact our clinic.",
  },
  {
    title: "2. Information We May Collect",
    content:
      "When you contact us or submit an appointment enquiry, you may provide information such as your name, telephone number, email address, preferred appointment date, requested dental service, and any additional information you choose to share.",
  },
  {
    title: "3. How We Use Your Information",
    content:
      "Information you provide may be used to respond to enquiries, discuss appointment availability, communicate with you about requested services, and improve our website and customer experience. We will use personal information only for appropriate purposes and in accordance with applicable law.",
  },
  {
    title: "4. Appointment Enquiries",
    content:
      "Submitting an appointment enquiry through this website does not automatically confirm a dental appointment. The current enquiry form may open your email application to prepare a message. Information is sent only when you choose to send that email. Your email provider may process the message under its own privacy policy.",
  },
  {
    title: "5. Sharing of Information",
    content:
      "We do not intend to sell your personal information. Information may be shared when necessary to respond to your request, operate relevant website services, comply with legal obligations, or protect legitimate rights. Any sharing should be limited to what is appropriate for the relevant purpose.",
  },
  {
    title: "6. Cookies and Website Technologies",
    content:
      "Our website may use essential technical features to display pages, support navigation, and maintain website functionality. If analytics, advertising, or additional tracking technologies are introduced, this policy should be updated to describe their use and any applicable choices available to visitors.",
  },
  {
    title: "7. Data Security",
    content:
      "Reasonable measures should be taken to protect personal information against unauthorized access, misuse, alteration, or disclosure. However, no website or electronic communication method can be guaranteed to be completely secure.",
  },
  {
    title: "8. Data Retention",
    content:
      "Personal information should be retained only for as long as reasonably necessary for the purpose for which it was collected, subject to applicable legal, regulatory, and professional record-keeping requirements.",
  },
  {
    title: "9. Your Privacy Rights",
    content:
      "Depending on applicable law, you may have rights to request access to, correction of, or deletion of certain personal information. You may contact the clinic to make a privacy-related request. Some information may need to be retained where required by law.",
  },
  {
    title: "10. Third-Party Websites",
    content:
      "Our website may link to third-party services, including Google Maps, telephone applications, and email applications. These services operate independently and may collect or process information according to their own terms and privacy policies.",
  },
  {
    title: "11. Children's Privacy",
    content:
      "Our website is intended to provide information about dental services for individuals and families. Parents or legal guardians should assist children when submitting personal information online. Any handling of children's personal information must comply with applicable law.",
  },
  {
    title: "12. Changes to This Policy",
    content:
      "This Privacy Policy may be updated when website features, clinic practices, or legal requirements change. The latest version should be published on this page with an updated revision date.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-pink-50 px-5 py-16 sm:py-20 lg:px-8">
        <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-violet-200/30 blur-3xl" />

        <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-pink-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-violet-700 shadow-sm">
            <ShieldCheck size={34} />
          </div>

          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white px-5 py-2.5 text-sm font-semibold text-violet-700 shadow-sm">
            <LockKeyhole size={16} />
            Your Privacy Matters
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Privacy{" "}
            <span className="text-violet-700">Policy</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Learn how Sakthi Dental Clinic handles information
            when you visit our website or contact us about dental
            services and appointments.
          </p>

          <p className="mt-5 text-sm text-slate-500">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* INTRODUCTION CARD */}
      <section className="px-5 py-12 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-violet-100 bg-white p-7 shadow-sm sm:p-10">
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                <Database size={25} />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Your Information, Handled With Care
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  We value the trust you place in Sakthi Dental
                  Clinic. This page describes our intended approach
                  to personal information, including information
                  you may provide through contact and appointment
                  enquiry features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POLICY CONTENT */}
      <section className="bg-slate-50 px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-700">
              Privacy Information
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Our Privacy Practices
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              Please review the following sections to understand
              how personal information may be handled.
            </p>
          </div>

          <div className="space-y-5">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:border-violet-100 hover:shadow-md sm:p-8"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {section.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {section.content}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-800 to-fuchsia-700 p-7 text-white sm:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
              <Mail size={28} />
            </div>

            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
              Questions About Your Privacy?
            </h2>

            <p className="mt-5 leading-8 text-white/90">
              If you have questions about this policy or would
              like to make a privacy-related enquiry, please
              contact Sakthi Dental Clinic.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="mailto:info@sakthidentalclinic.in"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold !text-violet-800 shadow-md transition hover:-translate-y-0.5 hover:bg-violet-100"
              >
                <Mail size={18} className="!text-violet-800" />
                <span className="!text-violet-800">
                  Email the Clinic
                </span>
              </a>

              <a
                href="tel:+919862890897"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3.5 font-bold !text-white transition hover:bg-white/10"
              >
                <Phone size={18} />
                <span>Call the Clinic</span>
              </a>
            </div>

            <p className="mt-7 text-sm leading-7 text-white/80">
              Sakthi Dental Clinic
              <br />
              B2/8, SBM Layout, Anthivadi,
              <br />
              Hosur, Tamil Nadu 635109, India
            </p>
          </div>
        </div>
      </section>

      {/* BACK TO HOME */}
      <section className="px-5 pb-16 text-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-violet-200 bg-white px-6 py-3 font-semibold text-violet-700 transition hover:bg-violet-50"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </section>
    </main>
  );
}