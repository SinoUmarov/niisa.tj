"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, FileText, Download, Eye, Filter, BookOpen, Building2 } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

const documents = [
  {
    id: 1,
    title: {
      ru: "ISO 9001:2015 - Системы менеджмента качества",
      tj: "ISO 9001:2015 - Системаҳои менеҷменти сифат",
      en: "ISO 9001:2015 - Quality Management Systems",
    },
    description: {
      ru: "Требования к системам менеджмента качества в строительстве",
      tj: "Талаботҳо ба системаҳои менеҷменти сифат дар сохтмонсозӣ",
      en: "Requirements for quality management systems in construction",
    },
    category: "ISO",
    type: "Стандарт",
    year: "2015",
    pages: 46,
    language: "ru",
    downloads: 1250,
    views: 3420,
    tags: ["качество", "менеджмент", "строительство", "ISO"],
    fileSize: "2.1 MB",
  },
  {
    id: 2,
    title: {
      ru: "ISO 14001:2015 - Системы экологического менеджмента",
      tj: "ISO 14001:2015 - Системаҳои менеҷменти экологӣ",
      en: "ISO 14001:2015 - Environmental Management Systems",
    },
    description: {
      ru: "Требования и руководство по применению экологических стандартов",
      tj: "Талаботҳо ва роҳнамо оид ба истифодаи стандартҳои экологӣ",
      en: "Requirements and guidance for environmental standards application",
    },
    category: "ISO",
    type: "Стандарт",
    year: "2015",
    pages: 35,
    language: "ru",
    downloads: 890,
    views: 2150,
    tags: ["экология", "менеджмент", "окружающая среда", "ISO"],
    fileSize: "1.8 MB",
  },
  {
    id: 3,
    title: {
      ru: "Исследование сейсмостойкости зданий в условиях Таджикистана",
      tj: "Тадқиқоти муқовимати заминларза дар шароити Тоҷикистон",
      en: "Seismic Resistance Research of Buildings in Tajikistan Conditions",
    },
    description: {
      ru: "Научное исследование поведения строительных конструкций при землетрясениях",
      tj: "Тадқиқоти илмӣ оид ба рафтори конструксияҳои сохтмонӣ ҳангоми заминларза",
      en: "Scientific research on building structures behavior during earthquakes",
    },
    category: "Исследования",
    type: "Научная работа",
    year: "2023",
    pages: 124,
    language: "ru",
    downloads: 567,
    views: 1890,
    tags: ["сейсмостойкость", "землетрясения", "конструкции", "исследования"],
    fileSize: "5.2 MB",
  },
  {
    id: 4,
    title: {
      ru: "ISO 45001:2018 - Системы менеджмента охраны труда",
      tj: "ISO 45001:2018 - Системаҳои менеҷменти ҳифзи меҳнат",
      en: "ISO 45001:2018 - Occupational Health and Safety Management Systems",
    },
    description: {
      ru: "Требования к системам управления охраной труда на стройплощадках",
      tj: "Талаботҳо ба системаҳои идоракунии ҳифзи меҳнат дар майдонҳои сохтмонӣ",
      en: "Requirements for occupational health and safety management systems at construction sites",
    },
    category: "ISO",
    type: "Стандарт",
    year: "2018",
    pages: 52,
    language: "ru",
    downloads: 1100,
    views: 2890,
    tags: ["охрана труда", "безопасность", "строительство", "ISO"],
    fileSize: "2.4 MB",
  },
  {
    id: 5,
    title: {
      ru: "Энергоэффективные технологии в строительстве",
      tj: "Технологияҳои энергиясарф дар сохтмонсозӣ",
      en: "Energy Efficient Technologies in Construction",
    },
    description: {
      ru: "Исследование современных методов энергосбережения в зданиях",
      tj: "Тадқиқоти усулҳои муосири энергиясарфӣ дар биноҳо",
      en: "Research on modern energy saving methods in buildings",
    },
    category: "Исследования",
    type: "Научная работа",
    year: "2023",
    pages: 89,
    language: "ru",
    downloads: 445,
    views: 1234,
    tags: ["энергоэффективность", "технологии", "экология", "исследования"],
    fileSize: "3.7 MB",
  },
  {
    id: 6,
    title: {
      ru: "ISO 50001:2018 - Системы энергетического менеджмента",
      tj: "ISO 50001:2018 - Системаҳои менеҷменти энергетикӣ",
      en: "ISO 50001:2018 - Energy Management Systems",
    },
    description: {
      ru: "Требования к системам управления энергопотреблением",
      tj: "Талаботҳо ба системаҳои идоракунии истеъмоли энергия",
      en: "Requirements for energy consumption management systems",
    },
    category: "ISO",
    type: "Стандарт",
    year: "2018",
    pages: 38,
    language: "ru",
    downloads: 678,
    views: 1567,
    tags: ["энергия", "менеджмент", "эффективность", "ISO"],
    fileSize: "1.9 MB",
  },
]

