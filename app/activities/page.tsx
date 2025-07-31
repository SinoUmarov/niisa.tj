import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Breadcrumb } from "@/components/breadcrumb"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      <Breadcrumb items={[{ label: "Главная", href: "/" }, { label: "Наша деятельность" }]} />
      <main>
        <ServicesSection />
      </main>
      <Footer />
    </div>
  )
}
