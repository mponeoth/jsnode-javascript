//fonsiyonlar bir objedir obje olduklari icin bir degiskene atayabiliriz
/*
let myDizi = [1,2,3]

let diziyiKopyalaCarp = function(dizi){
    let GeciciDizi = []
    for(let i=0; i<dizi.length; i++){
        GeciciDizi[i] = dizi[i] * 2
    }
        console.log(GeciciDizi);
}

let diziyiKopyalaBol = function(dizi){
    let GeciciDizi = []
    for(let i=0; i<dizi.length; i++){
        GeciciDizi[i] = dizi[i] / 2
    }
        console.log(GeciciDizi);
}


let diziyiKopyalaIkiEkle = function(dizi){
    let GeciciDizi = []
    for(let i=0; i<dizi.length; i++){
        GeciciDizi[i] = dizi[i] + 2
    }
        console.log(GeciciDizi);

        console.log(myDizi);
        diziyiKopyalaCarp(myDizi)//(3) [2, 4, 6]    
        diziyiKopyalaBol(myDizi)//(3) [0.5, 1, 1.5]
        diziyiKopyalaIkiEkle(myDizi)//(3) [3, 4, 5]
}   
*/
//---------------- yukarida yaptigimiz kisaltilmis halidir alt ornekler


let myDizi = [1,2,3];

//first class function deniliyor bu functionlara
let SayiCarp = function(sayi){
    return sayi *2 
}

let SayiBol = function(sayi){
    return sayi /2 
}

let sayiIkiEkle = function(sayi){
    return sayi +2 
}

let diziIslemleri = function(dizi,islem){
    let GeciciDizi = []
    for(let i=0; i<dizi.length; i++){
        //GeciciDizi[i] = dizi[i] + 3;
        GeciciDizi[i] = islem(dizi[i]);
    }
       console.log(GeciciDizi) 

}

//higher order funtion:parametre olarak fonsiyon alan ve/veya
//return olarak fonksiyon donduren fonsiyonlardir 
//dizi islemleri higher order fonsiyondur
//SayiCarp SayiBol sayiIkiEkle birer callback fonksiyonlardir


diziIslemleri(myDizi,SayiCarp);//(3)[2, 4, 6]//eger SayiCarp bir fonsiyonsa islem dedigimiz bir ifadede artik bir fonsiyondur
diziIslemleri(myDizi,SayiBol);//(3) [0.5, 1, 1.5]
diziIslemleri(myDizi,sayiIkiEkle);// (3) [3, 4, 5]

console.log(myDizi);// (3) [1, 2, 3] ana dizimiz de herhangi bir bozulma olmadi ayni kaldi 


//---------------------------------------------------------------

const adimiSoyle = function(ad,soyad){
        console.log("merhaba " + ad + " soyad " + soyad)
}

adimiSoyle("muhammet","kuruoglu")   //merhaba muhammet soyad kuruoglu


//-----------------------------------------------------------------


let adimiBagir = function(ad,soyad){
      const  mesaj ="merhaba " + ad.toUpperCase() + " " + soyad.toUpperCase() 
      console.log(mesaj)
}

adimiBagir("muhammet" , "kuruoglu")//merhaba MUHAMMET KURUOGLU

//-----------------------------------------------------------------

let adimiHaykir = function(ad,soyad,callback){//(2 buraya callback parametresine getiriliyor
    const  mesaj ="merhaba " + ad.toUpperCase() + " " + soyad.toUpperCase() 
    callback(mesaj)//(1 mesaj degeri tetikleniyor 
}

adimiHaykir("muhammet" , "kuruoglu", function(msj){//burada adimi haykir parametre olarak funtion aldigi icin higher order fonsiyon oluyor 
        console.log(msj)//console.log(msj) callbakimiz oluyor (3 msj ile yazdira biliriz callback icin buradaki fonsiyonu yolladik once ad sonra soyad sonrada callback calistirilicak callback geriye bilgi ver demektir  
}); 


 
