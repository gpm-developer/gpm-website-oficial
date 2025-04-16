import type { ReactNode } from "react";

import React from "react";

import { cn } from "@/utils/common/cn";

interface BentoProps {
  children: ReactNode;
  className?: string;
}

function BentoBlock({ children, className, ...props }: BentoProps) {
  return (
    <div
      className={cn(
        "col-span-4 rounded-md border border-layout-border bg-layout-foreground shadow-sm",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default BentoBlock;
