//primitive 

let yas = 32;
let yeniYas = yas;

yas = 40;

let isim = 'emre'
let yeniIsim =  isim;
isim = 'hasan'

console.log(yas ,yeniYas);//40 32
console.log(isim,yeniIsim);//hasan emre 

//referans tipli array ,object 
//dizilerle degiskenler arasindaki fark diziler ve objeler adresi tutarlar yani icinde kirmizi yesil gibi degerleri yok
let renkler = ['kirmizi','yesil']   
let yeniRenkler = renkler;  //biz burada degeleri degil adres bilgisini degiskene gondermis oluyoruz

renkler = ['turuncu','ela']
renkler.push('mavi') //arreylere push ile atama yapilir

console.log(renkler , yeniRenkler);//3 [turuncu,ela,mavi]  2 [kirmizi,yesil] 


//nesnelerdede aynidir dizilerde oldugu gibi cunku degiskeni degil adresi tutttugu icin 

let ogrenci = {//ogrencinin icindeki degeri degistirdim ikisinin yas ve ismi aynidir
    isim:'emre',
    yas:32
}
let yeniOgrenci = ogrenci;

ogrenci.yas = 40;

console.log(ogrenci , yeniOgrenci);//isim:emre , yas:40  isim:emre , yas:40 