import {
  Libre_Caslon_Display,
  Libre_Caslon_Text,
  Manrope,
} from "next/font/google";

import { Header } from "./header";

import { cn } from "@/utils/common/cn";

type Props = {
  children: React.ReactNode;
};

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

function BaseLayout({ children }: Props) {
  return (
    <html lang="es" translate="no">
      <body
        className={cn(
          manrope.className,
          caslon.variable,
          caslonDisplay.variable,
          "grid min-h-dvh grid-rows-[auto_1fr_auto] antialiased",
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default BaseLayout;

function Footer() {
  return <header>header</header>;
}
