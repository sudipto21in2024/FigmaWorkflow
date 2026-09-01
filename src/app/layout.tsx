import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Figma-to-Code Framework App",
  description: "Production-grade design system and application generated from Figma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-app font-sans antialiased text-content-primary">
        {children}
      </body>
    </html>
  );
}
