import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HungPham.dev - Personal Blog",
  description:
    "Full-stack developer passionate about Next.js, Golang, and modern web technologies. Sharing insights, tutorials, and best practices in software development.",
  keywords: [
    "Next.js",
    "Golang",
    "Full-stack",
    "Programming",
    "Web Development",
  ],
  authors: [{ name: "HungPham" }],
  creator: "HungPham",
  openGraph: {
    title: "HungPham.dev - Personal Blog",
    description:
      "Full-stack developer passionate about Next.js, Golang, and modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
