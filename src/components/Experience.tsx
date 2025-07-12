"use client"

import { Card, CardContent } from "./ui/card"
import { Code, Palette, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from 'next/image'

export function Experience() {
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
    <section id="experience" ref={sectionRef} className="py-36 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >


          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="text-justify">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Experiência</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Atualmente atuo como estagiário de TI na empresa <span className="font-semibold">Prolins Software House e Outsourcing.</span> Mais especificamente como desenvolvedor Front-end, onde tenho a oportunidade de trabalhar com tecnologias modernas e contribuir para projetos desafiadores.
              </p>
            </div>
            <div className="flex justify-end">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center gap-7">
                  <div className="w-64 h-64 bg-gradient-to-br from-primary to-primary/60 rounded-2xl flex items-center justify-center text-6xl font-bold text-primary-foreground">
                    <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc-lfmr0FDWzQnihrlpWMGExHjUXbvV-hf4g&s'
                      alt="Avatar"
                      width={236}
                      height={236}
                      className="rounded-2xl transition-transform hover:cursor-pointer hover:scale-105" />
                  </div> 
                <div className="w-64 h-64 bg-gradient-to-br from-primary to-primary/60 rounded-2xl flex items-center justify-center text-6xl font-bold text-primary-foreground">
                  <Image src='https://prolins.com.br/wp-content/uploads/2023/02/Prolins-Nova-logo-branca.png'
                    alt="Avatar"
                    width={236}
                    height={236}
                    className="rounded-2xl transition-transform hover:cursor-pointer" />
                </div> 
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}
