import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
const links = [
{ label: "Home", href: "/" },
{ label: "About Us", href: "/about" },
{ label: "Treatments", href: "/treatments" },
{ label: "FAQs", href: "/faqs" },
{ label: "Contact Us", href: "/contact" },
{ label: "Privacy Policy", href: "/privacy-policy" },
];

return ( <footer className="bg-slate-950 text-slate-300"> <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-3 lg:px-8">
{/* Clinic Information */} <div> <Link
         href="/"
         className="inline-block text-2xl font-bold text-white transition hover:text-violet-300"
       >
Sakthi Dental Clinic </Link>

      <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
        Compassionate dental care for women, children, and families,
        delivered with comfort and attention to individual needs.
      </p>

      <div className="mt-5 flex items-start gap-3 text-sm leading-6">
        <Clock
          className="mt-1 shrink-0 text-violet-300"
          size={18}
          aria-hidden="true"
        />
        <p>
          <span className="font-medium text-white">Clinic hours</span>
          <br />
          Daily, 9:00 AM – 7:00 PM
        </p>
      </div>
    </div>

    {/* Quick Links */}
    <nav aria-label="Footer navigation">
      <h3 className="font-semibold text-white">Quick Links</h3>

      <div className="mt-4 flex flex-col items-start gap-3 text-sm">
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="transition-colors hover:text-violet-300"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>

    {/* Contact Information */}
    <div>
      <h3 className="font-semibold text-white">Contact Information</h3>

      <address className="mt-4 space-y-4 text-sm not-italic leading-6">
        <a
          href="https://www.google.com/maps/search/?api=1&query=B2%2F8%2C%20SBM%20Layout%2C%20Anthivadi%2C%20Hosur%2C%20Tamil%20Nadu%20635109"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-3 transition-colors hover:text-violet-300"
        >
          <MapPin
            className="mt-1 shrink-0 text-violet-300"
            size={18}
            aria-hidden="true"
          />
          <span>
            B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109, India
          </span>
        </a>

        <a
          href="tel:+919862890897"
          className="flex items-center gap-3 transition-colors hover:text-violet-300"
        >
          <Phone
            className="shrink-0 text-violet-300"
            size={18}
            aria-hidden="true"
          />
          <span>+91 98628 90897</span>
        </a>

        <a
          href="mailto:info@sakthidentalclinic.in"
          className="flex items-start gap-3 transition-colors hover:text-violet-300"
        >
          <Mail
            className="mt-1 shrink-0 text-violet-300"
            size={18}
            aria-hidden="true"
          />
          <span className="break-all">
            info@sakthidentalclinic.in
          </span>
        </a>
      </address>

      <Link
        href="/contact"
        className="mt-6 inline-flex items-center justify-center rounded-full bg-violet-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-600 focus-visible:outline-white"
      >
        Fix an Appointment
      </Link>
    </div>
  </div>

<div className="border-t border-white/10 px-5 py-5 text-center text-sm text-slate-500">
  © 2026 Sakthi Dental Clinic. All rights reserved.
</div>
</footer>

);
}
