Soru 8:
Aşağıda tanımı verilen f(x,y) fonksiyonunu klavyeden girilen x ve y değerleri için hesaplayınız.
x>0, y<0 ise f(x,y) = 4x+2y+4
x>0, y=0 ise f(x,y) = 2x-y+3
x<0, y>0 ise f(x,y) = 3x+4y+3*/

let x = parseInt(prompt("x sayisini giriniz","x"))
let y = parseInt(prompt("y sayisini giriniz","y"))

islemSonucu = 0;
if(x>0 && y<0){
    islemSonucu = 4 * x + 2 * y + 4;
}
else if(x>0 && y==0){
    islemSonucu = 2 * x - y + 3;
}
else if(x<0 && y>0){
    islemSonucu = 3 * x + 4 * y + 3;
}
console.log(`girilen x degeri:${x}, y degeri:${y} islem sonucu:${islemSonucu}`);

------------------------------------------------------------------------------------
Soru 9:  100lük sistemde verilen notları harfli sistemde gösteren bir uygulama yazınız.
 
    let yuzlukSistemdeNot = parseInt(prompt("yuzluk sistemde verilen not","yuzluk"))

    let notSiniri = parseInt(yuzlukSistemdeNot/10)
    console.log(`yuzluk sistemdekiNot ${yuzlukSistemdeNot} notSiniri ${notSiniri}`);

    /*
    if(yuzlukSistemdeNot == 100){   //eger bunu yazmazsak case10 unu yazmak zorundayiz
        notSiniri = 9;
    }*/

     switch(notSiniri){
         case 10:console.log("notunuz AA");break
         case 9:console.log("Notunuz AA");break
         case 8:console.log("Notunuz BA");break
         case 7:console.log("Notunuz BB");break
         case 6:console.log("Notunuz CB");break
         case 5:console.log("Notunuz CC");break
         default: console.log("Notunuz CC den dusuk");
     }
-----------------------------------------------------------------------------------------
Soru 10: Çarpım tablosunu oluşturan bir uygulama yazınız.

let yazdirilacakMetin = "";//yanyana yazdirmak icin bos degiskene atiyoruz
for (let i = 0; i<=10; i++){

    for(let j =0; j<=10; j++){
        yazdirilacakMetin = yazdirilacakMetin +( i + "*" + j +" "+ (i*j)) + "\t"
    }
    console.log(yazdirilacakMetin);
    yazdirilacakMetin = " "; //birler den ikilere gecerken yazdirilicak metni sifirla diyoruz yanyana yazdirmak icin
}
