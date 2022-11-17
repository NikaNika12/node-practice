const Router = require("../framework/Router")
const controller = require ("./user-controller")
const router = new Router ()


router.get("/users", controller.getUsers) 
    // (req,res) => { //handler (req,res)
    //     if(req.params.id){
    //         return res.send(users.find(user => user.id == req.params.id)) //сравниваем id user with id params и выдаем одного конкретного пользователя, а не всех сразу //http://localhost:5000/users?id=2
    //     }
    
    //console.log(req.params);

    // res.writeHead(200, { //чтобы не повторяться создаем middleware
    //     "Content-type": "application/json"
    // })
    // res.end(JSON.stringify(users))
    //res.send(users)


router.post("/users", controller.createUser) 
    // (req,res) => { //handler (req,res)
    //     console.log(req.body)
    //     const user = req.body; //тело запроса дожно приходить в формате json
    //     users.push(user); //добавим в массив
    //res.send(users)//в итоге на клиент вернем этот обьект пользователя
//}) to controller

module.exports = router