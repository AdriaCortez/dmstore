//Arquivo voltado pra chamadas de api
"use client";

import { error } from "console";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Cadastrar from "~/frontend/cadastrar";

export default function CadastroApi() {

       const [nome, setNome] = useState("");
       const [email, setEmail] = useState("");
       const [senha, setSenha] = useState("");
    
       const navigate = useNavigate();
    
       const cadastrar = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
    
            try {
                const ApiCadastro = await fetch("http://localhost:4000/cadastro", {
                    method: "POST",
                    headers: { "Content-type:": "application/json" },
                    credentials: "include",
                    body: JSON.stringify({
                        nome: nome,
                        email: email,
                        senha: senha
                    }),
                });

                const resposta = await ApiCadastro.json();

                if(ApiCadastro.status === 201) {
                    alert("Cadastro realizado, redirecionando para login")

                navigate("/login")
                    
                };

                if(ApiCadastro.status === 400 || ApiCadastro.status === 409 ) {
                    alert("Ops! Dados inválidos ou usuário existente. Tente novamente");

                    console.log("Usuário já existe")
                }

                if(ApiCadastro.status === 500) {
                    alert("Ops! Parece que ocorreu algum problema com o servidor. Tente novamente mais tarde! [500]")

                    console.error("Ocorreu um erro no servidor! [500 CONNECTION FAILED]")
                    console.info("Esse problema deve ser reportado para a manutenção.")
                }


            } catch(error) {
                console.error("Ocorreu um erro ao processar requisição, tente novamente!")
            }
        }


    return (
        <Cadastrar
        cadastrar={cadastrar}
        nome={nome}
        email={email}
        senha={senha}
         />
    )
}