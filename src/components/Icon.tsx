import type React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const iconVariants = cva("w-6 h-6", {
  variants: {
    size: {
      "size-sm": "w-4 h-4",
      "size-md": "w-6 h-6",
    },
  },
  defaultVariants: {
    size: "size-md",
  },
});

interface IconProps
  extends React.ComponentProps<"svg">, VariantProps<typeof iconVariants> {
  svg: React.FC<React.ComponentProps<"svg">>;
}

export default function Icon({
  svg: SvgComponent,
  size,
  className,
  ...props
}: IconProps) {
  return <SvgComponent className={iconVariants({ size, className })} {...props} />;
}
