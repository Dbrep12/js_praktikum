//Contoh membuat CLASS dengan CONSTRUCTOR
class Mobil
{
    constructor(jumlahRoda,jumlahMesin,namaMobil){
        this.roda=jumlahRoda;
        this.mesin=jumlahMesin;
        this.nama=namaMobil;
    }

    cetakProperties(){
        console.log("===="+this.nama+"====");
        console.log('Jumlah Roda:'+this.roda);
        console.log('Jumlah Mesin:'+this.mesin);
    }

    maju(){
        console.log(this.nama+" Maju.....");
    }
}

let avanza = new Mobil(4,1,"Apanjah Peloz");
avanza.cetakProperties();
avanza.maju();

let portuner = new Mobil(4,2,"Portuner");
portuner.cetakProperties();
portuner.maju();