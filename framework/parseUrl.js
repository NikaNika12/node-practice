module.exports = (baseUrl) => (req, res) => { //мезанизм замыкания - делаем функцию которая возвращает middleware и в свою очередь эта функция булет принимать базовый URL
    const parsedUrl = new URL(req.url, baseUrl)
    
    //console.log(parsedUrl)

    // URL {
    //     href: 'http://localhost:5000/users',
    //     origin: 'http://localhost:5000',
    //     protocol: 'http:',
    //     username: '',
    //     password: '',
    //     host: 'localhost:5000',
    //     hostname: 'localhost',
    //     port: '5000',
    //     pathname: '/users',
    //     search: '',
    //     searchParams: URLSearchParams {},
    //     hash: ''
    //   }
   
    const params = {}
    parsedUrl.searchParams.forEach((value, key) => params[key] = value)

    req.pathname = parsedUrl.pathname;
    req.params = params;
}