// Aslinda iki tip veri turu vardir 
// primitive  ve Reference Veri turleri
//primitive:verimiz bellekte tutuluyor bir adreste yada pointerda tutulmuyor degerin kendisi degiskenin icinde tutulur
// Primitive tipler:Number , String ,  Boolean, undefined , null ,Symbol
// Reference tipler:Object

let sayi = 50
console.log(sayi)
console.log(typeof sayi)// numberdir

let isim ="muhammet"
let soyisim="kuruoglu"
let tamAd=isim + soyisim;

console.log(tamAd)
console.log(typeof tamAd)//stringdir

let cumle="muhammet in bilgisayari"
let cumle2="muhammetin omen bilgisayari"
console.log(cumle + ' ' + cumle2)

let tamIsim=`${cumle} ${cumle2}` //aradaki bosluga ne kadar bosluk koyarsak o kadar degisicektir + koymamiza gerek yok otomatik bosluk alir

console.log('literalcumle kurma ' + tamIsim)
console.log(`literal cumle iki olusturuldu ${tamIsim}` )

let asalSayimi = true;//boolean
console.log('asal sayimi ' + asalSayimi + 'verimizin turu ' + typeof asalSayimi  )
console.log(`asal sayimi ${asalSayimi} veri turumuz ${typeof asalSayimi}`)

let renk;
console.log(typeof renk)//undefined 

let yas = null;
console.log('deger: '+ yas + ' veriTipi ' + typeof yas );//deger null(bos degerdir) veri tipi object  null primitivedir object degildir 