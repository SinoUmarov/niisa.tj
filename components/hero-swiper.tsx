"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Database, FileText, Search, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/hooks/use-language"

const slides = [
  {
    id: 1,
    title: {
      ru: "Информационная система «Иттилооти шахрсозӣ»",
      tj: "Системаи иттилоотии «Иттилооти шаҳрсозӣ»",
      en: "Information System «Ittillooti Shahrsozi»",
    },
    description: {
      ru: "Информационная система объединила в одной компьютерной программе нормативно-техническую и правовую информацию, необходимую для специалистов проектных, строительных, ремонтных или монтажных организаций.",
      tj: "Системаи иттилоотӣ дар як барномаи компютерӣ маълумоти нормативӣ-техникӣ ва ҳуқуқиро муттаҳид кард, ки барои мутахассисони ташкилотҳои лоиҳавӣ, сохтмонӣ, таъмиротӣ ё монтажӣ зарур аст.",
      en: "The information system combines regulatory, technical and legal information necessary for specialists of design, construction, repair or installation organizations in one computer program.",
    },
    image: "/placeholder.svg?height=500&width=600&text=Information+System",
    features: [
      { icon: Database, label: { ru: "База данных", tj: "Пойгоҳи додаҳо", en: "Database" } },
      { icon: FileText, label: { ru: "Документы", tj: "Ҳуҷҷатҳо", en: "Documents" } },
      { icon: Search, label: { ru: "Поиск", tj: "Ҷустуҷӯ", en: "Search" } },
    ],
  },
  {
    id: 2,
    title: {
      ru: "Научно-исследовательская деятельность",
      tj: "Фаъолияти илмӣ-тадқиқотӣ",
      en: "Scientific Research Activities",
    },
    description: {
      ru: "Проведение фундаментальных и прикладных исследований в области строительства, разработка новых технологий и материалов для повышения качества и безопасности строительных работ.",
      tj: "Гузаронидани тадқиқоти фундаменталӣ ва амалӣ дар соҳаи сохтмонсозӣ, таҳияи технологияҳо ва маводи нав барои баланд бардоштани сифат ва бехатарии корҳои сохтмонӣ.",
      en: "Conducting fundamental and applied research in construction, developing new technologies and materials to improve the quality and safety of construction work.",
    },
    image: "/placeholder.svg?height=500&width=600&text=Scientific+Research",
    features: [
      { icon: Database, label: { ru: "Исследования", tj: "Тадқиқотҳо", en: "Research" } },
      { icon: FileText, label: { ru: "Публикации", tj: "Нашрияҳо", en: "Publications" } },
      { icon: Search, label: { ru: "Инновации", tj: "Навоварӣ", en: "Innovation" } },
    ],
  },
  {
    id: 3,
    title: {
      ru: "Экспертиза и сертификация",
      tj: "Экспертиза ва сертификатсия",
      en: "Expertise and Certification",
    },
    description: {
      ru: "Проведение государственной экспертизы проектной документации, сертификация строительных материалов и технологий в соответствии с международными стандартами качества.",
      tj: "Гузаронидани экспертизаи давлатии ҳуҷҷатҳои лоиҳавӣ, сертификатсияи маводҳо ва технологияҳои сохтмонӣ мувофиқи стандартҳои байналмилалии сифат.",
      en: "Conducting state expertise of project documentation, certification of construction materials and technologies in accordance with international quality standards.",
    },
    image: "/placeholder.svg?height=500&width=600&text=Expertise+Certification",
    features: [
      { icon: Database, label: { ru: "Экспертиза", tj: "Экспертиза", en: "Expertise" } },
      { icon: FileText, label: { ru: "Сертификаты", tj: "Сертификатҳо", en: "Certificates" } },
      { icon: Search, label: { ru: "Контроль", tj: "Назорат", en: "Control" } },
    ],
  },
]

export function HeroSwiper() {
  const { language, translations } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const currentSlideData = slides[currentSlide]

  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50/30 py-16 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                {translations.heroTitle}
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                {currentSlideData.title[language]}
              </h1>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed">{currentSlideData.description[language]}</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {currentSlideData.features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <Card
                    key={index}
                    className="border-0 shadow-sm bg-white/60 backdrop-blur-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                  >
                    <CardContent className="p-4 text-center">
                      <Icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm font-medium text-slate-700">{feature.label[language]}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300">
                {translations.learnMore}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover:scale-105 transition-all duration-300 bg-transparent"
              >
                {translations.demoVersion}
              </Button>
            </div>

            {/* Slide indicators */}
            <div className="flex items-center space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-blue-600 w-8" : "bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src={currentSlideData.image || "/placeholder.svg"}
                alt={currentSlideData.title[language]}
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl transition-all duration-500 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl -z-10"></div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 z-20"
            >
              <ChevronLeft className="h-6 w-6 text-slate-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 z-20"
            >
              <ChevronRight className="h-6 w-6 text-slate-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
