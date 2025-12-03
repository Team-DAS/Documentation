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
  title: "UdeA Jobs - Documentation",
  description: "Documentación técnica del proyecto UdeA Jobs - Arquitectura basada en células, APIs REST y GraphQL",
  openGraph: {
    title: "UdeA Jobs - Documentation",
    description: "Documentación técnica del proyecto UdeA Jobs - Arquitectura basada en células, APIs REST y GraphQL",
    url: "https://team-das.github.io/Documentation/",
    siteName: "UdeA Jobs Documentation",
    images: [
      {
        url: "/Documentation/logo.png",
        width: 300,
        height: 300,
        alt: "UdeA Jobs Logo",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UdeA Jobs - Documentation",
    description: "Documentación técnica del proyecto UdeA Jobs - Arquitectura basada en células, APIs REST y GraphQL",
    images: ["/Documentation/logo.png"],
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
