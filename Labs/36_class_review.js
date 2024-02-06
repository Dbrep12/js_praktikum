class rekening{
    constructor (namanya, saldonya){
        this.name = namanya;
        this.saldo = saldonya;
    }
}

let amir =  new rekening("amir", 2000)
let joko =  new rekening("joko", 12000)

console.log("saldo amir " +amir.saldo)
console.log("saldo joko " +joko.saldo)