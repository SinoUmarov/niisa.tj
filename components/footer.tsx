import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, Twitter, Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white/20 rounded-sm"></div>
              </div>
              <div>
                <h3 className="font-bold">ГУП НИИСA</h3>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Научно-исследовательский институт строительства и архитектуры Республики Таджикистан
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  О предприятии
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Наша деятельность
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Новости
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Проекты
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Материалы
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Контакты</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-slate-400" />
                <span className="text-slate-400">niisanip@mail.ru</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-slate-400" />
                <span className="text-slate-400">+992 (37)227-77-60</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-slate-400 mt-0.5" />
                <span className="text-slate-400">Душанбе, Республика Таджикистан</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Подписка</h4>
            <p className="text-slate-400 text-sm">Получайте последние новости и обновления</p>
            <div className="flex space-x-2">
              <Input
                placeholder="Ваш email"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
              />
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400 text-sm">© 2024 ГУП НИИСA. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
