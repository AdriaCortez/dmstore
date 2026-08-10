//Arquivo voltado pra chamadas de api
"use client";

import type { iframe } from "framer-motion/client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Login from "~/frontend/login";

export default function LoginApi() {

    const[email, setEmail] = useState("")
    const[senha, setSenha] = useState("")

    const navigate = useNavigate();

    const login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const ApiLogin = await fetch("http://localhost:4000/login", {
                method: "POST",
                headers: {"Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ email, senha })
            })

            const resposta = await ApiLogin.json();
            
            if(ApiLogin.status === 200 || ApiLogin.status === 201) {

                console.log("Logado com sucesso")
                navigate("/")
            }

            if(ApiLogin.status === 401 ) {
                alert("Credenciais invalidas . verifique email ou senha")
                console.error("Ocorreu um erro na hora de processar a requisição. Erro com dados do usuário")
                return;
            }

            if(ApiLogin.status === 404) {
                alert("Esse usuário não existe");
                return;
            }

            if(ApiLogin.status === 400) {
                alert("Preencha todos os campos");
                return;
            }

            if(ApiLogin.status === 500) {
                alert("ERRO INTERNO NO SERVIDOR [500]")
                console.error("Algo deu errado no servidor ao tentar processar a requisição [500]", resposta)
                return;
            }
        } catch (error) {
            alert("Erro ao processar requisição")
            console.error(error)

        }
    }


    return (
        <Login 
        login={login}
        email={email}
        senha={senha}/>
    )
}