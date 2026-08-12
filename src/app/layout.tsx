import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Custom Template",
  description: "A minimal, well-structured, production-ready Next.js frontend/service template.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
