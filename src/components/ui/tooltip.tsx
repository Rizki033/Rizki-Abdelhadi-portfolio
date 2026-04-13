import * as React from "react";

import { cn } from "@/lib/utils";

type TooltipProviderProps = React.PropsWithChildren;

function TooltipProvider({ children }: TooltipProviderProps) {
  return <>{children}</>;
}

function Tooltip({ children }: TooltipProviderProps) {
  return <>{children}</>;
}

function TooltipTrigger({ children }: TooltipProviderProps) {
  return <>{children}</>;
}

const TooltipContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    role="tooltip"
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md",
      className,
    )}
    {...props}
  />
));
TooltipContent.displayName = "TooltipContent";

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
