/** Single source of truth for the links and contact data used by every CTA on the site. */
export const site = {
  name: "Bruno Virinni",
  cvUrl: "/assets/Bruno Laszlo Virinni - CV.pdf",
  github: "https://github.com/brun02k20",
  linkedin: "https://www.linkedin.com/in/bruno-laszlo-virinni",
  email: "bvirinni@gmail.com",
  phoneDisplay: "+54 9 (351) 357-6662",
  whatsapp: "https://wa.me/5493513576662",
  location: "Córdoba, Argentina",
} as const

export const mailto = `mailto:${site.email}`
