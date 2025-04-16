import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";

export const NavbarButton = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ ...props }, ref) => {
  return <Slot ref={ref} {...props} />;
});

NavbarButton.displayName = "NavbarButton";
