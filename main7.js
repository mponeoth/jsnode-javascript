
//1 emre.method();
//2 method.bind(hasan);
new   new kurucu methoddur olusturulan yeni objeyi gosterir 
this yapilari window u gosterir iceriden bile yapilsa 
gecen derslerin ozeti 

arrow function  
arrow functionlarda diger fonk. farkli olarak this diye bir kelime yok  this olusturulmuyor  global objecten alip ekrana cikartir (output yapar)
arrow functionlarda this olmadigi gibi call gibi bind gibi apply gibi kullanimlarda yoktur soz konusu degildir  


function fonksiyon1() {  
        console.log(this)
}

fonksiyon1()

const fonksiyon = () => {
        console.log(this)
}

fonksiyon()

//----------------------------------------------------------------------------------
arrow fonk ile olusturdugumuz objelerimiz(nesnelerimiz) this i global objecten aldigi gibi this.ad da global objecte arar ve bulamadigi icin undefined verir  /*nesne icindeki fonk. metod denir*/
metod tanimlarinda arrow fonk. asla ve asla onerilmez 


const emre ={
    ad:'emre',
    adiniSoyle: () => {
        console.log(this), //Window {window: Window, self: Window, document: document, name: "", location: Location, …}
        console.log(this.ad)//undefined windowda ad diye bir alan olmadigi icin ben undefined olarak goruorum 
    } 
}

emre.adiniSoyle()


//-------------------------------------------------------------------------------------
//arrow fonk. this olmadigi icin call gibi bind gibi apply gibi metodlar kullanilmaz  


const hasan ={
    ad:'hasan',
    adiniSoyle: () => {
        console.log(this), //Window {window: Window, self: Window, document: document, name: "", location: Location, …}
        console.log(this.ad)//undefined
    } 
}

hasan.adiniSoyle.call(hasan)


//-----------------------------------------------------------------------------------------
 o yuzden onun yerine normal arrow method yerine normal method kullanmaliyiz 

const ahmet ={
        ad:'ahmet',
        adSoyle() {
            console.log(this)//{ad: "ahmet", adSoyle: ƒ}
            console.log(this.ad) //ahmet
        } 
}

    ahmet.adSoyle()

//-------------------------------------------------------------------------------------------

const ali = {
    ad:'ali',
    arrowFunction : null,
    normalFunction : function () {
        console.log(this) //{ad: "ali", arrowFunction: null, normalFunction: ƒ}
         this.arrowFunction = () =>{
            console.log(this) //burada biz normal fonk. icinde tanimladigimiz icin  this i globalden objecten degil normal fonk. alir  ////{ad: "ali", arrowFunction: ƒ, normalFunction: ƒ}
        }
    }   

}

ali.normalFunction();
ali.arrowFunction();


//-------------------------------------------------------------------------------------------


const coskun ={
    ad:'coskun',
    arrowFunction:null,
    normalFunction:() =>{
        console.log(this); //buradaki this i global objecten alir kendi this i olmadigi icin arrowFonk oldugu icin  //Window {window: Window, self: Window, document: document, name: "", location: Location, …}
        coskun.arrowFunction = () =>{//coskunun icinde bulunan coskun.arrowFunction a dedik direk git  console.log(this) i ata onuda direk global objecten alir cunku arrowMetodunun icinde tanimli
            console.log(this)  //Window {window: Window, self: Window, document: document, name: "", location: Location, …}
        }
    }

}

coskun.normalFunction()
coskun.arrowFunction()


//-------------------------------------------------------------------------------------------
arrowfonk kullanisli old. yerler 



const okul ={
    isimler : ['emre','ahmet','suluman'],
    iD:[1,2,3],
    ekrandaGoster() {
        this.isimler.forEach(function(isim,index){
            console.log(isim,index)
        })
    }

}


okul.ekrandaGoster()
     emre 0
     ahmet 1
     suluman 2


//--------------------------------------------------------------------------------

benim burada istedigim ID lerimi isimlerimin yaninda duracak sekilde yazdirmak 
burada bana this window u verir 

const okul = {
    isimler:['emre','hasan','ali'],
    idler:[1452 ,2332,1122],
    OgrencileriYazdir(){
        this.isimler.forEach(function(isim,index){
                console.log(this) //Window {window: Window, self: Window, document: document, name: "", location: Location, …} window geliyor objemiz gelmiyor 
                console.log(isim,this.idler[index])
        })
    }
}


okul.OgrencileriYazdir()




benim burada istedigim ID lerimi isimlerimin yaninda duracak sekilde yazdirmak 
burada ise ben this mizi that edgiskenine attigim icin oradan da objeme ulasabilirim 
ic ice yapilarda arrow kullanilmasi elzemdir cunku dogrudan global objecten alir 


