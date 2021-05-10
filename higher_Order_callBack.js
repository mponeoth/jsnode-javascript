let person = {
    name:'muhammet',
    date:1994,
    married:false
}

console.log(person.name);//muhammet
console.log(typeof person); //object
console.log(person instanceof Object);// true

let renkler =['yesil','mavi','turuncu']

console.log(renkler[0]);//yesil
console.log(typeof renkler);//Object
console.log(renkler instanceof Array);//true
console.log(renkler instanceof Object);//true


let Fonsiyon = function(){
    console.log('merhaba nasilsinsiniz');
}

Fonsiyon() //merhaba nasilsinsiniz

// assagidaki ornekde ana sayimiz degismiyor // fonsiyonlarda birer objedir ondan dolayi ben onlari bir degiskene atayabiliryorum

let sayi = 5 //ana sayimiz

const fonk = function(sayi){
    sayi = sayi * 2;
    return sayi
}
console.log(fonk(sayi));//10 //ana sayimiz degisti 
console.log(sayi);//5 ana sayimiz ayni kaldi


// burada gostermek istedigimiz ise ana sayimiz degisiyor dizilerde objelerde veya referans tipindeki verilerde degismeler olur

let myDizi = [1 ,2, 3] //  biz fonsiyona 1 2 3 degil dizinin bellek adresini yolladik o yuzdeb guncellendi yerine 2 4 6 geldi

const diziElemanlariniIkiIleCarp = function(dizi){
     for(let i = 0; i<dizi.length; i++){
        dizi[i] = dizi[i] *2
    }
    return dizi;

 }
//console.log da basina yazi yazarsak string olarak algilar ve bize [2,4,6] degilde 2, 4 ,6  seklinde doner 
console.log(diziElemanlariniIkiIleCarp(myDizi));//3[2,4,6] console.log("kopyasini aldik " + diziElemanlariniIkiIleCarp(myDizi));//bize 2 , 4 , 6 degerini doner
console.log( myDizi); //3[2,4,6]   //kaynak dizim degisti burada 


// ************************************************   assagidaki ornegimizde ise ana sayimizi degistirmemek icin fonksiyon icine bir arrey olusturup ana sayimizin degerlerini olusturdugumuz arreye(geciciDizi) ye vermeliyiz myDizi [2,4,6] kaldi

const diziElemanlariniIkiIleCarp1 = function(dizi){
    let geciciDizi = [];    //eger iceride bir degisken olusturarak mydiziye disaridan deger alip verirsek myDizi nin kaynagina dokunmayiz 
     for(let i = 0; i<dizi.length; i++){
        geciciDizi[i] = dizi[i] *2 //2,4,6 verdizi dizi[2] dizi[4] dizi[6] 
    }
    return geciciDizi;
 }

console.log('kopyasini aldik ' + diziElemanlariniIkiIleCarp1(myDizi)); //4,8,12  //sadece kopya dizim degisti
console.log('kaynak dizimiz ' + myDizi);  //2,4,6 // kaynak dizim degismedi


