import { cva, type VariantProps, cx } from "class-variance-authority";
import type React from "react";
import { textVariants } from "./Text";
import Icon from "./Icon";

export const inputTextVariants = cva(
  `
    border-1 border-solid border-gray-300 focus:border-blue
    bg-transparent outline-none rounded-2xl text-gray-100 text-sm
    `,
  {
    variants: {
      size: {
        md: "py-2 px-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

interface InputTextProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputTextVariants> {
  icon?: React.ComponentProps<typeof Icon>["svg"];
}

export default function InputText({
  size,
  className,
  icon: IconComponent,
  ...props
}: InputTextProps) {
  return (
    <div className="relative">
      {IconComponent && (
        <Icon
          svg={IconComponent}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-2 h-2 fill-gray-300"
        />
      )}
      <input
        className={cx(inputTextVariants({ size }), textVariants(), className)}
        {...props}
      />
    </div>
  );
}
