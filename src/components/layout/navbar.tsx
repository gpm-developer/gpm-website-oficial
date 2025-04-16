"use client";
import type { NavLinks } from "@/types";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/utils/common/cn";
import navLinks from "@/lib/constants/nav-links";

const onPathname = (currentPathname: string, slug: string) => {
  const segments = currentPathname.match(/[^/]+/g);

  return segments?.includes(slug) || false;
};

function NavbarIndicator() {
  return (
    <NavigationMenu.Indicator className="top-full z-10 flex h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
      <div
        className={cn(
          "relative top-[70%] size-2.5 rotate-45 rounded-tl-sm bg-gpmBlue-900",
        )}
      />
    </NavigationMenu.Indicator>
  );
}

function NavbarViewport() {
  return (
    <div className="relative left-0 top-full flex w-full justify-center perspective-[2000px]">
      <NavigationMenu.Viewport
        className={cn(
          "absolute mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-lg border border-gpmBlue-900 bg-layout-foreground transition-[width,_height] duration-200 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]",
        )}
      />
    </div>
  );
}

function SubMenuItem({
  subMenu,
  pathname,
}: {
  subMenu: NavLinks;
  pathname: string;
}) {
  return (
    <li key={subMenu.label}>
      <NavigationMenu.Link asChild>
        <Link
          className={cn(
            "flex flex-col gap-1 rounded-md p-4 text-[15px] font-medium transition-colors duration-200 hover:bg-gpmBlue-300",
            { "bg-gpmBlue-300": onPathname(pathname, subMenu.slug) },
          )}
          href={subMenu.href as string}
        >
          <h2 className="font-semibold text-gpmBlue-900">{subMenu.label}</h2>
          <p className="text-sm">{subMenu.description}</p>
        </Link>
      </NavigationMenu.Link>
    </li>
  );
}

function NavbarDropdown({
  navigatorLink,
  pathname,
}: {
  navigatorLink: NavLinks;
  pathname: string;
}) {
  return (
    <NavigationMenu.Item key={navigatorLink.label}>
      <NavigationMenu.Trigger
        className={cn(
          "group flex items-center gap-0.5 rounded-full border border-transparent px-3 py-2 text-[15px] font-medium leading-none text-gpmBlue-900 transition-colors duration-200 hover:border-gpmBlue-900 data-[state=open]:border-gpmBlue-900",
          {
            "border-gpmBlue-900": onPathname(pathname, navigatorLink.slug),
          },
        )}
      >
        {navigatorLink.label}
        <ChevronDown
          aria-hidden
          className="relative top-px transition-transform ease-in group-data-[state=open]:rotate-180"
          size={15}
        />
      </NavigationMenu.Trigger>
      <NavigationMenu.Content className="absolute left-0 top-0 w-auto rounded-md data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft">
        <ul className="grid w-[550px] grid-cols-2 p-1 pb-1.5 pr-1.5">
          {navigatorLink.subMenu?.map((subMenu) => (
            <SubMenuItem
              key={subMenu.label}
              pathname={pathname}
              subMenu={subMenu}
            />
          ))}
        </ul>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  );
}

function NavbarLink({
  navigatorLink,
  pathname,
}: {
  navigatorLink: NavLinks;
  pathname: string;
}) {
  return (
    <NavigationMenu.Item key={navigatorLink.label}>
      {!navigatorLink.external ? (
        <NavigationMenu.Link asChild>
          <Link
            className={cn(
              "group flex items-center rounded-full border border-transparent px-3 py-2 text-[15px] font-medium leading-none text-gpmBlue-900 transition-colors duration-200 hover:border-gpmBlue-900 data-[state=open]:border-gpmBlue-900",
              {
                "border-gpmBlue-900": onPathname(pathname, navigatorLink.slug),
              },
            )}
            //@ts-expect-error href is required
            href={navigatorLink.href}
          >
            {navigatorLink.label}
          </Link>
        </NavigationMenu.Link>
      ) : (
        <a
          className={cn(
            "group flex items-center rounded-full border border-transparent px-3 py-2 text-[15px] font-medium leading-none text-gpmBlue-900 transition-colors duration-200 hover:border-gpmBlue-900 data-[state=open]:border-gpmBlue-900",
          )}
          href={navigatorLink.href}
          rel="noopener"
          target="_blank"
        >
          {navigatorLink.label}
        </a>
      )}
    </NavigationMenu.Item>
  );
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <NavigationMenu.Root className="relative z-10">
      <NavigationMenu.List className="flex items-center gap-1">
        {navLinks
          .filter((l) => l.href !== "/contacto")
          .map((navigatorLink) =>
            navigatorLink.subMenu ? (
              <NavbarDropdown
                key={navigatorLink.label}
                navigatorLink={navigatorLink}
                pathname={pathname}
              />
            ) : (
              <NavbarLink
                key={navigatorLink.label}
                navigatorLink={navigatorLink}
                pathname={pathname}
              />
            ),
          )}
        <NavbarIndicator />
      </NavigationMenu.List>
      <NavbarViewport />
    </NavigationMenu.Root>
  );
}
