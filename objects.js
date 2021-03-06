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

console.log(muhammet) //Ogrenci??{adim: "muhammet", soyadimiz: "kuruoglu", yasimiz: 27, okulumuz: "munis", bilgilerimiGoster: ??}adim: "muhammet"bilgilerimiGoster: ?? ()okulumuz: "munis"soyadimiz: "kuruoglu"yasimiz: 27__proto__: Object

console.log(enes.constructor)//Ogrenci??{adim: "enes", soyadimiz: "haci", yasimiz: 33, okulumuz: "tahsin", bilgilerimiGoster: ??}

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

// -------------  Prototype Kavrami      --------------------
//JS prototype miras modelini kullanir
//Her constructor function/class ayni kurucu fonksiyonla olusturulan instancelarin
//ortak olarak kullanabilecekleri prototype isimli propertye sahiptir. Prototype 
//property de bir nesne dondurur

Ogrenci.prototype.okulumuz = "zuftusenyuva"
Ogrenci.prototype.bilgilerimiGoster = function(){
    return  `adim : ${this.adim} soyadim : ${this.soyadimiz} yasim : ${this.yasimiz} okulum :${this.okulumuz}`;
}

function Ogrenci(ad,soyad,yas){
    this.adim = ad,
    this.soyadimiz = soyad,
    this.yasimiz = yas
    
}
const muhammet = new Ogrenci('muhammet','kuruoglu',27)
const enes = new Ogrenci('enes','haci',33)
//-- Ogrenci constructor ini kullanan her turlu instance i  ayse ali fatma muhammet enes gibi mutlaka bu degerlere(okulumuz,bilgilerimiGoster) sahiptir cunku prototype a atadik  

console.log(muhammet.bilgilerimiGoster())  //adim : muhammet soyadim : kuruoglu yasim : 27 okulum :zuftusenyuva
console.log(enes.bilgilerimiGoster());//adim : enes soyadim : haci yasim : 33 okulum :zuftusenyuva


//-----detayli kismi 

//---- prototype in toString li kullanimi
Ogrenci.prototype.toString = function(){ //Ogrenci yazdirilicak11  yolu stringe atiyoruz 
    return "Ogrenci stringden yazdirilicak "
}
console.log(muhammet.toString());//1)yolu Ogrenci stringden yazdirilicak

console.log("***" + muhammet); //2)yolu ***Ogrenci stringden yazdirilicak
//----

console.log(muhammet);//Ogrenci??{adim: "muhammet", soyadimiz: "kuruoglu", yasimiz: 27}

console.log(enes.constructor.prototype) //bir nesne dondurur//{okulumuz: "zuftusenyuva", bilgilerimiGoster: ??, constructor: ??}

//--------------------

const dizi= [1,2,3]
const dizi2= [11,22,33]
 console.log(dizi.constructor.prototype);
dizi.push(1)



//normalde objelerde nokta "." deyip deger atamasi yapiyoruz yada bu degerleri okuyabiliyoruz // instanceof operat??r?? bir objenin belirli bir s??n??fa ait olup olmad??????n?? kontrol eder. 


//---------- Wrapper-Sarmalayici Objeler

const isim = 'emre' //primitive dir 

console.log(typeof isim);//string
console.log(isim instanceof Object);//false dedi cunku primitive tip


console.log('*************');

console.log(isim.toUpperCase());//'EMRE' bundan sonra objemi oldu cunku objelere ozgu . ifadesini kullanip birseyler yaptiriyoruz
console.log(isim instanceof Object);//false

console.log(isim.constructor.prototype);//eger biz bir primitive('emre') yapiya object gibi davranirsak o String diye bir objenin icine alir ondan dolayi hem .toUppercase() hem .charAt() kullandik  String??{"", constructor: ??, anchor: ??, big: ??, blink: ??,?????}
console.log(isim.charAt(0)); //ilk harfini al 


//sonuc olarak biz eger primitive yapiya objeymis gibi davranirsak otomatik olarak bunu alir kullandirir ve sonra geri cikarir  peki biz bunu kalici hale getirmek istersek ne yapmaliyiz

const renk = new String('kirmizi')
console.log(typeof renk);// object

const sayilar = new Number(1994)
console.log(typeof sayilar);// object
sayilar.rakam = 2005 //tipki object gibi deger verebiliyoruz
console.log(sayilar.rakam); //2005 

const sayi = 5
console.log(typeof sayi); //number yukaridakine object dedi buna number dedi
sayi.ssss = 12  //object e cevirmedigimiz icin atama yapilamaz 
console.log(sayi.ssss); //undefined

const sehiler = new Array('ankara' , 'mersin' , 'kastamonu')
console.log(typeof sehiler); //object
console.log(sehiler); //(3)??["ankara", "mersin", "kastamonu"]

