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

//---------------------------------------------------------------------------------------------
//constuctor functions           constuctor functions mantiken factory functions  ile ayni gorevi yapar

function Ogrenci(ad,soyad,yas,okul){
    this.adim = ad,
    this.soyadimiz = soyad,
    this.yasimiz = yas,
    this.okulumuz = okul,
    this.bilgilerimiGoster = function(){
        return  `adim : ${this.adim} soyadim : ${this.soyadimiz} yasim : ${this.yasimiz} okulum :${this.okulumuz}`;
    }

}

//new kullandigimizda 3 sey gerceklesir 
//1 yeni bir obje olusturulur //key value ler ile yeni bir obje olusturur
//2 return yazmak zorunda kalmayiz
//3 this kelimesini o an olusturulan nesneye baglar 


const muhammet = new Ogrenci('muhammet','kuruoglu',27,'munis')
const enes = new Ogrenci('enes','haci',33,'tahsin')

console.log(muhammet) //Ogrenci {adim: "muhammet", soyadimiz: "kuruoglu", yasimiz: 27, okulumuz: "munis", bilgilerimiGoster: ƒ}adim: "muhammet"bilgilerimiGoster: ƒ ()okulumuz: "munis"soyadimiz: "kuruoglu"yasimiz: 27__proto__: Object

console.log(enes.constructor)//Ogrenci {adim: "enes", soyadimiz: "haci", yasimiz: 33, okulumuz: "tahsin", bilgilerimiGoster: ƒ}

//------- detay kismi


//JSdeki tum objeler onu olusturulan constructor fonksiyonuna erisebilir
//JS ile beraber gelen built in constructor funcionlar vardir
//diziler ve fonkiyonlar aslinda objectir demistik ispat? arraylerde fonsiyonlarda kurucu(constructor) methodlara erisebiliyorsa onlarda birer objedir
 
const denemeObject = {};
console.log(denemeObject.constructor);//aslinda biz burda diyoruz seni olusturucak kurucu metodun tanimini ver diyoruz
console.log(denemeObject.constructor());//bos dondurur cunku objemizin icinde birsey yok 

 
const Dizi = [];
console.log(Dizi.constructor);
console.log(Dizi.constructor());//bos dondurur cunku nesnemizin icinde birsey yok

const fonk =  function(){ }
console.log(fonk.constructor);
console.log(fonk.constructor());//bos dondurur cunku fonk icinde birsey yok

