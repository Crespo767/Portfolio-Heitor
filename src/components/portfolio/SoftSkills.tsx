import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Lightbulb, Zap, CheckCircle, Users, GraduationCap } from "lucide-react";

const softSkills = [
  {
    icon: MessageSquare,
    title: "Comunicação clara",
    description: "Documentar decisões e alinhar requisitos"
  },
  {
    icon: Lightbulb,
    title: "Resolução de problemas",
    description: "Debug e investigação de causa"
  },
  {
    icon: Zap,
    title: "Autonomia e proatividade",
    description: "Tirar do zero e publicar"
  },
  {
    icon: CheckCircle,
    title: "Organização",
    description: "Prazos, versionamento e deploy"
  },
  {
    icon: Users,
    title: "Colaboração",
    description: "Trabalhar com feedback e PRs"
  },
  {
    icon: GraduationCap,
    title: "Aprendizado rápido",
    description: "Novas libs, integrações e ferramentas"
  }
];

const SoftSkills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="softskills" className="bg-background relative" ref={ref}>
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm tracking-widest uppercase text-muted-foreground mb-4 block">
            Habilidades
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Soft Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Além da parte técnica, valorizo processos simples e confiáveis: comunicação objetiva, organização e autonomia para resolver problemas.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {softSkills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl border border-border bg-card hover:bg-secondary transition-all duration-300 card-interactive text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-foreground text-background flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                <skill.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">
                {skill.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;
