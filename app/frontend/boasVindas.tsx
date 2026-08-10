// src/routes/Home.tsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface BemVindoProps {
  usuario?: any;
  carregando?: boolean;
}

export function BemVindo({ usuario, carregando }: BemVindoProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#FBFBFA] font-sans text-[#2D263B] selection:bg-[#EAE4F2] selection:text-[#2D263B]">
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div aria-hidden="true" className="pointer-events-none absolute -top-32 -left-32 h-[30rem] w-[30rem] rounded-full bg-[#EAE4F2]/40 blur-[100px]" />
      <div aria-hidden="true" className="pointer-events-none absolute top-40 -right-20 h-[25rem] w-[25rem] rounded-full bg-[#FFF9E6]/60 blur-[90px]" />

      <header className="relative z-10 flex flex-wrap items-center justify-between gap-4 px-6 pt-8 sm:px-12 md:px-16">
        <motion.div className="flex items-center gap-3" {...fadeUp}>
          <HamburgerButton onClick={() => setIsDrawerOpen(true)} />
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#9B8EA6]">
                ✦ Store
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.05 }}>
          {carregando ? (
            <div className="h-10 w-28 animate-pulse rounded-full bg-[#EAE4F2]/60" />
          ) : usuario ? (
            <UserMenu usuario={usuario} />
          ) : (
            <Link
              to="/entrar"
              className="group relative inline-flex items-center gap-2.5 rounded-full border border-[#EAE4F2] bg-white/70 px-5 py-2.5 text-sm font-medium text-[#2D263B] shadow-sm backdrop-blur-md transition-all duration-300 hover:border-[#D5CBE5] hover:bg-white hover:shadow-md"
            >
              Entrar ou cadastrar
              <span
                aria-hidden="true"
                className="text-[#9B8EA6] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#2D263B]"
              >
                →
              </span>
            </Link>
          )}
        </motion.div>
      </header>

      <section className="relative z-10 px-6 pt-16 pb-12 sm:px-12 md:px-16 md:pt-24">
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF9E6] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#A68A0D] border border-[#FDF2CC]">
            Bem-vindo(a) ✦
          </span>
        </motion.div>

        <motion.h1
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-5xl font-display text-5xl leading-[1.08] tracking-tight text-[#2D263B] sm:text-6xl md:text-7xl lg:text-[5rem]"
        >
          Boas-vindas
          <br />
          à <span className="italic font-normal text-[#7A6B8A]">store</span>.
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.25 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-[#6B6378] sm:text-lg"
        >
          Confira o catálogo exclusivo da loja — Veja produtos exclusivos.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            to="/sobre"
            className="rounded-full bg-[#2D263B] px-7 py-3.5 text-sm font-medium text-[#FBFBFA] shadow-sm transition-all duration-300 hover:bg-[#433A54] hover:shadow-md"
          >
            Conhecer a loja
          </Link>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#9B8EA6]">
            Ou role para explorar ↓
          </span>
        </motion.div>
      </section>

      <motion.main
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 flex-1 pb-20"
      >
        <Carousel />
      </motion.main>

      <Footer />

      <SideDrawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
}

function UserMenu({ usuario }: { usuario: any }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSair = async () => {
    try {
      await fetch("http://localhost:4000/logout", {
        credentials: "include",
        method: "POST",
      });
      window.location.reload();
    } catch (error) {
      console.error("Erro ao sair", error);
    }
  };

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        className="group relative inline-flex items-center gap-2.5 rounded-full border border-[#EAE4F2] bg-white/70 px-5 py-2.5 text-sm font-medium text-[#2D263B] shadow-sm backdrop-blur-md transition-all duration-300 hover:border-[#D5CBE5] hover:bg-white hover:shadow-md"
      >
        <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
        {usuario?.nome || "Minha Conta"}
        <span className="text-[#9B8EA6] text-xs transition-transform duration-300">▼</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-52 origin-top-right rounded-2xl border border-[#EAE4F2] bg-white p-2 shadow-xl backdrop-blur-md z-50"
          >
            <Link
              to="/configuracoes"
              className="flex w-full items-center rounded-xl px-4 py-2.5 text-xs font-medium text-[#6B6378] transition-colors hover:bg-[#F3EFEA] hover:text-[#2D263B]"
            >
              Configurações da conta
            </Link>
            <button
              type="button"
              onClick={handleSair}
              className="flex w-full items-center rounded-xl px-4 py-2.5 text-xs font-medium text-rose-600 transition-colors hover:bg-rose-50"
            >
              Sair
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function HamburgerButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label="Abrir menu"
      onClick={onClick}
      className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-[#EAE4F2] bg-white/70 backdrop-blur-md transition-all duration-300 hover:border-[#D5CBE5] hover:bg-white shadow-sm"
    >
      <div className="flex flex-col gap-[4.5px]">
        <motion.span
          animate={{ width: 16 }}
          className="block h-[1.5px] rounded-full bg-[#2D263B] transition-all duration-300 group-hover:w-5"
        />
        <span className="block h-[1.5px] w-5 rounded-full bg-[#2D263B]" />
        <motion.span
          animate={{ width: 10 }}
          className="block h-[1.5px] rounded-full bg-[#2D263B] transition-all duration-300 group-hover:w-5"
        />
      </div>
    </button>
  );
}

interface Slide {
  title: string;
  description: string;
  to: string;
  symbol: string;
  accent: string;
  isCustom?: boolean;
}

const SLIDES: Slide[] = [
  {
    title: "Trabalhos",
    description: "Projetos, criações e obras selecionadas.",
    to: "/trabalhos",
    symbol: "✦",
    accent: "from-[#F3EFEA] via-[#FBFBFA] to-[#FFF9E6]",
  },
  {
    title: "Artigos",
    description: "Escritos, ensaios e reflexões profundas.",
    to: "/artigos",
    symbol: "☾",
    accent: "from-[#FFF9E6] via-[#FBFBFA] to-[#F3EFEA]",
  },
  {
    title: "Sobre a loja",
    description: "Nossa história, propósito e essência.",
    to: "/sobre",
    symbol: "❋",
    accent: "from-[#F1ECF7] via-[#FBFBFA] to-[#FFF9E6]",
  },
  {
    title: "Oráculos",
    description: "Tiragens, símbolos ancestrais e intuição.",
    to: "/oraculos",
    symbol: "☀",
    accent: "from-[#FBFBFA] via-[#F1ECF7] to-[#FFF9E6]",
  },
  {
    title: "Termos de serviço",
    description: "Diretrizes, direitos e compromissos com você.",
    to: "/termos",
    symbol: "⚖",
    accent: "from-[#F3EFEA] via-[#FFF9E6] to-[#FBFBFA]",
  },
  {
    title: "Política de privacidade",
    description: "Como protegemos e tratamos seus dados.",
    to: "/privacidade",
    symbol: "🛡",
    accent: "from-[#F1ECF7] via-[#F3EFEA] to-[#FFF9E6]",
  },
  {
    title: "Simular o frete",
    description: "Calcule prazos e valores para a sua região.",
    to: "/frete",
    symbol: "📦",
    accent: "from-[#FFF9E6] via-[#F1ECF7] to-[#FBFBFA]",
    isCustom: true,
  },
];

function Carousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [cep, setCep] = useState("");
  const [freteResultado, setFreteResultado] = useState<{ valor: string; prazo: string } | null>(null);

  function scrollByCard(direction: 1 | -1) {
    trackRef.current?.scrollBy({ left: direction * 380, behavior: "smooth" });
  }

  function handleSimularFrete(e: React.FormEvent) {
    e.preventDefault();
    if (!cep || cep.length < 8) return;
    setFreteResultado({ valor: "R$ 18,90", prazo: "3 a 5 dias úteis" });
  }

  return (
    <section aria-label="Destaques da loja" className="relative">
      <div className="mb-8 flex items-end justify-between px-8 sm:px-12 md:px-16">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C2A312]">
            Explorar
          </span>
          <h2 className="mt-2 font-display text-3xl tracking-tight text-[#2D263B] sm:text-4xl">
            Destaques da loja
          </h2>
        </div>

        <div className="hidden gap-2 sm:flex">
          <button
            type="button"
            aria-label="Rolar para a esquerda"
            onClick={() => scrollByCard(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#EAE4F2] bg-white/70 text-[#2D263B] shadow-sm backdrop-blur-md transition-all duration-300 hover:border-[#D5CBE5] hover:bg-white"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Rolar para a direita"
            onClick={() => scrollByCard(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#EAE4F2] bg-white/70 text-[#2D263B] shadow-sm backdrop-blur-md transition-all duration-300 hover:border-[#D5CBE5] hover:bg-white"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-6 sm:px-12 md:px-16"
      >
        {SLIDES.map((slide, index) => (
          <motion.article
            key={slide.to}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4 + index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative h-[23rem] w-[20rem] shrink-0 snap-start overflow-hidden rounded-[2.2rem] border border-[#EAE4F2] bg-gradient-to-br shadow-sm transition-all duration-500 hover:border-[#D5CBE5] hover:shadow-xl sm:w-[22rem] lg:w-[24rem]"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.accent}`} />

            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            <div className="relative flex h-full flex-col justify-between p-8">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8C7E9D]/80">
                  0{index + 1} / 0{SLIDES.length}
                </span>

                <motion.span
                  aria-hidden="true"
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.7 }}
                  className="mt-6 block font-display text-[7.5rem] leading-none text-[#2D263B]/[0.06]"
                >
                  {slide.symbol}
                </motion.span>
              </div>

              <div>
                <h3 className="font-display text-2xl tracking-tight text-[#2D263B] sm:text-3xl">
                  {slide.title}
                </h3>
                <p className="mt-1.5 text-sm text-[#6B6378]">{slide.description}</p>

                {slide.isCustom ? (
                  <div className="mt-4">
                    <form onSubmit={handleSimularFrete} className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Digite seu CEP"
                        value={cep}
                        onChange={(e) => setCep(e.target.value)}
                        maxLength={8}
                        className="w-full rounded-full border border-[#2D263B]/15 bg-white/60 px-4 py-2 text-xs text-[#2D263B] placeholder-[#8C7E9D]/70 backdrop-blur-md outline-none focus:border-[#2D263B]/40 focus:bg-white"
                      />
                      <button
                        type="submit"
                        className="shrink-0 rounded-full bg-[#2D263B] px-4 py-2 text-xs font-medium text-[#FBFBFA] transition-all hover:bg-[#433A54]"
                      >
                        Calcular
                      </button>
                    </form>
                    {freteResultado && (
                      <p className="mt-2 text-xs font-medium text-[#7A6B8A]">
                        Frete: <span className="text-[#2D263B]">{freteResultado.valor}</span> ({freteResultado.prazo})
                      </p>
                    )}
                  </div>
                ) : (
                  <Link
                    to={slide.to}
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#2D263B]/10 bg-white/50 px-5 py-2.5 text-sm font-medium text-[#2D263B] backdrop-blur-md transition-all duration-300 hover:border-[#2D263B]/25 hover:bg-white hover:shadow-sm"
                  >
                    Explorar
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

interface SideDrawerProps {
  open: boolean;
  onClose: () => void;
}

function SideDrawer({ open, onClose }: SideDrawerProps) {
  const [openCatalogo, setOpenCatalogo] = useState(false);
  const [openOraculos, setOpenOraculos] = useState(false);
  const [openArtigos, setOpenArtigos] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  const bottomMenuItems = [
    { label: "Termos de serviço", to: "/termos", symbol: "⚖" },
    { label: "Política de privacidade", to: "/privacidade", symbol: "🛡" },
  ];

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            aria-hidden="true"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#2D263B]/25 backdrop-blur-sm"
          />

          <motion.aside
            aria-label="Menu lateral"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 280 }}
            className="fixed inset-y-0 left-0 z-50 flex w-full max-w-sm flex-col bg-[#FBFBFA] shadow-2xl overflow-y-auto no-scrollbar"
          >
            <div className="flex items-center justify-between border-b border-[#EAE4F2] px-8 py-6 sticky top-0 bg-[#FBFBFA] z-10">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#9B8EA6]">
                  Navegação
                </span>
                <p className="mt-0.5 font-display text-xl text-[#2D263B]">Menu</p>
              </div>
              <button
                type="button"
                aria-label="Fechar menu"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EAE4F2] text-[#6B6378] transition-all duration-300 hover:border-[#D5CBE5] hover:bg-[#F3EFEA]"
              >
                ✕
              </button>
            </div>

            <nav className="flex flex-col gap-1.5 px-4 py-8">
              <div className="flex flex-col">
                <button
                  type="button"
                  onClick={() => setOpenCatalogo(!openCatalogo)}
                  className="group flex items-center justify-between rounded-2xl px-5 py-4 text-[#2D263B] transition-all duration-300 hover:bg-[#F3EFEA] w-full text-left"
                >
                  <span className="flex items-center gap-4">
                    <span className="text-lg text-[#9B8EA6] transition-transform duration-300 group-hover:translate-x-1">
                      ✦
                    </span>
                    <span className="font-display text-lg">Catálogo de serviços</span>
                  </span>
                  <span className={`text-xs text-[#9B8EA6] transition-transform duration-300 ${openCatalogo ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>

                <AnimatePresence>
                  {openCatalogo && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden pl-6 flex flex-col gap-1 mt-1"
                    >
                      <Link
                        to="/trabalhos"
                        onClick={onClose}
                        className="flex items-center justify-between rounded-xl px-4 py-3 text-sm text-[#6B6378] hover:bg-[#F3EFEA] hover:text-[#2D263B]"
                      >
                        <span>Trabalhos</span>
                        <span className="text-[#9B8EA6]">→</span>
                      </Link>

                      <div>
                        <button
                          type="button"
                          onClick={() => setOpenOraculos(!openOraculos)}
                          className="flex items-center justify-between w-full rounded-xl px-4 py-3 text-sm text-[#6B6378] hover:bg-[#F3EFEA] hover:text-[#2D263B]"
                        >
                          <span>Tiragens/Oráculos</span>
                          <span className={`text-xs text-[#9B8EA6] transition-transform duration-300 ${openOraculos ? "rotate-180" : ""}`}>
                            ▼
                          </span>
                        </button>
                        
                        <AnimatePresence>
                          {openOraculos && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pl-4 flex flex-col gap-1 my-1"
                            >
                              <Link
                                to="/oraculos/combos"
                                onClick={onClose}
                                className="flex items-center justify-between rounded-lg px-3 py-2 text-xs text-[#6B6378] hover:bg-[#F3EFEA] hover:text-[#2D263B]"
                              >
                                <span>Combos</span>
                                <span className="text-[#9B8EA6]">→</span>
                              </Link>
                              <Link
                                to="/oraculos/jogos-de-buzios"
                                onClick={onClose}
                                className="flex items-center justify-between rounded-lg px-3 py-2 text-xs text-[#6B6378] hover:bg-[#F3EFEA] hover:text-[#2D263B]"
                              >
                                <span>Jogos de Búzios</span>
                                <span className="text-[#9B8EA6]">→</span>
                              </Link>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <div>
                        <button
                          type="button"
                          onClick={() => setOpenArtigos(!openArtigos)}
                          className="flex items-center justify-between w-full rounded-xl px-4 py-3 text-sm text-[#6B6378] hover:bg-[#F3EFEA] hover:text-[#2D263B]"
                        >
                          <span>Artigos religiosos</span>
                          <span className={`text-xs text-[#9B8EA6] transition-transform duration-300 ${openArtigos ? "rotate-180" : ""}`}>
                            ▼
                          </span>
                        </button>

                        <AnimatePresence>
                          {openArtigos && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pl-4 flex flex-col gap-1 my-1"
                            >
                              <Link
                                to="/artigos/guias"
                                onClick={onClose}
                                className="flex items-center justify-between rounded-lg px-3 py-2 text-xs text-[#6B6378] hover:bg-[#F3EFEA] hover:text-[#2D263B]"
                              >
                                <span>Guias</span>
                                <span className="text-[#9B8EA6]">→</span>
                              </Link>
                              <Link
                                to="/artigos/velas"
                                onClick={onClose}
                                className="flex items-center justify-between rounded-lg px-3 py-2 text-xs text-[#6B6378] hover:bg-[#F3EFEA] hover:text-[#2D263B]"
                              >
                                <span>Velas</span>
                                <span className="text-[#9B8EA6]">→</span>
                              </Link>
                              <Link
                                to="/artigos/colares-pulseiras"
                                onClick={onClose}
                                className="flex items-center justify-between rounded-lg px-3 py-2 text-xs text-[#6B6378] hover:bg-[#F3EFEA] hover:text-[#2D263B]"
                              >
                                <span>Colares/Pulseiras decorativas</span>
                                <span className="text-[#9B8EA6]">→</span>
                              </Link>
                              <Link
                                to="/artigos/brincos-e-outros"
                                onClick={onClose}
                                className="flex items-center justify-between rounded-lg px-3 py-2 text-xs text-[#6B6378] hover:bg-[#F3EFEA] hover:text-[#2D263B]"
                              >
                                <span>Brincos e outros</span>
                                <span className="text-[#9B8EA6]">→</span>
                              </Link>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/contato"
                onClick={onClose}
                className="group flex items-center justify-between rounded-2xl px-5 py-4 text-[#2D263B] transition-all duration-300 hover:bg-[#F3EFEA]"
              >
                <span className="flex items-center gap-4">
                  <span className="text-lg text-[#9B8EA6] transition-transform duration-300 group-hover:translate-x-1">
                    ☾
                  </span>
                  <span className="font-display text-lg">Contato</span>
                </span>
                <span className="text-[#9B8EA6] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#2D263B]">
                  →
                </span>
              </Link>

              <Link
                to="/area-cliente"
                onClick={onClose}
                className="group flex items-center justify-between rounded-2xl px-5 py-4 text-[#2D263B] transition-all duration-300 hover:bg-[#F3EFEA]"
              >
                <span className="flex items-center gap-4">
                  <span className="text-lg text-[#9B8EA6] transition-transform duration-300 group-hover:translate-x-1">
                    🛡
                  </span>
                  <span className="font-display text-lg">Área do cliente</span>
                </span>
                <span className="text-[#9B8EA6] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#2D263B]">
                  →
                </span>
              </Link>

              <div className="my-2 border-t border-[#EAE4F2]" />

              {bottomMenuItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={onClose}
                  className="group flex items-center justify-between rounded-2xl px-5 py-4 text-[#2D263B] transition-all duration-300 hover:bg-[#F3EFEA]"
                >
                  <span className="flex items-center gap-4">
                    <span className="text-lg text-[#9B8EA6] transition-transform duration-300 group-hover:translate-x-1">
                      {item.symbol}
                    </span>
                    <span className="font-display text-lg">{item.label}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-[#9B8EA6] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#2D263B]"
                  >
                    →
                  </span>
                </Link>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-auto border-t border-[#EAE4F2] px-8 py-6"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9B8EA6]">
                ✦ A loja está em atualização
              </p>
              <p className="mt-1 text-sm text-[#6B6378]">
                Contate-nos em caso de dúvidas
              </p>
            </motion.div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

const LINK_STYLE =
  "inline-flex items-center gap-1.5 rounded-full border border-[#EAE4F2] bg-white/70 px-4 py-2 text-xs font-medium text-[#6B6378] backdrop-blur-md transition-all duration-300 hover:border-[#D5CBE5] hover:bg-white hover:text-[#2D263B]";

function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#EAE4F2] bg-[#FBFBFA] px-6 py-12 sm:px-12 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl"
      >
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-display text-2xl text-[#2D263B]">✦ Store</p>
            <p className="mt-1 max-w-sm text-sm text-[#6B6378]">
              Entre em contato através das nossas redes sociais:
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className={LINK_STYLE}
            >
              Instagram
            </a>
            <a
              href="https://wa.me/5511911721218"
              target="_blank"
              rel="noreferrer"
              className={LINK_STYLE}
            >
              Whatsapp
            </a>
            <a href="#" className={LINK_STYLE}>
              Desenvolvedor
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-[#EAE4F2] pt-6 text-xs text-[#9B8EA6] md:flex-row md:items-center">
          <p>© 2026 D. Noite - Store. Todos os direitos reservados.</p>
          <p className="uppercase tracking-[0.2em]">☾ Ouça o que o destino sussurra</p>
        </div>
      </motion.div>
    </footer>
  );
}