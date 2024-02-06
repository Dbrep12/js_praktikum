// contoh callback function menggunakan anonymous function tanpa parameter

function Halo(){
    console.log("halo ini function biasa")
}

const HaloArrow = ()=>{
    console.log("halo ini function arrow")
}

function CallBackFunction(operasi){
    operasi()
}
CallBackFunction(Halo);
CallBackFunction(HaloArrow);
CallBackFunction(
    function(){
            console.log("ini anonim")
        }
)

CallBackFunction(
    ()=> {
        console.log("halo ini arrow anonim")
    }
)