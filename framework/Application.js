//инкапсуляция eventEmitter

const http = require('http');
const EventEmitter = require('events');


// enpoint = {
//   '/users': {
//      'GET': handler
//    }
// }

module.exports = class Application {
    constructor() {
        this.emitter = new EventEmitter();
        this.server = this._createServer()
        this.middlewares = [] //массив функций которые мы будем по цепочке вызывать
    }

    use(middleware){
        this.middlewares.push(middleware);
    }

    listen(port, callback) { //колбек отработает когда сервер запустился
        this.server.listen(port, callback) //делегируем обязанность http серверу и передаем туда порт и колбэк
    }

    addRouter(router) { //получили роутер проитерировались по endpoints для каждого создали событие и это событие генерируем внутри create server
        Object.keys(router.endpoints).forEach(path => {
            const endpoint = router.endpoints[path];
            Object.keys(endpoint).forEach((method) => {
                const handler = endpoint[method];
                this.emitter.on(this._getRouteMask(path, method), (req, res) => {
                
                handler(req, res)
                })
            })
        })
    }

    _createServer(){    //приватный метод используется только внутри constructor создание сервера
        return http.createServer((req,res) =>{
            let body = ""; //чтобы получить тело запроса надо с помощью стрима его прочитать

            req.on('data', (chunk) => {
               body += chunk;
            })

            req.on('end', () => {
                if(body) {
                    req.body = JSON.parse(body);//преобразование из обычной строки в JS обьект с помощью функции parse
                }
            
                this.middlewares.forEach(middleware => middleware(req,res))
                //console.log(req.pathname)
                const emitted = this.emitter.emit(this._getRouteMask(req./*url*/pathname,req.method),req, res)
                if(!emitted){
                res.end()
            }
        })
        })
    }   

    _getRouteMask(path, method){
        return `[${path}]:[${method}]`
    }
}