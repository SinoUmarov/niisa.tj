import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, Award, Calendar } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            О НАС
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Государственное унитарное предприятие «Научно-исследовательский
            <span className="text-blue-600 block">институт «Строительство и архитектура»</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">(ГУП НИИСA)</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-slate-600 leading-relaxed">
              Государственное унитарное предприятие «Научно-исследовательский институт «Строительство и архитектура»
              (ГУП НИИСA), основанное на праве хозяйственного ведения собственной деятельности, создано в соответствии с
              Постановлением Правительства Республики Таджикистан от 4 июля 2006г. за №311.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Учредителем является Комитет по архитектуре и строительству при Правительстве Республики Таджикистан.
              Предприятие создано в целях удовлетворения общественных потребностей в результатах его деятельности,
              получения прибыли и обеспечения утверждаемых Правительством социально-экономических показателей.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <Card className="border-0 shadow-sm bg-slate-50">
                <CardContent className="p-4 text-center">
                  <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-slate-900">2006</p>
                  <p className="text-sm text-slate-600">Год основания</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm bg-slate-50">
                <CardContent className="p-4 text-center">
                  <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-slate-900">50+</p>
                  <p className="text-sm text-slate-600">Сотрудников</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Здание института"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <Building2 className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle className="text-xl">Исследования</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">Проведение научных исследований в области строительства и архитектуры</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <Award className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle className="text-xl">Стандарты</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">Разработка нормативно-технических документов и стандартов</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <Users className="h-12 w-12 text-purple-600 mb-4" />
              <CardTitle className="text-xl">Консультации</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">Экспертиза проектов и консультационные услуги</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
