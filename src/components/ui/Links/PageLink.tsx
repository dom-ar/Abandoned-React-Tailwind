import { VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/cn";
import { ComponentProps } from "react";
import { Link } from "react-router-dom";
import { linkVariants } from "./Link";

type LinkProps = ComponentProps<typeof Link> & VariantProps<typeof linkVariants>;

export default function ExternalLink({className, variant, hover, ...props}: LinkProps) {
  return <Link {...props} className={cn(linkVariants({variant, hover}), className)}></Link>
};


