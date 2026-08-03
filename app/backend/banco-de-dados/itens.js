//base de dados de itens da loja

import mongoose from "mongoose";
import validator from "validator";

const itemSchema = new mongoose.Schema({

    nome: {
        type: String,
        required: true,
    },

    preco: {
        type: Number,
        required: true,
        min: 0
    },

    descricao: {
        type: String,
        required: true,
        maxlength: 200
    },

    vendidos: {
        type: Number,
        default: 0
    }

});


export const Item = mongoose.model("Item", itemSchema);