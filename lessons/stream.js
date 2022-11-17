const fs = require('fs')
const path = require('path')

fs.readFile(path.resolve(__dirname, "test2.txt"), (error, data) => {
    if(error) {
        throw error;
    } 
    console.log(data)
})

// const stream = fs.createReadStream(path.resolve(__dirname, 'test2.txt')) //readeble stream

// // Один чанк по дефолту 64кб
// stream.on('data', (chunk) => {
//     console.log(chunk)
// })

// stream.on('end', () => console.log('Закончили читать'))
// stream.on('open', () => console.log('Начали читать'))
// stream.on('error', (e) => console.log(e))

const http = require("http");

// http.createServer((req, res) => {
//     //req - readable stream
//     //res - writable stream
//     const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))
//
//     // Стрим закончит читать раньше чем пользователь скачает readable стрим не начинает читать новую порцию данных пока writable не закончит щаписывать предыдущую
//     stream.pipe(res)
// })