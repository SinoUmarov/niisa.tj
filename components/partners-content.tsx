import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Globe, Handshake, MapPin } from "lucide-react"
import Image from "next/image"

const partners = [
  {
    name: "Московский государственный строительный университет",
    country: "Россия",
    type: "Образовательное учреждение",
    cooperation: "Научное сотрудничество, обмен опытом",
    since: "2018",
    logo: "/placeholder.svg?height=100&width=150",
  },
  {
    name: "Казахский национальный исследовательский технический университет",
    country: "Казахстан",
    type: "Научно-исследовательский институт",
    cooperation: "Совместные исследования, публикации",
    since: "2019",
    logo: "/placeholder.svg?height=100&width=150",
  },
  {
    name: "Ташкентский архитектурно-строительный институт",
    country: "Узбекистан",
    type: "Образовательное учреждение",
    cooperation: "Обмен студентами, совместные проекты",
    since: "2020",
    logo: "/placeholder.svg?height=100&width=150",
  },
  {
    name: "Кыргызский государственный университет строительства",
    country: "Кыргызстан",
    type: "Образовательное учреждение",
    cooperation: "Научные конференции, исследования",
    since: "2021",
    logo: "/placeholder.svg?height=100&width=150",
  },
  {
    name: "Белорусский национальный технический университет",
    country: "Беларусь",
    type: "Технический университет",
    cooperation: "Технологический обмен, стажировки",
    since: "2017",
    logo: "/placeholder.svg?height=100&width=150",
  },
  {
    name: "Азербайджанский архитектурно-строительный университет",
    country: "Азербайджан",
    type: "Образовательное учреждение",
    cooperation: "Совместные научные программы",
    since: "2022",
    logo: "/placeholder.svg?height=100&width=150",
  },
]

const partnershipTypes = [
  {
    icon: Building2,
    title: "Научное сотрудничество",
    count: "15+",
    description: "Совместные исследования и разработки",
  },
  {
    icon: Globe,
    title: "Международные проекты",
    count: "8",
    description: "Участие в международных программах",
  },
  {
    icon: Handshake,
    title: "Соглашения о сотрудничестве",
    count: "25+",
    description: "Подписанные меморандумы и договоры",
  },
]

export function PartnersContent() {
  return (
    <div className="space-y-8">
      <Card className="border-0 shadow-sm">
        <CardHeader className="bg-blue-600 text-white rounded-t-lg">
          <CardTitle className="text-2xl font-bold text-center">НАШИ ПАРТНЕРЫ</CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">Партнерство и сотрудничество</h1>
            <p className="text-lg text-slate-600">
              Мы развиваем долгосрочные партнерские отношения с ведущими организациями
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {partnershipTypes.map((type, index) => {
          const Icon = type.icon
          return (
            <Card key={index} className="border-0 shadow-sm text-center hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <Icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{type.count}</h3>
                <h4 className="font-semibold text-slate-900 mb-2">{type.title}</h4>
                <p className="text-slate-600 text-sm">{type.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {partners.map((partner, index) => (
          <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={150}
                    height={100}
                    className="rounded-lg border bg-white p-2"
                  />
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">{partner.name}</h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      <span className="text-slate-600">{partner.country}</span>
                    </div>
                    <Badge variant="outline">{partner.type}</Badge>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">{partner.cooperation}</p>
                  <div className="text-xs text-slate-500">Сотрудничество с {partner.since} года</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
