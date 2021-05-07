//nasilki dizilerde ilgili verileri tek bir degiskende sakliyorduk buda aslinda ilgili verileri bir yerde toplamaya gruplamaya yarayan bir veri yapisi

let muhammet = {

    adi:'muhammet', //soldakiler key adi deger muhammet
    soyAdi:'kuruoglu',
    dogumYili:1990,
    evliMi:false,
    sevdigimRenkler :["sari","lacivert"],
    yasiHesapla : function(){
       return 2021 - this.dogumYili //suanki nesnemizin icindeki alanlari funtion icinde kullanmak istiyorsak this.nesne adini yazmaliyiz

    }
}

console.log(muhammet);
console.log(muhammet.dogumYili);//bu sekilde verilerimize ulasabiliriz
console.log(muhammet['dogumYili']);//2. yolu cagirmak icin

let alinanYasVeri = muhammet.yasiHesapla()//return olarak gonderdigim icin bir degiskene atarak cagirdim

console.log(alinanYasVeri);//31
console.log(muhammet.yasiHesapla()); //31   

console.log("******************************************************************************");


let muhammet1 = {

    adi1:'muhammet', 
    soyAdi1:'kuruoglu',
    dogumYili1:1990,
    evliMi1:false,
    sevdigimRenkler1 :["sari","lacivert"],
    yasiHesapla1 : function(dogumYili){
       return 2021 - dogumYili //biz uzaktan deger vermek istedigimizde this yazmamiza gerek yok 

    }
}


let alinanYasVeri1 = muhammet1.yasiHesapla1(1994)//return olarak gonderdigim icin bir degiskene atarak cagirdim

console.log(alinanYasVeri1);//27
console.log(muhammet1.yasiHesapla1(1994)); //27

console.log("******************************************************************************");


let muhammet2 = {

    adi2:'muhammet', //soldakiler key adi deger muhammet
    soyAdi2:'kuruoglu',
    dogumYili2:1980,
    evliMi2:false,
    sevdigimRenkler2 :["sari","lacivert"],
    yasiHesapla2 : function(){
       this.yas = 2021 - this.dogumYili2 //biz uzaktan deger vermek istedigimizde this yazmamiza gerek yok 

    }
}

muhammet2.yasiHesapla2()// yasiHesapla2 nin tetiklenmesi lazim calismasi icin muhammet2.yasiHesapla2() cagiriyoruz
console.log(muhammet2.yas);//daha sonra bunu yazdiriyoruz  41

console.log("******************************************************************************");

let hasan = {

    adi:'hasan', //soldakiler key adi deger muhammet
    soyAdi:'can yilmaz',
    dogumYili:1970,
    evliMi:true,
    sevdigimRenkler :["mavi","beyaz"],
    yasiHesapla2 : function(){
       this.yas = 2021 - this.dogumYili2 //biz uzaktan deger vermek istedigimizde this yazmamiza gerek yok 

    }
}

console.log(hasan);

console.log("**********************************************************************************");

hasan.soyAdi = 'yeni soyadi'
hasan['soyAdi'] ='yep yeni soyadi'


let ogrencilerim = [hasan,muhammet]; //burayi iki elemanli bir dizi yaptim 0. indexde hasan 1. indexde muhammet var
console.log(ogrencilerim);//ogrencilerimde hem muhammet hemde hasan dizisi var

console.log(ogrencilerim[0].dogumYili); //hasandan dogumyilini bulup yazdirdim
console.log(ogrencilerim[0].soyAdi);
console.log(ogrencilerim[0].soyAdi);


