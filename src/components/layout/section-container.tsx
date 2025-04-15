import React, { ReactNode } from "react";

import { cn } from "@/utils/common/cn";

interface SectionContainerProps
  extends React.ComponentPropsWithoutRef<"section"> {
  children: ReactNode;
}

export function SectionContainer({
  children,
  className,
}: SectionContainerProps) {
  return (
    <section
      className={cn(
        `mx-auto max-w-7xl [&:not(:first-child)]:mt-20 [&:not(:first-child)]:md:mt-28 [&:not(:first-child)]:lg:mt-32 ${className}`,
      )}
    >
      {children}
    </section>
  );
}
