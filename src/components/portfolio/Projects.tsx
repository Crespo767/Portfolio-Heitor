import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

import projectTenebre from "@/assets/project-tenebre.jpg";
import projectAbastecimento from "@/assets/project-abastecimento.jpg";
import projectFocaai from "@/assets/project-focaai.jpg";

const projects = [
  {
    title: "Tenebre VTT",
    description: "Plataforma de mesa virtual para RPG com React, Vite e Supabase. Inclui autenticação, banco PostgreSQL, Realtime e integração com Discord via Edge Functions.",
    tech: ["React", "Vite", "TypeScript", "Supabase", "Realtime", "Discord API"],
    liveUrl: "https://mark-14.onrender.com/",
    image: projectTenebre,
    number: "01"
  },
  {
    title: "Controle de Abastecimento",
    description: "Sistema de gestão de abastecimento com dashboard, autenticação e CRUD completo. Stack moderna com Vite, TypeScript, shadcn/ui e Supabase.",
    tech: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Supabase", "PL/pgSQL"],
    liveUrl: "https://controle-de-abastecimento-1.onrender.com/login",
    image: projectAbastecimento,
    number: "02"
  },
  {
    title: "Foca.aí",
    description: "Aplicação web com rotas serverless e APIs integradas. Frontend TypeScript/React com funções backend para processamento de dados.",
    tech: ["React", "TypeScript", "API Routes", "Serverless", "Vercel"],
    liveUrl: "https://foca-ai-oficial.vercel.app/",
    image: projectFocaai,
    number: "03"
  }
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="bg-background relative" ref={ref}>
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm tracking-widest uppercase text-muted-foreground mb-4 block">
            Portfólio
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Projetos 
          </h2>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative bg-card rounded-3xl border border-border hover:border-muted-foreground/30 transition-all duration-500 card-interactive overflow-hidden">
                {/* Project Image */}
                <div className="relative h-48 md:h-64 lg:h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  
                  {/* Project Number */}
                  <span className="absolute top-6 right-6 font-display text-5xl md:text-6xl font-bold text-foreground/10 group-hover:text-foreground/20 transition-colors duration-500">
                    {project.number}
                  </span>
                </div>

                <div className="relative z-10 p-8 md:p-10 -mt-16 md:-mt-20">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
                    <h3 className="font-display text-2xl md:text-3xl font-bold">
                      {project.title}
                    </h3>
                    
                    {/* Link */}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 text-sm font-medium w-fit"
                    >
                      Ver projeto
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-medium tracking-wide bg-secondary border border-border rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;