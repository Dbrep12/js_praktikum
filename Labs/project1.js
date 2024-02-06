let pensil = 1200
let pulpen = 1400
let totalHarga = pensil + pulpen
let uang = 120000
let kembalian = uang - totalHarga

console.log("uang   :" +uang)
console.log("total harga    :" +totalHarga)

switch(true){
    case kembalian<0:
        console.log("uang kurang")
        break;
        case kembalian===0:
            console.log("uang pas")
            break;
            default:
                console.log("hasil  :" +kembalian)
                break;
            }