module.exports = class Router {
    constructor() {
        this.endpoints = {}
    }

    request(method = "GET", path, handler) {
        if(!this.endpoints[path]){ //убедимся что по такому пути эндпоинта не существует
            this.endpoints[path] = {}
        }
        const endpoint = this.endpoints[path];

        if(endpoint[method]){ //убедимся что по такому адресу такого метода не существует
            throw new Error(`[${method}] по адресу ${path} уже существует`)
        }

        endpoint[method] = handler //если правда из предыдущих условий тогда записываем в endpoint по ключу метода handler = callback
        // emitter.on(`[${path}]:[${method}]`, (req,res) => { //смогли сгенерировать событие и вызвать нужный handler 
        //     handler(req,res)//внутри передаем 2 стрима 
        // }) //handler по опр пути и по запросу должен дать ответ //глобальный ответ
    }
    get(path,handler) {
        this.request("GET",path,handler);
    }
    post(path,handler) {
        this.request("POST",path,handler);
    }
    put(path,handler) {
        this.request("PUT",path,handler);
    }
    delete(path,handler) {
        this.request("DELETE",path,handler);
    }
}
