import { MessageCircle } from "lucide-react";
import { buildWhatsappLink } from "@/lib/contact";

type CtaButtonProps = {
  variant?: "primary" | "secondary";
  message: string;
  href?: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function CtaButton({
  variant = "primary",
  message,
  href,
  external = true,
  className = "",
  children,
}: CtaButtonProps) {
  const resolvedHref = href ?? buildWhatsappLink(message);

  const base =
    "inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg px-7 text-[15px] font-semibold transition-colors duration-150";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-ink hover:bg-primary-hover"
      : "border-[1.5px] border-primary text-primary hover:bg-accent-tint";

  return (
    <a
      href={resolvedHref}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${base} ${styles} ${className}`}
    >
      {!href && <MessageCircle className="h-[18px] w-[18px]" aria-hidden="true" />}
      {children}
    </a>
  );
}
