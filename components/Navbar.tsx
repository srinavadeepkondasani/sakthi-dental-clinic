"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, CalendarDays } from "lucide-react";

const navLinks = [
{ label: "Home", href: "/" },
{ label: "About Us", href: "/about" },
{ label: "Treatments", href: "/treatments" },
{ label: "FAQs", href: "/faqs" },
{ label: "Contact", href: "/contact" },
];

export default function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

function closeMenu() {
setMenuOpen(false);
}

return (
  <header className="sticky top-0 z-50 border-b border-violet-100 bg-white/95 backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
      {/* Clinic Branding */}
      <Link
        href="/"
        onClick={closeMenu}
        className="flex shrink-0 items-center gap-3"
        aria-label="Sakthi Dental Clinic home"
      >
        <div
          className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-100 text-xl"
          aria-hidden="true"
        >
          🦷
        </div>
        <div>
          <span className="block text-lg font-bold tracking-tight text-slate-900">
            Sakthi Dental
          </span>
          <span className="block text-xs tracking-wide text-violet-600">
            CARE THAT MAKES YOU SMILE
          </span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav
        aria-label="Main navigation"
        className="hidden items-center gap-6 lg:flex"
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-slate-600 transition hover:text-violet-700"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Desktop Actions */}
      <div className="hidden items-center gap-3 md:flex">
        <a
          href="tel:+919862890897"
          aria-label="Call Sakthi Dental Clinic"
          className="flex items-center gap-2 rounded-full border border-violet-200 px-4 py-3 text-sm font-semibold text-violet-700 transition hover:bg-violet-50"
        >
          <Phone size={16} aria-hidden="true" />
          <span>Call Clinic</span>
        </a>

       <Link
  href="/contact"
  className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-700 px-6 py-3 font-semibold !text-white shadow-md transition hover:bg-violet-800"
>
  <CalendarDays size={18} className="!text-white" />
  <span className="!text-white">Appointment</span>
</Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
        className="rounded-lg p-2 text-slate-800 transition hover:bg-violet-50 focus-visible:outline-violet-600 md:hidden"
      >
        {menuOpen ? <X size={25} /> : <Menu size={25} />}
      </button>
    </div>

    {/* Mobile Navigation */}
    {menuOpen && (
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className="border-t border-violet-100 bg-white px-5 py-4 md:hidden"
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className="block rounded-lg px-3 py-3 font-medium text-slate-700 transition hover:bg-violet-50 hover:text-violet-700"
          >
            {link.label}
          </Link>
        ))}

        <Link
          href="/contact"
          onClick={closeMenu}
          className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-violet-700 px-4 py-3 text-center font-semibold text-white transition hover:bg-violet-800"
        >
          <CalendarDays size={18} aria-hidden="true" />
          Fix an Appointment
        </Link>

        <a
          href="tel:+919862890897"
          className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-violet-200 px-4 py-3 text-center font-semibold text-violet-700 transition hover:bg-violet-50"
        >
          <Phone size={18} aria-hidden="true" />
          Call Clinic
        </a>
      </nav>
    )}
  </header>
);
}
