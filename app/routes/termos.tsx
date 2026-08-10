// src/routes/Termos.tsx
import { Link } from "react-router";
import { motion, useReducedMotion } from "framer-motion";

export default function Termos() {
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

      {/* Seção principal com o conteúdo dos Termos e Condições */}
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
          Termos e condições
        </motion.h1>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.25 }}
          className="mt-10 rounded-[2.2rem] border border-[#EAE4F2] bg-white/60 p-8 shadow-sm backdrop-blur-md sm:p-12"
        >
          <div className="prose prose-neutral max-w-none text-[#6B6378] space-y-6 leading-relaxed">
            <div>
              <p className="font-display text-2xl text-[#2D263B] mb-1">Termos e Condições de Uso</p>
              <p className="text-xs uppercase tracking-[0.2em] text-[#9B8EA6]">Última atualização: 10 de AGOSTO de 2026 </p>
            </div>

            <div className="space-y-6 pt-4 text-sm sm:text-base">
              <section>
                <h3 className="font-display text-lg text-[#2D263B] mb-2">1. Aceitação dos Termos</h3>
                <p>
                  Ao acessar e utilizar o serviço da web da loja D. Noite Store, você concorda integralmente com os presentes Termos e Condições de Uso (&quot;Termos&quot;). Durante a leitura, o usuário notará a utilização de "Aplicação" para descrever o serviço, esse termo é utilizado por razões técnicas.
                </p>
              </section>

              <section>
                <h3 className="font-display text-lg text-[#2D263B] mb-2">2. Descrição do Serviço</h3>
                <p>
                  A Aplicação permite que usuários criem uma conta, façam login e mantenham um carrinho de pedidos associado à sua conta para fins de organização. Esse site não realiza vendas automaticamente, cobranças ou transações financeiras de qualquer natureza. Os itens ofertados nessa aplicação são colocados manualmente pela admnistração, no entanto é necessário entrar em contato através de algum canal oficial disponibilizado para fazer calculos precisos e produtos personalizados
                </p>
              </section>

              <section>
                <h3 className="font-display text-lg text-[#2D263B] mb-2">3. Cadastro e Conta de Usuário</h3>
                <p className="mb-2"><strong>3.1.</strong> Para utilizar determinadas funcionalidades da Aplicação, o usuário deverá criar uma conta, fornecendo as seguintes informações básicas:</p>
                <ul className="list-disc pl-5 space-y-1 mb-2">
                  <li>Nome;</li>
                  <li>E-mail;</li>
                  <li>Senha (armazenada de forma criptografada).</li>
                </ul>
                <p className="mb-2"><strong>3.2.</strong> O usuário é responsável por manter a confidencialidade de sua senha e por todas as atividades realizadas em sua conta.</p>
                <p><strong>3.3.</strong> O usuário compromete-se a fornecer informações verdadeiras, precisas e atualizadas no momento do cadastro.</p>
              </section>

              <section>
                <h3 className="font-display text-lg text-[#2D263B] mb-2">4. Uso de Cookies e Sessão</h3>
                <p className="mb-2"><strong>4.1.</strong> A Aplicação utiliza cookies exclusivamente para fins de autenticação e manutenção de sessão, permitindo que o usuário permaneça conectado durante sua navegação.</p>
                <p className="mb-2"><strong>4.2.</strong> Os cookies utilizados não têm finalidade publicitária e não são utilizados para rastreamento, criação de perfis de navegação ou personalização de anúncios.</p>
                <p className="mb-2"><strong>4.3.</strong> Após um período de inatividade (&quot;timeout&quot;), a sessão é automaticamente encerrada e os cookies correspondentes são removidos, exigindo que o usuário realize login novamente para continuar utilizando a Aplicação.</p>
                <p><strong>4.4.</strong> O usuário pode, a qualquer momento, bloquear ou apagar os cookies através das configurações de seu navegador, ciente de que isso pode impedir o funcionamento correto de determinadas funcionalidades, como a manutenção do login.</p>
              </section>

              <section>
                <h3 className="font-display text-lg text-[#2D263B] mb-2">5. Dados Pessoais e Privacidade</h3>
                <p className="mb-2"><strong>5.1.</strong> As informações pessoais coletadas (nome, e-mail e senha) são armazenadas em banco de dados exclusivamente para permitir que o usuário acesse sua conta, visualize seus pedidos anteriores e mantenha um carrinho persistente.</p>
                <p className="mb-2"><strong>5.2.</strong> Os responsáveis pela Aplicação não têm acesso direto às informações pessoais dos usuários, sendo estas protegidas por medidas técnicas de segurança.</p>
                <p className="mb-2"><strong>5.3.</strong> As senhas são armazenadas de forma criptografada (hash), não sendo possível sua recuperação em texto puro por nenhuma pessoa, incluindo os administradores da Aplicação.</p>
                <p className="mb-2"><strong>5.4.</strong> Não há compartilhamento, venda ou cessão de dados pessoais a terceiros para fins comerciais ou publicitários.</p>
                <p className="mb-2">
                  <strong>5.5.</strong> Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD), o usuário poderá, a qualquer momento, solicitar:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-2">
                  <li>Confirmação da existência de tratamento de seus dados;</li>
                  <li>Acesso aos seus dados;</li>
                  <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
                  <li>Eliminação dos dados pessoais tratados, exceto nas hipóteses previstas em lei;</li>
                  <li>Portabilidade dos dados a outro fornecedor de serviço, mediante requisição expressa.</li>
                </ul>
                <p><strong>5.6.</strong> Solicitações relacionadas a dados pessoais podem ser encaminhadas através do canal de contato indicado na Seção 12 destes Termos.</p>
              </section>

              <section>
                <h3 className="font-display text-lg text-[#2D263B] mb-2">6. Segurança da Aplicação</h3>
                <p className="mb-2"><strong>6.1.</strong> A Aplicação adota medidas técnicas e administrativas razoáveis para proteger os dados pessoais dos usuários contra acessos não autorizados, perda, alteração ou divulgação indevida.</p>
                <p className="mb-2"><strong>6.2.</strong> A conexão com a Aplicação é protegida (HTTPS/SSL), garantindo a criptografia dos dados em trânsito entre o dispositivo do usuário e os servidores.</p>
                <p><strong>6.3.</strong> Apesar dos esforços empregados, nenhuma medida de segurança é absolutamente infalível, e o usuário reconhece esse risco inerente ao uso de qualquer serviço digital.</p>
              </section>

              <section>
                <h3 className="font-display text-lg text-[#2D263B] mb-2">7. Ausência de Transações Comerciais</h3>
                <p>
                  A Aplicação não realiza vendas de produtos ou serviços, não processa pagamentos e não armazena dados financeiros (como números de cartão de crédito). O &quot;carrinho&quot; mencionado nestes Termos tem finalidade meramente organizacional, permitindo ao usuário reunir e visualizar itens de interesse, sem qualquer efeito de compra ou cobrança.
                </p>
              </section>

              <section>
                <h3 className="font-display text-lg text-[#2D263B] mb-2">8. Responsabilidades do Usuário</h3>
                <p className="mb-2">O usuário compromete-se a:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Não utilizar a Aplicação para fins ilícitos ou não autorizados;</li>
                  <li>Não tentar acessar áreas restritas do sistema ou contas de outros usuários;</li>
                  <li>Não realizar engenharia reversa, descompilação ou tentativas de violação da segurança da Aplicação;</li>
                  <li>Manter seus dados de acesso em sigilo.</li>
                </ul>
              </section>

              <section>
                <h3 className="font-display text-lg text-[#2D263B] mb-2">9. Alterações destes Termos</h3>
                <p>
                  Os responsáveis pela Aplicação reservam-se o direito de alterar estes Termos a qualquer momento, mediante publicação da versão atualizada nesta mesma página, com indicação da data da última atualização. O uso continuado da Aplicação após tais alterações implica aceitação dos novos Termos.
                </p>
              </section>

              <section>
                <h3 className="font-display text-lg text-[#2D263B] mb-2">10. Encerramento de Conta</h3>
                <p>
                  O usuário pode solicitar o encerramento de sua conta e a exclusão de seus dados pessoais a qualquer momento, através do canal de contato do desenvolvedor disponibilizado ou através de seu perfil pessoal.
                </p>
              </section>

              <section>
                <h3 className="font-display text-lg text-[#2D263B] mb-2">11. Legislação Aplicável e Foro</h3>
                <p>
                  Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca de qualquer região em território brasileiro para dirimir quaisquer controvérsias oriundas destes Termos, com renúncia a qualquer outro, por mais privilegiado que seja.
                </p>
              </section>

              <section>
                <h3 className="font-display text-lg text-[#2D263B] mb-2">12. Contato</h3>
                <p>
                  Em caso de dúvidas sobre estes Termos ou sobre o tratamento de dados pessoais, entre em contato através dos canais de contato disponibilizados na página inicial.
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