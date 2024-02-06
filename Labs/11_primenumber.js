for(let i = 0; i < 20; i++){
    let pembagian = 0;
    for(let x = 1; x <= i; x++){
        if(i % x == 0)
        pembagian++
    }
    if(pembagian == 2){
        console.log('angka prima  ' +i)
    }
}