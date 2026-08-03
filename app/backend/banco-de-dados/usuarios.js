//base de dados de usuarios logados

import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({

    nome: {
        type: String,
        required: true,
    },

    email: {type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate: {
            validator: validator.isEmail,
            message: 'Formato de email inválido'
        }
    },

    senha: {
        type: String,
        required: true,
        minlength: {
            value: 8,
            message: 'A senha deve ter no mínimo 8 caracteres'
        }
    },

});

export const Usuario = mongoose.model("User", userSchema);