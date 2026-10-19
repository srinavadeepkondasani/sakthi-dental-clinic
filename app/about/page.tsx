import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Smile,
  Award,
  Users,
  Clock,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover Sakthi Dental Clinic in Hosur, learn about founder Dr. Anupriya, our dental team, and our commitment to compassionate dental care.",
};

const doctors = [
  {
    name: "Dr. Anupriya",
    role: "Founder",
  },
  {
    name: "Dr. Ananya Iyer",
    role: "Prosthodontist",
  },
  {
    name: "Dr. Meera Subramanian",
    role: "Endodontist",
  },
  {
    name: "Dr. Arvind Kumar",
    role: "Dental Surgeon",
  },
  {
    name: "Dr. Sneha N",
    role: "Orthodontist",
  },
  {
    name: "Dr. Srinivas Rohit Ramanujam",
    role: "Implantologist",
  },
  {
    name: "Dr. Balu",
    role: "Laser Surgeon",
  },
  {
    name: "Dr. Vikram Raj Kishore",
    role: "Aligners Partner",
  },
  {
    name: "Dr. Ajay Jumar",
    role: "Oral & Maxillofacial Surgeon",
  },
];

const values = [
  {
    icon: HeartHandshake,
    title: "Patient-Centred Care",
    description:
      "We prioritize patient comfort, clear communication, and personalized attention throughout the dental care journey.",
  },
  {
    icon: ShieldCheck,
    title: "Experienced Team",
    description:
      "Our dental team includes professionals with different areas of focus to address a variety of dental care needs.",
  },
  {
    icon: Sparkles,
    title: "Modern Dentistry",
    description:
      "We aim to combine modern dental techniques with a welcoming and patient-friendly environment.",
  },
];

