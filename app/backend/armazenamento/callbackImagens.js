//Arquivo para configurar coisas relacionadas ao Multer, como é algo completamente novo, o código vai estar todo comentado.

import multer from 'multer';
import path from 'path';
import fs from 'fs';
/*

Tradução de algumas partes:

req = requisição que o cliente manda pro servidor
file = arquivo que o cliente manda pro servidor
callback = função de callback, esse callback é chamado quando o Multer termina de processar o arquivo,
ele tem dois parâmetros: O primeiro é um erro, e o segundo é o resultado do processamento.
file.mimetype = define o tipo de arquivo.
fs = file system, biblioteca nativa do node 

*/

const uploadsOk = 'uploads/'; //-> garante que a pasta exista, se não existir, eça é criada

if(!fs.existsSync(uploadsOk)) { //se a pasta não existir ela é criada. Essa função verifica isso de forma síncrona
    fs.mkdirSync(uploadsOk, { recursive: true }) //mkdir vai criar a pasta, o recursive cria pastas aninhadas, ou seja, se não existir, ela cria as pastas necessárias para não dar erro. 
}

const imageStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads/');
    }, /*aqui definimos para qual pasta os arquivos vão ser salvos, nesse caso é na rota /uploads que aparece em userService
     e também foi definido no GlobalService do backend, 
     >>> é importante que o nome da pasta seja o mesmo em ambos os lugares */

    filename: (req, file, callback) => {
        callback(null, Date.now() + '-' + file.originalname);
    } //Aqui é definido o nome do arquivo, sendo data atual + nome. Isso evita que dois arquivos com o mesmo nome sejam sobreescritos.

    
});

//É aqui que o upload.single é definido. Ele é um middleware do multer, mas está em Storage para indicar que estamos guardando um arquivo num armazenamento.

export const uploads = multer({
    storage: imageStorage,

    limits: {
        fileSize: 5 * 1024 * 1024 //Limite do tamanho do arquivo, ele tem que ser no máximo 1024x1024 pixels, 5MB
    },

    fileFilter: (req, file, cb) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/bmp', 'image/svg+xml']; //Tipos de arquivos permitidos

        if(allowedTypes.includes(file.mimetype)) { //Se os arquivos forem permitidos o callback é acionado sem erro. - mimetype é o tipo de arquitetura
            callback(null, true);
        } else {
            callback(new Error("Formato inválido: É apenas permitido arquivos do tipo JPEG, PNG, BMP ou SVG"))
        }
    }
})

//Middleware Multer para upload de .zip (usado na documentação)
//Usa memoryStorage porque o arquivo é processado imediatamente com adm-zip

export const uploadZip = multer({
    storage: multer.memoryStorage(),

    limits: {
        fileSize: 150 * 1024 * 1024 //Limite de
        //  150MB
    },

    fileFilter: (req, file, callback) => {
        const allowedTypes = ['application/zip', 'application/x-zip-compressed'];

        if(allowedTypes.includes(file.mimetype)) {
            callback(null, true);
        } else {
            callback(new Error("Formato inválido: Apenas arquivos .zip são aceitos"))
        }
    }
})