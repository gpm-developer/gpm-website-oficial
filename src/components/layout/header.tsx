"use client";
import { useEffect, useState } from "react";
import useBreakpoint from "use-breakpoint";
import { Menu, X } from "lucide-react";
import Link from "next/link";

import { GPMLogotype } from "../logos/gpm-logotype";

import { Navbar } from "./navbar";
import { NavbarButton } from "./navbar-button";
import { MobileNavbar } from "./mobile-navbar";

import { cn } from "@/utils/common/cn";

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1526,
};

export function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { breakpoint } = useBreakpoint(BREAKPOINTS);

  const contact = {
    href: "/contacto",
    label: "Contacto",
    slug: "contacto",
  };

  const handleNavigation = () => {
    setIsMobileNavOpen(false);
    // eslint-disable-next-line react-compiler/react-compiler
    document.body.style.overflow = "auto";
  };

  const handleMobileNavState = () => {
    const newNavState = !isMobileNavOpen;

    setIsMobileNavOpen(newNavState);
    document.body.style.overflow = newNavState ? "hidden" : "auto";
  };

  useEffect(() => {
    if (!breakpoint) return;
    if (breakpoint === "lg" && isMobileNavOpen) {
      setIsMobileNavOpen(false);
      document.body.style.overflow = "auto";
    }
  }, [breakpoint, isMobileNavOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-30 w-full bg-layout-foreground px-5 text-[15px] shadow-sm transition-all duration-200",
          {
            "border-none shadow-none": isMobileNavOpen,
          },
        )}
      >
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between py-3">
          <NavbarButton
            onClick={() => {
              handleNavigation();
            }}
          >
            <Link aria-label="Ir a la página de inicio" href="/">
              <GPMLogotype className="relative -left-[4px]" height={36} />
            </Link>
          </NavbarButton>
          <div className="hidden items-center gap-4 lg:flex">
            <Navbar />
            {/* <LocaleSwitcher /> */}
            <Link
              className="inline-flex rounded-full border border-gpmBlue-900 bg-gpmBlue-900 px-3 py-2 text-[15px] font-medium leading-none text-white transition-colors duration-200 hover:bg-gpmBlue-900/90"
              href={contact.href}
            >
              {contact.label}
            </Link>
          </div>
          <div className="ml-auto flex items-center gap-4 lg:hidden">
            {/* <LocaleSwitcher /> */}
            <button
              aria-label="Abrir menú de navegación"
              className={cn("text-gpmBlue-900 transition-colors duration-200")}
              type="button"
              onClick={handleMobileNavState}
            >
              {!isMobileNavOpen ? (
                <Menu className="size-[24px]" />
              ) : (
                <X className="size-[24px]" />
              )}
            </button>
          </div>
        </div>
      </header>
      <MobileNavbar
        handleNavigation={handleNavigation}
        isMobileNavOpen={isMobileNavOpen}
      />
    </>
  );
}
