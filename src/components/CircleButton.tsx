import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "@/components/icons";

interface CircleButtonProps {
  className?: string;
  size?: number;
  variant?: "red" | "cream" | "outline";
}

/** Round button with an up-right arrow, used across CTAs. */
export function CircleButton({ className, size = 56, variant = "red" }: CircleButtonProps) {
  const styles = {
    red: "bg-[var(--color-red)] text-[var(--color-cream)] group-hover:bg-[var(--color-red-bright)]",
    cream: "bg-[var(--color-cream)] text-[var(--color-red)] group-hover:bg-[var(--color-red)] group-hover:text-[var(--color-cream)]",
    outline: "border border-current text-current group-hover:bg-[var(--color-red)] group-hover:text-[var(--color-cream)] group-hover:border-[var(--color-red)]",
  }[variant];

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full transition-all duration-300",
        styles,
        className,
      )}
      style={{ width: size, height: size }}
    >
      <ArrowUpRightIcon style={{ width: size * 0.4, height: size * 0.4 }} />
    </span>
  );
}
