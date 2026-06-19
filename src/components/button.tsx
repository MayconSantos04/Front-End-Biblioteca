import type React from "react";
import Icon from "./Icon";
import { cva, type VariantProps } from "class-variance-authority";
import Text from "./Text";

export const buttonVariants = cva(
  `
    flex items-center justify-center cursor-pointer
    transition rounded-2xl group gap-2
    `,
  {
    variants: {
      variant: {
        primary: "bg-blue hover:bg-blue-hover",
        secondary: "bg-transparent",
      },
      size: {
        md: "h-10 px-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export const buttonIconVariants = cva("transition", {
  variants: {
    variant: {
      primary: "fill-base-primary",
    },
    size: {
      md: "h-3 w-4",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export const buttonTextVariants = cva("text-base-primary", {
  variants: {
    variant: {
      primary: "text-base-primary",
      secondary: "text-base-primary",
      tertiary: "text-blue",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
interface ButtonProps
  extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  icon?: React.ComponentProps<typeof Icon>["svg"];
}

export default function Button({
  variant,
  size,
  className,
  children,
  icon: IconComponent,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonVariants({ variant, size, className })} {...props}>
      {IconComponent && (
        <Icon
          svg={IconComponent}
          className={buttonIconVariants({ size })}
        />
      )}
      <Text
        variant="body-text-base"
        className={buttonTextVariants({ variant })}
      >
        {children}
      </Text>
    </button>
  );
}
