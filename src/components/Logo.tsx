import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** font-size of the "Maravilla" wordmark */
  size?: string;
}

/** "THE Maravilla" wordmark — handwritten "THE" sitting above the serif wordmark. */
export function Logo({ className, size = "text-[26px]" }: LogoProps) {
  return (
    <span className={cn("relative inline-block leading-none", className)}>
      <span className="absolute -top-[0.55em] left-[0.15em] font-hand text-[0.42em] italic tracking-tight">
        THE
      </span>
      <span className={cn("font-serif font-medium tracking-[0.01em]", size)}>
        Maravilla
      </span>
    </span>
  );
}
