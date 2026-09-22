/** Smooth-scrolls to an in-page anchor, leaving room for the fixed header. */
export function scrollToSection(href: string) {
  if (typeof window === "undefined") return
  const element = document.querySelector<HTMLElement>(href)
  if (!element) return

  const isDesktop = window.matchMedia("(min-width: 1024px)").matches
  const offset = isDesktop ? 88 : 24
  const top = element.getBoundingClientRect().top + window.scrollY - offset

  window.scrollTo({ top, behavior: "smooth" })
}

export function scrollToTop() {
  if (typeof window === "undefined") return
  window.scrollTo({ top: 0, behavior: "smooth" })
}
