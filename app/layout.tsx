import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Happy Birthday 💖",
  description: "A special surprise birthday page just for you 💕",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
