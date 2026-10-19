"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";

import {
  MapPin,
  Phone,
  Mail,
  CalendarDays,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

const treatments = [
  "General Dental Consultation",
  "Teeth Cleaning & Scaling",
  "Tooth Filling",
  "Root Canal Treatment",
  "Dental Implants",
  "Tooth Extraction",
  "Wisdom Tooth Extraction",
  "Teeth Whitening",
  "Orthodontic Braces",
  "Clear Aligners",
  "Pediatric Dentistry",
  "Artificial Dentures",
  "Dental Bridge",
  "Veneers",
  "Laser Dentistry",
  "Other / Not Sure",
];

const clinicAddress =
  "B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109, India";

const clinicPhone = "+919862890897";
const clinicEmail = "info@sakthidentalclinic.in";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [minimumDate, setMinimumDate] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
    date: "",
    time: "",
    message: "",
  });

  // Calculate today's date after the component mounts.
  // This avoids using a time-dependent value during the initial render.
  useEffect(() => {
    const today = new Date();

    const formattedDate = [
      today.getFullYear(),
      String(today.getMonth() + 1).padStart(2, "0"),
      String(today.getDate()).padStart(2, "0"),
    ].join("-");

    setMinimumDate(formattedDate);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setFormError("");
    setSubmitted(false);

    const normalizedPhone = formData.phone.replace(/\D/g, "");

    if (normalizedPhone.length < 10 || normalizedPhone.length > 15) {
      setFormError("Please enter a valid phone number.");
      return;
    }

    if (formData.date && formData.date < minimumDate) {
      setFormError("Please select today or a future date.");
      return;
    }

    const emailSubject = encodeURIComponent(
      `Appointment Enquiry - ${formData.name}`
    );

    const emailBody = encodeURIComponent(
      [
        "Appointment enquiry for Sakthi Dental Clinic",
        "",
        `Name: ${formData.name}`,
        `Phone: ${formData.phone}`,
        `Email: ${formData.email || "Not provided"}`,
        `Treatment: ${formData.treatment}`,
        `Preferred Date: ${formData.date || "Not specified"}`,
        `Preferred Time: ${formData.time || "Not specified"}`,
        "",
        "Additional Information:",
        formData.message || "None provided",
        "",
        "Please contact me regarding appointment availability.",
      ].join("\n")
    );

    const mailtoLink =
      `mailto:${clinicEmail}` +
      `?subject=${emailSubject}&body=${emailBody}`;

    setSubmitted(true);
    window.location.href = mailtoLink;
  }

  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-pink-50 px-5 py-16 sm:py-20 lg:px-8">
        <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-violet-200/30 blur-3xl" />

        <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-pink-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white px-5 py-2.5 text-sm font-semibold text-violet-700 shadow-sm">
            <HeartHandshake size={17} />
            We Are Here to Help
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Let&apos;s Talk About{" "}
            <span className="text-violet-700">Your Smile</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Have a question or want to schedule a dental visit?
            Get in touch with Sakthi Dental Clinic. We look forward
            to helping you explore the right care for your needs.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${clinicPhone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-700 px-7 py-4 font-semibold !text-white shadow-lg shadow-violet-200 transition duration-300 hover:-translate-y-0.5 hover:bg-violet-800"
            >
              <Phone size={18} className="shrink-0" />
              <span>Call Our Clinic</span>
            </a>

            <a
              href="#appointment-form"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-violet-200 bg-white px-7 py-4 font-semibold text-violet-700 transition hover:bg-violet-50"
            >
              <CalendarDays size={18} />
              Request an Appointment
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION CARDS */}
      <section className="px-5 py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {/* ADDRESS */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=B2%2F8%2C%20SBM%20Layout%2C%20Anthivadi%2C%20Hosur%2C%20Tamil%20Nadu%20635109"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl border border-violet-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-100/60"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-700 transition group-hover:bg-violet-700 group-hover:text-white">
              <MapPin size={27} />
            </div>

            <h2 className="mt-5 text-xl font-bold text-slate-900">
              Visit Our Clinic
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              {clinicAddress}
            </p>

            <span className="mt-5 inline-flex items-center gap-2 font-semibold text-violet-700">
              Get Directions
              <ArrowRight size={16} />
            </span>
          </a>

          {/* PHONE */}
          <a
            href={`tel:${clinicPhone}`}
            className="group rounded-3xl border border-violet-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-100/60"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-700 transition group-hover:bg-violet-700 group-hover:text-white">
              <Phone size={27} />
            </div>

            <h2 className="mt-5 text-xl font-bold text-slate-900">
              Call Us
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Speak with our clinic regarding appointments and
              general enquiries.
            </p>

            <span className="mt-4 block font-semibold text-violet-700">
              +91 98628 90897
            </span>
          </a>

          {/* EMAIL */}
          <a
            href={`mailto:${clinicEmail}`}
            className="group rounded-3xl border border-violet-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-100/60"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-700 transition group-hover:bg-violet-700 group-hover:text-white">
              <Mail size={27} />
            </div>

            <h2 className="mt-5 text-xl font-bold text-slate-900">
              Email Us
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Send us your questions or appointment enquiries.
            </p>

            <span className="mt-4 block break-all font-semibold text-violet-700">
              {clinicEmail}
            </span>
          </a>
        </div>
      </section>

      {/* APPOINTMENT FORM AND MAP */}
      <section className="bg-slate-50 px-5 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          {/* APPOINTMENT FORM */}
          <div
            id="appointment-form"
            className="scroll-mt-28 rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm sm:p-10"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-700">
              Appointment Enquiry
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              How Can We Help You?
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Fill in your details and preferred appointment information.
              Your email application will open with the enquiry prepared.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {/* NAME AND PHONE */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Full Name *
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your full name"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        name: event.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Phone Number *
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Enter your phone number"
                    required
                    maxLength={20}
                    value={formData.phone}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        phone: event.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  maxLength={254}
                  value={formData.email}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      email: event.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                />
              </div>

              {/* TREATMENT */}
              <div>
                <label
                  htmlFor="treatment"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  What Do You Need Help With? *
                </label>

                <select
                  id="treatment"
                  name="treatment"
                  required
                  value={formData.treatment}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      treatment: event.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                >
                  <option value="" disabled>
                    Select a dental service
                  </option>

                  {treatments.map((treatment) => (
                    <option key={treatment} value={treatment}>
                      {treatment}
                    </option>
                  ))}
                </select>
              </div>

              {/* DATE AND TIME */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="date"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Preferred Date
                  </label>

                  <input
                    id="date"
                    name="date"
                    type="date"
                    min={minimumDate || undefined}
                    value={formData.date}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        date: event.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="time"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Preferred Time
                  </label>

                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        time: event.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                  >
                    <option value="">Select a time</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                  </select>
                </div>
              </div>

              {/* ADDITIONAL INFORMATION */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Additional Information
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={1000}
                  placeholder="Tell us briefly about your enquiry..."
                  value={formData.message}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      message: event.target.value,
                    })
                  }
                  className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                />
              </div>

              {/* VALIDATION ERROR */}
              {formError && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
                >
                  {formError}
                </div>
              )}

              {/* SUBMISSION NOTICE */}
              {submitted && (
                <div
                  role="status"
                  className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm leading-6 text-green-800"
                >
                  <div className="flex items-start gap-2">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0"
                    />

                    <p>
                      Your email application should open with the enquiry
                      details. Send the email to complete your request.
                      Your appointment is not confirmed until the clinic
                      responds.
                    </p>
                  </div>
                </div>
              )}

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-violet-700 px-6 py-4 font-semibold !text-white shadow-lg shadow-violet-200 transition duration-300 hover:-translate-y-0.5 hover:bg-violet-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-200"
              >
                <CalendarDays size={19} className="shrink-0" />
                <span>Prepare Appointment Enquiry</span>
                <ArrowRight size={18} className="shrink-0" />
              </button>

              <p className="text-center text-xs leading-6 text-slate-500">
                This form prepares an email. It does not automatically
                send your details or confirm an appointment.
              </p>
            </form>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            {/* GOOGLE MAP */}
            <div className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm">
              <div className="p-6 sm:p-8">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-700">
                  Find Us
                </p>

                <h2 className="mt-3 text-2xl font-bold text-slate-900">
                  Visit Sakthi Dental Clinic
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {clinicAddress}
                </p>
              </div>

              <iframe
                title="Map showing Sakthi Dental Clinic in Hosur"
                src="https://maps.google.com/maps?q=B2%2F8%2C%20SBM%20Layout%2C%20Anthivadi%2C%20Hosur%2C%20Tamil%20Nadu%20635109&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
              />

              <div className="p-5">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=B2%2F8%2C%20SBM%20Layout%2C%20Anthivadi%2C%20Hosur%2C%20Tamil%20Nadu%20635109"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-violet-700 transition hover:text-violet-900"
                >
                  Open Google Maps
                  <ArrowRight size={17} />
                </a>
              </div>
            </div>

            {/* NEED ASSISTANCE */}
            <div className="rounded-[2rem] bg-gradient-to-br from-violet-800 to-fuchsia-700 p-7 text-white sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <MessageCircle size={28} className="text-white" />
              </div>

              <h2 className="mt-5 text-2xl font-bold text-white">
                Need Assistance?
              </h2>

              <p className="mt-3 leading-7 text-white">
                Contact our clinic directly if you have questions about
                dental services or appointment availability.
              </p>

              {/* FIXED CALL BUTTON */}
              <a
                href={`tel:${clinicPhone}`}
                aria-label="Call Sakthi Dental Clinic"
                className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold !text-violet-800 shadow-md transition duration-300 hover:-translate-y-1 hover:bg-violet-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
              >
                <Phone
                  size={18}
                  className="shrink-0 !text-violet-800"
                  aria-hidden="true"
                />
                <span className="whitespace-nowrap !text-violet-800">
                  Call the Clinic
                </span>
              </a>
            </div>

            {/* PATIENT COMFORT */}
            <div className="rounded-3xl border border-violet-100 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                  <ShieldCheck size={24} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Your Comfort Matters
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Every patient deserves clear information, respectful
                    communication, and attention to their individual
                    dental care needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-gradient-to-r from-violet-50 to-pink-50 px-6 py-12 text-center sm:px-12 sm:py-14">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            We Look Forward to Hearing From You
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            Explore our dental services or learn more about the
            people and values behind Sakthi Dental Clinic.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/treatments"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-700 px-7 py-4 font-semibold !text-white transition hover:bg-violet-800"
            >
              Explore Treatments
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-violet-200 bg-white px-7 py-4 font-semibold text-violet-700 transition hover:bg-violet-50"
            >
              About Our Clinic
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}