//promise soz vermek demektiri hata varsa hata vericem hata yoksa sonucu vericem 

const myPromise = new Promise((resolve,reject) => {

    //uzun surecek islem buraya yazilir 
    setTimeout(()=>{
        //console.log("3 saniyelik islem ")   
        //resolve("3 saniyelik islem bitti") //islemimiz duzgun bir sekilde bitmisse bu uc saniye sonunda ne elde etmek istiyorsak onu resolve isimli callbackin icine yaziyoruz / diger ifadeyle islem basarili bir sekilde bitti bunu yazdirabilirsin diyorum   
        //resolve({ad:"muhammet",id:1})
        reject("hatayi yakalla ")
    },3000)
})
    //then de resolve catch de reject i yakaliyoruz 
    myPromise
    .then(sonuc =>{  console.log(sonuc) })//resolvumuz basit bir metin aldi bu array objede olabilirdi ve ben bu metinimizi sonuc diye bir degiskene alicaz ve kullanicaz 
    .catch(hata =>{  console.log(hata) })

//----------------------------------------------------------------------------------------------------    
//1.yolu
    function ogrencileriGetir() {
        
       return new Promise((resolve,reject) =>{

            setTimeout(()=>{
                const dizi = []
                for(let i =0;i<30; i++){
                    dizi.push({ad:"ogrenci" + (i+1) ,id:i+1 })
                }
                resolve(dizi)
            },2000)

        })

    }
    ogrencileriGetir().then(ogrenciDizisi =>{console.log(ogrenciDizisi)})


//2.yolu fonk. parametresi olarak alma 

    function ogrencileriGetir() {
        
        return new Promise((resolve,reject) =>{
 
             setTimeout(()=>{
                 const dizi = []
                 for(let i =0;i<30; i++){
                     dizi.push({ad:"ogrenci" + (i+1) ,id:i+1 })
                 }
                 //resolve(dizi)
                 reject("hata mesaji")
             },2000)
 
         })
 
     }
 
     function ogrencileriYazdir(yazdir) {
        console.log(yazdir)
    }


     ogrencileriGetir()
     .then(ogrenciDizisi => ogrencileriYazdir(ogrenciDizisi))
     .catch(hata =>console.log(hata))

//------------------------------------------------------------------------------------------------------

    const promiseBasarili = Promise.resolve("basarili promise")
    const promiseHata = Promise.reject("hata cikti ")

    
    promiseBasarili
    .then(snc =>console.log(snc))
 

    promiseHata
    .then(sonuc => console.log(sonuc))
    .catch(hata =>console.log(hata))


//-------------------------------------------------------------------------------------------------------
    const p1 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("3 saniyelik islem bitti ")
        },3000)
    })


    const p2 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("6 saniyelik islem bitti ")
        },1000)
    })

     Promise.all([p2,p1]).then(sonuc =>console.log(sonuc))

    //Promise.all ikisinin sonucu geldikten sonra birlikte gosterilir ekranda 

    Promise.race([p1,p2]).then(sonuc => console.log(sonuc))

    // Promise.race ikisini yaristirir hangisi hizli ise onu ekrana yazdirir 



