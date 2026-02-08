import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "shadcn/ui", "Vite", "HTML5", "CSS3"]
  },
  {
    category: "Backend & Dados",
    skills: ["PostgreSQL", "SQL", "Supabase", "Neon", "REST APIs", "Edge Functions", "Auth", "CRUD"]
  },
  {
    category: "Ferramentas & Deploy",
    skills: ["Git", "GitHub", "Vercel", "Render", "VS Code", "Figma"]
  }
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="bg-card relative" ref={ref}>
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm tracking-widest uppercase text-muted-foreground mb-4 block">
            Competências
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Stack e competências técnicas
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              className="text-center"
            >
              <h3 className="font-display text-lg font-semibold mb-6 text-foreground">
                {category.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.15 + skillIndex * 0.05 
                    }}
                    className="px-4 py-2 text-sm font-medium bg-secondary text-secondary-foreground border border-border rounded-full hover:bg-foreground hover:text-background transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;