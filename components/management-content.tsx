import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, User } from "lucide-react"
import Image from "next/image"

const managementTeam = [
  {
    name: "Иброхим Назаров",
    position: "Директор",
    education: "Кандидат технических наук",
    experience: "Более 25 лет в строительной отрасли",
    phone: "+992 (37) 227-77-60",
    email: "director@niisa.tj",
    image: "/placeholder.svg?height=300&width=250",
  },
  {
    name: "Фарход Рахимов",
    position: "Заместитель директора по научной работе",
    education: "Доктор технических наук",
    experience: "Более 20 лет в научной деятельности",
    phone: "+992 (37) 227-77-61",
    email: "science@niisa.tj",
    image: "/placeholder.svg?height=300&width=250",
  },
  {
    name: "Мухаммад Юсупов",
    position: "Главный инженер",
    education: "Кандидат технических наук",
    experience: "Более 18 лет в проектировании",
    phone: "+992 (37) 227-77-62",
    email: "engineer@niisa.tj",
    image: "/placeholder.svg?height=300&width=250",
  },
]

export function ManagementContent() {
  return (
    <div className="space-y-8">
      <Card className="border-0 shadow-sm">
        <CardHeader className="bg-blue-600 text-white rounded-t-lg">
          <CardTitle className="text-2xl font-bold text-center">РУКОВОДСТВО</CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">Руководство предприятия</h1>
            <p className="text-lg text-slate-600">
              Опытная команда профессионалов с многолетним стажем работы в строительной отрасли
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-8">
        {managementTeam.map((member, index) => (
          <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-4 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="relative">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={250}
                      height={300}
                      className="rounded-lg shadow-md w-full"
                    />
                  </div>
                </div>

                <div className="md:col-span-3 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{member.name}</h3>
                    <Badge className="bg-blue-600 hover:bg-blue-700 text-lg px-4 py-2">{member.position}</Badge>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <User className="h-5 w-5 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-slate-900">Образование</h4>
                          <p className="text-slate-600">{member.education}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <User className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-slate-900">Опыт работы</h4>
                          <p className="text-slate-600">{member.experience}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-blue-600" />
                        <div>
                          <h4 className="font-semibold text-slate-900">Телефон</h4>
                          <p className="text-slate-600">{member.phone}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-purple-600" />
                        <div>
                          <h4 className="font-semibold text-slate-900">Email</h4>
                          <p className="text-slate-600">{member.email}</p>
                        </div>
                      </div>
                    </div>
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
