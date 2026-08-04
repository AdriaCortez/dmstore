import type { Route } from "./+types/home";
import { BemVindo } from "../frontend/boasVindas";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Store" },
    { name: "Loja de artigos religiosos", content: "Página inicial que mostra as principais vendas" },
  ];
}

export default function Home() {
  return <BemVindo />;
}
