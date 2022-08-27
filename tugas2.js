// tugas nomor 1
function dataDiri() {
    let name = "Reza Fazan Akbar"
    let email = "rezafauzanakbar3@gmail.com"
    let address = "Garut"
    let isMerried = true
    const hobbies = ["Berenang", "Travelling", "Belajar"]
    console.log(name + " " + email + " " + address + " " + isMerried + " " + hobbies)
}
dataDiri();

function ganjilGenap() {
    const printGenapGajil = 5;
    for (var i = 1; i <= printGenapGajil; i++) {
        if (i % 2 == 0) {
            console.log(i + " merupakan bilangan genap")
        } else
            console.log(i + " merupakan bilangan ganjil")
    }
}
ganjilGenap();

function segitiga() {
    const printSegitiga = 5;
    let hasil = '';
    for (let i = 1; i <= printSegitiga; i++) {
        for (let j = 1; j <= i; j++) {
            hasil += i;
        }
        hasil += "\n"
    }
    console.log(hasil);
}
segitiga();

// tugas nomor 2
// push
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi", "Lemon", "Pineapple"); // push adalah menambahkan elemen pada array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//filter
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult); // filter adalah memfilter element pada array yang sesuai kondisi pada function

function checkAdult(age) {
    return age >= 18;
}
console.log(result);

//pop
const fruits2 = ["Banana", "Orange", "Apple", "Manggo"];
fruits2.pop(); // pop adalah menghapus elemen terakhir pada array
for (let i = 0; i < fruits2.length; i++) {
    console.log(fruits2[i]);
}

//reduce
//reduce pada array
const arrAngka = [1, 2, 3, 4, 5];
const result2 = arrAngka.reduce((nilaiSebelumnya, nilaiSaatIni) => {
    return nilaiSebelumnya + nilaiSaatIni; // reduce adalah method array di JavaScript yang mengeksekusi fungsi callback pada setiap elemen array, nilai hasil kalkulasi pada elemen sebelumnya digunakan untuk melakukan kalkulasi pada elemen berikutnya. Setelah menjalankan fungsi callback untuk semua elemen array, method ini menghasilkan nilai tunggal.
});
console.log(result2);
/*
pengulangan callback     NilaiSebelumnya    NilaiSaatIni   NilaiKembalian
pertama                         1                 2                3
kedua                           3                 3                6
ketiga                          6                 4                10
keempat                         10                5                15                 
*/

//reduce pada object
const add = {
    a: 1,
    b: 2,
    c: 3
}
const total = Object.values(add).reduce((t, n) => t + n)
console.log(total)
/*
pengulangan callback     NilaiSebelumnya    NilaiSaatIni   NilaiKembalian
pertama                         1                 2                3
kedua                           3                 3                6
*/

// tugas nomor 3 ((data pada object)
let data = {
    id: 1,
    name: "budi pratama",
    gender: "female",
    height: "165 cm",
    educational:
        [
            {
                priode: "2013-2016",
                school: "Kalam kudu high school",
                major: "-"
            }
        ],
    phone: {
        primary: "0812312323",
        secondary: "0082342343"
    }
}

let newEducation = {
    priode: "2016-2020",
    school: "State University Jakarta",
    major: "Accountancy"
}

// a. ubah data pada object menggunakan spread operator
const dataCopy = { ...data }
dataCopy.name = "Reza Fauzan Akbar"
dataCopy.phone = "085155010779"
console.log(dataCopy)

// b. ambil data pada object
// tanpa menggunakan destructuring
const primary1 = data.phone.primary;
const secondary1 = data.phone.secondary;
console.log("Ini nomor utama : " + primary1)
console.log("Ini nomor utama : " + secondary1)

// bisa juga seperti ini
const primary2 = data.phone;
const secondary2 = data.phone;
console.log("Ini nomor utama : " + primary2.primary)
console.log("Ini nomor utama : " + secondary2.secondary)

// menggunakan destructuring
const { phone: { primary, secondary } } = data;
console.log(primary, secondary)

// c. menggabungkan data menggunakan spread operator
let afterData = {
    id: 1,
    name: "budi pratama",
    gender: "female",
    height: "165 cm",
    educational:
        [
            {
                priode: "2013-2016",
                school: "Kalam kudu high school",
                major: "-"
            },
            {
                ...newEducation
            },
        ],
    phone: {
        primary: "0812312323",
        secondary: "0082342343"
    }
}

console.log(afterData)

// tugas nomor 4
function discount(jumlahMakanan, hargaMakanan) {
    let jumlah = jumlahMakanan * hargaMakanan
    if (jumlah >= 60000) {
        potongHarga = (jumlah * 35) / 100
        if (potongHarga > 50000) {
            subTotal = jumlah - 50000
            console.log("Total Harga : " + jumlah + "\n" + "Potongan : " + potongHarga + "\n" + "Sub Total : " + subTotal)
        } else if (potongHarga < 50000) {
            subTotal = jumlah - potongHarga
            console.log("Total Harga : " + jumlah + "\n" + "Potongan : " + potongHarga + "\n" + "Sub Total : " + subTotal)
        }
    } else if (jumlah < 60000) {
        potongHarga = 0;
        subTotal = jumlah;
        console.log("Total Harga : " + jumlah + "\n" + "Potongan : " + potongHarga + "\n" + "Sub Total : " + subTotal)
    }
}
discount(4, 60000)