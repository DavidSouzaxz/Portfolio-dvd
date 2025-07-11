"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Progress } from "./ui/progress"
import { useEffect, useRef, useState } from "react"

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({})
  const sectionRef = useRef<HTMLElement>(null)

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React/Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Angular", level: 90 },
        { name: "HTML", level: 100 },
        { name: "CSS", level: 100 },
        { name: "JavaScript", level: 90 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Java", level: 90 },
        { name: "SpringBoot", level: 82 },
        { name: "Node.js", level: 75 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 82 },
        { name: "C#", level: 72 },
        { name: ".NET", level: 72 },
      ],
    },
    {
      title: "Ferramentas",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Linux", level: 80 },
        { name: "Bitbucket", level: 80 },
        { name: "Sourcetree", level: 80 },
        { name: "Docker", level: 60 },
        { name: "AWS", level: 70 },
        { name: "Figma", level: 85 },
      ],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate progress bars
          skillCategories.forEach((category) => {
            category.skills.forEach((skill) => {
              setTimeout(() => {
                setAnimatedValues((prev) => ({
                  ...prev,
                  [skill.name]: skill.level,
                }))
              }, Math.random() * 1000)
            })
          })
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Habilidades</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tecnologias e ferramentas que domino para criar soluções completas e eficientes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-center text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{animatedValues[skill.name] || 0}%</span>
                      </div>
                      <Progress value={animatedValues[skill.name] || 0} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
