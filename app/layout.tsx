import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
variable: "--font-geist-sans",
subsets: ["latin"],
});

const geistMono = Geist_Mono({
variable: "--font-geist-mono",
subsets: ["latin"],
});

export const metadata: Metadata = {
title: {
default: "Sakthi Dental Clinic | Compassionate Dental Care",
template: "%s | Sakthi Dental Clinic",
},
description:
"Discover compassionate dental care for women, children, and families at Sakthi Dental Clinic, Hosur. Explore dental treatments and contact our clinic.",
applicationName: "Sakthi Dental Clinic",
keywords: [
"Sakthi Dental Clinic",
"dentist in Hosur",
"dental clinic Hosur",
"family dentistry",
"pediatric dentistry",
"dental implants",
"orthodontic treatment",
],
openGraph: {
title: "Sakthi Dental Clinic | Compassionate Dental Care",
description:
"Explore dental treatments and discover patient-focused dental care for the whole family.",
type: "website",
locale: "en_IN",
},
};

export default function RootLayout({
children,
}: {
children: ReactNode;
}) {
return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-white font-sans text-slate-800">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
);
}
