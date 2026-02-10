import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Expand, ChevronLeft, ChevronRight } from "lucide-react";

// --- IMPORTAÇÃO DAS IMAGENS ---

// Foca.aí
import focaai1 from "@/assets/project-focaai-1.png";
import focaai2 from "@/assets/project-focaai-2.png";
import focaai3 from "@/assets/project-focaai-3.png";
import focaai4 from "@/assets/project-focaai-4.png";

// Controle de Abastecimento
import abastecimento1 from "@/assets/project-abastecimento-1.png";
import abastecimento2 from "@/assets/project-abastecimento-2.png";
import abastecimento3 from "@/assets/project-abastecimento-3.png";
import abastecimento4 from "@/assets/project-abastecimento-4.png";

// Tenebre VTT
import tenebre1 from "@/assets/project-tenebre-1.png";
import tenebre2 from "@/assets/project-tenebre-2.png";
import tenebre3 from "@/assets/project-tenebre-3.png";
import tenebre4 from "@/assets/project-tenebre-4.png";

// Asset Studio
import assetstudio1 from "@/assets/project-asset-studio-1.png";
import assetstudio2 from "@/assets/project-asset-studio-2.png";
import assetstudio3 from "@/assets/project-asset-studio-3.png";
import assetstudio4 from "@/assets/project-asset-studio-4.png";

