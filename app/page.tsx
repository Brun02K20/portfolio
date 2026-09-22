import Header from "@/components/header"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ParticlesBackground from "@/components/particles-background"
import ScrollProgress from "@/components/scroll-progress"
import FloatingCta from "@/components/floating-cta"
import BeamController from "@/components/beam-controller"

export default function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#0a0a1a] text-white">
      {/* Fixed background: aurora blobs + faint grid. Particles are drawn on a canvas above them. */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.22),transparent_60%)]" />
        <div className="aurora-blob -left-32 -top-40 h-[38rem] w-[38rem] bg-indigo-600 animate-blob" />
        <div className="aurora-blob -right-40 top-1/3 h-[34rem] w-[34rem] bg-fuchsia-600 animate-blob-reverse" />
        <div className="aurora-blob -bottom-48 left-1/4 h-[30rem] w-[30rem] bg-cyan-500 animate-blob [animation-delay:-14s]" />
        <div className="absolute inset-0 bg-grid" />
      </div>
      <ParticlesBackground />
      <BeamController />

      <ScrollProgress />
      <Header />

      <main className="relative z-10">
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
      <FloatingCta />
    </div>
  )
}
