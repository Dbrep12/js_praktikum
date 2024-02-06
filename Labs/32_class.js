class Mobil{
    roda=4;
    mesin=1;

    //methods
    maju(){
        console.log("Maju...");
    }

    mundur(){
    console.log("Mundur..");
    }
}

//avanza disebut sebagi "object" dari class "Mobil"
let avanza=new Mobil();
avanza.maju();
avanza.mundur();
console.log('Jumlah Roda:'+avanza.roda);
console.log('Jumlah Mesin:'+avanza.mesin);

let fortuner=new Mobil();
console.log('Jumlah Roda:'+fortuner.roda);
console.log('Jumlah Mesin:'+fortuner.mesin);
