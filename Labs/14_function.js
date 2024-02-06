// dengan nilai default
function CetakDataSiswa(nis="21", nama="daniel", alamat="pamulang"){
    console.log("-----Data Siswa--------")
    console.log("Nis :" +nis)
    console.log("Nama :" +nama)
    console.log("Alamat :" +alamat)
}

CetakDataSiswa();
CetakDataSiswa('201')
CetakDataSiswa('2211', 'yogi');
CetakDataSiswa('2212', 'daniel', 'daritadi')