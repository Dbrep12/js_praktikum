function kaliBiasa(x,y){
    console.log("hasil kali biasa   :" + (x * y))
}

const kaliArrow = (x,y) =>{
    console.log("hasil kali arrow   :" + (x * y))
}

function contohCallBack(operasi, a,b){
    operasi(a,b)
}

contohCallBack(kaliBiasa, 10, 20)
contohCallBack(kaliArrow, 45, 23)
contohCallBack(
    function(a,b){
        console.log("hasil kali anonim  :" + (a * b))
    }, 10,2
)
contohCallBack(
    
    (a,b)=>{
        console.log("hasil kali anonim  :" + (a * b))
    }, 10,2
)