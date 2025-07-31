import { ChevronRight, Home } from "lucide-react"
import Link from "next/link"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="bg-slate-100 border-b">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center space-x-2 text-sm">
          <Link href="/" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <Home className="h-4 w-4 mr-1" />
            Главная
          </Link>
          {items.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <ChevronRight className="h-4 w-4 text-slate-400" />
              {item.href ? (
                <Link href={item.href} className="text-blue-600 hover:text-blue-800 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-slate-600">{item.label}</span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}
