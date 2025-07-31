"use client"

import { create } from "zustand"

type Language = "ru" | "tj" | "en"

interface LanguageStore {
  language: Language
  setLanguage: (lang: Language) => void
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: "ru",
  setLanguage: (lang) => set({ language: lang }),
}))

const translations = {
  ru: {
    // Navigation
    home: "Главная",
    about: "О предприятии",
    activities: "Наша деятельность",
    news: "Новости",
    projects: "Проекты",
    materials: "Материалы для обсуждения",
    documents: "Документация",

    // Documents page
    documentsTitle: "БАЗА ДОКУМЕНТОВ",
    documentsSubtitle: "ISO стандарты и научные исследования",
    documentsDescription: "Полная база документов по строительству и архитектуре",
    searchPlaceholder: "Поиск по документам...",
    categoryFilter: "Категория",
    typeFilter: "Тип документа",
    allCategories: "Все категории",
    allTypes: "Все типы",
    standards: "стандарты",
    research: "Исследования",
    standard: "Стандарт",
    scientificWork: "Научная работа",
    found: "Найдено",
    documents: "документов",
    noResults: "Документы не найдены",
    advancedSearch: "Расширенный поиск",
    download: "Скачать",
    preview: "Просмотр",
    pages: "стр.",
    noResultsTitle: "Документы не найдены",
    noResultsDescription: "Попробуйте изменить параметры поиска или очистить фильтры",
    clearFilters: "Очистить фильтры",

    // Hero section
    heroTitle: "Информационная система",
    heroSubtitle: "«Иттилооти шахрсозӣ»",
    heroDescription:
      "Информационная система «Иттилооти шахрсозӣ» объединила в одной компьютерной программе нормативно-техническую и правовую информацию.",
    learnMore: "Подробнее",
    demoVersion: "Демо версия",
  },
  tj: {
    // Navigation
    home: "Асосӣ",
    about: "Дар бораи корхона",
    activities: "Фаъолияти мо",
    news: "Ахборот",
    projects: "Лоиҳаҳо",
    materials: "Маводҳо барои муҳокима",
    documents: "Ҳуҷҷатҳо",

    // Documents page
    documentsTitle: "ПОЙГОҲИ ҲУҶҶАТҲО",
    documentsSubtitle: "Стандартҳои ISO ва тадқиқоти илмӣ",
    documentsDescription: "Пойгоҳи пурраи ҳуҷҷатҳо оид ба сохтмонсозӣ ва меъморӣ",
    searchPlaceholder: "Ҷустуҷӯ дар ҳуҷҷатҳо...",
    categoryFilter: "Категория",
    typeFilter: "Навъи ҳуҷҷат",
    allCategories: "Ҳамаи категорияҳо",
    allTypes: "Ҳамаи навъҳо",
    standards: "стандартҳо",
    research: "Тадқиқотҳо",
    standard: "Стандарт",
    scientificWork: "Кори илмӣ",
    found: "Ёфт шуд",
    documents: "ҳуҷҷат",
    noResults: "Ҳуҷҷатҳо ёфт нашуданд",
    advancedSearch: "Ҷустуҷӯи васеъ",
    download: "Боргирӣ",
    preview: "Пешнамоиш",
    pages: "саҳ.",
    noResultsTitle: "Ҳуҷҷатҳо ёфт нашуданд",
    noResultsDescription: "Параметрҳои ҷустуҷӯро тағйир диҳед ё филтрҳоро тоза кунед",
    clearFilters: "Тоза кардани филтрҳо",

    // Hero section
    heroTitle: "Системаи иттилоотӣ",
    heroSubtitle: "«Иттилооти шаҳрсозӣ»",
    heroDescription:
      "Системаи иттилоотии «Иттилооти шаҳрсозӣ» дар як барномаи компютерӣ маълумоти нормативӣ-техникӣ ва ҳуқуқиро муттаҳид кард.",
    learnMore: "Муфассал",
    demoVersion: "Нусхаи демо",
  },
  en: {
    // Navigation
    home: "Home",
    about: "About",
    activities: "Our Activities",
    news: "News",
    projects: "Projects",
    materials: "Discussion Materials",
    documents: "Documentation",

    // Documents page
    documentsTitle: "DOCUMENT DATABASE",
    documentsSubtitle: "ISO Standards and Scientific Research",
    documentsDescription: "Complete database of construction and architecture documents",
    searchPlaceholder: "Search documents...",
    categoryFilter: "Category",
    typeFilter: "Document Type",
    allCategories: "All Categories",
    allTypes: "All Types",
    standards: "standards",
    research: "Research",
    standard: "Standard",
    scientificWork: "Scientific Work",
    found: "Found",
    documents: "documents",
    noResults: "No documents found",
    advancedSearch: "Advanced Search",
    download: "Download",
    preview: "Preview",
    pages: "pp.",
    noResultsTitle: "No documents found",
    noResultsDescription: "Try changing search parameters or clear filters",
    clearFilters: "Clear Filters",

    // Hero section
    heroTitle: "Information System",
    heroSubtitle: "«Ittillooti Shahrsozi»",
    heroDescription:
      "The information system «Ittillooti Shahrsozi» combines regulatory, technical and legal information in one computer program.",
    learnMore: "Learn More",
    demoVersion: "Demo Version",
  },
}

export function useLanguage() {
  const { language, setLanguage } = useLanguageStore()

  return {
    language,
    setLanguage,
    translations: translations[language],
  }
}
