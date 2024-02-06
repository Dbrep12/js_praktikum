//Contoh INHERITANCE & OVERRIDING
class Mobil{
    roda=4;
    mesin=1;

    maju(){
    console.log("Maju...");
    }

    mundur(){
    console.log("Mundur..");
    }
}
class MobilSport extends Mobil{
    ngebut(){
        console.log("Ngeeeeeng....");
    }

    maju(){
        super.maju();
        console.log("Maju ala sprot...");
    }
}

let porsche = new MobilSport();
porsche.maju();
porsche.mundur();
porsche.ngebut();
console.log('roda porsche:'+porsche.roda);

let agila = new Mobil();
agila.maju();
agila.mundur();
    