const okul = { 
    isimler : ['emre','ahmet','suluman'],
    iD:[12323,2111,34444],
    ekrandaGoster() {//1. yolu dur bu sorunu cozmek icin  that i this e atarak cozeriz ikinci yolda ise direk arrow kullanarak cozeriz 
        const that = this  //this bize o anki objeyi gosterir yani thisin gosterdigi obje that e sakliyoruz eger bu sekilde atama yapmazsak  ve assagida cagirmazsak  bize windowu verir 
        this.isimler.forEach(function(isim,index){
            console.log(that) //artik this yerine that kullaniyorlar  //{isimler: Array(3), iD: Array(3), ekrandaGoster: ƒ, ekrandaGoster1: ƒ, IdleriGoster: ƒ, …} //{isimler: Array(3), iD: Array(3), ekrandaGoster: ƒ, ekrandaGoster1: ƒ, IdleriGoster: ƒ, …}//{isimler: Array(3), iD: Array(3), ekrandaGoster: ƒ, ekrandaGoster1: ƒ, IdleriGoster: ƒ, …}
            console.log(isim,that.iD[index]) //iD deki su indexdeki nolari bana ver  // //emre 12323 / ahmet 2111 / suluman 34444 
        })
    },
    ekrandaGoster1() {//2.yolu bu sekildede yapabiliriz 
            this.isimler.forEach( (isim,index) => {
             console.log(isim,this.iD[index]) //emre 12323 / ahmet 2111 / suluman 34444 
        })
    },
    IdleriGoster(){
        this.iD.forEach((Id,index) =>{
            console.log(Id) //12323 // 2111 //34444
            console.log(this)   //{isimler: Array(3), iD: Array(3), ekrandaGoster: ƒ, IdleriGoster: ƒ, zamanlamaAyarla: ƒ}
        })
    },
    zamanlamaAyarla(){
        setTimeout(() => {
            console.log(this) //{isimler: Array(3), iD: Array(3), ekrandaGoster: ƒ, IdleriGoster: ƒ, zamanlamaAyarla: ƒ}
            console.log("okuldaki ogrenci sayilari" + this.isimler.length) //okuldaki ogrenci sayilari3
        }, 2000);
    }

}

okul.ekrandaGoster1()

okul.ekrandaGoster()

okul.IdleriGoster()

okul.zamanlamaAyarla()



//--------------------------------------------------------------------------------------
    // this globalde direk olarak cagirir ve calisir herhangi bir sorun olmaz classlarda ise durum farklidir 

    const baslik1 = document.querySelector('h1')
    const baslik2 = document.querySelector('h2')
    const baslik3 = document.querySelector('h3')

    baslik1.addEventListener('click',function (e) {
            console.log(this)
    })


    const sayi = 20;
    baslik2.addEventListener('click',function (e) {
        console.log(e.target)   //e target da ne varsa direk this bize onu verir 
        console.log(this)
        console.log(sayi) // global yapilarda direk cagirip kullanabiliriz baslik2 ye tiklandiginda bunun sikintisi daha cok ic ice yapilarda (classlarda)
    })

    baslik3.addEventListener('click',function (e) {
    console.log(this)
    })


//------------------------------------------------------------------------------------------
this in o anki objeyi gostermesi icin ya bind yada arrowlu fonk kullanilir
degiskeni bind olamdan cagiramayiz classlarda globalden farkli olarak fakat bind yapabiliriz assagidaki ornekte old. gibi  ve sadece yapmak zorunda bind ile yapmak zorunda degiliz 


    class Ekran {
         constructor(){
            this.baslik1 = document.querySelector('h1')
            this.baslik2 = document.querySelector('h2')
            this.baslik3 = document.querySelector('h3')
            this.number = 20
            this.baslik1.addEventListener('click',this.baslikTiklandi.bind(this))

            }

            baslikTiklandi(){
                console.log('calisti')
                console.log(this)
                console.log(this.number)
            }

    }

        const ekran = new Ekran()


//---------------------------------------------------------------------------------------------

bind kullanmak yerine arrowlu fonk. olusturarakda bind ile ayni islemi gorur  assagidaki arrow fonk.lu ornegimiz


class Ekran {
    constructor(){
       this.baslik1 = document.querySelector('h1')
       this.baslik2 = document.querySelector('h2')
       this.baslik3 = document.querySelector('h3')
       this.number = 20
    

       this.baslik2.addEventListener('click', ()=>this.baslik2Tiklandi())

       }

     baslik2Tiklandi(){
         console.log('calisti')
         console.log(this)
         console.log(this.number)
     }


}

   const ekran = new Ekran()