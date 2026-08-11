import type { Route } from "./+types/home";
import { BemVindo } from "../frontend/boasVindas";
import { useEffect, useState } from 'react';
import { validarToken } from "./api/verificarAuth.api";
import { useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Store" },
    { name: "Loja de artigos religiosos", content: "Página inicial que mostra as principais vendas" },
  ];
}

export default function Home() {

  const [usuario, setUsuario] = useState<any>(null)
  const [carregando, setCarregando] = useState(true)

  const navegar = useNavigate()

  useEffect(() => {

    const verificar = async () => {

    console.log("Validando token...")

    const dadosPassados = await validarToken();
    setUsuario(dadosPassados);
    setCarregando(false)
    }

    verificar()
    
  }, [])


  return <BemVindo
  
  usuario={usuario}
  carregando={carregando}/>;
}
