// contoh mengambil keputusan

let nilai = "A";
let predikat = "";

console.log("predikat anda  :" +nilai)

switch(nilai){
    case "A":
        console.log("Sangat baik")
        break;
    case "B":
        console.log("Baik")
        break;
    case "C":
        console.log("Cukup baik")
        break;
    case "D":
        console.log("Kurang baik")
        break;
    case "E":
        console.log("Gagal")
        break;
        default:
            console.log("tidak ada")
}