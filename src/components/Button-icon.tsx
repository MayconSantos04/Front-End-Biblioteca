import type React from "react";
import Icon from "./Icon";
import { cva, type VariantProps } from "class-variance-authority";

export const buttonIconVariants = cva(
  `inline-flex  items-center justify-center cursor-pointer transition group`,
  {
    variants: {
      variant: {
        primary: "bg-transparent hover:bg-gray-500",
      },
      size: {
        sm: "w-6 h-6 p-1 rounded",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  },
);

export const buttonIconIconVariants = cva("transition", {
  variants: {
    variant: {
      primary: "fill-gray-300 group-hover:fill-blue",
    },
    size: {
      sm: "w-4 h-4",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

interface ButtonIconProps
  extends
    VariantProps<typeof buttonIconVariants>,
    React.ComponentProps<"button"> {
  icon: React.ComponentProps<typeof Icon>["svg"];
}

export default function ButtonIcon({
  variant,
  size,
  className,
  icon: IconComponent,
  ...props
}: ButtonIconProps) {
  return (
    <button
      className={buttonIconVariants({ variant, size, className })}
      {...props}
    >
      <Icon
        svg={IconComponent}
        className={buttonIconIconVariants({ variant, size })}
      />
    </button>
  );
}
