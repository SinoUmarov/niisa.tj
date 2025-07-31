import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Trophy, Medal, Star, Calendar } from "lucide-react"
import Image from "next/image"

const achievements = [
  {
    title: "Лучший научно-исследовательский институт года",
    year: "2023",
    organization: "Министерство образования и науки РТ",
    description: "За выдающиеся достижения в области строительных исследований",
    type: "Государственная награда",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Диплом за инновационные технологии",
    year: "2022",
    organization: "Международная выставка строительства",
    description: "За разработку энергоэффективных строительных материалов",
    type: "Международное признание",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Сертификат качества ISO 9001:2015",
    year: "2021",
    organization: "Международная организация по стандартизации",
    description: "Подтверждение соответствия системы менеджмента качества",
    type: "Сертификация",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Почетная грамота за вклад в развитие строительства",
    year: "2020",
    organization: "Правительство Республики Таджикистан",
    description: "За значительный вклад в развитие строительной отрасли страны",
    type: "Государственная награда",
    image: "/placeholder.svg?height=200&width=300",
  },
]

const statistics = [
  { icon: Trophy, value: "25+", label: "Наград и дипломов", color: "text-yellow-600" },
  { icon: Medal, value: "15", label: "Международных признаний", color: "text-blue-600" },
  { icon: Star, value: "50+", label: "Научных публикаций", color: "text-green-600" },
  { icon: Award, value: "10", label: "Патентов на изобретения", color: "text-purple-600" },
]

export function AchievementsContent() {
  return (
    <div className="space-y-8">
      <Card className="border-0 shadow-sm">
        <CardHeader className="bg-blue-600 text-white rounded-t-lg">
          <CardTitle className="text-2xl font-bold text-center">ДОСТИЖЕНИЯ И НАГРАДЫ</CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">Наши достижения и признание</h1>
            <p className="text-lg text-slate-600">Результаты многолетней работы и профессионального развития</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statistics.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index} className="border-0 shadow-sm text-center hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <Icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
                <h3 className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</h3>
                <p className="text-slate-600">{stat.label}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="space-y-6">
        {achievements.map((achievement, index) => (
          <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-4 gap-6 items-center">
                <div className="md:col-span-1">
                  <Image
                    src={achievement.image || "/placeholder.svg"}
                    alt={achievement.title}
                    width={300}
                    height={200}
                    className="rounded-lg shadow-sm w-full"
                  />
                </div>
                <div className="md:col-span-3 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">{achievement.title}</h3>
                      <Badge className="bg-blue-600 hover:bg-blue-700">{achievement.type}</Badge>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-500">
                      <Calendar className="h-4 w-4" />
                      <span>{achievement.year}</span>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{achievement.description}</p>
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-slate-600 font-medium">{achievement.organization}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
