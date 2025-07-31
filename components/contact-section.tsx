"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            КОНТАКТЫ
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Свяжитесь с нами</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Мы готовы ответить на ваши вопросы и обсудить возможности сотрудничества
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Контактная информация</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Адрес</h4>
                    <p className="text-slate-600">
                      734025, Республика Таджикистан,
                      <br />
                      г. Душанбе, ул. Айни, 299/2
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Телефон</h4>
                    <p className="text-slate-600">+992 (37) 227-77-60</p>
                    <p className="text-slate-600">+992 (37) 227-77-61</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                    <p className="text-slate-600">niisanip@mail.ru</p>
                    <p className="text-slate-600">info@niisa.tj</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Режим работы</h4>
                    <p className="text-slate-600">Пн-Пт: 8:00 - 17:00</p>
                    <p className="text-slate-600">Сб-Вс: Выходной</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Отправить сообщение</CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Сообщение отправлено!</h3>
                  <p className="text-slate-600">Мы свяжемся с вами в ближайшее время</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Имя *</label>
                      <Input placeholder="Ваше имя" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Телефон</label>
                      <Input placeholder="+992 (__) ___-__-__" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
                    <Input type="email" placeholder="your@email.com" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Тема</label>
                    <Input placeholder="Тема сообщения" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Сообщение *</label>
                    <Textarea placeholder="Ваше сообщение..." rows={5} required />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                    Отправить сообщение
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
