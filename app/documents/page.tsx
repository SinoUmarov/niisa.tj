import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Breadcrumb } from "@/components/breadcrumb"
import { DocumentsContent } from "@/components/documents-content"
import { Footer } from "@/components/footer"

export default function DocumentsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      <Breadcrumb items={[{ label: "Главная", href: "/" }, { label: "Документация" }]} />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <DocumentsContent />
        </div>
      </main>
      <Footer />
    </div>
  )
}
