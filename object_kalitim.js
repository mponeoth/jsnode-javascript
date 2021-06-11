//----------- object kalitim(inheritance) //ES6 dan oncesi

//person kurucu fonksiyon 


function person(ad,soyad){

    this.ad =ad,
    this.soyad =soyad

}

person.prototype.selamVer = function(){
        return ` adimiz ${this.ad} soyadimiz ${this.soyad} `
}

const emre = new person('ali','veli') //buradaki kurucu fonksiyondaki herseye emre degiskenimiz ulasabilir 
const hasan = new person('hasan','yilmaz') //buradaki kurucu fonksiyondaki herseye emre degiskenimiz ulasabilir 

console.log(emre.selamVer());
console.log(hasan.selamVer());


function Ogrenci(ad,soyad,yas,sinif){
    person.call(this,ad,soyad) //person kurucu fonk gidip bu iki degerimizi cagirdi
    this.yas = yas,
    this.sinif = sinif

}
//Object.create yepyeni bir nesne olusturur icine aldigi yapiyi alir diger nesneye atiyor assagidaki ornekte gosterildigi gibi 
Ogrenci.prototype = Object.create(person.prototype) //person da tanimladigimiz butun prototypelar ogrenci icindede tanimlanmis olur  personda sadec ad soyad tanimladigmiz icin ogrencidede ad soyad gozukur sadece
Ogrenci.prototype.constructor = Ogrenci

//fakat tekrardan guncelleyebiliriz assagidaki ornekteki gibi

Ogrenci.prototype.selamVer = function(){
    return `ad ${this.ad}  soyad :${this.soyad} yasimiz ${this.yas} sinifimiz ${this.sinif}. `
}


const halil = new Ogrenci('halil','katircioglu',24 ,9)

console.log(halil.selamVer());


//---------------------- olusturdgumuz fonksiyona Array prototype ini gonderdik 


// olusturugumuzz fonksiyona Array ozelliklerini atadik simdi fonsiyonumuzda array in ozelliklerini kullanabiliriz 
 function myArray(){

 }

 myArray.prototype = Object.create(Array.prototype) //Arrayin ozellilerini yukluyoruz fonksiyonumuza

 const olusturulanArray = new myArray()

 olusturulanArray.push(1212)
 olusturulanArray.push('aka')
 olusturulanArray.push(22)
 olusturulanArray.push(55)

console.log(olusturulanArray);

//-------------------

const dizi =[1,2,3]
const yeniDizi = dizi.map(function(sayi){
        return sayi +2
})

console.log(yeniDizi);//(3) [3, 4, 5]

//-------------------

Array.prototype.kendiMapYapim = function(islem){
    const  yeniDizi = [];
    for(let i = 0; i<this.length; i++){ //this o an bu fonk. cagiracak olan this 
        yeniDizi.push(islem(this[i], i));
    }
    return yeniDizi
}

    const dizi =[1,2,3]
    const yeniDizi = dizi.map(function(sayi){
            return sayi +2
    })

    const myNewDizi = dizi.kendiMapYapim(function (sayi){
        return sayi + 5;
    })

    console.log(yeniDizi);
    console.log(myNewDizi);