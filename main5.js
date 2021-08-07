//this`in aldigi degeri ogrenmek icin ilk olarak sunu sormaliyiz fonksiyon nasil cagrilmis?-
//fonsiyonun nasil cagrildigi bilinmezse this`in alacagi degeri de bilemeyiz 

//1 Implicit binding ==> fonksiyonun cagrildigi noktanin solunda ne var this onu temsil eder

//object literal 

const emre ={
    ad:'emre',
    yas:32,
    adimiSoyle : function () {
        console.log(this)//buradaki this in icinde bulundugu deger buradaki fonk. nasil cagirildigi ile ilgilidir 
        console.log(this.ad)
    },
    soyadimiSoyle : function(){
        console.log(this)    
        console.log(this.yas)    

    } 

 }

const hasan ={
    ad:'hasan',
    yas:52,
    adimiSoyle : function(){
        console.log(this)
        console.log(this.ad)
    },
    soyadimiSoyle : function(){
        console.log(this)
        console.log(this.yas)

    },
    sevgili:{
        ad:'ayse',
        yas:33,
        sevgilininAlinRengi : function(){
            console.log(this)
            console.log(this.ad)
        }
    }

}
//kisacasi solunda obje(emre gibi hasan gibi) olmasi lazim output yapmasi icin digerine atama yaparsak undefined verir 

emre.adimiSoyle() 
//ad: "emre", yas: 32, adimiSoyle: ƒ, soyadimiSoyle: ƒ} -- 
//emre


hasan.soyadimiSoyle()
//{ad: "hasan", yas: 52, sevgili: {…}, adimiSoyle: ƒ, soyadimiSoyle: ƒ}
//52

hasan.sevgili.sevgilininAlinRengi()
//{ad: "ayse", yas: 33, sevgilininAlinRengi: ƒ}
//ayse

const fonk = hasan.sevgili.sevgilininAlinRengi //hasan in icinde sevgili sevgili icinde sevgilininAlinRengi diye function var bunu fonk a atadik  sonrasinda calistir dedigimizde undefined aliriz cunku nasil cagirildigina baktik solunda nokta yok yani bir obje yok o zaman bu direk window u gosterir ve windowdada ad diye bir alan olmadigi icin undefined degerini goruyorum dememiz gerekir 

fonk();//Window {window: Window, self: Window, document: document, name: "", location: Location, …}
        //undefined



