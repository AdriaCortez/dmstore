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
    },

    criadoEm: {
        type: Date,
        default: Date.now
    },

    criadoPor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    tipo: [{
        type: String,
        required: true,
        minLength: 3,
        maxLength: 40
    }]

});


export const Item = mongoose.model("Item", itemSchema);