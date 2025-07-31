import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, MapPin, Phone, Mail, Globe, Users } from "lucide-react"
import Image from "next/image"

export function OrganizationContent() {
  return (
    <div className="space-y-8">
      <Card className="border-0 shadow-sm">
        <CardHeader className="bg-blue-600 text-white rounded-t-lg">
          <CardTitle className="text-2xl font-bold text-center">ВЫШЕСТОЯЩАЯ ОРГАНИЗАЦИЯ</CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
              Комитет по архитектуре и строительству при Правительстве Республики Таджикистан
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Здание Комитета"
                width={500}
                height={300}
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div className="space-y-6">
              <p className="text-slate-700 leading-relaxed">
                Комитет по архитектуре и строительству при Правительстве Республики Таджикистан является центральным
                исполнительным органом государственной власти, осуществляющим функции по выработке и реализации
                государственной политики и нормативно-правовому регулированию в сфере архитектуры, градостроительства и
                строительства.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">734025, г. Душанбе, ул. Айни, 14</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <span className="text-slate-700">+992 (37) 221-15-47</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-purple-600" />
                  <span className="text-slate-700">info@architecture.tj</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-orange-600" />
                  <span className="text-slate-700">www.architecture.tj</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-slate-900">Основные функции Комитета:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Разработка государственной политики в области архитектуры и строительства",
                "Нормативно-правовое регулирование строительной деятельности",
                "Контроль за соблюдением строительных норм и правил",
                "Лицензирование строительной деятельности",
                "Государственная экспертиза проектной документации",
                "Координация научно-исследовательских работ в строительстве",
              ].map((func, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Building2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{func}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-0 shadow-sm text-center">
          <CardContent className="p-6">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">200+</h3>
            <p className="text-slate-600">Сотрудников</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm text-center">
          <CardContent className="p-6">
            <Building2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">15</h3>
            <p className="text-slate-600">Региональных отделений</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm text-center">
          <CardContent className="p-6">
            <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">1992</h3>
            <p className="text-slate-600">Год создания</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
