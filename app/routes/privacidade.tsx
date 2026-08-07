// src/routes/PoliticaPrivacidade.tsx
import { Link } from "react-router";
import { motion, useReducedMotion } from "framer-motion";

export default function PoliticaPrivacidade() {
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

      {/* Seção principal com o conteúdo da Política de Privacidade */}
      <main className="relative z-10 mx-auto max-w-4xl flex-1 px-6 pt-12 pb-24 sm:px-12 md:px-16">
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF9E6] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#A68A0D] border border-[#FDF2CC]">
            Legal ✦
          </span>
        </motion.div>

        <motion.h1
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 font-display text-4xl leading-[1.08] tracking-tight text-[#2D263B] sm:text-5xl md:text-6xl"
        >
          Política de Privacidade
        </motion.h1>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.25 }}
          className="mt-10 rounded-[2.2rem] border border-[#EAE4F2] bg-white/60 p-8 shadow-sm backdrop-blur-md sm:p-12"
        >
          <div className="prose prose-neutral max-w-none text-[#6B6378] space-y-6 leading-relaxed">
            <div>
              <p className="font-display text-2xl text-[#2D263B] mb-1">Política de Privacidade</p>
              <p className="text-xs uppercase tracking-[0.2em] text-[#9B8EA6]">Última atualização: [inserir data]</p>
            </div>

            <div className="space-y-6 pt-4 text-sm sm:text-base">
              <p>
                Esta Política de Privacidade descreve como os dados pessoais dos usuários são coletados, utilizados, armazenados e protegidos dentro desta aplicação (&quot;Aplicação&quot;). Ao utilizar a Aplicação, o usuário concorda com as práticas aqui descritas.
              </p>

              <section>
                <h3 className="font-display text-lg text-[#2D263B] mb-2">1. Dados Coletados</h3>
                <p className="mb-2">A Aplicação coleta apenas os dados estritamente necessários para o funcionamento da conta do usuário:</p>
                <ul className="list-disc pl-5 space-y-1 mb-2">
                  <li>Nome (não é necessário informar nome completo; um nome ou apelido de identificação é suficiente);</li>
                  <li>E-mail;</li>
                  <li>Senha (armazenada de forma criptografada).</li>
                </ul>
                <p>Não são coletados dados sensíveis, financeiros, de localização ou quaisquer outras informações além das listadas acima.</p>
              </section>

              <section>
                <h3 className="font-display text-lg text-[#2D263B] mb-2">2. Finalidade da Coleta</h3>
                <p className="mb-2">Os dados informados são utilizados exclusivamente para:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Permitir o login e a identificação do usuário dentro da Aplicação;</li>
                  <li>Manter o carrinho e o histórico de pedidos associados à conta do usuário;</li>
                  <li>Manter a sessão ativa através de cookies, conforme descrito nos Termos e Condições de Uso.</li>
                </ul>
              </section>

              <section>
                <h3 className="font-display text-lg text-[#2D263B] mb-2">3. Ausência de Compartilhamento com Terceiros</h3>
                <p>
                  Os dados pessoais coletados não são compartilhados, vendidos, alugados ou cedidos a terceiros sob nenhuma hipótese, seja para fins comerciais, publicitários ou qualquer outra finalidade alheia ao funcionamento da própria Aplicação.
                </p>
              </section>

              <section>
                <h3 className="font-display text-lg text-[#2D263B] mb-2">4. Dados Não Públicos e Não Pesquisáveis</h3>
                <p>
                  Nenhum dado pessoal do usuário é exibido publicamente dentro ou fora da Aplicação. As informações de conta não são pesquisáveis por outros usuários, por mecanismos de busca externos ou por qualquer terceiro, sendo acessíveis apenas pelo próprio titular mediante login em sua conta.
                </p>
              </section>

              <section>
                <h3 className="font-display text-lg text-[#2D263B] mb-2">5. Proteção de Senhas</h3>
                <p>
                  As senhas cadastradas na Aplicação são armazenadas por meio de criptografia (hash), o que significa que nem mesmo os desenvolvedores ou responsáveis pela Aplicação têm acesso à senha do usuário em texto legível. Não há como recuperar a senha original; em caso de esquecimento, será necessário redefini-la.
                </p>
              </section>

              <section>
                <h3 className="font-display text-lg text-[#2D263B] mb-2">6. Uso dos Dados pelos Desenvolvedores</h3>
                <p className="mb-2">Os desenvolvedores e responsáveis pela Aplicação não acessam rotineiramente os dados pessoais dos usuários. O acesso à base de dados só ocorrerá em situações excepcionais, limitadas a:</p>
                <ul className="list-disc pl-5 space-y-1 mb-2">
                  <li>Manutenção técnica da base de dados, quando estritamente necessária;</li>
                  <li>Investigação e correção de falhas de segurança cibernética;</li>
                  <li>Ações para impedir ou remediar violações de privacidade ou acessos não autorizados.</li>
                </ul>
                <p>Fora dessas hipóteses, os dados permanecem inacessíveis aos administradores da Aplicação.</p>
              </section>

              <section>
                <h3 className="font-display text-lg text-[#2D263B] mb-2">7. Exclusão de Dados pelo Usuário</h3>
                <p>
                  O usuário pode, a qualquer momento, solicitar ou realizar diretamente a exclusão de sua conta. Ao fazê-lo, todos os seus dados pessoais são automaticamente e permanentemente excluídos da base de dados da Aplicação, não sendo mantida nenhuma cópia dessas informações após a exclusão.
                </p>
              </section>

              <section>
                <h3 className="font-display text-lg text-[#2D263B] mb-2">8. Cookies</h3>
                <p>
                  A Aplicação utiliza cookies apenas para manutenção da sessão de login, conforme detalhado nos Termos e Condições de Uso. Esses cookies são apagados automaticamente ao final da sessão ou após período de inatividade, e não são utilizados para fins publicitários ou de rastreamento.
                </p>
              </section>

              <section>
                <h3 className="font-display text-lg text-[#2D263B] mb-2">9. Segurança das Informações</h3>
                <p>
                  A Aplicação adota medidas técnicas razoáveis para proteger os dados armazenados contra acessos não autorizados, vazamentos ou uso indevido, incluindo criptografia de senhas e conexão segura (HTTPS/SSL).
                </p>
              </section>

              <section>
                <h3 className="font-display text-lg text-[#2D263B] mb-2">10. Direitos do Usuário</h3>
                <p className="mb-2">Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD), o usuário tem direito a:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Confirmar a existência de tratamento de seus dados;</li>
                  <li>Acessar os dados que possui cadastrados;</li>
                  <li>Corrigir dados incompletos ou desatualizados;</li>
                  <li>Solicitar a exclusão de seus dados a qualquer momento (ou realizá-la diretamente pela própria Aplicação, quando disponível);</li>
                  <li>Ser informado sobre com quem seus dados são compartilhados (neste caso, com ninguém).</li>
                </ul>
              </section>

              <section>
                <h3 className="font-display text-lg text-[#2D263B] mb-2">11. Contato</h3>
                <p>
                  Esta Aplicação não possui uma equipe de atendimento formal. O contato com os responsáveis pelo site é feito diretamente através de suas redes sociais: [inserir @ ou link das redes sociais].
                </p>
              </section>

              <section>
                <h3 className="font-display text-lg text-[#2D263B] mb-2">12. Alterações desta Política</h3>
                <p>
                  Esta Política de Privacidade pode ser atualizada periodicamente. A versão vigente estará sempre disponível nesta página, com a respectiva data de atualização.
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Rodapé simples */}
      <footer className="relative z-10 border-t border-[#EAE4F2] bg-[#FBFBFA] px-6 py-8 text-center text-xs text-[#9B8EA6]">
        <p>© 2026 D. Noite - Store. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}