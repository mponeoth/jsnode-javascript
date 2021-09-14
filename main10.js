//sekron olarak calisma yukarindan assagiya  satir satir isletilir  ve bir sonraki satir bir onceki satirdan once aslayamaz 
//asekron calisma mantigi
//callbackler, promisler async ve await asekron calismalara ornektir 

console.log("basladi")

setTimeout(function() { //setTimeout bir callback fonk.dur
    console.log("5 sn sonra calisicak ")
},500)

console.log("bitti")

//javascript aslinda single treaddir(engine) fakar uzun surecek islemleri yapicak worker treadleri vardir 

//event loop call stack(yapilacak islemler) i surekli olarak kontrol eder 



//-----------------------------callback Ornekler -------------------------------------------------//

// 2 sn gecmedi ve bu dizi geriye dondurulmedigi icin undefined hatasi aliriz yani kisacasi biz ogrenciGetideki diziyi beklememiz gerekiyor
//BUNU yaparken callbakleri kullanabiliriz o yuzden sekron dusumemeliyiz 
  

console.log("basladi") //basladi

const dizi = ogrencilerGetir()

ogrencileriYazdir(dizi) //undefined

console.log("bitti")//bitti

function ogrencilerGetir() {

    setTimeout(function () {
        
        const dizi = []

        for(let i = 0; i<30; i++){
            dizi.push({ad:"ogrenci" + (i+1), id:i+1})

        }
     return dizi 
  },2000) //burada 2 san. beklenmeli yoksa undefined yada null hatasi aliriz 

}

function ogrencileriYazdir(ogrenciDizisi){
    console.log(ogrenciDizisi)

}

//----------------------------------- asekron bir sekilde calistiriyoruz callBack kullanarak --------------------------

//fonk. belli acama hizmet eden kodlari bir arada tutmaya yarar bazi kodlari direk calistirma ben sana bunlari calistiricagin zamani soyleyim tanimida vardir fonk.larin 

console.log("basladi") //basladi

//ogrencilerGetir(ogrencileriYazdir)///parametre olarak bir fonk. verdik  1)yolu

ogrencilerGetir(function (ogrenciDizisi){ //isimsiz fonk. 2)yolu
    console.log(ogrenciDizisi)

})

console.log("bitti")//bitti

function ogrencilerGetir(callback) { 

    setTimeout(function () {
        
        const dizi = []

        for(let i = 0; i<30; i++){
            dizi.push({ad:"ogrenci" + (i+1), id:i+1})

        }
     return callback(dizi) //artik dizimizi return etmiyicez direk olarak cagiriyoruz 
  },2000)  

}

function ogrencileriYazdir(ogrenciDizisi){
    console.log(ogrenciDizisi)

}

//uzun surecek asekron calisan  programin yapmak zorunda oldugu bana vermek zorunda old. diziyi bekledik ve hazir old. bana gonderdi dizimizi 
//------------------------------------------------------------------------------------------------



