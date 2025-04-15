import React, { ReactNode } from "react";

import { cn } from "@/utils/common/cn";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <main className={cn("relative my-20 px-5 md:my-24 lg:my-28", className)}>
      {children}
    </main>
  );
}
