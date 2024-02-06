//demo tanpa parameter

function biasaOne(){
    console.log("ini adalah function biasa")
}
arrowOne=()=>{
    console.log('Ini Adalah function Arrow');
    }
function callBackBiasa(operasi){
    console.log('===call dari callBackBiasa===');
    operasi();
    }

callBackArrow=(operasi)=>{
    console.log('===call dari callBackArrow===');
    operasi();
    }
    
callBackBiasa(biasaOne);
callBackBiasa(arrowOne);
callBackBiasa(function(){
    console.log('Ini Adalah function Biasa Anonymous');
        });

callBackBiasa(()=>{
    console.log('Ini Adalah function Arrow Anonymous');
        });
        callBackArrow(biasaOne);