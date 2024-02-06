class menuItem{
    constructor(nama, harga){
        this.nama = nama,
        this.harga = harga
    }
}

class Menu{
    constructor(){
        this.items = []
    }
    addItem(menu){
        this.items = [...this.items, menu]
    }
    findItem(namaItem){
        return this.items.find(item => item.nama === namaItem)
    }
    displayAllMenu(){
        console.log("all Menu");
        this.items.map(item => console.log(`- ${item.nama} - ${item.harga}`))
        console.log("");
    }
    menuLength(){
        console.log(`jumlah menu : ${this.items.length}`);
    }
}

const menu = new Menu()

const ayam = new menuItem("ayam goreng", 12000)
const nasiGoreng = new menuItem("nasi goreng", 14000)
const bakso = new menuItem("bakso", 10000)

menu.addItem(ayam)
menu.addItem(nasiGoreng)
menu.addItem(bakso)
menu.menuLength()
menu.displayAllMenu()

const cariNamaItem = "bakso"
const itemKetemu = menu.findItem(cariNamaItem);

if(itemKetemu){
    console.log(`Makanan : ${itemKetemu.nama}`);
    console.log(`Harga : ${itemKetemu.harga}`);
}else{
    console.log("not found");
}