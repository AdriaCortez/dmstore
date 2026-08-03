//Tudo relacionado a criar, ler, atualizar e deletar usuarios

import bcrypt from "bcryptjs";
import { Usuario } from "../banco-de-dados/usuarios.js";

export async function cadastrarUsuario(req, res) {
    try {
        const { nome, email, senha } = req.body;
        
        if(!nome || !email || !senha) {
            return res.status(400).json({
                error: "As credenciais são obrigatórias!"
            });
        }

        const hash = await bcrypt.hash(senha, 8);

        const cadastro = await Usuario.create({
            nome, 
            email,
            senha: hash,
        })

        return res.status(201).json({
            message: "Usuário cadastrado com sucesso!"
        });

    } catch (error) {
        console.error("Erro ao cadastrar usuário:", error);
        return res.status(500).json({
            error: "Erro ao cadastrar usuário!"
        });
    }
}

export async function deletarUsuario(req, res) {
    try { 
        const usuario = await Usuario.findById(req.userId).select("+senha");

        if(!usuario) {
            return res.status(404).json({
                error: "Esse usuario não foi encontrado!"
            })
        }

        const { senha } = req.body;

        if(!senha) { 
            return res.status(400).json({
                error: "A senha é obrigatória!"
            })
        }

        const senhaOk = await bcrypt.compare(senha, usuario.senha);

        if(!senhaOk) {
            return res.status(401).json({
                error: "Senha inválida!"
            })
        }

        await Usuario.findByIdAndDelete(req.userId);

        return res.status(200).json({
            message: "Usuário deletado com sucesso!"
        })


    } catch (err) {
        res.status(500).json({
            error: "Erro ao deletar usuário:"
        })
    }
}