const milestones = [
  {
    period: "2000",
    title: "Professional Journey Begins",
    description:
      "Dr. Anupriya graduated and began her professional journey in dentistry.",
  },
  {
    period: "Clinical Experience",
    title: "Experience at Mathura Clinic",
    description:
      "She spent six years at Mathura Clinic developing her clinical skills and commitment to patient well-being.",
  },
  {
    period: "2004",
    title: "Sakthi Dental Clinic Established",
    description:
      "Dr. Anupriya established Sakthi Dental Clinic in Hosur with a vision of making quality dental care accessible.",
  },
  {
    period: "Community Service",
    title: "Commitment Beyond the Clinic",
    description:
      "Her professional journey includes long-standing service as a dental consultant at the Primary Health Center at Chandara Hospital.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-800">

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-violet-50 via-white to-pink-50 px-5 py-20 sm:py-24 lg:px-8">
        <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-violet-200/30 blur-3xl" />

        <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-pink-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white px-5 py-2.5 text-sm font-semibold text-violet-700 shadow-sm">
            <HeartHandshake size={17} />
            Your Trusted Partner in Dental Care
          </span>

          <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            About{" "}
            <span className="text-violet-700">
              Sakthi Dental Clinic
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Dedicated to compassionate dental care for women, children,
            and families, with a focus on comfort, personalized attention,
            and long-term oral health.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-700 px-7 py-4 font-semibold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-800"
            >
              Connect With Our Clinic
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/treatments"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-violet-200 bg-white px-7 py-4 font-semibold text-violet-700 transition hover:bg-violet-50"
            >
              Explore Treatments
            </Link>
          </div>
        </div>
      </section>

      {/* CLINIC INTRODUCTION */}
      <section className="px-5 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          {/* Actual Clinic Reception Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-violet-100 bg-white p-3 shadow-xl shadow-violet-100/60">
              <div className="relative h-[300px] overflow-hidden rounded-[1.5rem] sm:h-[420px]">
                <Image
                  src="/images/clinic-reception.jpg"
                  alt="Reception area at Sakthi Dental Clinic"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-700 hover:scale-105"
                  priority
                />
              </div>

              <div className="p-5 sm:p-7">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-700">
                  Welcome to Our Clinic
                </p>

                <h2 className="mt-3 text-2xl font-bold text-slate-900">
                  A Welcoming Space for Your Smile
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  A comfortable environment for patients seeking dental
                  care for themselves and their families.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-4 -z-10 h-32 w-32 rounded-full bg-violet-200/60 blur-2xl" />
          </div>

          {/* Clinic Story */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-700">
              Our Story
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Get to Know Sakthi Dental Clinic
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-slate-600">
              <p>
                Established in Hosur in 2004 by Dr. Anupriya,
                Sakthi Dental Clinic was founded with a vision of making
                quality dental care accessible to the community.
              </p>

              <p>
                The clinic focuses on providing dental services in a
                welcoming environment, with attention to patient comfort
                and individual needs.
              </p>

              <p>
                From preventive dental care to restorative and cosmetic
                treatments, the clinic aims to help patients understand
                their oral health and available treatment options.
              </p>

              <p>
                Our goal is to make every visit a comfortable and
                informative experience for individuals and families.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-violet-100 bg-violet-50/70 p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-violet-700 shadow-sm">
                  <HeartHandshake size={23} />
                </div>

                <h3 className="mt-4 font-bold text-slate-900">
                  Compassionate Care
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  A patient-friendly approach focused on comfort and care.
                </p>
              </div>

              <div className="rounded-2xl border border-pink-100 bg-pink-50/70 p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-pink-600 shadow-sm">
                  <Smile size={23} />
                </div>

                <h3 className="mt-4 font-bold text-slate-900">
                  Family Dentistry
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Dental care options for different ages and needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER PROFILE */}
      <section className="bg-gradient-to-br from-violet-50 via-white to-pink-50 px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          {/* Clinic Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative h-[300px] overflow-hidden rounded-[2rem] border-4 border-white shadow-xl sm:h-[420px]">
              <Image
                src="/images/clinic-interior.jpg"
                alt="Interior of Sakthi Dental Clinic"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-6 right-4 rounded-2xl border border-violet-100 bg-white p-5 shadow-xl sm:right-8 sm:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                  <Award size={25} />
                </div>

                <div>
                  <p className="font-bold text-slate-900">
                    Dr. Anupriya
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Founder
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Founder Details */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-700">
              Meet Our Founder
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Dr. Anupriya
            </h2>

            <p className="mt-3 text-lg font-medium text-violet-700">
              Founder, Sakthi Dental Clinic
            </p>

            <p className="mt-6 leading-8 text-slate-600">
              Dr. Anupriya began her professional journey after graduating
              in 2000. Her six years at Mathura Clinic helped her refine
              her clinical skills and strengthen her commitment to
              patient well-being.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              In 2004, she established Sakthi Dental Clinic in Hosur
              with a vision of making quality dental care accessible
              to the community.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Her professional journey also includes long-standing
              service as a dental consultant with the Primary Health
              Center at Chandara Hospital.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Patient-focused dental care",
                "Commitment to community well-being",
                "A welcoming environment for families",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-1 shrink-0 text-violet-700"
                  />

                  <p className="leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAREER JOURNEY */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-700">
              Professional Journey
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A Journey of Care and Commitment
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Important milestones from Dr. Anupriya's professional journey
              and the establishment of Sakthi Dental Clinic.
            </p>
          </div>

          <div className="relative mt-12 space-y-6">
            <div className="absolute bottom-8 left-[23px] top-8 hidden w-0.5 bg-violet-200 sm:block" />

            {milestones.map((milestone, index) => (
              <article
                key={milestone.title}
                className="relative grid gap-4 rounded-3xl border border-violet-100 bg-white p-6 shadow-sm transition hover:border-violet-200 hover:shadow-lg sm:grid-cols-[160px_1fr] sm:gap-8 sm:p-8"
              >
                <div className="flex items-start gap-4 sm:block">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                    {index === 0 ? (
                      <Award size={23} />
                    ) : index === 1 ? (
                      <Stethoscope size={23} />
                    ) : index === 2 ? (
                      <Sparkles size={23} />
                    ) : (
                      <HeartHandshake size={23} />
                    )}
                  </div>

                  <p className="mt-1 font-bold text-violet-700 sm:mt-4">
                    {milestone.period}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {milestone.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {milestone.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="bg-slate-50 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-700">
              What Guides Us
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Care Built Around You
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Our approach combines professional dental services with
              compassion, patient comfort, and attention to individual needs.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="rounded-3xl border border-violet-100 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-100"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {value.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-700">
              Our Purpose
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Our Vision & Mission
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-violet-100 bg-white p-8 shadow-sm sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                <HeartHandshake size={28} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Our Mission
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                To provide personalized, compassionate, and advanced dental
                services in a welcoming environment. We aim to help patients
                feel comfortable and confident while taking care of their
                oral health.
              </p>
            </article>

            <article className="rounded-3xl border border-pink-100 bg-gradient-to-br from-violet-50 to-pink-50 p-8 sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-violet-700 shadow-sm">
                <Sparkles size={28} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Our Vision
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                To contribute to better oral health through patient-focused
                care, continuous learning, innovation, preventive awareness,
                and a lasting commitment to the community.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* DENTAL TEAM */}
      <section className="bg-slate-50 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-700">
              Our Dental Team
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Meet Our Doctors
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Our clinic profile lists dental professionals with different
              areas of specialization and focus.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor) => (
              <article
                key={doctor.name}
                className="group rounded-3xl border border-slate-100 bg-white p-6 transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-700 transition group-hover:bg-violet-700 group-hover:text-white">
                  <Users size={26} />
                </div>

                <h3 className="mt-5 text-lg font-bold leading-snug text-slate-900">
                  {doctor.name}
                </h3>

                <p className="mt-2 text-sm font-medium text-violet-700">
                  {doctor.role}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-6 text-center text-xs leading-5 text-slate-500">
            Doctor names, qualifications, and current affiliations should
            be confirmed by the clinic before publication.
          </p>
        </div>
      </section>

      {/* CLINIC FACILITIES */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-700">
                Our Environment
              </p>

              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                A Look Inside Our Clinic
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Explore the clinic environment and treatment spaces at
                Sakthi Dental Clinic. We aim to make dental visits
                welcoming and comfortable for patients and families.
              </p>

              <div className="mt-7 flex items-start gap-3">
                <ShieldCheck
                  className="mt-1 shrink-0 text-violet-700"
                  size={22}
                />

                <p className="leading-7 text-slate-600">
                  Our focus is on patient comfort, clear communication,
                  and appropriate dental care.
                </p>
              </div>

              <div className="mt-5 flex items-start gap-3">
                <Clock
                  className="mt-1 shrink-0 text-violet-700"
                  size={22}
                />

                <p className="leading-7 text-slate-600">
                  Contact our clinic to confirm opening hours and
                  appointment availability.
                </p>
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet-700 px-6 py-3 font-semibold text-white transition hover:bg-violet-800"
              >
                Contact Our Clinic
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative h-64 overflow-hidden rounded-3xl sm:col-span-2 sm:h-72">
                <Image
                  src="/images/clinic-treatment-room.jpg"
                  alt="Dental treatment room at Sakthi Dental Clinic"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="relative h-48 overflow-hidden rounded-3xl sm:col-span-2">
                <Image
                  src="/images/clinic-interior.jpg"
                  alt="Interior facilities at Sakthi Dental Clinic"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-gradient-to-r from-violet-800 to-fuchsia-700 px-6 py-12 text-center text-white sm:px-12 sm:py-16">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
            <Smile size={30} />
          </div>

          <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-bold sm:text-4xl">
            Your Smile Deserves Thoughtful Care
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-violet-100">
            Contact Sakthi Dental Clinic to learn more about our services
            and discuss your dental care needs.
          </p>

      <Link
  href="/contact"
  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-bold !text-violet-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-violet-100"
>
  <span className="!text-violet-800">Get in Touch</span>
  <ArrowRight size={18} className="!text-violet-800" />
</Link>
        </div>
      </section>
    </main>
  );
}