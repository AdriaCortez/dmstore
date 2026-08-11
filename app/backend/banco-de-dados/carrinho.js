import mongoose from "mongoose"

const carrinhoSchema = new mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
        required: true,
        unique: true
    },

    itens: [
        {
            item: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "item",
                required: true
            },

            quantidade: {
                type: Number,
                required: true,
                min: 1,
                default: 1
            }
        }
    ]
});

export const Carrinho = mongoose.model("Carrinho", carrinhoSchema);