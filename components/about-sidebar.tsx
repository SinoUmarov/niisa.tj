"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Building2, Users, Award, Handshake, Briefcase } from "lucide-react"
import Link from "next/link"

const sidebarItems = [
  {
    id: "organization",
    title: "Вышестоящая организация",
    icon: Building2,
    href: "/about/organization",
  },
  {
    id: "management",
    title: "Руководство",
    icon: Users,
    href: "/about/management",
  },
  {
    id: "achievements",
    title: "Достижения и награды",
    icon: Award,
    href: "/about/achievements",
  },
  {
    id: "partners",
    title: "Наши партнеры",
    icon: Handshake,
    href: "/about/partners",
  },
  {
    id: "vacancies",
    title: "Вакансии",
    icon: Briefcase,
    href: "/about/vacancies",
  },
]

export function AboutSidebar() {
  const [activeItem, setActiveItem] = useState<string | null>(null)

  return (
    <Card className="border-0 shadow-sm sticky top-24">
      <CardContent className="p-0">
        <div className="space-y-1">
          {sidebarItems.map((item) => {
            const Icon = item.icon
            return (
              <Link key={item.id} href={item.href}>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-left p-4 h-auto text-slate-700 hover:text-blue-600 hover:bg-blue-50"
                >
                  <Icon className="h-5 w-5 mr-3 flex-shrink-0" />
                  <span className="flex-1">{item.title}</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
