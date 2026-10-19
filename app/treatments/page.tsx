import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Smile,
  Baby,
  HeartPulse,
  ScanFace,
  Stethoscope,
  CircleCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dental Treatments",
  description:
    "Explore dental treatments at Sakthi Dental Clinic, Hosur, including dental implants, root canal therapy, braces, teeth cleaning, and pediatric dentistry.",
};

const treatments = [
  {
    title: "Teeth Cleaning & Scaling",
    description:
      "Professional cleaning to remove plaque and tartar, support gum health, and help maintain good oral hygiene.",
    icon: Sparkles,
    category: "Preventive Care",
  },
  {
    title: "Tooth Filling",
    description:
      "Restore teeth affected by cavities, minor damage, or wear using appropriate dental filling materials.",
    icon: ShieldCheck,
    category: "Restorative Care",
  },
  {
    title: "Tooth Extraction",
    description:
      "Careful removal of teeth when they cannot be preserved or when extraction is recommended after evaluation.",
    icon: Stethoscope,
    category: "Oral Surgery",
  },
  {
    title: "Artificial Complete Denture",
    description:
      "Customized complete dentures designed to restore appearance and everyday oral function for patients missing all teeth in an arch.",
    icon: Smile,
    category: "Restorative Care",
  },
  {
    title: "Dental Implants",
    description:
      "Implant-based tooth replacement options planned according to individual dental and bone conditions.",
    icon: CircleCheck,
    category: "Restorative Care",
  },
  {
    title: "Laser Dentistry",
    description:
      "Laser-assisted dental procedures for selected treatments involving gum tissue and other suitable dental conditions.",
    icon: Sparkles,
    category: "Advanced Dentistry",
  },
  {
    title: "Root Canal Therapy",
    description:
      "Treatment intended to remove infected tissue inside a tooth and help preserve the natural tooth when possible.",
    icon: HeartPulse,
    category: "Restorative Care",
  },
  {
    title: "Wisdom Tooth Extraction",
    description:
      "Assessment and removal of problematic wisdom teeth when they cause pain, infection, or other dental concerns.",
    icon: Stethoscope,
    category: "Oral Surgery",
  },
  {
    title: "Fixed Partial Denture (Bridge)",
    description:
      "Custom dental bridges designed to replace missing teeth and restore appearance and chewing function.",
    icon: Smile,
    category: "Restorative Care",
  },
  {
    title: "Teeth Whitening (Bleaching)",
    description:
      "Professional whitening options to improve the appearance of discolored teeth following dental assessment.",
    icon: Sparkles,
    category: "Cosmetic Dentistry",
  },
  {
    title: "Veneers",
    description:
      "Custom-made shells designed to improve the appearance of selected teeth affected by chips, gaps, or discoloration.",
    icon: ScanFace,
    category: "Cosmetic Dentistry",
  },
  {
    title: "Pediatric Dentistry",
    description:
      "Child-friendly dental care focused on preventive check-ups, oral hygiene, and healthy dental development.",
    icon: Baby,
    category: "Children's Dentistry",
  },
  {
    title: "Flap Surgery",
    description:
      "A periodontal surgical procedure used in selected cases to access and treat deeper areas affected by gum disease.",
    icon: HeartPulse,
    category: "Gum Care",
  },
  {
    title: "Orthodontic Braces",
    description:
      "Orthodontic treatment options to correct tooth alignment and improve bite function.",
    icon: Smile,
    category: "Orthodontics",
  },
  {
    title: "Clear Aligners",
    description:
      "Transparent, removable orthodontic trays designed to gradually move teeth according to an individualized treatment plan.",
    icon: ScanFace,
    category: "Orthodontics",
  },
  {
    title: "Orthodontic Consultation",
    description:
      "An assessment to discuss tooth alignment, available treatment options, and an appropriate orthodontic plan.",
    icon: Stethoscope,
    category: "Orthodontics",
  },
];

export default function TreatmentsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-50 via-white to-pink-50 px-5 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white px-4 py-2 text-sm font-semibold text-violet-700 shadow-sm">
            <Sparkles size={16} />
            Complete Dental Care
          </span>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Explore Our{" "}
            <span className="text-violet-700">Dental Treatments</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Discover dental care options for preventive health, restoring
            smiles, improving tooth alignment, and supporting your family's
            oral health.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet-700 px-7 py-4 font-semibold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-800"
          >
            Fix an Appointment
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Treatment Cards */}
      <section className="px-5 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-700">
              Our Services
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Dental Care for Every Smile
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Our services cover preventive, restorative, cosmetic,
              orthodontic, and other dental care needs. Your dentist can
              recommend appropriate treatment after an examination.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.map((treatment, index) => {
              const Icon = treatment.icon;

              return (
                <article
                  key={treatment.title}
                  className="group flex flex-col rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/70"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-700 transition group-hover:bg-violet-700 group-hover:text-white">
                      <Icon size={27} />
                    </div>

                    <span className="text-sm font-semibold text-slate-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-6 text-xs font-bold uppercase tracking-wider text-violet-700">
                    {treatment.category}
                  </p>

                  <h3 className="mt-2 text-xl font-bold leading-snug text-slate-900">
                    {treatment.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                    {treatment.description}
                  </p>

                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-700 transition hover:text-violet-900"
                  >
                    Enquire About Treatment
                    <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-violet-50 px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-gradient-to-r from-violet-800 to-fuchsia-700 px-6 py-12 text-center text-white sm:px-12 sm:py-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Let's Care for Your Smile
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-violet-100">
            Contact Sakthi Dental Clinic to discuss your dental concerns and
            learn about the treatment options suitable for you.
          </p>

          <Link
  href="/contact"
  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-bold !text-violet-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-violet-100"
>
  <span className="!text-violet-800">Book an Appointment</span>
  <ArrowRight size={18} className="!text-violet-800" />
</Link>
        </div>
      </section>
    </main>
  );
}