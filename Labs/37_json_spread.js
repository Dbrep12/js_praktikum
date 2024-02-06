// menyalin data json

let dataPerusahaan = {
    perusahaan: "PT. abal-abalan",
    lokasi:{
        kota: "kota keputus-asaan",
        negeri: "negeri 01"
    }
};

let dataUnion = {
    ...dataPerusahaan,
    nama: "union garlic"
};

let dataShentrix = {
    ...dataPerusahaan,
    nama: "shentrix"
};

console.log("nama         :" +dataShentrix.nama)
console.log("perusahaan   :" +dataShentrix.perusahaan)
console.log("kota         :" +dataShentrix.lokasi.kota)
console.log("negeri       :" +dataShentrix.lokasi.negeri)