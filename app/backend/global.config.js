//aqui vai ficar o arquio de configurações glovbais relacionadas a dotenv, cors, e relacionados

import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import cookieParser from "cookie-parser";

export default function ConfiguracoesGlobais(app) {
    dotenv.config();

    const port = 4000;
    const uri = process.env.MONGO_URI;

    app.use(express.json());
    app.use(cookieParser());
    app.use(
        cors({ //Cross-Origin Resource Sharing: utilizado para permitir que origens externas acessem e leiam recursos enviados entre servidores.
            origin: [
                "http://localhost:4000",
                "http://localhost:5173",
                "http://localhost" ],
                
            credentials: true,
            methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
            allowedHeaders: ["Content-Type", "Authorization"],
        })
    )


    app.use(express.urlencoded({ extended: true }));

    async function conectarServidores() {
        try {
            await mongoose.connect(uri, {
                serverSelectionTimeoutMS: 15000, //tempo limite de conexão com o MongoDB
                heartbeatfrequencyMS: 2000 //verifica se o servidor está ativo a cada 2 segundos, como uma "batida de coração"
            });

            console.log("COnexão com Mongoose realizada com sucesso!");

            app.listen(port, "0.0.0.0", () => {
                console.log(`Express na porta ${port}`)
            })
        } catch (error) {
            console.error("Erro ao conectar ao MongoDB:", error);
        }
    }

    return conectarServidores();

}