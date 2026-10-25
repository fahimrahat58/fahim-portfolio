import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Providers from "@/app/components/providers";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

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
    default: "Fahim Muntasir Rahat | Web Developer",
    template: "%s | Fahim Muntasir Rahat",
  },
  description:
    "Explore the portfolio, web development projects, skills, and contact information of Fahim Muntasir Rahat.",
  keywords: [
    "Fahim Muntasir Rahat",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Frontend Development",
  ],
  authors: [{ name: "Fahim Muntasir Rahat" }],
  openGraph: {
    title: "Fahim Muntasir Rahat | Web Developer",
    description:
      "Explore my web development projects, skills, and professional portfolio.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <Providers>{children}</Providers>
        <Footer/>
      </body>
    </html>
  );
}
