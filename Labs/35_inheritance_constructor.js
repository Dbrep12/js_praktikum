//Contoh INHERITANCE dengan CONSTRUCTOR
class Mobil{
    constructor(jumlahRoda,jumlahMesin,namaMobil){
        this.roda = jumlahRoda;
        this.mesin = jumlahMesin;
        this.nama = namaMobil;
    }

    cetakProperties(){
        console.log("====" +this.nama + "====");
        console.log('Jumlah Roda:' +this.roda);
        console.log('Jumlah Mesin:' +this.mesin);
    }

    maju(){
    console.log(this.nama +" Maju.....");
    }
}

class MobilSport extends Mobil{
    maju(){
    console.log(this.nama +" Maju ala sport.....");
    }
}

    let ferrari=new MobilSport(6,7,"Ferrari F35 Cerias");
    ferrari.maju();
    ferrari.cetakProperties();