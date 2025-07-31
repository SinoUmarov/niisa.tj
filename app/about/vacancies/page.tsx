import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Breadcrumb } from "@/components/breadcrumb"
import { AboutSidebar } from "@/components/about-sidebar"
import { VacanciesContent } from "@/components/vacancies-content"
import { Footer } from "@/components/footer"

export default function VacanciesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      <Breadcrumb
        items={[{ label: "Главная", href: "/" }, { label: "О предприятии", href: "/about" }, { label: "Вакансии" }]}
      />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <AboutSidebar />
            </div>
            <div className="lg:col-span-3">
              <VacanciesContent />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
