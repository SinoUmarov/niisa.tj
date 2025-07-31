import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Briefcase, Clock, GraduationCap, Send } from "lucide-react"

const vacancies = [
  {
    title: "Ведущий научный сотрудник",
    department: "Отдел строительных конструкций",
    type: "Полная занятость",
    experience: "От 5 лет",
    education: "Кандидат технических наук",
    salary: "По договоренности",
    requirements: [
      "Высшее техническое образование",
      "Опыт работы в строительной отрасли не менее 5 лет",
      "Знание современных строительных технологий",
      "Навыки работы с CAD системами",
    ],
    responsibilities: [
      "Проведение научных исследований",
      "Разработка технических решений",
      "Подготовка научных публикаций",
      "Участие в проектах института",
    ],
  },
  {
    title: "Инженер-проектировщик",
    department: "Проектный отдел",
    type: "Полная занятость",
    experience: "От 3 лет",
    education: "Высшее техническое",
    salary: "15,000 - 25,000 сомони",
    requirements: [
      "Высшее строительное образование",
      "Опыт проектирования зданий и сооружений",
      "Владение AutoCAD, ArchiCAD",
      "Знание строительных норм и правил",
    ],
    responsibilities: [
      "Разработка проектной документации",
      "Выполнение расчетов конструкций",
      "Согласование проектов",
      "Авторский надзор",
    ],
  },
  {
    title: "Лаборант-исследователь",
    department: "Испытательная лаборатория",
    type: "Полная занятость",
    experience: "От 1 года",
    education: "Среднее специальное/Высшее",
    salary: "8,000 - 12,000 сомони",
    requirements: [
      "Техническое образование",
      "Опыт работы в лаборатории",
      "Внимательность и аккуратность",
      "Знание методов испытаний материалов",
    ],
    responsibilities: [
      "Проведение лабораторных испытаний",
      "Ведение протоколов испытаний",
      "Обслуживание оборудования",
      "Подготовка отчетов",
    ],
  },
]

export function VacanciesContent() {
  return (
    <div className="space-y-8">
      <Card className="border-0 shadow-sm">
        <CardHeader className="bg-blue-600 text-white rounded-t-lg">
          <CardTitle className="text-2xl font-bold text-center">ВАКАНСИИ</CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">Открытые вакансии</h1>
            <p className="text-lg text-slate-600">Присоединяйтесь к нашей команде профессионалов</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6">
        {vacancies.map((vacancy, index) => (
          <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{vacancy.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-slate-600 mb-3">
                      <div className="flex items-center space-x-1">
                        <Briefcase className="h-4 w-4" />
                        <span>{vacancy.department}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{vacancy.type}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">{vacancy.experience}</Badge>
                      <Badge variant="outline">{vacancy.education}</Badge>
                      <Badge className="bg-green-600 hover:bg-green-700">{vacancy.salary}</Badge>
                    </div>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Откликнуться
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                      <GraduationCap className="h-5 w-5 mr-2 text-blue-600" />
                      Требования:
                    </h4>
                    <ul className="space-y-2">
                      {vacancy.requirements.map((req, idx) => (
                        <li key={idx} className="text-slate-700 text-sm flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                      <Briefcase className="h-5 w-5 mr-2 text-green-600" />
                      Обязанности:
                    </h4>
                    <ul className="space-y-2">
                      {vacancy.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-slate-700 text-sm flex items-start">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-0 shadow-sm bg-blue-50">
        <CardContent className="p-8 text-center">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Не нашли подходящую вакансию?</h3>
          <p className="text-slate-600 mb-6">
            Отправьте нам свое резюме, и мы свяжемся с вами при появлении подходящих позиций
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Отправить резюме
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
