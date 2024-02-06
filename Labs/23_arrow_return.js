//dengan parameter lebih dari satu
function kaliBiasa (a, b){
    return(a * b);
};

kaliArrow = (a, b) =>{
    return(a * b);
};

// arrow function secara implisit
let kaliArrowLagi = (a, b) => (a * b)

let hasil1 = kaliBiasa(12, 3)
let hasil2 = kaliArrow(12, 5)
let hasil3 = kaliArrowLagi(12, 9)


console.log('hasil kali biasa  :' +hasil1)
console.log('hasil kali arrow  :' +hasil2)
console.log('hasil kali arrow lagi :' +hasil3)