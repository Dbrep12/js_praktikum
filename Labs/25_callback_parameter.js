//contoh callback function dengan parameter

function Kali (a,b){
    console.log("hasil perkalian    : " + a + " dengan " + b + " = " + (a * b))
}
function Tambah (a,b){
    console.log("hasil pertambahan  : " + a + " dengan " + b + " = " + (a + b))
}
function Pengurangan (a,b){
    console.log("hasil pengurangan  : " + a + " dengan " + b + " = " + (a - b))
}
function Pembagian (a,b){
    console.log("hasil pembagian    : " + a + " dengan " + b + " = " + (a / b))
}

function Kalkulator(operasi, a, b){
    operasi(a, b);
}

function sambungKata(a,b){
    console.log(a+ " " + b)
}

Kalkulator(Kali, 8,8);
Kalkulator(Tambah, 8,8);
Kalkulator(Pengurangan, 8,8);
Kalkulator(Pembagian, 8,10);
Kalkulator(sambungKata, "Daniel" , "Sihombing")