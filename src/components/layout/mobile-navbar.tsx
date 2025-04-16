import type { NavLinks } from "@/types";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon, ExternalLink } from "lucide-react";
import Link from "next/link";

import { NavbarButton } from "./navbar-button";

import { cn } from "@/utils/common/cn";
import navLinks from "@/lib/constants/nav-links";

const ExtraLinks: NavLinks[] = [
  {
    href: "https://youtube.com",
    label: "Facebook",
    slug: "facebook",
  },
  {
    href: "https://youtube.com",
    label: "LinkedIn",
    slug: "linkedin",
  },
];

export function MobileNavbar({
  handleNavigation,
  isMobileNavOpen,
}: {
  handleNavigation: () => void;
  isMobileNavOpen: boolean;
}) {
  return (
    <nav
      className={cn(
        "fixed inset-0 z-20 h-dvh overflow-y-scroll bg-layout-foreground p-5 pt-20",
        {
          hidden: !isMobileNavOpen,
        },
      )}
    >
      <Accordion.Root collapsible className="space-y-5" type="single">
        {[...navLinks, ...ExtraLinks].map((nl) => {
          return nl.subMenu ? (
            <Accordion.Item key={nl.slug} value={`navbarItem-${nl.slug}`}>
              <Accordion.Header>
                <Accordion.Trigger className="group relative flex w-full cursor-pointer items-center justify-between text-start text-[1.75rem] font-semibold leading-none text-gpmBlue-900">
                  {nl.label}
                  <ChevronDownIcon
                    aria-hidden
                    className="size-[24px] transition-transform duration-200 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="mt-3">
                <ul className="space-y-2">
                  {nl.subMenu.map((subMenu: NavLinks) => (
                    <li key={subMenu.slug}>
                      <NavbarButton
                        className=""
                        onClick={() => {
                          handleNavigation();
                        }}
                      >
                        <Link
                          className="block w-full text-start text-xl font-medium"
                          href={subMenu.href as string}
                        >
                          {subMenu.label}
                        </Link>
                      </NavbarButton>
                    </li>
                  ))}
                </ul>
              </Accordion.Content>
            </Accordion.Item>
          ) : ![
              "Facebook",
              "LinkedIn",
              "Trabaja con nosotros",
              "Work with us",
            ].includes(String(nl.label)) ? (
            <NavbarButton
              key={nl.slug}
              className="block text-[1.75rem] font-semibold leading-none text-gpmBlue-900"
              onClick={() => {
                handleNavigation();
              }}
            >
              <Link href={nl.href as string}>{nl.label}</Link>
            </NavbarButton>
          ) : (
            <a
              key={nl.slug}
              className="flex w-full cursor-pointer items-center justify-between text-[1.75rem] font-semibold leading-none text-gpmBlue-900"
              href={nl.href}
              rel="noopener"
              target="_blank"
            >
              {nl.label} <ExternalLink className="size-[24px]" />
            </a>
          );
        })}
      </Accordion.Root>
    </nav>
  );
}