const projects = [
  {
    title: "Foca.aí",
    description: "SaaS de produtividade com arquitetura Serverless. Backend construído com API Routes (Node.js) conectando ao banco Neon (PostgreSQL) via driver nativo. Implementação de autenticação customizada (JWT) e integração com webhooks da Hotmart.",
    tech: ["React", "TypeScript", "Neon (PostgreSQL)", "Node.js Serverless", "Raw SQL", "JWT"],
    images: [focaai1, focaai2, focaai3, focaai4]
  },
  {
    title: "Controle de Abastecimento",
    description: "Sistema ERP para gestão de frota e estoque. Conta com dashboards analíticos (Recharts), geração de relatórios em PDF e regras de negócio complexas implementadas no banco de dados com PL/pgSQL e Triggers.",
    tech: ["React", "TypeScript", "shadcn/ui", "Supabase Auth", "PL/pgSQL", "Recharts"],
    images: [abastecimento1, abastecimento2, abastecimento3, abastecimento4]
  },
  {
    title: "Tenebre VTT",
    description: "Plataforma de mesa virtual (VTT) com sincronização em tempo real via Supabase Realtime. Arquitetura escalável baseada em features, gerenciamento de estado complexo e integração direta com API do Discord via Edge Functions.",
    tech: ["React", "TypeScript", "Supabase Realtime", "Edge Functions", "Discord API", "Storage"],
    images: [tenebre1, tenebre2, tenebre3, tenebre4]
  },
  {
    title: "Asset Studio",
    description: "Aplicação web para edição de imagens com processamento no navegador. Oferece remoção de fundo automática (integração com remove.bg), rotação e flip, recorte livre interativo, redimensionamento com presets (HD, 4K, redes sociais, Foundry VTT) e conversão entre múltiplos formatos.",
    tech: ["Next.js 16", "TypeScript", "shadcn/ui", "Tailwind CSS", "react-easy-crop", "remove.bg API"],
    images: [assetstudio1, assetstudio2, assetstudio3, assetstudio4]
  }
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeImage, setActiveImage] = useState<{ projectIndex: number, imageIndex: number } | null>(null);
  const carouselApis = useRef<(CarouselApi | undefined)[]>([]);

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

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">

                {/* Carousel Container */}
                <div className="w-full lg:w-3/5 overflow-hidden rounded-3xl border border-border bg-card shadow-2xl relative">
                  <Carousel
                    className="w-full"
                    opts={{ loop: true }}
                    setApi={(api) => {
                      carouselApis.current[index] = api;
                    }}
                  >
                    <CarouselContent>
                      {project.images.map((img, imgIndex) => (
                        <CarouselItem key={imgIndex}>
                          <div className="relative overflow-hidden cursor-grab active:cursor-grabbing bg-muted/30">
                            <img
                              src={img}
                              alt={`${project.title} - Tela ${imgIndex + 1}`}
                              className="w-full h-auto object-contain"
                              loading="lazy"
                            />

                            {/* Botão de Expandir */}
                            <Dialog
                              open={activeImage?.projectIndex === index && activeImage?.imageIndex === imgIndex}
                              onOpenChange={(open) => {
                                if (!open && activeImage) {
                                  // Sincronizar carrossel antes de fechar
                                  const api = carouselApis.current[activeImage.projectIndex];
                                  if (api) {
                                    api.scrollTo(activeImage.imageIndex);
                                  }
                                  setActiveImage(null);
                                }
                              }}
                            >
                              <DialogTrigger asChild>
                                <button
                                  className="absolute top-4 right-4 p-2 bg-background/90 hover:bg-background border border-border rounded-lg shadow-lg transition-all duration-200 hover:scale-110 z-10"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveImage({ projectIndex: index, imageIndex: imgIndex });
                                  }}
                                  aria-label="Expandir imagem"
                                >
                                  <Expand className="w-5 h-5" />
                                </button>
                              </DialogTrigger>
                              <DialogContent className="max-w-7xl w-[95vw] h-[95vh] p-0">
                                <div className="relative w-full h-full flex items-center justify-center p-8 bg-background/95">
                                  <img
                                    src={activeImage?.projectIndex === index ? project.images[activeImage.imageIndex] : img}
                                    alt={`${project.title} - Tela ${(activeImage?.imageIndex ?? imgIndex) + 1} (Tamanho Completo)`}
                                    className="max-w-full max-h-full object-contain"
                                  />

                                  {/* Botões de Navegação */}
                                  {project.images.length > 1 && (
                                    <>
                                      <button
                                        onClick={() => {
                                          if (activeImage) {
                                            const newIndex = activeImage.imageIndex === 0
                                              ? project.images.length - 1
                                              : activeImage.imageIndex - 1;
                                            setActiveImage({ ...activeImage, imageIndex: newIndex });
                                          }
                                        }}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-background/90 hover:bg-background border border-border rounded-lg shadow-lg transition-all duration-200 hover:scale-110 z-20"
                                        aria-label="Imagem anterior"
                                      >
                                        <ChevronLeft className="w-6 h-6" />
                                      </button>

                                      <button
                                        onClick={() => {
                                          if (activeImage) {
                                            const newIndex = activeImage.imageIndex === project.images.length - 1
                                              ? 0
                                              : activeImage.imageIndex + 1;
                                            setActiveImage({ ...activeImage, imageIndex: newIndex });
                                          }
                                        }}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-background/90 hover:bg-background border border-border rounded-lg shadow-lg transition-all duration-200 hover:scale-110 z-20"
                                        aria-label="Próxima imagem"
                                      >
                                        <ChevronRight className="w-6 h-6" />
                                      </button>

                                      {/* Indicador de posição */}
                                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-background/90 border border-border rounded-lg shadow-lg text-sm font-medium">
                                        {(activeImage?.imageIndex ?? imgIndex) + 1} / {project.images.length}
                                      </div>
                                    </>
                                  )}
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>

                    {/* Botões de Navegação */}
                    <div className="absolute bottom-4 right-4 flex gap-2 z-20">
                      <CarouselPrevious className="static translate-y-0 translate-x-0 h-10 w-10 bg-background/90 hover:bg-background border-border text-foreground shadow-sm" />
                      <CarouselNext className="static translate-y-0 translate-x-0 h-10 w-10 bg-background/90 hover:bg-background border-border text-foreground shadow-sm" />
                    </div>
                  </Carousel>
                </div>

                {/* Conteúdo do Texto */}
                <div className="w-full lg:w-2/5 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                      {project.title}
                    </h3>
                    <div className="h-1 w-20 bg-primary/20 rounded-full" />
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                      Tecnologias
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