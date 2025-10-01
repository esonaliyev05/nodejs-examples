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


