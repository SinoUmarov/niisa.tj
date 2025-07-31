import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Target, Users, Calendar } from "lucide-react"

const workDirections = [
  "разработка проектов зданий, сооружений и застройки, а также проектов их реконструкции;",
  "опытно-конструкторские и технологические работы;",
  "теория расчета зданий и сооружений; надежность строительных конструкций и зданий; компьютерное моделирование и программное обеспечение;",
  "современные проблемы архитектуры и градостроительства; реконструкция и реновация зданий;",
  "разработка строительных норм, государственных стандартов и др. нормативно-технических документов;",
  "разработка современных эффективных экономических методов работы на рынке; совершенствование методов нормирования в строительстве;",
  "разработка новых видов строительных материалов, современных технологий с учетом эффективного использования природных месторождений сырья;",
  "технологии нетрадиционных возобновляемых источников энергии; создание энергосберегающих систем транспортировки, распределения и потребления тепла и электроэнергии;",
  "совершенствование и повышение эффективности работы инженерных сетей и сооружений населенных мест;",
  "эффективные методы, технологии и технические средства обследования, контроля и испытания строительных материалов и конструкций;",
  "проблемы создания благоприятной среды обитания человека; экология и рациональное природопользование;",
  "проведение повышения квалификации работников строительной отрасли;",
  "разработка проекта организации строительства (ПОС);",
  "разработка проекта производства работ (ППР);",
]

export function AboutContent() {
  return (
    <div className="space-y-8">
      <Card className="border-0 shadow-sm">
        <CardHeader className="bg-blue-600 text-white rounded-t-lg">
          <CardTitle className="text-2xl font-bold text-center">О ПРЕДПРИЯТИИ</CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
              Государственное унитарное предприятие «Научно-исследовательский институт «Строительство и архитектура»
            </h1>
            <Badge variant="outline" className="text-lg px-4 py-2">
              (ГУП НИИСA)
            </Badge>
          </div>

          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-6">
            <p>
              Государственное унитарное предприятие «Научно-исследовательский институт строительства и архитектуры» (ГУП
              НИИСA), основанное на праве хозяйственного ведения собственной деятельности, создано в соответствии с
              Постановлением Правительства Республики Таджикистан от 4 июля 2006 г. за №311.
            </p>

            <p>Учредителем является Комитет по архитектуре и строительству при Правительстве Республики Таджикистан.</p>

            <p>
              Предприятие создано в целях удовлетворения общественных потребностей в результатах его деятельности, в том
              числе выполнения и координации утверждаемых Правительством Республики Таджикистан государственных целевых
              программ, программ фундаментальных и прикладных научно-исследовательских, проектных,
              опытно-конструкторских и технологических работ в области строительства, интеграции науки, практики и
              образования, международного научно-технического сотрудничества.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-sm">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <Target className="h-8 w-8 text-blue-600" />
            <CardTitle className="text-2xl">Основные направления работы:</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {workDirections.map((direction, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <p className="text-slate-700 leading-relaxed">{direction}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-0 shadow-sm text-center">
          <CardContent className="p-6">
            <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">2006</h3>
            <p className="text-slate-600">Год основания предприятия</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm text-center">
          <CardContent className="p-6">
            <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">50+</h3>
            <p className="text-slate-600">Квалифицированных специалистов</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm text-center">
          <CardContent className="p-6">
            <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">14</h3>
            <p className="text-slate-600">Основных направлений деятельности</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
