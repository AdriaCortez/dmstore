"use client"

import { Link } from "react-router";
import { motion, useReducedMotion } from "framer-motion";

export default function Cadastrar(props: any) {
  const { cadastrar, nome, email, senha, setNome, setEmail, setSenha } = props;
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#FBFBFA] font-sans text-[#2D263B] selection:bg-[#EAE4F2] selection:text-[#2D263B]">
      {/* Elementos decorativos de fundo */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 -left-32 h-[30rem] w-[30rem] rounded-full bg-[#EAE4F2]/40 blur-[100px]" />
      <div aria-hidden="true" className="pointer-events-none absolute top-40 -right-20 h-[25rem] w-[25rem] rounded-full bg-[#FFF9E6]/60 blur-[90px]" />

      {/* Cabeçalho com título centralizado */}
      <header className="relative z-10 px-6 pt-16 sm:px-12 md:px-16 md:pt-20 text-center">
        <motion.div {...fadeUp} className="mb-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF9E6] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#A68A0D] border border-[#FDF2CC]">
            ✦ Novo Cadastro
          </span>
        </motion.div>

        <motion.h1
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl font-display text-4xl leading-[1.15] tracking-tight text-[#2D263B] sm:text-5xl md:text-6xl"
        >
          Crie sua conta
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.25 }}
          className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-[#6B6378]"
        >
          Preencha os campos abaixo para começar a acompanhar seus pedidos
        </motion.p>
      </header>

      {/* Meio da página com o Card de Formulário */}
      <main className="relative z-10 flex flex-1 items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-md overflow-hidden rounded-[2.5rem] border border-[#EAE4F2] bg-gradient-to-br from-[#F3EFEA] via-[#FBFBFA] to-[#FFF9E6] p-8 sm:p-10 shadow-xl backdrop-blur-md"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <form onSubmit={cadastrar} className="relative flex flex-col gap-4 text-center">
            <span className="mx-auto block font-display text-5xl leading-none text-[#2D263B]/[0.08]">
              ✦
            </span>
            <h2 className="font-display text-2xl tracking-tight text-[#2D263B]">
              Seja bem-vindo(a)
            </h2>
            <p className="text-sm text-[#6B6378]">
              Insira seus dados para criar o seu acesso.
            </p>

            <div className="mt-4 flex flex-col gap-3 text-left">
              {/* Campo Nome */}
              <div>
                <label className="block text-xs font-medium text-[#6B6378] mb-1.5 ml-1">Nome completo</label>
                <input
                  type="text"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Seu nome"
                  className="w-full rounded-full border border-[#EAE4F2] bg-white/70 px-5 py-3 text-sm text-[#2D263B] placeholder-[#9B8EA6] shadow-sm backdrop-blur-md transition-all duration-300 focus:border-[#D5CBE5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2D263B]/10"
                />
              </div>

              {/* Campo E-mail */}
              <div>
                <label className="block text-xs font-medium text-[#6B6378] mb-1.5 ml-1">E-mail</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full rounded-full border border-[#EAE4F2] bg-white/70 px-5 py-3 text-sm text-[#2D263B] placeholder-[#9B8EA6] shadow-sm backdrop-blur-md transition-all duration-300 focus:border-[#D5CBE5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2D263B]/10"
                />
              </div>

              {/* Campo Senha */}
              <div>
                <label className="block text-xs font-medium text-[#6B6378] mb-1.5 ml-1">Senha</label>
                <input
                  type="password"
                  required
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-full border border-[#EAE4F2] bg-white/70 px-5 py-3 text-sm text-[#2D263B] placeholder-[#9B8EA6] shadow-sm backdrop-blur-md transition-all duration-300 focus:border-[#D5CBE5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2D263B]/10"
                />
              </div>

              {/* Botão de Envio (Cadastrar) */}
              <button
                type="submit"
                className="group relative mt-2 inline-flex items-center justify-center rounded-full bg-[#2D263B] px-6 py-3.5 text-sm font-medium text-[#FBFBFA] shadow-sm transition-all duration-300 hover:bg-[#433A54] hover:shadow-md cursor-pointer"
              >
                Cadastrar
                <span
                  aria-hidden="true"
                  className="absolute right-6 transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </button>

              {/* Botão de Login (conforme solicitado via prop ou Link alternativo) */}
              <Link
                to="/login"
                className="group relative inline-flex items-center justify-center rounded-full border border-[#EAE4F2] bg-white/70 px-6 py-3.5 text-sm font-medium text-[#2D263B] shadow-sm backdrop-blur-md transition-all duration-300 hover:border-[#D5CBE5] hover:bg-white hover:shadow-md"
              >
                Já tem uma conta? Entrar
                <span
                  aria-hidden="true"
                  className="absolute right-6 transition-transform duration-300 group-hover:translate-x-1 text-[#9B8EA6] group-hover:text-[#2D263B]"
                >
                  →
                </span>
              </Link>
            </div>

            <div className="mt-4 pt-2">
              <Link
                to="/"
                className="text-xs font-medium text-[#6B6378] underline decoration-[#9B8EA6]/50 underline-offset-4 transition-colors hover:text-[#2D263B] hover:decoration-[#2D263B]"
              >
                Voltar para a página inicial
              </Link>
            </div>
          </form>
        </motion.div>
      </main>

      {/* Footer personalizado */}
      <footer className="relative z-10 border-t border-[#EAE4F2] bg-[#FBFBFA] px-6 py-8 sm:px-12 md:px-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-[#9B8EA6] sm:flex-row">
          <p>© 2026 D. Noite - Store. Todos os direitos reservados.</p>
          <p className="font-medium text-[#6B6378]">Sistema desenvolvido por Ádria Cortez</p>
        </div>
      </footer>
    </div>
  );
}