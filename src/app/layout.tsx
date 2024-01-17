import type { Metadata } from "next";
import { Inter, Red_Hat_Display } from "next/font/google";
import "./globals.css";

const redHatDisplay = Red_Hat_Display({
  weight: ["400", "500", "600", "800", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--Red-Hat",
});

export const metadata: Metadata = {
  title: "Varos",
  description: "Invista aqui rsrsrrs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={redHatDisplay.className}>{children}</body>
    </html>
  );
}
