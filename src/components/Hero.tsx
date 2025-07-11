"use client"

import { Button } from "./ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import { useEffect, useState } from "react"
import Image from 'next/image'


export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 pt-20"
    >
      <div className="container mx-auto px-4 text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-4xl font-bold text-primary-foreground">
              <Image src='https://avatars.githubusercontent.com/u/187334857?v=4'
                alt="Avatar"
                width={110}
                height={110}
                className="rounded-full opacity-85" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            David Souza
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Desenvolvedor Full Stack apaixonado por criar experiências digitais incríveis
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" onClick={() => scrollToSection("projects")} className="w-full sm:w-auto">
              Ver Projetos
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent"  >
              <a
                href="https://www.canva.com/design/DAGlaZ0ZvUk/OPu80fuQmMRrYgLinT3pbA/edit?utm_content=DAGlaZ0ZvUk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                download
                className="bg-transparent hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/davidsouzaxz" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://linkedin.com/in/davidsouza-coder"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:daviddavi1221@gmail.com" aria-label="Email">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section >
  )
}
