/*Ödev 1
Bir  değişken oluşturun ve bu değişkende saniye değerini tutun.
Sonra bu saniye değerinin kaç dakika ve saniyeye denk geldiğini yazdırın
Örnek 1200 değeri için 20 dakika 0 saniye yazmalıdır.*/

//not prompt herzaman string olarak alir sayi yazsakda yazmasakda o yuzden parseInt kullanim tam sayi(number) yapiyoruz
// let saniyeString = prompt("Saniye değerini giriniz", "100"); //birincisi kutunun ustunde yazar ikinci ise kutucugun icinde gorunur
// let saniye = parseInt(saniyeString);

// let dakika = parseInt((saniye / 60), 10) ;//ikinci parametre kac basamakli istiyorsak onu yazmaliyiz onluk sistemde istiyoruz
// //let dakika = saniye/60 yukarida parseInt ile tam sayi istedigimiz icin yaptik
// let kalanSaniye = saniye % 60;

// console.log(typeof saniye); 
// console.log(`Girdiğiniz ${saniye} değeri : ${dakika} dakika ve ${kalanSaniye} saniyedir`); 
 
 
/* 
Ödev 2
Bir  değişken oluşturun ve bu değişkende fahrenheit cinsinden sıcaklığı saklayın.
Sonrasında bu değerin kaç Celcius olduğunu hesaplayın.
100 değeri için 37.777778 gibi bir değer elde etmelisiniz.
Hesaplama formülü : celcius = 5/9 * (fahrenheit -32)*/


// let girilenDerece = parseInt(prompt("Fahrenheit giriniz", "100"));//stringi numer a donusturup atiyoruz parseInt ile
// let celciusDerece = (5 / 9) * (girilenDerece - 32);

// console.log("Girdiğiniz " + girilenDerece+" fahrenheit sıcaklık "+ celciusDerece.toFixed(2)+" derecedir"); //.toFixed(2) virgulden sonra kac rakam istiyorsundur anlami 
 

/* 
Ödev 3
Bir yıl değerinin artık yıl olup olmadığını hesaplayın
Bir yılın artık olması için ya 400 ile modu 0 olmalı yada 4 ile modu 0 olmalı ve 100 ile modu 0 olmamalı
4100 false değer vermeli.*/


// let girilenYil = parseInt(prompt("sayi giriniz",100))
// let artikYil = ((girilenYil % 400 ==0) || (girilenYil%4 ==0 && girilenYil%100 !=0 ))
// console.log("girilen yil " + girilenYil + "artik yil mi " + artikYil )
 

 /*
Çözümler video derste mevcuttur.
*/