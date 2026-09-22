"use client"

import type { ComponentProps, ReactNode } from "react"
import { Download, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { scrollToSection } from "@/lib/scroll"
import { useCvUrl } from "@/hooks/use-cv"

type Size = "sm" | "md" | "lg"

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-base",
}

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-all duration-300 hover:cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a1a] disabled:pointer-events-none disabled:opacity-50 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0"

const variants = {
  primary:
    "shimmer text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-[length:200%_auto] animate-gradient-x shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-pink-500/40 hover:-translate-y-0.5",
  secondary:
    "glass text-white hover:border-white/30 hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/25",
  ghost: "text-zinc-300 hover:text-white hover:bg-white/5",
  whatsapp:
    "text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 hover:-translate-y-0.5",
}

type CtaProps = {
  variant?: keyof typeof variants
  size?: Size
  children: ReactNode
  className?: string
  /** Renders an <a> when provided, a <button> otherwise. */
  href?: string
  download?: boolean
  external?: boolean
  onClick?: () => void
  ariaLabel?: string
} & Pick<ComponentProps<"button">, "type" | "disabled">

/** The one button style used by every call-to-action on the site. */
export function Cta({
  variant = "primary",
  size = "md",
  children,
  className,
  href,
  download,
  external,
  onClick,
  ariaLabel,
  type = "button",
  disabled,
}: CtaProps) {
  const classes = cn(base, sizes[size], variants[variant], className)

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        aria-label={ariaLabel}
        download={download || undefined}
        target={external || download ? "_blank" : undefined}
        rel={external || download ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} aria-label={ariaLabel} disabled={disabled}>
      {children}
    </button>
  )
}

/** Round icon-only button used for social links. */
export function IconCta({
  href,
  label,
  children,
  className,
}: {
  href: string
  label: string
  children: ReactNode
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className={cn(
        "glass group inline-flex h-11 w-11 items-center justify-center rounded-full text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-gradient-to-br hover:from-indigo-500 hover:to-pink-500 hover:text-white hover:shadow-lg hover:shadow-purple-500/40 [&_svg]:h-5 [&_svg]:w-5",
        className,
      )}
    >
      {children}
    </a>
  )
}

/** "Download CV" – the same primary CTA everywhere, in the current language. */
export function DownloadCvCta({
  label,
  size,
  variant = "primary",
  className,
}: {
  label: string
  size?: Size
  variant?: keyof typeof variants
  className?: string
}) {
  const cvUrl = useCvUrl()

  return (
    <Cta href={cvUrl} download variant={variant} size={size} className={className}>
      <Download className="transition-transform duration-300 group-hover:-translate-y-0.5" />
      {label}
    </Cta>
  )
}

/** "Contact me" – scrolls to the contact section. */
export function ContactCta({
  label,
  size,
  variant = "secondary",
  className,
}: {
  label: string
  size?: Size
  variant?: keyof typeof variants
  className?: string
}) {
  return (
    <Cta onClick={() => scrollToSection("#contact")} variant={variant} size={size} className={className}>
      <Mail className="transition-transform duration-300 group-hover:rotate-[-8deg]" />
      {label}
    </Cta>
  )
}
