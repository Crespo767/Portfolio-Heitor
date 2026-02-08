import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import projectTenebre from "@/assets/project-tenebre.jpg";
import projectAbastecimento from "@/assets/project-abastecimento.jpg";
import projectFocaai from "@/assets/project-focaai.jpg";

const projects = [
  {
    title: "Tenebre VTT",
    description: "Plataforma de mesa virtual (VTT) com sincronização em tempo real via Supabase Realtime. Arquitetura escalável baseada em features, gerenciamento de estado complexo e integração direta com API do Discord via Edge Functions.",
    tech: ["React", "TypeScript", "Supabase Realtime", "Edge Functions", "Discord API", "Storage"],
    image: projectTenebre,
    number: "01"
  },
  {
    title: "Controle de Abastecimento",
    description: "Sistema ERP para gestão de frota e estoque. Conta com dashboards analíticos (Recharts), geração de relatórios em PDF e regras de negócio complexas implementadas no banco de dados com PL/pgSQL e Triggers.",
    tech: ["React", "TypeScript", "shadcn/ui", "Supabase Auth", "PL/pgSQL", "Recharts"],
    image: projectAbastecimento,
    number: "02"
  },
  {
    title: "Foca.aí",
    description: "SaaS de produtividade com arquitetura Serverless. Backend construído com API Routes (Node.js) conectando ao banco Neon (PostgreSQL) via driver nativo. Implementação de autenticação customizada (JWT) e integração com webhooks da Hotmart.",
    tech: ["React", "TypeScript", "Neon (PostgreSQL)", "Node.js Serverless", "Raw SQL", "JWT"],
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

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative bg-card rounded-3xl border border-border hover:border-muted-foreground/30 transition-all duration-500 overflow-hidden flex flex-col lg:flex-row">
                
                {/* Project Image Container */}
                <div className="relative h-64 md:h-80 lg:h-auto lg:w-1/2 overflow-hidden border-b lg:border-b-0 lg:border-r border-border">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent lg:hidden" />
                  
                  {/* Project Number */}
                  <span className="absolute top-6 left-6 lg:top-8 lg:left-8 font-display text-6xl md:text-7xl font-bold text-white/10 lg:text-foreground/5 z-10">
                    {project.number}
                  </span>
                </div>

                {/* Content Container */}
                <div className="relative z-10 p-8 md:p-10 lg:p-12 lg:w-1/2 flex flex-col justify-center">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                      {project.title}
                    </h3>
                    <div className="h-1 w-20 bg-primary/20 rounded-full" />
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                      Tecnologias Utilizadas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs font-medium tracking-wide bg-secondary text-secondary-foreground border border-border rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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