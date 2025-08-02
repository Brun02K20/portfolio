import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react"

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/brun02k20" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/bruno-laszlo-virinni" },
  { name: "Email", icon: Mail, href: "mailto:bvirinni@gmail.com" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/bruno_.virinni" },
]

export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label={link.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p><link.icon /></p>
              </a>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Bruno Virinni. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
