import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  return (
    <h1>Bem vindo(a)</h1>
  );
}

//eu pretendo criar uma página inicial de um e-commerce utilizado react router v7, com typescript e tailwind sendo utilizada no front. A página inicial deve conter um título de "Boas vindas à store", e um subtítulo escrito "Confira o catálogo da loja".  Esse título e subtítulo devem estar alinhados no canto superior esquerdo da página, e deve conter um carrossel logo abaixo rolável, cada um desses com um botão clicável transparente com títulos diferentes. Esses títulos das imagens do carrosel, devem ser, respectivamente: "Trabalhos" (que vai para a rota /trabalhos), "Artigos" (que vai para a rota /artigos), "Sobre a loja" (que vai para a rota /sobre), e "Oráculos" (que vai para a rota (oráculos). De ínicio, não é necessário colocar as imagens do carrossel, elas podem ser uma imagem "default" ou uma imagem de "carregando". No canto superior direito da página deve ter um botão escrito "entrar ou cadastrar" que deve ir para a rota "/entrar". 