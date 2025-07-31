import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Eye } from "lucide-react"
import Image from "next/image"

const news = [
  {
    id: 1,
    title: "Новые строительные нормы для сейсмостойкого строительства",
    excerpt: "Утверждены обновленные нормативы для строительства в сейсмически активных зонах Таджикистана",
    date: "15 января 2024",
    category: "Нормативы",
    views: 245,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Международная конференция по архитектуре и строительству",
    excerpt: "В Душанбе прошла конференция с участием ведущих специалистов из стран СНГ",
    date: "10 января 2024",
    category: "События",
    views: 189,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Завершена экспертиза крупного жилого комплекса",
    excerpt: "Успешно проведена государственная экспертиза проекта жилого комплекса на 500 квартир",
    date: "8 января 2024",
    category: "Проекты",
    views: 156,
    image: "/placeholder.svg?height=200&width=300",
  },
]

export function NewsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <Badge variant="outline" className="mb-4">
              НОВОСТИ
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Последние новости</h2>
          </div>
          <Button variant="outline" className="hidden md:flex bg-transparent">
            Все новости
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article) => (
            <Card
              key={article.id}
              className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 hover:bg-blue-700">{article.category}</Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <h3 className="font-semibold text-lg leading-tight group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-slate-600 text-sm leading-relaxed">{article.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-slate-500">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="h-4 w-4" />
                    <span>{article.views}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Button variant="outline">
            Все новости
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
