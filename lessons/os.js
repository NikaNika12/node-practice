const os = require('os'); //модуль
const cluster = require('cluster');//однопоточный js может использовать все возможности многоядерных систем и запускать дочерние процессы, которіе делят между собой один порт

// console.log(os.platform()); //версия операционной системы //win32
// console.log(os.arch()); //x64 архитектура процессора
// console.log(os.cpus().length); //4 массив с описанием ядра процессора

const cpus = os.cpus()

    //     for (let i = 0; i < os.cpus().length - 2; i++) {   
    //         const CPUcore = cpus[i];
    //          console.log("Запустить еще один node js процесс")
    //     }

if (cluster.isMaster) { //главный процесс
    for (let i = 0; i < os.cpus().length - 2; i++) { //запуск дочерних процессов
        cluster.fork() //запуск дочерних процессов
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Воркер с pid = ${worker.process.pid} умер`) //если процесс остановился то вывлдим в логи
//        if(code ===) {
            cluster.fork() //и сразу запускаем новый воркер для макс \ффективности многоядерных процессов
//         } else {
//             console.log('Воркер умер...')
//         }
    })
} else {
    console.log(`Воркер с pid= ${process.pid} запущен`)

    setInterval(() => {
        console.log(`Воркер с pid= ${process.pid} еще работает`)
    }, 5000)
}
