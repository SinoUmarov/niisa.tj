import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Breadcrumb } from "@/components/breadcrumb"
import { NewsSection } from "@/components/news-section"
import { Footer } from "@/components/footer"

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      <Breadcrumb items={[{ label: "Главная", href: "/" }, { label: "Новости" }]} />
      <main>
        <NewsSection />
      </main>
      <Footer />
    </div>
  )
}
