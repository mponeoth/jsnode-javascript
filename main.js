-Calistirdigimiz veya cagirdigmiz her fonksiyon icin ayri bir execution context olusturulur Bu calistirilan fonksiyonlar 
call stack denilen yapida tutulur 

-en son cagirilan fonksiyon bu yapinin en ustunde yer alir ve bittiginde bir alttaki fonksiyondan program calismaya devam eder 

-tum bu yapilarin oldugu temel execution ise global execution context denir 

-bir javaScript dosyasi calistirinca js engine tum calismalar icin bir execution context olusturur . Buna global execution 
context denir. Bu yapi call stack yapisinin en altinda yer alir 

-bu yapi olusturulurken iki asama gerceklesir 
        1)Creation phase 
        2)Execution phase

-Creation phase de global object, this olusturulur. Hoisting gerceklestirilir 

-Execution phase de ise fonksiyon calismalari yapilir


not: bos bir dosya(fonksiyon yok array yok dizi yok hicbirsey yok degiskende aklina ne gelirse yok)  direk olarak global execution otomatik olarak olusturulur
ve buraya window diye this diye iki tane yapi benim icin hazirlaniyor bu o an calistigim browser penceresini temsil eder genellikle onunla ilgili bir suru fonsiyon var(alert gibi cetch gibi ) 
this dedigimizde de window dedigimizde de ayni degerlere ulasiyoruz 

Javascript ile Hoisting Kullanımı:
Çalışma mantığı şudur. Bir değişkeni ekrana yazdırdık ama o değişken ekrana yazdırdığımız yerin üstünde değil altında. 
Javascript bu durumda tüm sayfayı inceler ve eğer değişkeni bulursa değerini ekrana yazdırır. 


ozetle: her fonksiyon tanimiyla bir lexical environment olusturulur. her fonksiyon cagirilmasiyla bir execution context olusturulur 




console.log(ad)

var ad = 'emre'

console.log(ad);

function a() {
        console.log("muhammet");
}


function b() {

        function c() {
        
        }
        c()
        a()
}

console.log(ad)
 a()


