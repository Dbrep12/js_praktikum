function CetakBiasa(nama, alamat){
    console.log("------Function biasa--------")
    console.log("Nama :" +nama)
    console.log("Alamat :" +alamat)
}
CetakBiasa('agus', 'pamulang')


cetakArrow = (nama, kelas ,alamat) =>{
    console.log("------Arrow Function--------")
    console.log("Nama :" +nama)
    console.log("Alamat :" +alamat)
    console.log("Kelas :" +kelas)
}
cetakArrow('garlic', 'pamulang')

let namanya = 'union';
let alamatnya = 'Jl. hati-hati banyak anak'
let kelasnya = '12 aja'
cetakArrow(namanya, alamatnya, kelasnya);