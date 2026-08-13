import mongooose from "mongoose";
import { Item } from "../banco-de-dados/itens";
import { Carrinho } from "../banco-de-dados/carrinho";

export async function adicionarItem(req, res) {
    try {
        const { itemId, quantidade = 1 } = req.body;

        //Identifica o formato do ID, significa que vai verificar no Mongo se é válido, não aceitando ids do tipo 123 ou abc.
        if(!mongoose.Types.ObjectId.isValid(itemId)) {
            return res.status(400).json({
                error: "Id inválido"
            });
        }

        const item = await Item.findById(itemId);

        if(!item) {
            return res.status(404).json({
                error: "Item não encontrado!"
            });
        }

        let carrinho = await Carrinho.findOne({
            usuario: req.userId
        });

        if(!carrinho) { carrinho = await Carrinho.create({
            usuario: req.userId,

            itens: [
                {
                    item: itemId,
                    quantidade
                }
            ]
        });

        return res.status(201).json({
            message: "Carrinho criado com item adicionado",
            carrinho
        })
    
    }

        const itemExiste = carrinho.itens.find(
            itemCarrinho => itemCarrinho.item.toString() === itemId
        ); //essa constante verifica se o item já está no carrinho, ele percorre todos os itens até chegar no id.

        /* Anotação sobre essa constante: o toString() dentro dessa lógica serve para converter o ObjectId em texto puro, já que os IDs
        do mongo não são strings comuns, e sim do "ObjectId" que é um objeto especial do Mongo que possui metadados. Caso façamos uma comparação
        direta, o JavaScript pode retornar como false na comparação (===) porque é um objeto do tipo ObjectId e outro é uma string comum,
        mesmo que ambos seja, identicos. Isso significa, que mesmo que ItemId e e ItemCarrinho pareçam os mesmos, o tipo declarado não é.

        */

        if(itemExiste) {
            itemExiste.quantidade += quantidade;
        } else {
            carrinho.itens.push({
                item: itemId,
                quantidade
            })
        }

        await carrinho.save();

        return res.status(200).json({
            message: "Item adicionado ao carrinho",
            carrinho
        })

    } catch (err) {
        return res.status(500).json({
            err: "Erro ao adicionar item ao carrinho!"
        })

    }
}

export async function buscarCarrinho (req, res) {
    try {
        const carrinho = await Carrinho.findOne({ usuario: req.userId }).populate("itens.item");

        if(!carrinho) {

            res.json({ message: "O carrinho está vazio."})
            return res.status(200).json({
                carrinho
            });
        }

    } catch (err) { 
        console.error("Erro ao buscar carrinho:", err);

        return res.status(500).json({
            error: "Erro ao buscar carrinho!"
        })

    }
    
}