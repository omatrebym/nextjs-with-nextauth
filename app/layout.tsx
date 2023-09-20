import "../styles/globals.scss";
import type { Metadata } from "next";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { NextAuthProvider } from "@/pages/api/auth/NextAuthProvider";

import Favicon from "@oslokommune/punkt-assets/dist/logos/favicon.ico";
import Shortcut from "@oslokommune/punkt-assets/dist/logos/16x16-favicon.png";
import Apple from "@oslokommune/punkt-assets/dist/logos/apple-touch-icon.png";

export const metadata: Metadata = {
  title: "Tester NextJS",
  description: "Beskrivelse av testing av NextJS",
  icons: {
    icon: Favicon.src,
    shortcut: Shortcut.src,
    apple: Apple.src,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAuthProvider>
      <html lang="en">
        <body className="bym-flex bym-flex-col bym-min-h-screen bym-justify-between">
          <Header />
          <main className="bym-mt-24">{children}</main>
          <Footer />
        </body>
      </html>
    </NextAuthProvider>
  );
}
