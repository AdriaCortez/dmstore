//aqui vai ficar o código do express
import express from "express";
import { autenticado,
    admin } from "./middlewares/middlewares.js";
import { 
    tokenEnviado, 
    logout,
    verificarLogin,
    mudarSenha } from "./autenticacao/autenticacaoUsuario.js";
import {
    cadastrarUsuario,
    deletarUsuario } from "./autenticacao/crudUsuario.js";
import {
    cadastrarItem,
    deletarItem,
    adicionarImagemAoItem,
    editarItem } from "./itens/crudItens.js";
import ConfiguracoesGlobais from "./global.config.js";

const app = express();
app.use(express.json());

ConfiguracoesGlobais(app);

app.get("/token", autenticado, async (req, res) => {
    try {
        return tokenEnviado(req, res);
    } catch (error) {
        console.error("Erro ao enviar token:", error);
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
});

app.post("/cadastro", async (req, res) => {
    try {
        return cadastrarUsuario(req, res);
    } catch (error) {
     
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
});

app.post("/login", async (req, res) => {
    try {
        return verificarLogin(req, res);
    } catch (error) {
    
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
});

app.post("/logout", autenticado, async (req, res) => {
    try {
        return logout(req, res);
    } catch (error) {
        console.error("Erro ao fazer logout:", error);
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
});

app.post("/criar-item", autenticado, admin, async (req, res) => {
    try {
        return cadastrarItem(req, res);
    } catch (error) {
        console.error("Erro ao criar item:", error);
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
});

app.put("/mudar-senha", autenticado, async (req, res) => {
    try {
        return mudarSenha(req, res);
    } catch (error) {
        
        return res.status(500).json({ error: "Erro interno do servidor" });
    } });

app.put("/editar-items/:id", autenticado, async (req, res) => {
    try {
        return editarItem(req, res);
    } catch {
        return res.status(500).json({ error: "Erro interno no servidor"})
    }
});

app.delete("/deletar-conta", autenticado, async (req, res) => {
    try {
        return deletarUsuario(req, res);
    } catch (error) {
        console.error("Erro ao deletar usuário:", error);
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
});

app.delete("/deletar-item/:id", autenticado, admin, async (req, res) => {
    try {
        return deletarItem(req, res);

    } catch (error) {
        console.error("Erro ao deletar item:", error);
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
});

