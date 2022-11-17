const User = require('./user-model');

// const users = [
//     {id: 1, name: "Tanya"},
//     {id: 2, name: "Vasya"},
// ]

// const getUsers = (req,res) => { //handler (req,res)
//     if(req.params.id){
//         return res.send(users.find(user => user.id == req.params.id)) //сравниваем id user with id params и выдаем одного конкретного пользователя, а не всех сразу //http://localhost:5000/users?id=2
//     }
//     res.send(users)
// }

// const createUser =  (req,res) => { //handler (req,res)
//     console.log(req.body)
//     const user = req.body; //тело запроса дожно приходить в формате json
//     users.push(user); //добавим в массив
//     res.send(users)//в итоге на клиент вернем этот обьект пользователя
// }
const getUsers =  async (req, res) => {
    let users;
    if(req.params.id) {
        users = await User.findById(req.params.id) //если пришел ид мззапроса тогда достаем конкретного пользователя
    } else {
        users = await User.find() //вернет все записи из БД
    }
    res.send(users);
}

const createUser = async  (req, res) => {
    const user = await User.create(req.body)//создаем пользователя
    res.send(user);//возвращаем на клиент
}

module.exports = {
    getUsers,
    createUser,
}