import "./globals.css";

import type {Metadata} from "next";

import {Libre_Caslon_Display, Libre_Caslon_Text, Manrope} from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  style: "normal",
  display: "swap",
});

const caslon = Libre_Caslon_Text({
  variable: "--font-caslon",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
});

const caslonDisplay = Libre_Caslon_Display({
  variable: "--font-caslon-display",
  subsets: ["latin"],
  style: ["normal"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Grupo Pérez Moreno",
  description: "Página oficial del Grupo Pérez Moreno",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} ${caslon.variable} ${caslonDisplay.variable}`}>
        {children}
      </body>
    </html>
  );
}
