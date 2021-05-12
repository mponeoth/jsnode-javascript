let sayilar = [1,2,3,4,5,6]

//****************************************************kendi forEachfonksiyonumuz

diziyiYazdir(sayilar,function(deger,index){
    console.log("deger :" + deger + "index :" + index);
})

    function diziyiYazdir(dizi,callback){

        for(let i =0;i<dizi.length; i++){
            callback(dizi[i], i)    //burada amac callback e gonder 
        }

    }

//------------------------------------------------------------------------------------
//--1.yol forEachde forEach i kullanmak icin bize dizi lazim ve sayilar bir dizidir forEach higher order iken functionumuz ise callbaktir alt ornegimizde

sayilar.forEach(function(deger , index){//iki parametre geri donderiyor biri deger digeri index
    console.log(deger ,index);
}); //123456  012345

console.log('*******************');

//--2.yolu forEach de aslinda yukardakinin aynisini yaptik

sayilar.forEach(ikiparametrealanfunction);

 function ikiparametrealanfunction(deger , index){
    console.log(deger , index);//123456 012345
} 

//assagidakilerlede dizi cagirabiliriz

console.log("************************************************************************");

let sayilar = [1,2,3,4,5,6]


for(let i =0; i<sayilar.length; i++){
    console.log(sayilar[i]);//1 2 3 4 5 6
}

console.log("*************************************************************************");
let sayilar = [1,2,3,4,5,6]


for(let item of sayilar){
    console.log(item);//1 2 3 4 5 6
}
