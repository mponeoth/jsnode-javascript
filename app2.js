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
//silmek istedigimizde hem veri tababinda hem de arayuzumuzde yapimiz olmali 
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

class Ekran{//classimizin icindeki constructorlarimiz bizim global degiskenlerimizdir
    constructor(){  //kisiler de iki veyahut 3 4 5 bize kalmis sayisi her bir kisi olusturdgumuzda yeni kutu olusur cunku oraya biz emrenin hasanin fatmanin parametrelerini giricez fakat Ekranda ayni sey soz konusu degil bu yuzden constructor i bos biraktik
        this.ad = document.querySelector('#ad')
        this.soyad = document.querySelector('#soyad')
        this.email = document.querySelector('#email')
        this.ekleGuncelleButon = document.querySelector('.kaydetGuncelle')   
        this.form = document.querySelector('#form-rehber').addEventListener('submit',
        this.kaydetGuncelle.bind(this)) //suanki this ekran objemizi temsil etmesi icin bindladik
        this.kisiListesi = document.querySelector('.kisi-listesi')
        this.kisiListesi.addEventListener('click',this.guncelleVeyaSil.bind(this))//ekranin degerlerine(ad soyad email gibi yukarida olusturdugumuz degerlere) erismek istiyorsak bind(this) demeliyiz 
        this.depo = new Depo()      
        this.secilenSatir = undefined
        this.kisileriEkranaYazdir()  
      }

    guncelleVeyaSil(e){
        const tiklanmaYeri = e.target
        if(tiklanmaYeri.classList.contains('btn--delete')){
            this.secilenSatir = tiklanmaYeri.parentElement.parentElement
            this.kisiyiEkrandanSil()
            
        }else if(tiklanmaYeri.classList.contains('btn--edit')){
            console.log('editt')
        }
    }

    kisiyiEkrandanSil(){
        this.secilenSatir.remove() //ekrandan sildik
        const silinecekMail = this.secilenSatir.cells[2].textContent;
        this.depo.kisiSil(silinecekMail)
        this.alanlariTemizle()
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
        this.alanlariTemizle()
    }
    
    else{ //bazi alanlar eksik
        console.log('bos birakilmaz');
    }
}

alanlariTemizle(){
    this.ad.value = '',
    this.soyad.value = '',
    this.email.value = ''
}
}
 
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
        this.tumKisiler.push(kisi) //burada zaten tumkisiler adinda arreyimiz var onu kullandik dogrudan ona atadik
        localStorage.setItem('tumKisiler',JSON.stringify(this.tumKisiler));
     }
     //veri tabani kismimiz 
     kisiSil(email){ 
        this.tumKisiler.forEach((kisi,index) =>{//ilgili dizide guncellememizi yaptik
            if(kisi.email === email){
                this.tumKisiler.splice(index,1)
            }
        })
        localStorage.setItem('tumKisiler',JSON.stringify(this.tumKisiler)); // suan localstorage imiza ekledik ve yeni halini kaydettik 
    }
    
}

 document.addEventListener('DOMContentLoaded',function(e){ //butun HTML yapisi eklendikten sonra burada bir function calistiricaz
     const ekran = new Ekran() //bunu yaptigimizda Ekrandaki constructor tetiklenir 
 })


