import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/cn";
import { ComponentProps } from "react";

type LinkProps = ComponentProps<'a'> & VariantProps<typeof linkVariants>;

export default function ExternalLink({className, variant, hover, ...props}: LinkProps) {
  return <a {...props} className={cn(linkVariants({variant, hover}), className)}></a>
};

export const linkVariants = cva(
  'inline-flex items-center bg-transparent justify-center text-text gap-2 rounded-md',
  {
    variants: {
      variant: {
        default: '',
        outline: 'px-1 py-1 ring-2 ring-brd/10 ring-offset-0',
        blankbox: 'px-1 py-1', 
      },
      hover: {
        underline: 'underline-offset 4 hover:underline',
        accent: "hover:shadow-outline transition-shadow duration-200",
        ring: "hover:ring-accent",
        opacity: "hover:bg-obackground/10",
        none: "",
      }
    },
    defaultVariants: {
      variant: 'default',
      hover: 'underline',
    },
  },
);