export function DocumentsContent() {
  const { language, translations } = useLanguage()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedType, setSelectedType] = useState("all")

  const filteredDocuments = useMemo(() => {
    return documents.filter((doc) => {
      const matchesSearch =
        doc.title[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.description[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory = selectedCategory === "all" || doc.category === selectedCategory
      const matchesType = selectedType === "all" || doc.type === selectedType

      return matchesSearch && matchesCategory && matchesType
    })
  }, [searchTerm, selectedCategory, selectedType, language])

  return (
    <div className="space-y-8">
      <Card className="border-0 shadow-sm">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
          <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
            <BookOpen className="mr-3 h-8 w-8" />
            {translations.documentsTitle}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">{translations.documentsSubtitle}</h1>
            <p className="text-lg text-slate-600">{translations.documentsDescription}</p>
          </div>

          {/* Search and Filters */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder={translations.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder={translations.categoryFilter} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{translations.allCategories}</SelectItem>
                <SelectItem value="ISO">ISO {translations.standards}</SelectItem>
                <SelectItem value="Исследования">{translations.research}</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder={translations.typeFilter} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{translations.allTypes}</SelectItem>
                <SelectItem value="Стандарт">{translations.standard}</SelectItem>
                <SelectItem value="Научная работа">{translations.scientificWork}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-slate-600">
              {filteredDocuments.length > 0
                ? `${translations.found} ${filteredDocuments.length} ${translations.documents}`
                : translations.noResults}
            </p>
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              {translations.advancedSearch}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Documents Grid */}
      {filteredDocuments.length > 0 ? (
        <div className="grid gap-6">
          {filteredDocuments.map((doc) => (
            <Card
              key={doc.id}
              className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer transform hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        {doc.category === "ISO" ? (
                          <Building2 className="h-6 w-6 text-white" />
                        ) : (
                          <BookOpen className="h-6 w-6 text-white" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {doc.title[language]}
                        </h3>
                        <p className="text-slate-600 leading-relaxed mb-3">{doc.description[language]}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge className="bg-blue-600 hover:bg-blue-700">{doc.category}</Badge>
                          <Badge variant="outline">{doc.type}</Badge>
                          <Badge variant="outline">{doc.year}</Badge>
                          <Badge variant="outline">
                            {doc.pages} {translations.pages}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {doc.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-slate-500 pt-4 border-t">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <FileText className="h-4 w-4" />
                          <span>{doc.fileSize}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{doc.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Download className="h-4 w-4" />
                          <span>{doc.downloads.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2 ml-6">
                    <Button className="bg-blue-600 hover:bg-blue-700 group-hover:scale-105 transition-transform">
                      <Download className="mr-2 h-4 w-4" />
                      {translations.download}
                    </Button>
                    <Button variant="outline" className="group-hover:scale-105 transition-transform bg-transparent">
                      <Eye className="mr-2 h-4 w-4" />
                      {translations.preview}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="border-0 shadow-sm">
          <CardContent className="p-12 text-center">
            <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-12 w-12 text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">{translations.noResultsTitle}</h3>
            <p className="text-slate-600 mb-6">{translations.noResultsDescription}</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
                setSelectedType("all")
              }}
              variant="outline"
            >
              {translations.clearFilters}
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
