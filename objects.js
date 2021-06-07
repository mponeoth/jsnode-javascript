//objects nedir, hatirlayalim
//objects literals


const personel ={
    ad:'muhammet',
    yas:27,
    married:false,
    sevdigimRenkelr:['yesil','bordo'],
    adres:{
        il:'ankara',
        plakaKodu:6,
    },
    bilgileriSoyle : function(){
        return `adim :${this.ad}   yasim: ${this.yas}`; //this bizim nesnemizde olanlarimizdir 
    },
    ['full-name']:'muhammet kuruoglu'
};

console.log(personel.ad); //ad i tetikle muhammet
console.log(personel.adres.plakaKodu);// 6
console.log(personel.sevdigimRenkelr[1]);//dizilerde index no ile erisiyoruz 'bordo'
console.log(personel.bilgileriSoyle()); //bilgileriSoyle() fonksiyonunu tetikle yasim 28 olucak ocakda 

console.log('---------------------------------');

console.log(personel['ad']);// muhammet
console.log(personel['adres']['plakaKodu']);// 6
console.log(personel['full-name']);// muhammet kuruoglu

personel.ad = 'hamdi'

personel.okul = 'ege universitesi' //bu sekilde nesne olusturabiliriz fakat onerilmiyor

console.log(personel.ad); //hamdi

console.log(personel.okul); //'ege universitesi'

delete personel.okul

console.log(personel);
 
//----------------------------------------------------------------


//bir objenin icinde fonsiyon varsa onlara metod denir 

//factory functions

const emre = creaetOgrenci('emre',32,false,'ege')
const hasan = creaetOgrenci('hasan',36,true,'marmara')


function creaetOgrenci(ad,soyad,yas,okul){
    return {
        adim:ad,
        soyadimiz:soyad,
        yasimiz:yas,
        okulumuz:okul,
        //method
        bilgilerimiGoster : function (){
          return  `adim : ${this.adim} soyadim : ${this.soyadimiz} yasim : ${this.yasimiz} okulum :${this.okulumuz}`
        }
    }
}

 console.log(emre.bilgilerimiGoster());
 console.log(hasan.bilgilerimiGoster());

