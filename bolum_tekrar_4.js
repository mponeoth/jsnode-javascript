Soru 11:
Sıcak soguk oyunu yapalım. Sistem 100e kadar bir sayı üretsin. Kullanıcı bu sayıyı tahmin etmeye çalışsın. 
Kullanıcının girdiği değere göre kullanıcıyı arttır azalt diyerek uyaralım. 
Kullanıcı sayıyı bulana kadar tahmin istemeye devam edelim ve sayıyı buldugunda kaç denemeden sonra bulduğunu belirtelim.*/
 
 let uretilenSayi = parseInt(Math.random()*101) //0 i da dahil etmek istiyorsak 101 ile  carpmaliyiz
 console.log("uretilen Sayi" + uretilenSayi);
//kullanicidan surekli sayi isteyecegimiz icin while kullanmaliyiz 

 let tahmin = -1;
 let tahminSayisi = 0;

 while(tahmin != uretilenSayi){

    tahmin = parseInt(prompt("sayi giriniz","sayiniz"))
    tahminSayisi++;
    if(tahmin == uretilenSayi){
        console.log("tebrikler ikramiyeyi kazandiiniz rakam " + uretilenSayi + " su kadar denediniz "+tahminSayisi );
    }
    else if(tahmin < uretilenSayi){
        console.log("yukari cik");
    }else{
        console.log("assagi in ");
    }

 }



SORU 12:
Kullanıcıdan sürekli olarak sayı alan ve de kullanıcı 0a bastığında girdiği
sayıların çarpımını sonuç olarak gösteren programı yazınız.

let verdigimizDeger = parseInt(prompt("girilen deger"))

let carpimSonucu = 1;

while(verdigimizDeger != 0){

    carpimSonucu = carpimSonucu * verdigimizDeger;
    verdigimizDeger = parseInt(prompt("girilen deger"))
}
console.log("verdigimiz degerlerin carpimi " + carpimSonucu);




 SORU 13:
Kullanıcıdan aldığınız iki tamsayı değerin en büyük ortak bölenini bulan uygulamayı yazınız
 Örneğin 14 ve 35 sayıları için ebob = 7 olmalıdır. 

 let ilkSayi = parseInt(prompt("ilk sayimiz","ilki"))
 let ikinciSayi = parseInt(prompt("ilk sayimiz","ikinci"))
 
let ebob = 1 , kontrol=2;
//10 - 4
while(kontrol <= ilkSayi && kontrol <=ikinciSayi){

    if(ilkSayi % kontrol == 0 && ikinciSayi % kontrol == 0){
        ebob = kontrol;
    }
    kontrol++; 
}
    if(ebob == 1){
        console.log("asal sayidir" );
    }
    else{
        console.log("bu sayilarin ortak boleni: " + ebob);
    }