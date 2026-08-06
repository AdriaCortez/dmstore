//Banco de dados para upload de imagens 
import mongoose from "mongoose";

const { Schema, model } = mongoose;

export const ImagemSchema = new Schema({

    url: {
        type: String,
        required: false,
        default: "https://cdn1.staticpanvel.com.br/produtos/15/produto-sem-imagem.jpg",
    },

    caminho: {
        type: String,
        required: false,
        default: "sem-imagem"
    }
})

export const Imagem = model("Imagem", ImagemSchema);