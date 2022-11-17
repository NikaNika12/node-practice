const Emitter = require('events');

const emitter = new Emitter();

emitter.on /*once запуск единожды*/ ("message", (data, second, third) => {
    console.log('Вы прислали сообщение ' + data);
    console.log('Второй аргумент ' + second);
})

// const MESSAGE = process.env.message || '';

// if (MESSAGE) {
//     emitter.emit('message', MESSAGE, 123) //not empty
// } else {
//     emitter.emit('message', 'Вы не указали сообщение')//empty    //Вы прислали сообщение Вы не указали сообщение Второй аргумент undefined
// }

//передача сообщения в терминале cross-env MESSAGE="this is" node .\lessons\events.js ответ Вы прислали сообщение this is
//Второй аргумент 123

//emitter.once('message', callback)

// emitter.emit('message') //генерация ьесконечное кол-во раз
// emitter.emit('message')
// emitter.emit('message')
// emitter.emit('message')
// emitter.emit('message')

//создание отдельной функции колбек 

// const callback = (data, second, third) => {
//     console.log('Вы прислали сообщение ' + data);
//     console.log('Второй аргумент ' + second);
// }
// //
// emitter.once('message', callback)

// // emitter.removeAllListeners()
// emitter.removeListener('message', callback)

const writableStream = fs.createWriteStream(path.resolve(__dirname, 'test3.txt'))
for (let i = 0; i < 20; i++) {
    writableStream.write(i + '\n');
}
// writableStream.end()
// writableStream.close()
// writableStream.destroy()
// writableStream.on('error')