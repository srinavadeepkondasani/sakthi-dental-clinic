import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Baby,
  Smile,
  Stethoscope,
  CalendarDays,
  CheckCircle2,
  Star,
  Clock,
  MapPin,
  Phone,
  Users,
  Heart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sakthi Dental Clinic | Compassionate Dental Care in Hosur",
  description:
    "Discover compassionate dental care for women, children, and families at Sakthi Dental Clinic, Hosur. Explore treatments and contact our clinic for appointments.",
};

const treatments = [
  {
    icon: Sparkles,
    title: "Teeth Cleaning & Scaling",
    description:
      "Professional cleaning to remove plaque and tartar and support healthier gums.",
  },
  {
    icon: Smile,
    title: "Teeth Whitening",
    description:
      "Explore suitable whitening options to help brighten your smile.",
  },
  {
    icon: Stethoscope,
    title: "Root Canal Treatment",
    description:
      "Treatment options for teeth affected by infection or damage.",
  },
  {
    icon: ShieldCheck,
    title: "Dental Implants",
    description:
      "Discuss tooth-replacement options designed around your dental needs.",
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    description:
      "Gentle dental care and guidance for children's developing smiles.",
  },
  {
    icon: HeartHandshake,
    title: "Braces & Aligners",
    description:
      "Explore orthodontic options to improve tooth alignment and your smile.",
  },
];

const reasons = [
  {
    icon: HeartHandshake,
    title: "Patient-Centred Care",
    description:
      "We focus on comfort, clear communication, and care tailored to individual needs.",
  },
  {
    icon: Users,
    title: "Care for the Whole Family",
    description:
      "Dental care options for women, children, and other members of the family.",
  },
  {
    icon: ShieldCheck,
    title: "Experienced Dental Team",
    description:
      "Our clinic profile includes dental professionals with different areas of focus.",
  },
  {
    icon: Sparkles,
    title: "Modern Approach",
    description:
      "We aim to combine contemporary dental techniques with a welcoming environment.",
  },
];

const testimonials = [
  {
    quote:
      "The clinic has a welcoming environment, and the team takes time to explain the treatment.",
    name: "Patient feedback",
    detail: "Example testimonial — approval required",
  },
  {
    quote:
      "I appreciated the clear communication and the attention given to my dental care.",
    name: "Patient feedback",
    detail: "Example testimonial — approval required",
  },
  {
    quote:
      "The clinic environment felt comfortable, and the treatment options were explained clearly.",
    name: "Patient feedback",
    detail: "Example testimonial — approval required",
  },
];

