// Module Operation System. OS

// 1️⃣ Node.js os moduli

// Node.js’da os — bu ichki modul bo‘lib, operatsion tizim haqidagi ma’lumotlarni olish uchun ishlatiladi. Hech narsa o‘rnatish shart emas, to‘g‘ridan-to‘g‘ri ishlatish mumkin.

// Misol:

//  const os = require("os");

// console.log("Platforma:", os.platform());     // masalan: 'linux', 'win32'
// console.log("Arxitektura:", os.arch());      // masalan: 'x64'
// console.log("CPUlar:", os.cpus().length);    // protsessor yadrolari soni
// console.log("Umumiy xotira:", os.totalmem()); // RAM hajmi (baytda)
// console.log("Bo'sh xotira:", os.freemem());   // hozirgi bo'sh RAM
// console.log("Home dir:", os.homedir());      // foydalanuvchi papkasi


// 👉 Bu modul asosan tizim monitoringi yoki resurslarni boshqaruvchi dasturlarda foydali.

// 2️⃣ Operatsion tizim (OS) tushunchasi

// Operatsion tizim (OS) — bu kompyuter apparat va dasturlarini boshqaradigan dasturiy ta’minot.
// Misollar: Windows, Linux, macOS, Android, iOS.

// Asosiy vazifalari:

// ⚙️ Resurslarni boshqarish (CPU, RAM, disk, tarmoq)

// 👤 Foydalanuvchi interfeysi ta’minlash

// 🔒 Xavfsizlik va fayllarni himoya qilish

// 🔄 Ko‘p dasturlarni bir vaqtning o‘zida ishlatish




// 🔔 events moduli nima?

// events – bu Node.js’ning ichki moduli bo‘lib, event-driven (hodisaga asoslangan) dasturlash imkonini beradi.
// Ya’ni, siz hodisani yaratib, unga listener (tinglovchi) qo‘shasiz va hodisa yuz bersa, tinglovchi ishga tushadi.

// Node.js’da ko‘plab narsalar (masalan, http server) ichida events dan foydalanadi.

// 📝 Asosiy ishlatish
// const EventEmitter = require('events');

// // Yangi EventEmitter obyekt yaratamiz
// const emitter = new EventEmitter();

// // Hodisa tinglovchi qo‘shamiz
// emitter.on('salom', (name) => {
//   console.log(`Salom, ${name}!`);
// });

// // Hodisani ishga tushiramiz
// emitter.emit('salom', 'Ali');


// const Events = require("events")

// class Logger  extends Events {
//     log(a , b) {
//     this.emit('calculate' , a + b)
//     }
// }

// const logger = new Logger()

// logger.on('calculate', data => {
//     console.log(data)
// })

// logger.log(8 , 11)
// logger.log(7 , 11)
// logger.log(6 , 11)
// logger.log(5 , 11)



// http moduli nima?

// Node.js’da http – bu web server va http mijoz (client) yaratish uchun ishlatiladigan ichki modul.
// Ya’ni, siz Node.js yordamida o‘z web serveringizni yaratishingiz mumkin – hech qanday qo‘shimcha kutubxona o‘rnatmasdan.

// const http = require('http')

// const server = http.createServer((request, response ) => {

//     console.log(request.url)

//     response.write('<h1>hello word</h1>')
//     response.end()


// })

// server.listen(3000 , () => {
//     console.log('Server has started on port: 3000')

// })


