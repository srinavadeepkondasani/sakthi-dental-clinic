"use client";

import { useState } from "react";
import Link from "next/link";

import {
  ChevronDown,
  MessageCircleQuestion,
  HeartHandshake,
  ArrowRight,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const faqCategories = [
  "All Questions",
  "Appointments",
  "Dental Treatments",
  "Patient Care",
];

const faqs = [
  {
    question: "How can I book an appointment?",
    answer:
      "You can contact Sakthi Dental Clinic by phone or use the Contact Us page to prepare an appointment enquiry. Please wait for confirmation from the clinic before assuming your appointment is booked.",
    category: "Appointments",
  },
  {
    question: "Where is Sakthi Dental Clinic located?",
    answer:
      "Sakthi Dental Clinic is located at B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109, India. Visit the Contact Us page for directions through Google Maps.",
    category: "Appointments",
  },
  {
    question: "How can I contact the clinic?",
    answer:
      "You can call +91 98628 90897 or email info@sakthidentalclinic.in. You can also visit our Contact Us page to find our location and submit an appointment enquiry.",
    category: "Appointments",
  },
  {
    question: "What dental treatments are available?",
    answer:
      "Our website describes services covering preventive, restorative, cosmetic, orthodontic, and other dental care needs. Available treatments and suitability should be confirmed with the clinic.",
    category: "Dental Treatments",
  },
  {
    question: "Do I need an appointment before visiting?",
    answer:
      "We recommend contacting the clinic before visiting to check appointment availability and arrange a suitable time.",
    category: "Appointments",
  },
  {
    question: "Does the clinic provide dental care for children?",
    answer:
      "The clinic's services include family dental care. Contact the clinic to discuss your child's needs and confirm the availability of appropriate pediatric dental services.",
    category: "Dental Treatments",
  },
  {
    question: "What should I expect during my first dental visit?",
    answer:
      "Your dentist can discuss your concerns, assess your oral health, and explain any recommended treatment options. The exact process depends on your individual needs.",
    category: "Patient Care",
  },
  {
    question: "How often should I visit a dentist?",
    answer:
      "The appropriate check-up frequency depends on your oral health, dental history, and individual risk factors. Ask your dentist to recommend a schedule suited to you.",
    category: "Patient Care",
  },
  {
    question: "Is teeth cleaning painful?",
    answer:
      "Professional teeth cleaning is generally well tolerated, although some people may experience temporary sensitivity or discomfort. Tell your dentist if you have sensitive teeth or gum concerns.",
    category: "Dental Treatments",
  },
  {
    question: "What is a root canal treatment?",
    answer:
      "Root canal treatment is a procedure used to treat an infected or damaged dental pulp. Your dentist can examine the affected tooth and explain whether this treatment is appropriate.",
    category: "Dental Treatments",
  },
  {
    question: "Can I ask about the cost of treatment before visiting?",
    answer:
      "Yes. Contact the clinic to ask about consultation charges and treatment costs. The final cost may depend on the examination findings and the treatment recommended.",
    category: "Appointments",
  },
  {
    question: "What should I do if I have a dental emergency?",
    answer:
      "Contact a dental professional as soon as possible for guidance. If you have severe facial swelling, difficulty breathing or swallowing, or uncontrolled bleeding, seek emergency medical care immediately.",
    category: "Patient Care",
  },
  {
    question: "How can I maintain good oral hygiene?",
    answer:
      "Brush twice daily with fluoride toothpaste, clean between your teeth daily, limit frequent sugary snacks and drinks, and attend dental check-ups as recommended by your dentist.",
    category: "Patient Care",
  },
  {
    question: "How can I find out which treatment is right for me?",
    answer:
      "The right treatment depends on your dental condition and goals. Arrange a consultation so your dentist can assess your needs and explain the available options.",
    category: "Dental Treatments",
  },
];

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState("All Questions");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "All Questions" ||
      faq.category === activeCategory;

    const query = searchQuery.trim().toLowerCase();

    const matchesSearch =
      !query ||
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-pink-50 px-5 py-16 sm:py-20 lg:px-8">
        <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-violet-200/30 blur-3xl" />

        <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-pink-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white px-5 py-2.5 text-sm font-semibold text-violet-700 shadow-sm">
            <MessageCircleQuestion size={18} />
            Frequently Asked Questions
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Answers to Your{" "}
            <span className="text-violet-700">Questions</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Find helpful information about appointments, dental
            treatments, and patient care at Sakthi Dental Clinic.
          </p>

          <a
            href="#faq-list"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-violet-700 px-7 py-4 font-semibold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-800"
          >
            Explore FAQs
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section
        id="faq-list"
        className="scroll-mt-24 px-5 py-16 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-700">
              How Can We Help?
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              Browse the questions below or search for a topic to
              find the information you need.
            </p>
          </div>

          {/* SEARCH */}
          <div className="mx-auto mt-10 max-w-2xl">
            <label htmlFor="faq-search" className="sr-only">
              Search frequently asked questions
            </label>

            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition focus-within:border-violet-400 focus-within:ring-4 focus-within:ring-violet-100">
              <Search
                size={21}
                className="shrink-0 text-violet-600"
              />

              <input
                id="faq-search"
                type="search"
                value={searchQuery}
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                  setOpenIndex(null);
                }}
                placeholder="Search your question..."
                className="w-full bg-transparent text-slate-800 outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* CATEGORY FILTERS */}
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {faqCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category);
                  setOpenIndex(null);
                }}
                aria-pressed={activeCategory === category}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition duration-200 ${
                  activeCategory === category
                    ? "border-violet-700 bg-violet-700 text-white shadow-md shadow-violet-200"
                    : "border-violet-100 bg-white text-slate-600 hover:border-violet-300 hover:text-violet-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* QUESTIONS */}
          <div className="mt-10 space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <article
                    key={faq.question}
                    className={`overflow-hidden rounded-2xl border bg-white transition duration-200 ${
                      isOpen
                        ? "border-violet-200 shadow-lg shadow-violet-100/60"
                        : "border-slate-200 shadow-sm hover:border-violet-200"
                    }`}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
                      className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7 sm:py-6"
                    >
                      <span className="flex items-start gap-4">
                        <span
                          className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-bold ${
                            isOpen
                              ? "bg-violet-700 text-white"
                              : "bg-violet-50 text-violet-700"
                          }`}
                        >
                          Q
                        </span>

                        <span className="pt-1 text-base font-bold leading-7 text-slate-900 sm:text-lg">
                          {faq.question}
                        </span>
                      </span>

                      <ChevronDown
                        size={21}
                        className={`shrink-0 text-violet-700 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="border-t border-violet-100 bg-violet-50/40 px-5 py-5 sm:px-7 sm:py-6">
                        <div className="flex items-start gap-4">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-violet-700 shadow-sm">
                            <MessageCircleQuestion size={19} />
                          </span>

                          <div>
                            <p className="leading-7 text-slate-600">
                              {faq.answer}
                            </p>

                            <span className="mt-4 inline-flex rounded-full border border-violet-100 bg-white px-3 py-1 text-xs font-semibold text-violet-700">
                              {faq.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </article>
                );
              })
            ) : (
              <div className="rounded-3xl border border-dashed border-violet-200 bg-violet-50/40 px-6 py-12 text-center">
                <Search
                  size={35}
                  className="mx-auto text-violet-500"
                />

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  No matching questions found
                </h3>

                <p className="mt-2 text-slate-600">
                  Try another search term or choose a different category.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All Questions");
                    setOpenIndex(0);
                  }}
                  className="mt-5 rounded-full bg-violet-700 px-5 py-3 font-semibold text-white transition hover:bg-violet-800"
                >
                  Show All Questions
                </button>
              </div>
            )}
          </div>

          <p className="mt-6 text-center text-sm text-slate-500">
            Showing {filteredFaqs.length} of {faqs.length} questions
          </p>
        </div>
      </section>

      {/* PATIENT CARE INFORMATION */}
      <section className="bg-slate-50 px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-violet-100 bg-white p-7 sm:p-9">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
              <ShieldCheck size={28} />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-slate-900">
              Your Health Comes First
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Information on this page is general guidance and is
              not a substitute for a professional dental examination.
              Consult your dentist for advice specific to your needs.
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-violet-800 to-fuchsia-700 p-7 text-white sm:p-9">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
              <HeartHandshake size={28} className="text-white" />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-white">
              Still Have Questions?
            </h2>

            <p className="mt-4 leading-7 text-white/90">
              Contact Sakthi Dental Clinic for further information
              about services, appointment availability, and your
              dental care needs.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link
  href="/contact"
  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold !text-violet-800 shadow-md transition duration-300 hover:-translate-y-1 hover:bg-violet-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
>
  <span className="!text-violet-800">Contact Us</span>
  <ArrowRight size={17} className="!text-violet-800" />
</Link>

              <a
                href="tel:+919862890897"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-transparent px-6 py-3 font-bold text-white transition hover:bg-white/10"
              >
                <span>Call Clinic</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-gradient-to-r from-violet-50 to-pink-50 px-6 py-12 text-center sm:px-12 sm:py-14">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-violet-700 shadow-sm">
            <Sparkles size={28} />
          </div>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">
            Ready to Take Care of Your Smile?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            Get in touch with Sakthi Dental Clinic to discuss your
            questions and explore the available dental care options.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-violet-700 px-7 py-4 font-semibold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-800"
          >
            Request an Appointment
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}