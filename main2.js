//foncionyonlarda istedigimiz yerden cagirabiliriz sayi degiskenini toplam fonk. dan bir once cagirsakda calisirdi

function toplam(s1,s2){
    console.log(arguments);
    Array.from(arguments) //aRRAY ILE DIZI OLUSTURUYORUZ FAKAT DIREK OLARAK BU(ARUGUMENTS) BI NESNE OLDU ICIN ARRAY FONK BURADA GECERLI DEGIL 
    return s1 + s2
}

var sayi = toplam(5,7)
console.log(sayi);

//SCOPE CHAIN fonksiyonlarin 

console.log(sayi); //undefined

function a() {
        var sayi = 10;
        b()
        console.log(sayi);//10
}

function b() {
        var sayi = 20;
        c()
        console.log(sayi);//20
}

a()

function c() {
 
    console.log(sayi)

    var sayi = 30 //undefined

}

var sayi = 40

output one by one
 undefined 
 undefined
 20
 10
//-------------------------------------------------------

//-- tum bu fonk hepsi(a() b() c()) lexical olarak global conteximizde ve sayi diey degiskenimzde global conteximizde 
//scope bir degiskenin tanimli old. yer scope chain ise boyle fonklarin degislerin tanimli old. seyi birbirine zincilemesi yani bu scope olarak bu sayi degiskeni aslinda zincileme olarak biradaki fonk.lara bagli 

var sayi = 40
 
function a() {
        b()
        console.log(sayi);//40
}

function b() {
        c()
        console.log(sayi);//40
}

a()

function c() {
        console.log(sayi)//40
}

//------------------------- 
//global conteximizde sayi degikeni ve a fonk. tanimi var baskada bir seyimizin tanimi yok ne kadar ic ice olursalar olsunlar sadece a fonk. var 
//a fonk. calisti b calisti cye geldik c nin icinde console icinde sayi var c lexical parenti b ye sorucak  b fonk. lexical parenti a ya sorucak a da kendi parenti olan globale sorar  10 degerini buldu ondan dolayi ekranda 10 degerini goruyoruz 

var sayi = 10

function a(){

    function b(){
        function c(){
            console.log(sayi)
        }
        c()
    }
    b()
}

a()

output : 10
//--------------------------------------------
//c kendi lexical parentina sorar buldugu zaman ekrana yansitir direk

var sayi = 10

function a(){
    sayi = 20;
    function b(){
    sayi = 30;
        function c(){
            console.log(sayi) //30
        }
        c()
    }
    b()
}

a()

output 30
