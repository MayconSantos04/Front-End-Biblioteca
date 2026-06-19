import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const textVariants = cva("font-sans", {
  variants: {
    variant: {
      "body-text-sm": "text-sm leading-5 font-medium",
      "body-text-xs": "text-xs leading-5 font-medium",
      "body-text-base": "text-base leading-5 font-medium",
      "body-text-name":
        "text-base md:text-xl leading-5 md:leading-7 font-medium",
      "body-md-base": "text-2xl leading-5 font-medium",
      "body-md-text": "text-3xl leading-5 font-medium",
    },
  },
  defaultVariants: {
    variant: "body-text-sm",
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

export default function Text({
  as = "span",
  variant,
  className,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    as,
    {
      className: textVariants({ variant, className }),
      ...props,
    },
    children,
  );
}
