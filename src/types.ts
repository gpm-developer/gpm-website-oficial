export type NavLinks = {
  label: string;
  slug: string;
  href?: string;
  subMenu?: NavLinks[];
  description?: string;
  external?: boolean;
};
