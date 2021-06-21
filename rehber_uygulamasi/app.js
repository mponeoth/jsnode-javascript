
const ad = document.querySelector('#ad')

const soyad = document.querySelector('#soyad')

const email = document.querySelector('#email')

const form = document.querySelector('#form-rehber')


form.addEventListener('submit',Kaydet)

function Kaydet(e){
    e.preventDefault()

    const eklenecekKisi = {
        ad : ad.value,
        soyad : soyad.value,
        email : email.value
    }
 

    const sonuc = verileriKontrolEt(eklenecekKisi)
    if(sonuc.durum){
        bilgiOlustur(sonuc.mesaj,sonuc.durum)
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


