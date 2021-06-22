
const ad = document.querySelector('#ad')

const soyad = document.querySelector('#soyad')

const email = document.querySelector('#email')

const form = document.querySelector('#form-rehber')

const kisiListesi =  document.querySelector('.kisi-listesi')

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

 function kisiListesiEkle(eklenecekKisi){
    const olusturulanTrlistesi = document.createElement('tr')
    olusturulanTrlistesi.innerHTML= ` <td>${eklenecekKisi.ad}</td>
    <td>${eklenecekKisi.soyad}</td>
    <td>${eklenecekKisi.email}</td>
    <td>
    
        <button class="btn btn--edit"><i class="far fa-edit"></i></button>
        <button class="btn btn--delete"><i class="far fa-trash-alt"></i></button>
       
    </td>`
    kisiListesi.appendChild(olusturulanTrlistesi)
    tumKisilerDizisi.push(eklenecekKisi)
    bilgiOlustur('kisi rehbere kaydedildi',true) //bilgi olusturu buradan cagirdik ikide bir mesaj gondermek yerine digerini sildik
}
