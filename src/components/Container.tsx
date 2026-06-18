import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export const containerVariants = cva(
  "mx-auto w-full max-w-[30rem] md:max-w-[60rem] px-2 md:px-4",
);

interface containerProps
  extends VariantProps<typeof containerVariants>, React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
}

export default function Container({
  as = "div",
  children,
  className,
  ...props
}: containerProps) {
  return React.createElement(
    as,
    {
      className: containerVariants({ className }),
      ...props,
    },
    children,
  );
}
