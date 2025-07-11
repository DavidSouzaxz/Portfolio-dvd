"use client"

import { Card, CardContent } from "./ui/card"
import { Code, Palette, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: Code,
      title: "Desenvolvimento",
      description: "Experiência em tecnologias modernas como React, Angular, Node.js e TypeScript.",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Criação de interfaces intuitivas e experiências de usuário excepcionais.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Otimização de aplicações para máxima velocidade e eficiência.",
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Mim</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Desenvolvedor apaixonado por tecnologia com foco em criar soluções inovadoras e experiências digitais que
              fazem a diferença.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Minha Jornada</h3>
              <p className="text-muted-foreground mb-4">
                Com 1 ano de experiência em desenvolvimento web, tenho me dedicado a criar aplicações robustas
                e escaláveis. Minha paixão pela tecnologia me motiva a estar sempre aprendendo e explorando novas
                ferramentas.
              </p>
              <p className="text-muted-foreground">
                Especializo-me em desenvolvimento full-stack, com forte experiência em React, Angular, Node.js, Java e bancos
                de dados modernos. Acredito que a combinação de código limpo e design intuitivo é fundamental para o
                sucesso de qualquer projeto.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center text-6xl font-bold text-primary-foreground">
                  DS
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
