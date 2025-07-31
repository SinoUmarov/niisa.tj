import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Calendar } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Жилой комплекс «Душанбе Сити»",
    location: "г. Душанбе",
    year: "2023",
    status: "Завершен",
    description: "Современный жилой комплекс с развитой инфраструктурой",
    image: "/placeholder.svg?height=250&width=400",
    category: "Жилые здания",
  },
  {
    id: 2,
    title: "Торговый центр «Сомон»",
    location: "г. Худжанд",
    year: "2023",
    status: "В процессе",
    description: "Крупный торгово-развлекательный центр",
    image: "/placeholder.svg?height=250&width=400",
    category: "Коммерческие здания",
  },
  {
    id: 3,
    title: "Школа №45",
    location: "г. Душанбе",
    year: "2022",
    status: "Завершен",
    description: "Современная школа на 1200 учащихся",
    image: "/placeholder.svg?height=250&width=400",
    category: "Образовательные учреждения",
  },
  {
    id: 4,
    title: "Медицинский центр",
    location: "г. Куляб",
    year: "2024",
    status: "Проектирование",
    description: "Многопрофильный медицинский центр",
    image: "/placeholder.svg?height=250&width=400",
    category: "Медицинские учреждения",
  },
]

export function ProjectsSection() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <Badge variant="outline" className="mb-4">
              ПРОЕКТЫ
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Наши проекты</h2>
            <p className="text-lg text-slate-600 mt-4">Примеры успешно реализованных проектов</p>
          </div>
          <Button variant="outline" className="hidden md:flex bg-transparent">
            Все проекты
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-slate-700 hover:bg-white">{project.category}</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge
                    variant={
                      project.status === "Завершен"
                        ? "default"
                        : project.status === "В процессе"
                          ? "secondary"
                          : "outline"
                    }
                    className={
                      project.status === "Завершен"
                        ? "bg-green-600 hover:bg-green-700"
                        : project.status === "В процессе"
                          ? "bg-blue-600 hover:bg-blue-700"
                          : "bg-orange-600 hover:bg-orange-700 text-white"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-xl group-hover:text-blue-600 transition-colors">{project.title}</h3>

                <p className="text-slate-600 leading-relaxed">{project.description}</p>

                <div className="flex items-center justify-between text-sm text-slate-500">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{project.year}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Button variant="outline">
            Все проекты
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
