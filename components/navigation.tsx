"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { useLanguage } from "@/hooks/use-language"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { translations } = useLanguage()

  const navigationItems = [
    { title: translations.home, href: "/" },
    { title: translations.about, href: "/about" },
    { title: translations.activities, href: "/activities" },
    { title: translations.news, href: "/news" },
    { title: translations.projects, href: "/projects" },
    { title: translations.documents, href: "/documents" },
    { title: translations.materials, href: "/materials" },
  ]

  return (
    <div className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-white/20 rounded-sm"></div>
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-900 leading-tight">
                  Государственное унитарное предприятие
                </h1>
                <p className="text-sm text-blue-600 font-medium">
                  "Научно-исследовательский институт строительство и архитектура"
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link key={item.title} href={item.href}>
                <Button variant="ghost" className="text-slate-700 hover:text-blue-600 hover:bg-blue-50">
                  {item.title}
                </Button>
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-slate-700 hover:text-blue-600 hover:bg-blue-50">
                  {translations.more} <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>{translations.contacts}</DropdownMenuItem>
                <DropdownMenuItem>{translations.documents}</DropdownMenuItem>
                <DropdownMenuItem>{translations.gallery}</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <nav className="flex flex-col space-y-4 mt-8">
                {navigationItems.map((item) => (
                  <Link key={item.title} href={item.href}>
                    <Button
                      variant="ghost"
                      className="justify-start text-slate-700 hover:text-blue-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Button>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  )
}
