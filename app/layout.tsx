import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SMM Panel — Grow Faster Across Every Social Platform",
  description:
    "SMM Panel helps you grow faster across every social platform with fast, reliable, and affordable promotion services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
