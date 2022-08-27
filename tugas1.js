// tugas nomor 1
let name = "Reza Fazan Akbar"
let email = "rezafauzanakbar3@gmail.com"
let address = "Garut"
let isMerried = true
const hobbies = ["Berenang", "Travelling", "Belajar"]

// tugas nomor 2
const printGenapGajil = 5;
for (var i = 1; i <= printGenapGajil; i++) {
    if (i % 2 == 0) {
        console.log(i + " merupakan bilangan genap")
    } else
        console.log(i + " merupakan bilangan ganjil")
}

// tugas nomor 3
const printSegitiga = 5;
let hasil = '';
for (let i = 1; i <= printSegitiga; i++) {
    for (let j = 1; j <= i; j++) {
        hasil += i;
    }
    hasil += "\n"
}
console.log(hasil);