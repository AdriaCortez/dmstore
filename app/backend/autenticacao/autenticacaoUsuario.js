//tudo relacionado a autenticação e criptografia

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Usuario } from "../banco-de-dados/usuarios.js";
import { Item } from "../banco-de-dados/itens.js";
import { LimparCookies } from "../armazenamento/cookies.js";

export const token = process.env.ACESS_TOKEN;

export async function tokenEnviado(req, res) {
    try {
        const verificarUsuario = await Usuario.findById(req.userId).select("-senha");

        if(!verificarUsuario) {
            return res.status(404).json({
                error: "Usuário não encontrado!"
            })
        }

        const verificarItens = await Item.find({ criadoPor: req.userId }).sort({ criadoEm: -1 });

        res.json({ ...verificarUsuario.toObject(), itens: verificarItens }); // retorna os dados do usuário e os tens criados por ele
    } catch (error) {
        res.status(500).json({ error: "Erro interno do servidor" });
    }
}

export async function logout(req, res) {
    try {
        limparCookies(req, res);
        return res.json({ message: 'Logout realizado!'})
    } catch (error) {
        console.error("Erro ao realizar logout:", error);
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
}

export async function verificarLogin(req, res) {
    try {
        console.log("Verificando credenciais...");
        const { email, senha } = req.body;

        if (!email || !senha ) {
            return res.status(400).json({
                error: 'Cadastro inválido! Os campos não foram totalmente preenchidos.'
            })
        } 

        const usuario = await Usuario.findOne({ email }).select("+senha");

        if(!usuario) {
            return res.status(404).json({
                error: "Usuário não encontrado!"
            })
        }

        const senhaOk = await bcrypt.compare(senha, usuario.senha);

        if(!senhaOk) {
            return res.status(401).json({
                error: "Credencial inválida!"
            })
        }

        const assinatura = jwt.sign({ id: usuario._id, email: usuario.email }, token, { expiresIn: "1h"});

            res.cookie("cookie-auth", assinatura, {
                httpOnly: true,
                secure: false,
                sameSite: "lax",
                maxAge: 20 * 60 * 1000,
            });

            return res.json({
                message: "Login realizado com sucesso!"
            });


    } catch (error) {
            console.error("Erro ao verificar login:", error);
            return res.status(500).json({ error: "Erro interno do servidor" });}
            
    }

export async function mudarSenha(req, res) {
  try {

        const { senhaAtual, novaSenha, confirmarSenha } = req.body;

        if (!senhaAtual || !novaSenha || !confirmarSenha) {
        return res.status(400).json({ error: "Preencha todos os campos" });
        }

        if (novaSenha !== confirmarSenha) {
        return res.status(400).json({ error: "As senhas não coincidem" });
        }

        const usuario = await Usuario.findById(req.userId).select("+senha");

        if (!usuario) {
        return res.status(404).json({ error: "Ops. Usuário não encontrado" });
        }

        const correto = await bcrypt.compare(senhaAtual, usuario.senha);

        if (!correto) {
        return res.status(401).json({ error: "Senha atual incorreta" });
        }

        const hashnovasenha = await bcrypt.hash(novaSenha, 10);

        usuario.senha = hashnovasenha;

        await usuario.save();

        return res.json({ message: "Senha alterada com sucesso!" });

  } catch (err) {
    console.error("Erro em ChangePassword em authService.js", err);
    return res.status(500).json({ error: "Erro ao mudar senha" });
  }
}