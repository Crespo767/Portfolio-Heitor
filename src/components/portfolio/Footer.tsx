import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer id="contact" className="bg-card relative" ref={ref}>
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-sm tracking-widest uppercase text-muted-foreground mb-4 block">
            Contato
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Vamos conversar?
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Estou buscando oportunidades para atuar como dev e crescer em projetos reais. Entre em contato!
          </p>

          {/* CTA Button */}
          <motion.a
            href="https://wa.me/5522998969818"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full text-lg font-medium hover:bg-foreground/90 transition-all duration-300 mb-12 group"
          >
            <Phone className="w-5 h-5" />
            Chamar no WhatsApp
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-4 mb-16"
          >
            <a
              href="https://wa.me/5522998969818"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full border border-border bg-secondary hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
              aria-label="WhatsApp"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/heitor-crespo-8b6b5a254/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full border border-border bg-secondary hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:heitorcrespos@gmail.com"
              className="p-4 rounded-full border border-border bg-secondary hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Divider */}
          <div className="divider mb-8" />

          {/* Copyright - UPDATED: Mais profissional e clean */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Heitor Crespo. Todos os direitos reservados.
            </p>
            <span className="hidden md:inline text-muted-foreground/40">•</span>
            <p className="flex items-center gap-1.5">
              Desenvolvido com <span className="text-foreground font-medium">React</span>, <span className="text-foreground font-medium">TypeScript</span> & <span className="text-foreground font-medium">PostgreSQL</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;