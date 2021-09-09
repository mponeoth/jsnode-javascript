//Closure Faydalari
//1-Memory 2-Encapsulation 

  function ogrenciyiBul(id) {
        const ogrenciDizisi = new Array(10).fill({ad:'', id:0})
        .map(function (ogr,index){
            return{
                ad:'Ogrenci' + index,
                id:index
            }
        })

        console.log("dizi olusturuldu ve dolduruldu")
        return ogrenciDizisi[id]
  }
  

  console.log(ogrenciyiBul(5))
  console.log(ogrenciyiBul(2))
  console.log(ogrenciyiBul(1))


//-----------------------------------------------------------------------------------------------------
 

  function  ogrenciIslemleri() {
        const ogrenciDizisi = new Array(10).fill({ad:'', id:0})
        .map(function (ogr,index){
            return{
                ad:'Ogrenci' + index,
                id:index
            }
        })
        console.log("dizi olusturuldu ve dolduruldu")

        function ognreciyiBul(id) {
            return ogrenciDizisi[id]
        }

        return ognreciyiBul
  }

  const bul = ogrenciIslemleri()

  console.log(bul(6))
  console.log(bul(1))
  console.log(bul(3))


//------------------------------------------------------------------------------------------------


function  ogrenciIslemleri() {
  const ogrenciDizisi = new Array(10).fill({ad:'', id:0})
  .map(function (ogr,index){
      return{
          ad:'Ogrenci' + index,
          id:index
      }
  })

  console.log("dizi olusturuldu ve dolduruldu")

  function ogreciyiBul(id) {
      return ogrenciDizisi[id]
  }

  function ogrenciCikar(id){
    return ogrenciDizisi[id]
  }

  function ogrenciTopla(id){
    return ogrenciDizisi[id]
  }

  //assagidaki fonk. kullanilmasini istedigim icin geri gonderdim(return) kullanilmasi icin eger herhangi birisinin kullanilmasini istemiyorsam return e yazmam 
  return {
   bul : ogreciyiBul,
   cikar :ogrenciCikar,
   topa : ogrenciTopla
  }

}

const ogrenciler = ogrenciIslemleri()

  console.log(ogrenciler.bul(5))
  console.log(ogrenciler.cikar(2))
  console.log(ogrenciler.topa(6))




//--------------------------------------------------------------------------------------------------
// suan bu kodun hicbir kalici tarafi yok  

  let db;

  function birkereCalistir() {
    
    let counter = 0;

    if(counter > 0){
      return 
    }
    else{
      db = "baglanildi"
      counter++
      console.log("db calisti " + db)
    }


  }

 birkereCalistir()//db calisti baglanildi
 birkereCalistir()//db calisti baglanildi
 birkereCalistir()//db calisti baglanildi
 birkereCalistir()//db calisti baglanildi
 



 //---------------------------------------------------------------------------------------------

 // iste closurelar sayesinde biz bu kodu kalici yapabilyoruz butun islem bir fonk. icinde bir fonk. return edilmesi
  

let db;

  function birkereCalistir() {
    
    let counter = 0;

    return  function () {

          if(counter > 0){
            return console.log("db baglantisi zaten yapildi kardes hayirdir ")
          }
          else{
            db = "baglanildi"
            counter++
            console.log("db calisti " + db)
          }
      }

  }


const initialize = birkereCalistir()

initialize()//db calisti baglanildi
initialize()//db baglantisi zaten yapildi kardes hayirdir 
initialize()//db baglantisi zaten yapildi kardes hayirdir 
initialize()//db baglantisi zaten yapildi kardes hayirdir 


//ayni mantigi bir fonk. kac kere calistirildi gibisinden de yapabiliriz 



