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
      { threshold: 0.1 }
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
      technologies: ["Java", "SpringBoot", "Maven"],
      github: "https://github.com/DavidSouzaxz/jwt-security",
      demo: "https://github.com/DavidSouzaxz/jwt-security/blob/master/README.md",
    },
    {
      title: "To-do List",
      description:
        "Aplicativo de gerenciamento de tarefas com funcionalidades de colaboração em tempo real.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop",
      technologies: ["React", "Node.js", "JavaScript"],
      github: "https://github.com/DavidSouzaxz/todo-list-react-",
      demo: "https://github.com/DavidSouzaxz/todo-list-react-/README.md",
    },
    {
      title: "Weather Dashboard",
      description:
        "Dashboard meteorológico com previsões detalhadas e visualizações interativas.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=200&fit=crop",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Tailwind"],
      github: "https://github.com/davidsouzaxz/weather-dashboard",
      demo: "https://weather-dashboard-demo.vercel.app",
    },
    {
      title: "Social Media Analytics",
      description:
        "Ferramenta de análise de redes sociais com métricas avançadas e relatórios personalizados.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      github: "https://github.com/davidsouzaxz/social-analytics",
      demo: "https://social-analytics-demo.vercel.app",
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
      title: "API REST",
      description:
        "A API permite realizar operações CRUD para gerenciar recursos de forma eficiente.",
      image:
        "https://document360.com/wp-content/uploads/2022/11/rest_api_examples_and_challenges-1200x683.jpg",
      technologies: ["Java", "Maven", "JWT", "MySQL"],
      github: "https://github.com/DavidSouzaxz/Rest-api",
      demo: "https://github.com/DavidSouzaxz/Rest-api/blob/main/README.md",
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
