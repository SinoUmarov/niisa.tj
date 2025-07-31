import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Download, Calendar, Eye, MessageSquare } from "lucide-react"

const materials = [
  {
    title: "Проект новых строительных норм для сейсмостойкого строительства",
    description: "Обновленные нормативы для строительства в сейсмически активных зонах Таджикистана",
    category: "Нормативные документы",
    date: "15 января 2024",
    status: "На обсуждении",
    views: 245,
    comments: 12,
    fileSize: "2.5 MB",
    fileType: "PDF",
  },
  {
    title: "Методические рекомендации по энергоэффективному строительству",
    description: "Руководство по применению энергосберегающих технологий в строительстве",
    category: "Методические материалы",
    date: "10 января 2024",
    status: "Открыто для комментариев",
    views: 189,
    comments: 8,
    fileSize: "1.8 MB",
    fileType: "PDF",
  },
  {
    title: "Технические условия на новые строительные материалы",
    description: "Требования к современным композитным материалам для строительства",
    category: "Технические условия",
    date: "8 января 2024",
    status: "Завершено обсуждение",
    views: 156,
    comments: 15,
    fileSize: "3.2 MB",
    fileType: "PDF",
  },
  {
    title: "Стандарты качества для строительных работ",
    description: "Обновленные требования к качеству выполнения строительно-монтажных работ",
    category: "Стандарты",
    date: "5 января 2024",
    status: "На рассмотрении",
    views: 134,
    comments: 6,
    fileSize: "2.1 MB",
    fileType: "PDF",
  },
]

export function MaterialsContent() {
  return (
    <div className="space-y-8">
      <Card className="border-0 shadow-sm">
        <CardHeader className="bg-blue-600 text-white rounded-t-lg">
          <CardTitle className="text-2xl font-bold text-center">МАТЕРИАЛЫ ДЛЯ ОБСУЖДЕНИЯ</CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">Общественное обсуждение проектов</h1>
            <p className="text-lg text-slate-600">
              Участвуйте в обсуждении проектов нормативных документов и технических решений
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6">
        {materials.map((material, index) => (
          <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{material.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-3">{material.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="outline">{material.category}</Badge>
                      <Badge
                        className={
                          material.status === "На обсуждении"
                            ? "bg-blue-600 hover:bg-blue-700"
                            : material.status === "Открыто для комментариев"
                              ? "bg-green-600 hover:bg-green-700"
                              : material.status === "Завершено обсуждение"
                                ? "bg-gray-600 hover:bg-gray-700"
                                : "bg-orange-600 hover:bg-orange-700"
                        }
                      >
                        {material.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2 ml-4">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Download className="mr-2 h-4 w-4" />
                      Скачать
                    </Button>
                    <Button variant="outline">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Обсудить
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-slate-500 pt-4 border-t">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{material.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FileText className="h-4 w-4" />
                      <span>
                        {material.fileType} • {material.fileSize}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{material.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>{material.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-0 shadow-sm bg-blue-50">
        <CardContent className="p-8 text-center">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Как принять участие в обсуждении?</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="space-y-2">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <h4 className="font-semibold">Скачайте документ</h4>
              <p className="text-sm text-slate-600">Ознакомьтесь с материалами для обсуждения</p>
            </div>
            <div className="space-y-2">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <h4 className="font-semibold">Изучите содержание</h4>
              <p className="text-sm text-slate-600">Внимательно изучите предложенные изменения</p>
            </div>
            <div className="space-y-2">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <h4 className="font-semibold">Оставьте комментарий</h4>
              <p className="text-sm text-slate-600">Поделитесь своим мнением и предложениями</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
