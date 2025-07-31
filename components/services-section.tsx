import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Building2, Calculator, Shield, ArrowRight, CheckCircle } from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "Нормативно-техническая документация",
    description: "Разработка и актуализация строительных норм, правил и стандартов",
    features: ["ГОСТ", "СНиП", "ТСН", "Методические указания"],
  },
  {
    icon: Building2,
    title: "Экспертиза проектов",
    description: "Проведение государственной экспертизы проектной документации",
    features: ["Архитектурные решения", "Конструктивные решения", "Инженерные системы"],
  },
  {
    icon: Calculator,
    title: "Научные исследования",
    description: "Фундаментальные и прикладные исследования в области строительства",
    features: ["Новые материалы", "Технологии строительства", "Сейсмостойкость"],
  },
  {
    icon: Shield,
    title: "Сертификация и лицензирование",
    description: "Услуги по сертификации строительных материалов и технологий",
    features: ["Сертификаты соответствия", "Технические условия", "Лицензии"],
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            НАША ДЕЯТЕЛЬНОСТЬ
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Основные направления работы</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Мы предоставляем полный спектр услуг в области строительства, архитектуры и нормативно-технического
            обеспечения строительной отрасли
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Все услуги
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
