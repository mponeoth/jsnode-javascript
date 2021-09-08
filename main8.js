  
  Closure Kavrami 

-Bir Fonksiyonda bulunan local degiskenlerin fonksiyon return edildikten sonra bile saklanmasidir 

-bir fonksiyonun kendi lexical scope alani disinda cagrilsa bile lexical scope nu hatirlayabilmesi ve de bu alana erisebilmesidir 

-Closure; kendi parent function i calistirip sonlansa bile parent scope a erisebilen bir fonsiyondur 


//CLOSURE 

const ikiyleCarp = sayi => sayi * 2 

const s1 = ikiyleCarp(5)

const s2 = ikiyleCarp(9)

console.log(s1,s2)


//-------------------------------------------------------------------------------------------
//higher order fonk. parametre olarak bir fonk alan veya geriye bir fonk. donduren yapilardir 
//dis fonk geriye bir fonk.  geriye baska bir fonk. donduruyor  o yuzden higher order fonkdur 

const dis = () =>{

    let sayac = 0;
    const artir = () =>{//buradaki artir clousure bir fonksiyondur  
        sayac++;
        console.log(sayac)
    }

    return artir //icerideki arttir fonk. erismis oluruz, calistirmis olmuyoruz .

}

const sonuc =  dis()

sonuc()
sonuc()
 
 //iki fonk. ic iceyse iceridekine child disaridakine parent diyorsak parent sonlansa bile icerideki cocugun bu degerlere erisip kullanmasi yetenegine clousure denir 


 //CLOSURE ORNEK 1 

 //closure kullanmamiz icin bir fonk icinde bir fonk tanimlamamiz gerekiyor 


 const sayilariTopLA = () =>{

    console.log("fonksiyon Basladi")

    const a = 20 , b = 30;   

    const topla = () =>{

      console.log("topla  :" + (a + b))
    }

    return topla
    console.log("fonksiyon bitti")

 }

const sonuc =  sayilariTopLA() 

sonuc()
//fonksiyon Basladi
//topla  :50

//------------------------------------------------------------------------------------
//burada gostermek istedigimiz parent sonlansa bile child calisir cagirirsak setTimeout un 6 san sonra calismasi gibi mesela setTimeout da cagirdik ve 6 san sonra calisti 

const sayilariTopLA = () =>{

  console.log("fonksiyon Basladi")

  const a = 20 , b = 30;   

  const topla = () =>{

    console.log("topla  :" + (a + b))
  }

  setTimeout(topla,6000)
  console.log("fonksiyon bitti")

}

 sayilariTopLA() 


 //fonksiyon Basladi
 //fonksiyon bitti
 //topla  :50


 //-----------------------------------------------------------------------------------------------
//aslinda su sekilde dusunebiliriz sayacIslemleri calisip bitmis fakat icindeki yapilar mesele icindeki fonksiyonlar ne yapiyor buradaki degerleri kullanabiliyor aslinda fonsiyonumuza sayac diye kalici bir hafiza verdik  suan icin icinde sayac diye bir deger tutuluyor

//CLOSURE ORNEK 2 

  const sayacIslemleri = () =>{
    console.log("fonksiyon basladi")
    let sayac = 0

    const h1 = document.querySelector('h1')
    const h2 = document.querySelector('h2')

    h1.addEventListener('click',()=>{
      sayac++
      console.log("attirildi " + sayac)
    })

    h2.addEventListener('click',()=>{
      sayac--
      console.log("azaltildi " + sayac)
    })
    console.log("fonksiyon bitti")

  }

  sayacIslemleri()



//---------------------------------------------------------------------------------------------------
//hesap makinesi isimli fonk cagirildi bitti   fakat geriye gonderdigi bu topla ve carp hesap makinesi bu cagirilip biten yapidaki degerleri ne yapabiliyor 7 ve 2 degerlerine ulasip kullanabiliyor  bunada clousure denir  

//CLOSURE ORNEK 3
 
const hesapMakinesi = (s1,s2) =>{

    function topla() {
          console.log("topla " + (s1+s2))
    }

    function carp() {
      console.log("carp " + (s1*s2))
    }

    return{
      topla,
      carp
    }
}

const sonuc = hesapMakinesi(7,2)

sonuc.topla()
sonuc.carp()


//Closure Ornek 4

function kronometreuygulamasi() {
      
      let baslangicZamani = Date.now()
      console.log("baslangic saniyesi" + baslangicZamani)  //baslangic saniyesi1631139166177

      function neKadarSurdu() {
      
          let gecenZaman = Date.now() - baslangicZamani;
          console.log("gecen zaman " + gecenZaman + " milisaniyedir") //gecen zaman 9 milisaniyedir
      }

      return neKadarSurdu
}

  const kronometre  = kronometreuygulamasi()


  for (let i = 0; i<500000; i++){
      let gecici = Math.random() *50000;
  }

  kronometre()



