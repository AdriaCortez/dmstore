//Aqui vai ficar os middlewares de autenticação e autorização

import { Usuario } from "../banco-de-dados/usuarios.js";
import { token } from "../autenticacao/autenticacaoUsuario.js";
import { Cookies } from "../armazenamento/cookies.js";
import jwt from "jsonwebtoken";

export function autenicado(req, res, next) {
    const coookie = Cookies(req);

    if(!coookie) {
        return res.status(401).json({
            error: "Acesso negado! Usuário não autenticado!"
            
        })
    }

    try {
        const checar = jwt.verify(cookie, token);

        req.userId = checar.id;

        next();

    } catch (error) {
        return res.status(401).json({
            error: "Acesso negado! Token inválido!"

        })
    }
}

export async function admin(req, res, next) {
    try {
        const usuario = await Usuario.findById(req.userId).select("-senha");

        if(!usuario) {
            return res.status(404).json({ error: "Usuário não foi encontrado!"});
        }

        if(!usuario.admin) {
            return res.status(403).json({ error: "Opa! Usuário não é administrador! Ele não pode adicionar ou remover itens!"});
        }

        next();
        
    } catch (error) {
        return res.status(500).json({ errorr: "Erro interno no middleware de autorização (admin)!"})
    }

}