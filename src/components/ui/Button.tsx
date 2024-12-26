import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { ComponentProps } from "react";

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonVariants>;

export default function Button({className, variant, rounded, size, hover, ...props}: ButtonProps) {
  return <button {...props} className={cn(buttonVariants({variant, rounded, size, hover}), className)}></button>
};

const buttonVariants = cva(
  'inline-flex items-center justify-center text-sm text-text font-medium gap-2 transition-colors disabled:pointer-events-none disabled:opacity-50', // Removed focus:outline-none to keep default focus
  {
    variants: {
      variant: {
        primary: 'bg-primary text-light',
        secondary: 'bg-secondary',
        dark: 'bg-dark text-light',
        light: 'bg-light',
        blank: 'bg-transparent text-text',
        outline: 'bg-transparent text-text ring-2 ring-brd/10 ',
        link: 'bg-background underline-offset-4 text-text hover:underline',
      },
      rounded: {
        pill: 'rounded-full',
        md: 'rounded-md',
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
      hover: {
        none: "",
        accent: "hover:shadow-outline transition-shadow duration-200",
        ring: "hover:ring-accent",
        opacity: "hover:bg-obackground/10",
      }
    },
    defaultVariants: {
      variant: 'primary',
      rounded: 'md',
      size: 'default',
      hover: 'none',
    },
  },
);
