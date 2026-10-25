import type { HTMLAttributes, ElementType, ReactNode } from "react";

export type ContainerSize =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "full";

export type ContainerPadding = "none" | "sm" | "md" | "lg";

export interface ContainerProps
  extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  children: ReactNode;
  as?: ElementType;
  size?: ContainerSize;
  padding?: ContainerPadding;
  centered?: boolean;
  fluid?: boolean;
  section?: boolean;
  sectionSpacing?: "none" | "sm" | "md" | "lg" | "xl";
  animated?: boolean;
}

const sizeStyles: Record<ContainerSize, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  "2xl": "max-w-[90rem]",
  full: "max-w-none",
};

const paddingStyles: Record<ContainerPadding, string> = {
  none: "px-0",
  sm: "px-4 sm:px-5",
  md: "px-4 sm:px-6 lg:px-8",
  lg: "px-5 sm:px-8 lg:px-10 2xl:px-12",
};

const sectionSpacingStyles = {
  none: "",
  sm: "py-8 sm:py-10",
  md: "py-12 sm:py-16",
  lg: "py-16 sm:py-20 lg:py-24",
  xl: "py-20 sm:py-24 lg:py-32",
} satisfies Record<NonNullable<ContainerProps["sectionSpacing"]>, string>;

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export default function Container({
  children,
  as,
  size = "xl",
  padding = "md",
  centered = true,
  fluid = false,
  section = false,
  sectionSpacing = "none",
  animated = false,
  className,
  ...props
}: ContainerProps) {
  const Component: ElementType = as ?? (section ? "section" : "div");

  return (
    <Component
      className={cn(
        "w-full",
        !fluid && sizeStyles[size],
        centered && !fluid && "mx-auto",
        paddingStyles[padding],
        section && "relative isolate",
        section && sectionSpacingStyles[sectionSpacing],
        animated &&
          "motion-safe:animate-[gm-container-enter_600ms_cubic-bezier(0.22,1,0.36,1)_both]",
        "motion-reduce:animate-none",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}