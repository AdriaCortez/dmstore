// src/routes/Contato.tsx
import { Link } from "react-router";
import { motion, useReducedMotion } from "framer-motion";

export default function Contato() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  };

  const cards = [
    {
      title: "Usuário",
      subtitle: "Suporte e dúvidas gerais",
      href: "https://wa.me/55000000000",
      symbol: "✦",
      accent: "from-[#F3EFEA] via-[#FBFBFA] to-[#FFF9E6]",
      isDev: false,
    },
    {
      title: "D. Noite",
      subtitle: "ADMIN",
      href: "https://wa.me/55000000000",
      symbol: "☾",
      accent: "from-[#FFF9E6] via-[#FBFBFA] to-[#F3EFEA]",
      isDev: false,
    },
    {
      title: "Ádria Cortez",
      subtitle: "Desenvolvedor",
      href: "https://linkedin.com",
      symbol: "⚡",
      accent: "from-[#EAE4F2]/60 via-[#FBFBFA] to-[#FFF9E6]",
      isDev: true,
    },
  ];

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#FBFBFA] font-sans text-[#2D263B] selection:bg-[#EAE4F2] selection:text-[#2D263B]">
      {/* Elementos decorativos de fundo */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 -left-32 h-[30rem] w-[30rem] rounded-full bg-[#EAE4F2]/40 blur-[100px]" />
      <div aria-hidden="true" className="pointer-events-none absolute top-40 -right-20 h-[25rem] w-[25rem] rounded-full bg-[#FFF9E6]/60 blur-[90px]" />

      {/* Cabeçalho com o botão de voltar */}
      <header className="relative z-10 flex flex-wrap items-center justify-between gap-4 px-6 pt-8 sm:px-12 md:px-16">
        <motion.div className="flex items-center gap-3" {...fadeUp}>
          <Link
            to={-1 as any}
            aria-label="Voltar"
            className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-[#EAE4F2] bg-white/70 backdrop-blur-md transition-all duration-300 hover:border-[#D5CBE5] hover:bg-white shadow-sm"
          >
            <span className="text-[#2D263B] transition-transform duration-300 group-hover:-translate-x-0.5">
              ←
            </span>
          </Link>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#9B8EA6]">
                ✦ Store
              </span>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Seção principal */}
      <main className="relative z-10 mx-auto max-w-5xl flex-1 px-6 pt-12 pb-24 sm:px-12 md:px-16">
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF9E6] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#A68A0D] border border-[#FDF2CC]">
            Contato ✦
          </span>
        </motion.div>

        <motion.h1
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 font-display text-4xl leading-[1.08] tracking-tight text-[#2D263B] sm:text-5xl md:text-6xl"
        >
          Contato
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.25 }}
          className="mt-4 max-w-xl text-base leading-relaxed text-[#6B6378] sm:text-lg"
        >
          Entre em contato com os administradores e/ou desenvolvedores da página por aqui.
        </motion.p>

        {/* Grade com os 3 cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.a
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`group relative flex h-[22rem] flex-col justify-between overflow-hidden rounded-[2.2rem] border p-8 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-xl ${
                card.isDev
                  ? "border-[#3B82F6]/30 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-amber-500/10 hover:border-blue-500/50"
                  : "border-[#EAE4F2] bg-white/60 hover:border-[#D5CBE5] hover:bg-white"
              }`}
            >
              {!card.isDev && (
                <div className={`absolute inset-0 bg-gradient-to-br ${card.accent} opacity-60`} />
              )}

              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.025]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />

              <div className="relative">
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#9B8EA6]">
                  0{index + 1} / 0{cards.length}
                </span>

                <motion.span
                  aria-hidden="true"
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.7 }}
                  className="mt-6 block font-display text-[6rem] leading-none text-[#2D263B]/[0.06]"
                >
                  {card.symbol}
                </motion.span>
              </div>

              <div className="relative">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A6B8A]">
                  {card.subtitle}
                </span>
                <h3 className="mt-1 font-display text-2xl tracking-tight text-[#2D263B] sm:text-3xl">
                  {card.title}
                </h3>

                <div
                  className={`mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium backdrop-blur-md transition-all duration-300 shadow-sm ${
                    card.isDev
                      ? "bg-gradient-to-r from-blue-600 via-purple-600 to-amber-500 text-white hover:opacity-95 hover:shadow-md"
                      : "border border-[#2D263B]/10 bg-white/50 text-[#2D263B] hover:border-[#2D263B]/25 hover:bg-white"
                  }`}
                >
                  {card.isDev ? "Ver perfil" : "Conversar"}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </main>

      {/* Rodapé simples */}
      <footer className="relative z-10 border-t border-[#EAE4F2] bg-[#FBFBFA] px-6 py-8 text-center text-xs text-[#9B8EA6]">
        <p>© 2026 D. Noite - Store. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}