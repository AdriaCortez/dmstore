"use client";

import { useState, useEffect } from "react";
import { validarTokenObrigatorio } from "./verificarAuth.api";
import { useNavigate } from "react-router";

interface ItemCarrinho {
  _id: any;
  nome: string;
  preco: number;
  quantidade: number;
}

export default function Carrinho() {
      const [itens, setItens] = useState<ItemCarrinho[]>([]);
      const [quantidade, setQuantidade] = useState("");
      const [usuario, setUsuario] = useState<any>(null);
      const [carregando, setCarregando] = useState(true);

      const navegar = useNavigate();

      useEffect(() => {
        const verificar = async () => {
          try {
            console.log("Validando token...");
            const dadosPassados = await validarTokenObrigatorio(navegar);
            setUsuario(dadosPassados);

            const itensIdentificados = await buscarCarrinho();
            setItens(itensIdentificados || []);
          } catch (error) {
            console.error("Erro na autenticação ou carregamento inicial:", error);
          } finally {
            setCarregando(false); // Garante que o loading para mesmo se der erro
          }
        };

        verificar();
      }, []);

        const buscarCarrinho = async () => {
        try {
          const response = await fetch("http://localhost:4000/buscar-carrinho", {
            method: "GET",
            headers: { "Content-type": "application/json" },
            credentials: "include",
          });

          if (!response.ok) {
            throw new Error("Erro ao buscar carrinho");
          }

          const dados = await response.json();
          return dados; // <-- IMPORTANTE: Retornar os dados
        } catch (error) {
          console.error("Ocorreu um erro ao processar requisição para buscar carrinho:", error);
          return [];
        }
      };


      const adicionarItemCarrinho = async () => {
        try {
          const response = await fetch("http://localhost:4000/adicionar-item", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            credentials: "include",
            body: JSON.stringify({
              item: itens,
              quantidade: quantidade,
            }),
          });

          // Verificando o status HTTP da resposta
          if (response.status === 201 || response.status === 200) {
            console.info("O servidor retornou sucesso: Item adicionado!");
            return;
          }

          if (response.status === 400) {
            console.warn("O servidor respondeu com 400: ID inválido");
            return;
          }

          if (response.status === 404) {
            console.warn("O servidor respondeu com 404: Item não encontrado");
            return;
          }

          if (response.status === 500) {
            console.error("O servidor não respondeu corretamente [500]");
          }
        } catch (error) {
          console.error("Ocorreu um erro ao tentar processar a requisição para adicionar item:", error);
        }
      };

      if (carregando) {
        return <p>Carregando carrinho...</p>;
      }

      return (
        
      );
    }