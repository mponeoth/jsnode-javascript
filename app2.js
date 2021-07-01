//classlar global olmazlar mumkun oldugunca global degisken kullanma her bir sinifin kendine ait ozellikleri vardir herbiri ayri bir dosyadadir olusturdugumuz farkli classlar  her sinifinda ap ayri gorevleri vardir

class Kisi{
    constructor(ad,soyad,email){    
        this.ad = ad;
        this.soyad = soyad;
        this.email = email;
    }

}

//const emre = new Kisi('emre','altunbilek','emre@emre') //bu kurucu metod(Kisi) calistiginda bunu olustumak istedigimide disaridan deger vermeliyim 
//const hasan = new Kisi('hasan','kurtohlu','hasan@hasan')  
//const fatma = new Kisi('fatma','esref','fatma@esref')  
//emre.ad diyerek degerlerimize ulasabiliriz

class Ekran{
    constructor(){  //kisiler de iki veyahut 3 4 5 bize kalmis sayisi her bir kisi olusturdgumuzda yeni kutu olusur cunku oraya biz emrenin hasanin fatmanin parametrelerini giricez fakat Ekranda ayni sey soz konusu degil bu yuzden constructor i bos biraktik
        this.ad = document.querySelector('#ad')
        this.soyad = document.querySelector('#soyad')
        this.email = document.querySelector('#email')
        this.ekleGuncelleButon = document.querySelector('.kaydetGuncelle')   
        this.depo = new Depo()      
      }
}

 
class Depo{  //Uygulama ilk acildiginda veriler getirilir burada herhangi bir islem yapmak istedigimizde mesala API gibi ekran veya Kisinin haberi dahil olmaz
  
     constructor(){
         this.tumKisiler = []; //burasi deponun gectigi heryerde gecerli cunku depo sinifimizin bir propertisi oldu  
     }
     kisileriGetir(){
        let tumKisilerLocal; //buradaki tumKisilerLocal buradaki fonksiyon icin gecerli
        if(localStorage.getItem('tumKisiler') === null){
            tumKisilerLocal = []
        }
        else{
            tumKisilerLocal = JSON.parse(localStorage.getItem('tumKisiler'))
        }
        this.tumKisiler = tumKisilerLocal

        return tumKisilerLocal
     }
     kisiEkle(kisi){ 
        const tumKisilerLocal =this.kisileriGetir(); //bu bir string ifade once bizim diziye donusturup sonra islemimizi yapip sonra geri yazmamiz gerekiyor
        tumKisilerLocal.push(kisi)
        localStorage.setItem('tumKisiler',JSON.stringify(tumKisilerLocal));
     }

}

 