import { Mail, Phone, Twitter, Facebook, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"

export function Header() {
  return (
    <header className="bg-slate-50 border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>niisanip@mail.ru</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+992 (37)227-77-60</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <LanguageSwitcher />
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Instagram className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Linkedin className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
