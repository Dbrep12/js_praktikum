//contoh callback function tanpa parameter

function contohCallBack(x){
    console.log("======DEMO CALLBACK=====")
    x();
}

function F1(){
    console.log('ini f1...')
}

function F2(){
    console.log('ini f2...')
}

function F3(){
    console.log('hai...')
}

function F4(){
    console.log('ini f4...')
}


contohCallBack(F1)
contohCallBack(F2)
contohCallBack(F3)
contohCallBack(F4)