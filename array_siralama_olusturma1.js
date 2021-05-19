const isimler = ['emre','ali','hasan','ayse'];

const sayilar = [1,50,2,41,41,84,8,35,3];

const ogrenciler = [
        {id:12 , isim: 'emre', yas:25},
        {id:22 , isim: 'hasan', yas:15}, 
        {id:32 , isim: 'fatma', yas:55},
        {id:13 , isim: 'nuriye', yas:19},
        {id:92 , isim: 'kemal', yas:45},
        {id:15 , isim: 'mustafa', yas:75},
        {id:44 , isim: 'ceren', yas:30},

]

//arrayleri kopyalamak 

let kopya = []

for(let isim of isimler){    //biz burada degerlerin kendileriyle ugrastigimiz icin ana yapimizda degisme olmaz 
    kopya.push(isim)
}
kopya.sort()

console.log(kopya);//(4) ["ali", "ayse", "emre", "hasan"]
console.log(isimler);//(4) ["emre", "ali", "hasan", "ayse"]


//-------------- Array.from() 

kopya = Array.from(isimler) //kaynagimizda degisme olmadi cunku deger kopyalama islemi yaptik
kopya.sort()    


console.log(kopya);//(4) ["ali", "ayse", "emre", "hasan"]
console.log(isimler);//(4) ["emre", "ali", "hasan", "ayse"]




//-------------- spread operator

//kopya = [...isimler,...isimler] //(8) ["ali", "ayse", "emre", "hasan", "ali", "ayse", "emre", "hasan"]

kopya = [...isimler]; //burada isimler dizisindeki elemanlari  tek tek yollayip yepyenibir dizi olusturuyoruz

kopya.sort()

console.log(kopya);//(4) ["ali", "ayse", "emre", "hasan"]
console.log(isimler);//(4) ["emre", "ali", "hasan", "ayse"]



//--------------- burada ise atama yaptik 

kopya = isimler; //burada ise dizileri tutan adresi gondermis oluyoruz icin ana yapimizda da degisme olur 
kopya.sort()//burada kopya.sort diyor fakat ayni zamanda da isimleri de degistiriyoor cunku kopyaya adres gonderildi degerler degil o yuzden ana yapimizdada degismeler olur mese adresimiz 12.334..11 ibi bir adres var onu gonderdik kopya arreyimize


console.log(kopya);//(4) ["ali", "ayse", "emre", "hasan"]
console.log(isimler);//(4) ["ali", "ayse", "emre", "hasan"]


const isim = 'muhammet kuruoglu'

let ayrilmisHarfler = isim.split('')

ayrilmisHarfler = [...isim]

console.log(ayrilmisHarfler);//(17) ["m", "u", "h", "a", "m", "m", "e", "t", " ", "k", "u", "r", "u", "o", "g", "l", "u"]

//------------------------------

function sayilariTopla(s1,s2){
    console.log(s1+s2);

}

sayilariTopla(4,5)//9


//------------------------------


function sayilariTopla(...parametreler){
    console.log(parametreler);//parametreler artik bir dizidir 3 eleman gonderdigimizde 3 elemanli bir dizimiz oluyor 7 tane gonderdigimiz zaman 7 tane parametresi olan bir dizi oluyor

}
sayilariTopla(4,5,6)
sayilariTopla(4,5,12,5,6,8,9)

//-------------------------------

function sayilarIslemYap(...parametreler){//7 ve 10 elelmanli dizilerimizi parametrede
    let toplam = 0
    for(let s of parametreler){
    toplam = toplam + s
    }
    console.log(toplam);
}


sayilarIslemYap(3,4,5,1,4,6,7)//30
sayilarIslemYap(3,4,5,1,4,6,7,11,22,33)//96

