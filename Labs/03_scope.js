// cara 1 penulisan variable angka di luar scope
angka = 10;

{
    angka = 11;
}
console.log('Angka ini ada di luar SCOPE:   '+angka);
console.log('Angka ini ada di luar SCOPE:   '+angka);

//cara 2 penulisan variable angka di luar scope
var angkaLagi = 12;

{
    var angkaLagi = 13;
    console.log('Angka ini ada di luar SCOPE:   '+angkaLagi);
}
console.log('Angka ini ada di luar SCOPE:   '+angkaLagi);

//cara 3 penulisan variable angka di luar scope
let angkaLainJuga = 14;
{
    let angkaLainJuga = 15;
    console.log('Angka ini ada di luar SCOPE:   '+angkaLainJuga)
}
console.log('Angka ini ada di luar SCOPE:   '+angkaLainJuga)
