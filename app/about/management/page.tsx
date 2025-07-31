import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Breadcrumb } from "@/components/breadcrumb"
import { AboutSidebar } from "@/components/about-sidebar"
import { ManagementContent } from "@/components/management-content"
import { Footer } from "@/components/footer"

export default function ManagementPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      <Breadcrumb
        items={[{ label: "Главная", href: "/" }, { label: "О предприятии", href: "/about" }, { label: "Руководство" }]}
      />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <AboutSidebar />
            </div>
            <div className="lg:col-span-3">
              <ManagementContent />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
