
const ad = document.querySelector('#ad')

const soyad = document.querySelector('#soyad')

const email = document.querySelector('#email')

const form = document.querySelector('#form-rehber')

const kisiListesi =  document.querySelector('.kisi-listesi')

//silme islemi icin bir ekrandan bide dizimizden silmeliyiz 

kisiListesi.addEventListener('click',kisiIslemleriniYap)

function kisiIslemleriniYap(e){
    
    if(e.target.classList.contains('btn--delete')){
        const silinecekTREleman = e.target.parentElement.parentElement
        const silinecekMaileleman = e.target.parentElement.previousElementSibling.textContent; //maili yakaladik burada
        rehberdenSil(silinecekTREleman , silinecekMaileleman)// biz delete buttonundayiz parentina ulasmak istiyoruz o yuzden ilk td sonra tr ye ulastik
        
    }
    else if(e.target.classList.contains('btn--edit')){
    }
   
}
function rehberdenSil(silinecekTREleman ,silinecekMaileleman){
    //ekranimizdan silmek icin
    silinecekTREleman.remove()

    //----------
    //forEach tumKisilerDizisi n de hepsini bir bir kontrol eder ve o an gezdigi kisi ile o an gezdigi indexi bana verir icinden emaili alir ve silinecekMaileleman e esit mi diye bakar esitse splice metodu ile buradaki index e gore cikarir
    //emaile gore silme islemi // splice yapisinda buldugumuz index degerini(email) ve 1 yazarsak tumKisilerDizisin de o kisinin bulundugu indexden maili silmis olucak aslinda kendisini silmis olucak splice(start)/ splice(start, deleteCount)
    //NOTONEMLI :  eger biz maili silersek otomatik olarak o objeyi siler maili id olarak dusunebiliriz
    
    //1)yol forEach ile
    tumKisilerDizisi.forEach(function(kisi,index){
        if(kisi.email === silinecekMaileleman){
            tumKisilerDizisi.splice(index,1)
         }
    })

    //--------
    //ONEMLINOT sonuc olarak maili almadigimiz zaman yeni olusturdugumuz silinmeyecekEleman a nesnemiz otomatik olarak silinir
    //2)yol filter ile de hepsini bir bir kontrol eder  
    const silinmeyecekEleman = tumKisilerDizisi.filter((kisi,index)=>{
       return kisi.email !== silinecekMaileleman
        
    })


    //const tumKisilerDizisi ile tanimladigimiz zaman yeni bir deger atayamayiz tumKisilerDizisi = silinmeyecekEleman diye atama yapamayiz  o yuzden sifirlamamiz gerekiyor  tumKisilerDizisi.length = 0 bu sekilde ondan sonra atayabiliriz
    //eger tumKisilerDizisi const degilde let diye tanimlasaydik  tumKisilerDizisi = tumKisilerDizisi.filter((kisi,index)=>{ return kisi.email !== silinecekMaileleman} dememiz yeterli olurdu 
  
    tumKisilerDizisi.length = 0 //icini bolsattik

    tumKisilerDizisi.push(...silinmeyecekEleman) //push ile atamaliyiz sonucta diziye atama yapiyoruz

    console.log('silme islemi yapildi');
    console.log(tumKisilerDizisi);

}

form.addEventListener('submit',Kaydet)

//tum kisiler icin dizi 
    const tumKisilerDizisi = []

function Kaydet(e){
    e.preventDefault()

        const eklenecekKisi = {
            ad : ad.value,
            soyad : soyad.value,
            email : email.value
        }
 

    const sonuc = verileriKontrolEt(eklenecekKisi)
    if(sonuc.durum){
        kisiListesiEkle(eklenecekKisi)
      }else{
        bilgiOlustur(sonuc.mesaj,sonuc.durum)
     }

}


function verileriKontrolEt(kisi){
        //objelerde in kullanimi
        //console.log(deger); sadece deger dersek bize keyini gosterir ad soyad mail gibi
        
        for(const deger in kisi){
            if(kisi[deger]){    //ad soyad mail degerlerine baktik girilmisse yani ad soyad mail doldurulmussa calisir
                console.log(kisi[deger]);
            }
            else{
                sonuc = {
                    durum:false ,
                    mesaj:'bos Alan birakmayiniz '
                }
                return sonuc
            }
          
        }
        alanlariTemizle()//true old. zaman ad soyad ve email i yeniler 
        return sonuc = {
            durum : true,
            mesaj:'true calisti ikinci return'
        } 
}


function bilgiOlustur(mesaj,durum){

    const olusturulanbilgi = document.createElement("div");   

    olusturulanbilgi.innerHTML = mesaj;

    olusturulanbilgi.className = 'bilgi'

    if(durum){
        olusturulanbilgi.classList.add('bilgi--success')
    }else{
        olusturulanbilgi.classList.add('bilgi--error')
    }

    document.querySelector('.container').insertBefore(olusturulanbilgi,form )
    //appendchild() sona ekler insertBefore oncesine ekler //insertBefore(ilkigonderilenelement(olusturulanbilgi),ikinci nereye gonderilecegi) formdan hemen sonra dedik
}

setTimeout(function(){ 
    const silinecekBilgi = document.querySelector('.bilgi');
    if(silinecekBilgi){
        silinecekBilgi.remove();
    }

 },3000);

 function alanlariTemizle(){ //ad soyad ve email de yazdigimi ne varsa sil dedik
    ad.value="",
    soyad.value="",
    email.value=""

 }

 function kisiListesiEkle(eklenecekKisi){//
    const olusturulanTrlistesi = document.createElement('tr')
    olusturulanTrlistesi.innerHTML= ` <td>${eklenecekKisi.ad}</td>
    <td>${eklenecekKisi.soyad}</td>
    <td>${eklenecekKisi.email}</td>
    <td>
    
        <button class="btn btn--edit"><i class="far fa-edit"></i></button>
        <button class="btn btn--delete"><i class="far fa-trash-alt"></i></button>
       
    </td>`
    kisiListesi.appendChild(olusturulanTrlistesi)
    tumKisilerDizisi.push(eklenecekKisi)//her kisi eklendikten sonra dizimize push yapiyoruz onu gostermek istedim 
    bilgiOlustur('kisi rehbere kaydedildi',true) //bilgi olusturu buradan cagirdik ikide bir mesaj gondermek yerine digerini sildik
    console.log(tumKisilerDizisi);
}



