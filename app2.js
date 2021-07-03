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

class Util{
        static bosAlanBirakma(...alanlar){
        let sonuc = true
        alanlar.forEach(alan =>{
            if(alan.length === 0){
                sonuc = false
                return false
            }
        })
        return sonuc 
    }
}

class Ekran{
    constructor(){  //kisiler de iki veyahut 3 4 5 bize kalmis sayisi her bir kisi olusturdgumuzda yeni kutu olusur cunku oraya biz emrenin hasanin fatmanin parametrelerini giricez fakat Ekranda ayni sey soz konusu degil bu yuzden constructor i bos biraktik
        this.ad = document.querySelector('#ad')
        this.soyad = document.querySelector('#soyad')
        this.email = document.querySelector('#email')
        this.ekleGuncelleButon = document.querySelector('.kaydetGuncelle')   
        this.form = document.querySelector('#form-rehber').addEventListener('submit',
        this.kaydetGuncelle.bind(this)) //suanki this ekran objemizi temsil etmesi icin bindladik
        this.kisiListesi = document.querySelector('.kisi-listesi')
        this.depo = new Depo()      
        this.kisileriEkranaYazdir()  
      }

    kisileriEkranaYazdir(){
        this.depo.tumKisiler.forEach(kisiA =>{ //depomuzun icindeki tumkisilere Erisip elemanlar
            this.kisiyiEkranaEkle(kisiA)
        })
    }
    

    kisiyiEkranaEkle(kisi){
        const olusturulanTR = document.createElement('tr')
        olusturulanTR.innerHTML = `<td>${kisi.ad}</td>
        <td>${kisi.soyad}</td>
        <td>${kisi.email}</td>
        <td>
        
            <button class="btn btn--edit"><i class="far fa-edit"></i></button>
            <button class="btn btn--delete"><i class="far fa-trash-alt"></i></button>
           
        </td>`
        this.kisiListesi.appendChild(olusturulanTR)
    }


    kaydetGuncelle(e){
    e.preventDefault();
    const kisi = new Kisi(this.ad.value,this.soyad.value,this.email.value)
    console.log(kisi);
    const outcome = Util.bosAlanBirakma(kisi.ad,kisi.soyad,kisi.email)
    //tum alanlar doldurulmus
    if(outcome){
        //yeni kisiyi ekrana ekler
        this.kisiyiEkranaEkle(kisi) //buradaki kisi kaydetGuncelle icerisindeki kisi degiskenindendir
        
        //localStorage a ekle
        this.depo.kisiEkle(kisi)
    }
    
    else{ //bazi alanlar eksik
        console.log('bos birakilmaz');
    }
}}
 
class Depo{  //Uygulama ilk acildiginda veriler getirilir burada herhangi bir islem yapmak istedigimizde mesala API gibi ekran veya Kisinin haberi dahil olmaz
  
     constructor(){
         this.tumKisiler =  this.kisileriGetir();  //kisileriGetir calistiginda tumkisilerin ici dolar 
     }
     kisileriGetir(){
        let tumKisilerLocal; //buradaki tumKisilerLocal buradaki fonksiyon icin gecerli
        if(localStorage.getItem('tumKisiler') === null){
            tumKisilerLocal = []
        }
        else{
            tumKisilerLocal = JSON.parse(localStorage.getItem('tumKisiler'))
        }

        return tumKisilerLocal
     }
     kisiEkle(kisi){ 
        const tumKisilerLocal =this.kisileriGetir(); //bu bir string ifade once bizim diziye donusturup sonra islemimizi yapip sonra geri yazmamiz gerekiyor
        tumKisilerLocal.push(kisi)
        localStorage.setItem('tumKisiler',JSON.stringify(tumKisilerLocal));
     }

}

 document.addEventListener('DOMContentLoaded',function(e){ //butun HTML yapisi eklendikten sonra burada bir function calistiricaz
     const ekran = new Ekran() //bunu yaptigimizda Ekrandaki constructor tetiklenir 
 })


