import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const aboutTexts = [
  {
    title: "Minha Stack",
    content: "Sou desenvolvedor Full Stack Júnior com foco em Front-end (React + TypeScript). Tenho experiência em projetos web com autenticação, banco de dados PostgreSQL e consumo/integração de APIs, usando Supabase (Auth/Postgres) e Neon (PostgreSQL) conforme o projeto. Trabalho com Vite, Tailwind CSS e shadcn/ui, com atenção à organização do código, componentização e construção de formulários."
  },
  {
    title: "O que posso fazer por você",
    content: "Posso te ajudar a tirar um produto do papel e colocar no ar: criar interfaces responsivas, implementar formulários com validação, autenticação e fluxo de usuários, construir dashboards e páginas administrativas, integrar banco de dados (CRUD) e integrar APIs. Também consigo preparar o projeto para publicação online (deploy) e manter uma base de código organizada para evoluir com segurança."
  },
  {
    title: "Sobre mim",
    content: "Meu nome é Heitor Crespo, sou estudante de Análise e Desenvolvimento de Sistemas (5º período) e venho evoluindo por meio de projetos práticos, com código no GitHub e demos online. Tenho experiência profissional em TI/suporte e em rotinas digitais, lidando com sistemas, usuários e organização de processos. Atualmente, busco oportunidades de estágio ou vaga júnior em desenvolvimento web (Front-end ou Full Stack) para crescer em projetos reais."
  }
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="bg-card relative" ref={ref}>
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm tracking-widest uppercase text-muted-foreground mb-4 block">
            Sobre
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Quem sou eu
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {aboutTexts.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="h-full p-8 bg-secondary rounded-2xl border border-border hover:border-muted-foreground/30 transition-all duration-300 card-interactive">
                <span className="inline-block text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
                  0{index + 1}
                </span>
                <h3 className="font-display text-xl font-semibold mb-4 group-hover:text-foreground transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;