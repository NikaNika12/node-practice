//const http = require ("http");
//const EventEmitter = require("events");
const Application = require("./framework/Application")
const PORT = process.env.PORT || 5000;
//const Router = require("./framework/Router")
const userRouter = require("./src/user-router")
const jsonParser = require("./framework/parsejson")
const parseUrl = require("./framework/parseUrl")
const mongoose = require("mongoose");

//const emitter = new EventEmitter();

const app = new Application()



//const router = new Router();

//endpoints которые обрабатывают гет запросы

// router.get("/users", (req,res) => { //handler (req,res)
//     res.end("YOU SEND REQUEST TO /USERS")
// })

// router.get("/posts", (req,res) => {
//     res.end("YOU SEND REQUEST TO /POSTS")
// })

//const server = http.createServer((req,res) =>{
    // emitter.emit(`[${req.url}]:[${req.method}]`,req, res)
    // if(!emitted){
    //     res.end()
    // }
    // res.writeHead(200, { //расшифровка кириллицы
    //     "Content-type": "text/html"     
    // })
    // res.writeHead(200, { //сервер отправил строку в формате JSON
    //     "Content-type": "application/json"     
    // })
    // if(req.url === "/users") {
    //     return res.end("USERS")
    // }
    // if(req.url === "/posts") {
    //     return res.end("POSTS")
    // }
    //res.end(req.url)
//})
    
    //res.end("Server works!")
app.use(jsonParser);
app.use(parseUrl('http://localhost:5000'));
app.addRouter(userRouter); //добавляем роутер в аппликатион

//app.listen(PORT, () => console.log(`Server is working on ${PORT}`)) //запуск http server

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://veronika:veron0512@cluster0.oypjtct.mongodb.net/?retryWrites=true&w=majority')
        app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()

