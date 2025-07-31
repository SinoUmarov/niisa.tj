import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Breadcrumb } from "@/components/breadcrumb"
import { MaterialsContent } from "@/components/materials-content"
import { Footer } from "@/components/footer"

export default function MaterialsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      <Breadcrumb items={[{ label: "Главная", href: "/" }, { label: "Материалы для обсуждения" }]} />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <MaterialsContent />
        </div>
      </main>
      <Footer />
    </div>
  )
}
