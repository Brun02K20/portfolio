/**
 * Single source of truth for the links and contact data used by every CTA on the site.
 * The CV is not here: there is one file per language, so its path lives in the i18n
 * bundles (`common.cvUrl`) and is read with `useCvUrl()`.
 */
export const site = {
  name: "Bruno Virinni",
  github: "https://github.com/brun02k20",
  linkedin: "https://www.linkedin.com/in/bruno-laszlo-virinni",
  email: "bvirinni@gmail.com",
  phoneDisplay: "+54 9 (351) 357-6662",
  whatsapp: "https://wa.me/5493513576662",
  location: "Córdoba, Argentina",
} as const

export const mailto = `mailto:${site.email}`
