//array destructuring

let emre = ['emre','altunbilek']
let ad = emre[0]
let soyad =emre[1]

console.log(ad); //emre
console.log(soyad);//altunbilek

const [first,last] = emre //herzaman sirasiyla eleman atanir 0. 1. 

console.log(first ,last); //emre altunbilek

//----------------

const renkler = ['mavi','yesil','kirmizi','turuncu','sari'] 
const [r1,r2, ,r3] = renkler ////herzaman sirasina gore elemanlar atanir , , ile bos biraktigimizda o elemani alma anlamindadir
console.log(r1,r2,r3);//mavi yesil turuncu

const [c1,c2, ...geriKalanRenkler] =renkler  //uc  nokta ile geri kalan renkleri aldirttik
console.log(c1,c2,geriKalanRenkler); //mavi yesil Array(3)0: "kirmizi"1: "turuncu"2: "sari"length: 3



const [t1,t2,t3,t4,t5] = ['besiktas','galatasara','trabzon']
console.log(t1,t2,t3,t4,t5); //besiktas galatasara trabzon undefined undefined


//default varsayilan deger atamasi yaptik 
const [t1,t2,t3,t4="bilinmiyor",t5="tanimlanmadi"] = ['besiktas','galatasara','trabzon'] //fakat buraya herhnagi bir takim girseydik burayi gosterirdi default yerine
console.log(t1,t2,t3,t4,t5); 


//object destructuring

let ayarlar = {
    baslik:'JS HARIKA',
    genislik:'300px',
    yukseklik:'300px'
}

console.log(ayarlar.genislik);//300px

const baslik = ayarlar.baslik

console.log(ayarlar.genislik,baslik); //300px JS HARIKA


const {baslik,genislik,yukseklik} = ayarlar //object(nesne) atama yaptigimiz zaman key degerlerini tam yazmaliyiz 

console.log(baslik,genislik,yukseklik);//JS HARIKA 300px 300px

const {baslik:b,genislik:g,yukseklik:y} = ayarlar //object(nesne) atama yaptigimiz zaman key degerlerini tam yazmaliyiz  yada key degerlerini atayarakda cikti alabiliriz

console.log(b,g,y);//JS HARIKA 300px 300px



//--------- nesnelerdede default atamasi yapabiliriz 


let ayarlar = {
   // baslik:'JS HARIKA',
    genislik:'300px',
    yukseklik:'300px'
}

const {baslik="varsayilan Baslik"} = ayarlar

console.log(baslik);


//---- EC6 once bu sekilde cagiriyorduk simdi buna gerek kalmadi


const il = "istanbul"
const ilce = "k.cekmece"

let sehir ={
    il:il,
    ilce:ilce
}
console.log(il,ilce);

//--- EC6 ile daha kisa ve daha kolay bir sekilde cagiriyoruz 

const il = "istanbul"
const ilce = "k.cekmece"

let sehirler = { il,ilce}

console.log(sehirler);



//-- person nesnesinden adi log ile gosterdik  

const person ={ 
    ad:'muhammet',
    soyad:'kuruoglu',
    yas:27,
    il:'istanbul',
    ilce:'k.cekmece'

}

const {ad} = person 

console.log(ad);


//--- fakat biz istersek spread operatorunu kullanarak yas haric hepsini ekranda gosterebiliriz 

const person ={
    ad:'muhammet',
    soyad:'kuruoglu',
    yas:27,
    il:'istanbul',
    ilce:'k.cekmece'

}

const {yas , ...gerikalanNesneler} = person 

console.log(yas,gerikalanNesneler);

//---------- gercek bir projede nasil nesnelerimize ve arraylerimize ulasiriz goruyoruz 

let kisi = {
    ad:{
        firstName :"muhammet",
        lastName:"kuruoglu"
    },
    sevdigiRenkler :["sari","kirmizi"],
    yas:27
}

//console.log(kisi.ad.firstName); muhammet

//console.log(kisi.sevdigiRenkler[0]); //sari

const {ad:{firstName , lastName}, sevdigiRenkler:[renk1,renk2],yas} = kisi

console.log(firstName , lastName , renk1 , renk2, yas);


