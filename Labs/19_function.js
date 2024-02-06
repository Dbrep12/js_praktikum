function Cetak(data){
    console.log(data)
}
function Kali(a, b){
    return(a * b)
}
function Perkalian(c, d){
    let hasil = Kali(c, d);
    Cetak(c + 'x' + d + '=' + hasil)
}
Perkalian(16, 8);