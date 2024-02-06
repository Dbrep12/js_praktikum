// callback dengan parameter

function kali(a,b){
    console.log(a+'x'+b+' = '+(a*b));
    }
bagi = (a,b) => {
    console.log(a+':'+b+' = '+(a/b));
}
function penghitung(operasi,bil1,bil2){
    operasi(bil1,bil2);
}
penghitung(kali,23,9);
penghitung(bagi,15,3);

penghitung(function(a,b){
console.log(a+'+'+b+' = '+(a+b));
},15,6);
penghitung((a,b)=>{
console.log(a+'-'+b+' = '+(a-b));
},17,10);