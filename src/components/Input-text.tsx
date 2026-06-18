import { cva, type VariantProps, cx } from "class-variance-authority";
import type React from "react";
import { textVariants } from "./Text";

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
    VariantProps<typeof inputTextVariants> {}

export default function InputText({
  size,
  className,
  ...props
}: InputTextProps) {
  return (
    <input
      className={cx(inputTextVariants({ size }), textVariants(), className)}
      {...props}
    />
  );
}
