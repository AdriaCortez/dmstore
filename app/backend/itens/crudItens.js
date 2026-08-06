import { Item } from "../banco-de-dados/itens.js";
import { Imagem } from "../banco-de-dados/imagens.js";
import mongoose from "mongoose";
export async function cadastrarItem(req, res) {
    try {
        const { nome, preco, descricao, tipo } = req.body;

        if(!nome || !preco || !descricao || !tipo) {
            return res.status(400).json({
                error: "Não foi possível criar o item. Todos os campos são obrigatórios!"
            })}

        const novoItem = await Item.create({
            nome,
            preco,
            descricao,
            tipo,
            criadoPor: req.userId,
            criadoEm: new Date(),
        })

        return res.status(201).json({
            message: "Item criado com sucesso!",
            item: novoItem
        })
    } catch (error) {
        console.error("Erro ao criar item:", error);
        return res.status(500).json({
            error: "Erro ao criar item!"
        });
    }
}

export async function atualizarItem(req, res) {

try {
    const { itemId } = req.params;
    const { nome, preco, descricao, tipo } = req.body;

    if(!mongoose.Types.ObjectId.isValid(itemId)) {
        return res.status(400).json({
            error: "ID do item inválido!"
        });
    }

    const item = await Item.findByIdAndUpdate(
        itemId,
        { nome, preco, descricao, tipo },
        { new: true }
    )

    if(!item) {
        return res.status(404).json({
            error: "Item não encontrado!"
        });
    }

    return res.status(200).json({
        message: "Item atualizado com sucesso!",
        item
    });

} catch (error) {
    console.error("Erro ao atualizar item:", error);
    return res.status(500).json({
        error: "Erro ao atualizar item!"
    });

}}

export async function adicionarImagemAoItem(req, res) {
    try {
        const imagemURL = `http://localhost:4000/uploads/${req.file.path}`; // URL da imagem salva no servidor

        const item = await Item.findByIdAndUpdate(
            req.itemId,
            { imagens: imagemURL },
            { new: true }
        );
        
        if (!item) {
            return res.status(404).json({
                error: "Item não encontrado!"
            });
        }

        if(!req.file) {
            return res.status(400).json({
                error: "Nenhuma imagem foi enviada!"
            });
        }

        const imagem = await Imagem.create({
            url: imagemURL,
            item: req.itemId,
            caminho: req.file.path
        });

        item.imagem = imagem._id;
        await item.save();

        return res.status(200).json({
            message: "Imagem adicionada ao item com sucesso!",
            item,
            imagem
        });

    } catch (error) {
        console.error("Erro ao adicionar imagem ao item:", error);
        return res.status(500).json({
            error: "Erro ao adicionar imagem ao item!"
        });
    }

}

export async function deletarItem(req, res) {
    try {

        const { itemId } = req.params;

        if(!mongoose.Types.ObjectId.isValid(itemId)) {
            return res.status(400).json({
                error: "ID do item inválido!"
            });
        }

        const item = await Item.findById(itemId);

        if(!item) {
            return res.status(404).json({
                error: "Item não encontrado!"
            });
        }

        await Item.deleteOne({ _id: itemId });

        return res.status(200).json({
            message: "Item deletado com sucesso!"
        });

    } catch (error) {
        console.error("Erro ao deletar item:", error);
        return res.status(500).json({
            error: "Erro ao deletar item!"
        });
    }
}

export async function editarItem(req, res) {
    try {
        const { id } = req.params;

        const { nome, descricao, preco, vendidos, tipo } = req.body;

        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "ID Inválido" })
        }

        const item = await Item.findByIdAndUpdate(
            id, 
            {
                nome, 
                descricao,
                preco,
                vendidos,
                tipo,
            }, 
            {
                new: true

            }
        );

        if(!item) {
            return res.status(404).json({
                error: "Item não encontrado"
            });
        }

        return res.status(200).json({
            message: "Item atualizado com sucesso"
        });

        } catch {
            return res.status(500).json({
                error: "Erro ao atualizar tarefa",
                detalhe: error.message,
                
            })

        }

    }