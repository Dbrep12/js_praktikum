function cetakBiasa(nama){
    console.log('nama anda  : ' + nama + ' , dicetak dari function biasa')
}

cetakArrowSatu = (nama) =>{
    console.log("nama anda : " + nama + " , dicetak dari arrow function")
}

cetakArrowDua = nama => {console.log("nama anda : " + nama + " ,dicetak dari arrow function")}


cetakBiasa('agus');
cetakArrowSatu('garlic')
cetakArrowDua('union')