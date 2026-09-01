import type { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Furniro - Modern Furniture & Interior Store",
  description: "Production-grade design system and application generated from Figma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-surface font-sans antialiased text-content-primary">
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