const facilities = [
  {
    icon: MapPin,
    title: "Convenient Location",
    description:
      "Find us in SBM Layout, Anthivadi, Hosur, Tamil Nadu.",
  },
  {
    icon: Heart,
    title: "Patient Comfort",
    description:
      "We aim to make dental visits welcoming and comfortable for patients and families.",
  },
  {
    icon: CalendarDays,
    title: "Appointment Support",
    description:
      "Contact our clinic to discuss your needs and appointment availability.",
  },
];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      {/* HERO SECTION */}
      <section className="relative bg-[#fbfaff]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-14 lg:px-10 lg:py-24">
          {/* Hero text */}
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white px-4 py-2 text-sm font-semibold text-violet-800 shadow-sm">
              <ShieldCheck size={17} />
              Thoughtful Care. Healthier Smiles.
            </div>

            <h1 className="max-w-2xl text-4xl font-bold leading-[1.13] tracking-tight text-slate-950 sm:text-5xl lg:text-[58px]">
              Specialized Dental Care for{" "}
              <span className="text-violet-700">
                Women, Children & Families
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Experience compassionate, expert-led dental services tailored
              to your needs, all in a modern and welcoming environment.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-violet-700 px-7 py-4 font-semibold !text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-800"
              >
                <CalendarDays size={19} />
                <span className="!text-white">Fix an Appointment</span>
                <ArrowRight size={18} className="!text-white" />
              </Link>

              <Link
                href="/treatments"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-800 transition hover:border-violet-300 hover:bg-violet-50"
              >
                Explore Treatments
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-violet-700" />
                Patient-focused care
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-violet-700" />
                Family-friendly approach
              </span>
            </div>

            <div className="mt-8 flex items-start gap-3 border-t border-slate-200 pt-6">
              <MapPin
                size={20}
                className="mt-1 shrink-0 text-violet-700"
              />
              <p className="text-sm leading-6 text-slate-600">
                B2/8, SBM Layout, Anthivadi,
                <br />
                Hosur, Tamil Nadu 635109
              </p>
            </div>
          </div>

          {/* Actual clinic photo */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-pink-200/50 blur-3xl" />
            <div className="absolute -bottom-6 -left-5 h-40 w-40 rounded-full bg-violet-200/60 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-white bg-white shadow-2xl shadow-violet-200/50">
              <div className="relative aspect-[4/4.4] sm:aspect-[4/3.7] lg:aspect-[4/4.5]">
                <Image
                 src="/images/clinic-interior.jpg"
                  alt="Interior of Sakthi Dental Clinic in Hosur"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                 className="object-cover brightness-110 contrast-105"
                />
              </div>
            </div>

            <div className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-violet-100 bg-white p-4 shadow-xl sm:bottom-6 sm:left-auto sm:right-[-18px] sm:max-w-[260px] sm:p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                  <Smile size={27} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">
                    Your Smile Matters
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Care for every stage of life
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BANNER */}
      <section className="px-5 py-12 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-3xl bg-violet-800 px-6 py-9 text-center text-white sm:px-10 lg:flex-row lg:px-14 lg:text-left">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:text-left">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15">
              <HeartHandshake size={30} />
            </div>

            <div>
              <h2 className="text-xl font-bold sm:text-2xl">
                You are always in safe hands.
              </h2>
              <p className="mt-2 leading-7 text-violet-100">
                We are ready to help, anytime.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold !text-violet-800 transition hover:bg-violet-100"
          >
            <span className="!text-violet-800">Get in Touch</span>
            <ArrowRight size={18} className="!text-violet-800" />
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-700">
              Why Sakthi Dental Clinic
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Dental Care That Puts You First
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Every smile is different. We aim to provide a welcoming
              experience with attention to your individual dental needs.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <article
                  key={reason.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/60 sm:p-7"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-700 transition group-hover:bg-violet-700 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-slate-900">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {reason.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TREATMENTS */}
      <section className="bg-slate-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-700">
                Our Dental Services
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Care for Every Smile
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Explore dental treatment options and contact our team to
                understand which services may be suitable for you.
              </p>
            </div>

            <Link
              href="/treatments"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 self-start rounded-xl border border-violet-200 bg-white px-5 py-3 font-semibold text-violet-800 transition hover:bg-violet-50 sm:self-auto"
            >
              View All Treatments
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.map((treatment) => {
              const Icon = treatment.icon;

              return (
                <Link
                  href="/treatments"
                  key={treatment.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/60 sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-700 transition group-hover:bg-violet-700 group-hover:text-white">
                      <Icon size={27} />
                    </div>

                    <ArrowRight
                      size={20}
                      className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-violet-700"
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {treatment.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {treatment.description}
                  </p>

                  <span className="mt-5 inline-block text-sm font-semibold text-violet-700">
                    Explore treatment
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLINIC GALLERY */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-700">
              Our Clinic
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              A Welcoming Space for Your Smile
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Take a look at the spaces where we welcome patients and
              provide dental care.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <div className="group relative min-h-[300px] overflow-hidden rounded-3xl sm:min-h-[420px]">
              <Image
                src="/images/clinic-interior.jpg"
                alt="Interior of Sakthi Dental Clinic"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-violet-200">
                  Our Environment
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  Comfortable Clinic Interior
                </h3>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="group relative min-h-[220px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/clinic-treatment-room.jpg"
                  alt="Dental treatment room at Sakthi Dental Clinic"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white">
                    Dental Treatment Room
                  </h3>
                </div>
              </div>

              <div className="group relative min-h-[220px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/clinic-reception.jpg"
                  alt="Reception at Sakthi Dental Clinic"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white">
                    Welcome to Sakthi Dental Clinic
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-semibold text-violet-700 transition hover:text-violet-900"
            >
              Learn More About Our Clinic
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="bg-[#fbfaff] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-700">
              Your Visit
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Here for Your Dental Care
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              We want you to feel informed and comfortable when planning
              your visit.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {facilities.map((facility) => {
              const Icon = facility.icon;

              return (
                <article
                  key={facility.title}
                  className="rounded-2xl border border-violet-100 bg-white p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {facility.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {facility.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center text-sm text-slate-600 sm:flex-row">
            <Clock size={18} className="text-violet-700" />
            Please contact the clinic to confirm current opening hours.
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-700">
              Patient Experiences
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Care That Starts with Listening
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              We believe clear communication and patient comfort are
              important parts of a positive dental-care experience.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <article
                key={index}
                className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7"
              >
                <div className="flex gap-1 text-amber-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={17} />
                  ))}
                </div>

                <p className="mt-5 leading-7 text-slate-700">
                  “{testimonial.quote}”
                </p>

                <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="font-bold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {testimonial.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-5 text-center text-xs leading-6 text-slate-500">
            Note: These are sample testimonials for layout demonstration.
            Replace them with genuine, approved patient feedback before
            publishing.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-violet-800 px-6 py-12 text-center text-white sm:px-12 sm:py-16 lg:px-20">
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-fuchsia-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-violet-400/30 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
              <Smile size={30} />
            </div>

            <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Ready to Take the Next Step Toward Your Smile?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-violet-100">
              Get in touch with Sakthi Dental Clinic to discuss your dental
              care needs and explore available appointment options.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 font-bold !text-violet-800 transition hover:-translate-y-0.5 hover:bg-violet-50"
              >
                <CalendarDays size={19} className="!text-violet-800" />
                <span className="!text-violet-800">Fix an Appointment</span>
                <ArrowRight size={18} className="!text-violet-800" />
              </Link>

              <a
                href="tel:+919862890897"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-4 font-semibold !text-white transition hover:bg-white/20"
              >
                <Phone size={18} className="!text-white" />
                <span className="!text-white">Call the Clinic</span>
              </a>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-2 text-sm text-violet-100 sm:flex-row sm:gap-3">
              <MapPin size={17} />
              B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}