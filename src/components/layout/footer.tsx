import Link from "next/link";

import { LinkedInIcon } from "../icons/socials/linkedin-icon";
import { FacebookIcon } from "../icons/socials/facebook-icon";
import { MailIcon } from "../icons/socials/mail-icon";
import { GPMLogotype } from "../logos/gpm-logotype";

import { cn } from "@/utils/common/cn";
import { email, legalForm, name } from "@/lib/constants/company-info";

type SubLink = {
  label: string;
  href: string;
  icon?: "linkedin" | "facebook" | string;
};

type FooterLink = {
  label: string | null;
  subLinks: SubLink[];
};

export const footer = [
  {
    label: "El Grupo",
    subLinks: [
      { label: "Historia", href: "/grupo/historia" },
      { label: "Responsabilidad social", href: "/grupo/responsabilidad" },
      { label: "Calidad y medio ambiente", href: "/grupo/calidad" },
      { label: "Código Ético", href: "/grupo/codigo-etico" },
    ],
  },
  {
    label: "Áreas de negocio",
    subLinks: [
      { label: "Construcción", href: "/negocios/construccion" },
      { label: "Turismo", href: "/negocios/turismo" },
      {
        label: "Promoción inmobiliaria",
        href: "/negocios/promocion-inmobiliaria",
      },
      { label: "Medio ambiente", href: "/negocios/medioambiente" },
    ],
  },
  {
    label: null,
    subLinks: [
      { label: "Noticias", href: "/noticias" },
      { label: "Contacto", href: "/contacto" },
      {
        label: "Trabaja con nosotros",
        href: "https://portalempleo.grupoperezmoreno.com",
      },
    ],
  },
  {
    label: "Redes sociales",
    subLinks: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/grupoperezmoreno",
        icon: "linkedin",
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com/grupoperezmoreno",
        icon: "facebook",
      },
    ],
  },
];

export const legalLinks = [
  {
    label: "Aviso legal",
    href: "",
  },
  {
    label: "Política de privacidad",
    href: "",
  },
  {
    label: "Política de cookies",
    href: "",
  },
  {
    label: "Canal ético",
    href: "",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const icons = {
    linkedin: <LinkedInIcon className="size-4" />,
    facebook: <FacebookIcon className="size-4" />,
  };

  return (
    <footer className="space-y-14 bg-gpmBlue-900 px-5 pb-6 pt-12 text-sm md:space-y-16 lg:space-y-20">
      <div className="mx-auto flex max-w-7xl flex-col-reverse md:flex-row">
        <div className="grid grow grid-cols-2 gap-8 lg:grid-cols-4">
          {footer.map((link: FooterLink) => (
            <div key={link.label}>
              {link.label && (
                <h3 className="mb-4 font-semibold text-layout-foreground">
                  {link.label}
                </h3>
              )}
              <ul className="space-y-2">
                {link.subLinks.map((subLink) => (
                  <li key={subLink.label}>
                    {!["Facebook", "LinkedIn", "Trabaja con nosotros"].includes(
                      subLink.label,
                    ) ? (
                      <Link
                        className={cn(
                          "text-cGray-600 transition-colors duration-200 hover:text-layout-foreground",
                          {
                            "font-semibold text-layout-foreground": !link.label,
                            "inline-flex items-center gap-0.5": subLink.icon,
                          },
                        )}
                        href={subLink.href}
                      >
                        {subLink.icon &&
                          icons[subLink.icon as keyof typeof icons]}
                        {subLink.label}
                      </Link>
                    ) : (
                      <a
                        className={cn(
                          "text-cGray-600 transition-colors duration-200 hover:text-layout-foreground",
                          {
                            "font-semibold text-layout-foreground": !link.label,
                            "inline-flex items-center gap-0.5": subLink.icon,
                          },
                        )}
                        href={subLink.href}
                        rel="noopener"
                        target="_blank"
                      >
                        {subLink.icon &&
                          icons[subLink.icon as keyof typeof icons]}
                        {subLink.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/**LOGO */}
        <div className="mb-10 flex flex-col lg:mb-0">
          <GPMLogotype
            className="relative -left-[4px] self-start lg:-left-0"
            height={52}
            logotypeColor="white"
          />
          <a
            className="mt-1 hidden w-full cursor-pointer items-center justify-end gap-1 self-start text-cGray-600 transition-colors duration-200 hover:text-layout-foreground md:flex"
            href={`mailto:${email}`}
          >
            <MailIcon className="size-4" />
            {email}
          </a>
        </div>
      </div>
      {/**LEGAL LINKS */}
      <div className="mx-auto flex max-w-7xl grid-cols-[auto_1fr] flex-col lg:grid lg:items-center">
        <ul className="flex w-fit flex-col gap-2 lg:flex-row lg:items-center lg:gap-6">
          {legalLinks.map((link) => {
            return (
              <li key={link.label}>
                <Link
                  className="text-cGray-600 transition-colors duration-200 hover:text-layout-foreground"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <a
          className="mt-10 flex items-center gap-1 self-start text-cGray-600 transition-colors duration-200 hover:text-layout-foreground md:hidden"
          href={`mailto:${email}`}
        >
          <span>
            <MailIcon className="size-4" />
          </span>
          {email}
        </a>
        <p className="mt-10 text-balance text-start text-layout-foreground lg:mt-0 lg:text-end">
          © <time dateTime={`${currentYear}`}>{currentYear}</time>{" "}
          {`${name}, ${legalForm}`}
        </p>
      </div>
    </footer>
  );
}
