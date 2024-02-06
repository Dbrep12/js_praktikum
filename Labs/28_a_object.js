let user = {
    nama: 'Amir mahmud', 
    password: 17123441, 
}

let userKondisi = prompt("masukkan password")

if(userKondisi != (user.password)){
    console.log("tidak valid")
}else{
    console.log("login berhasil")
}