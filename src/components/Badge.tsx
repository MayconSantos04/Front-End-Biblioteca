import type React from "react";
import Text from "./Text";
import { cva, type VariantProps } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full",
  {
    variants: {
      variant: {
        primary: "bg-green-base",
        secondary: "bg-red-base",
        border_green: "bg-green-border",
        border_red: "bg-red-border",
      },
      size: {
        sm: "py-0.3 px-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  },
);

export const badgeTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-green-secondary",
      secondary: "text-red-secondary",
      border_green: "bg-green-border",
      border_red: "bg-red-border",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface BadgeProps
  extends React.ComponentProps<"div">, VariantProps<typeof badgeVariants> {}

export default function Badge({
  variant,
  size,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <div className={badgeVariants({ variant, size, className })} {...props}>
      <Text variant="body-text-xs" className={badgeTextVariants({ variant })}>
        {children}
      </Text>
    </div>
  );
}
