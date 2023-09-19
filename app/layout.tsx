import "../styles/globals.scss";
import type { Metadata } from "next";

import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Tester NextJS",
  description: "Beskrivelse av testing av NextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bym-flex bym-flex-col bym-min-h-screen bym-justify-between">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
