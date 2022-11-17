const path = require('path'); //взаимодействие с путями

console.log(path.join(path.join(__dirname, 'first', 'second'))); //склеить участки пути node .\lessons\path.js dirname - current folder

const fullpath = path.resolve(__dirname, 'first', 'second', 'third.js') //получить абсолютный путь '/first' путь от аргумента со слеш
console.log('Парсинг пути', path.parse(fullpath)) /*Парсинг пути {
    root: 'C:\\',
    dir: 'C:\\Users\\Ägaren\\Documents\\node - fundamentals\\lessons\\first\\second',
    base: 'third.js',
    ext: '.js',
    name: 'third'
  }*/

  console.log('разделитель в ОС', path.sep)
console.log('Проверка на абсолютный путь', path.isAbsolute('first/second'))
console.log('Название файла',path.basename(fullpath))
console.log('расширение файла',path.extname(fullpath))

// ------------------------------------

const siteURL = 'http://localhost:8080/users?id=5123'//при создании фреймворка правильно распарсить, получить query параметры, участки пути

const url = new URL(siteURL);

console.log(url)