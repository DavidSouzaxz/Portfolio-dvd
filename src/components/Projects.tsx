"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "API de Gestão de Usuários com Autenticação",
      description:
        "API de Gestão de Usuários com Autenticação JWT e Criptografia de Senha.",
      image: "./screen-project-1.png",
      technologies: ["Java", "SpringBoot", "Maven", "H2-Database"],
      github: "https://github.com/DavidSouzaxz/jwt-security",
      demo: "https://github.com/DavidSouzaxz/jwt-security/blob/master/README.md",
    },
    {
      title: "Api de Controle de Estoque e Vendas",
      description:
        "Sistema de gerenciamento de estoque e vendas com funcionalidades de cadastro, atualização e exclusão, e impressão de extratos.",
      image: "./screen-project-2.png",
      technologies: ["Java", "SpringBoot", "Maven", "PostgreSQL"],
      github: "https://github.com/DavidSouzaxz/stock-control/tree/master",
      demo: "https://github.com/DavidSouzaxz/stock-control/tree/master/README.md",
    },
    {
      title: "EventFlow - Gerenciamento de Eventos",
      description:
        "Sistema de gerenciamento de eventos com criação, edição e exclusão de eventos, além de inscrição de participantes e serviço de autenticação por email.",
      image:
        "./screen-project-5.png",
      technologies: ["React.js", "Node.js", "Prisma", "PostgreSQL"],
      github: "https://github.com/DavidSouzaxz/event-flow-client",
      demo: "https://event-flow-client-azure.vercel.app/",
    },
    {
      title: "Register Person",
      description: "Sistema de Cadastro de Fornecedores / Clientes.",
      image: "./screen-project-4.png",
      technologies: ["Angular", "Angular Material", "Scss", "Tailwindcss"],
      github: "https://github.com/DavidSouzaxz/register-person",
      demo: "https://register-person.vercel.app/register",
    },
    {
      title: "Quiz Feed",
      description:
        "Site de portfólio responsivo com animações suaves e design moderno.",
      image:
        "https://images.ctfassets.net/rvt0uslu5yqp/4zVG1eCQtjAIsLCl2mNa2e/e58a8586b81347a387db31417bc86020/Blog_Quiz_Cover-01.png?w=540&q=60",
      technologies: ["Angular", "TypeScript", "Vite"],
      github: "https://github.com/DavidSouzaxz/QuizzFeed",
      demo: "https://github.com/DavidSouzaxz/QuizzFeed/blob/main/README.md",
    },
    {
      title: "Weather Dashboard",
      description:
        "Dashboard meteorológico com previsões detalhadas e visualizações interativas.",
      image: "./screen-project-3.png",
      technologies: ["React.js", "OpenWeather API", "Axios"],
      github: "https://github.com/davidsouzaxz/weather-dashboard",
      demo: "https://weather-dashboard-iota-five.vercel.app/",
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meus Projetos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma seleção dos meus trabalhos mais recentes, demonstrando
              diferentes tecnologias e abordagens de desenvolvimento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" variant="secondary" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ver código do ${project.title} no GitHub`}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Código
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ver demo do ${project.title}`}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
