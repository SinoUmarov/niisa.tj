import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Breadcrumb } from "@/components/breadcrumb"
import { ProjectsSection } from "@/components/projects-section"
import { Footer } from "@/components/footer"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      <Breadcrumb items={[{ label: "Главная", href: "/" }, { label: "Проекты" }]} />
      <main>
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  )
}
