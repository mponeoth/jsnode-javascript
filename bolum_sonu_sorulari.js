SORU1 
sehirler diye bir dizi olusturun 
her dizi elemani sehirler ile ilgili bilgiler icermelidir 
bu bilgiler sehrin adi, plaka numarasi ve sehrin komsulari olabilir 

diziyi olusturduktan sonra sehir adlarina gore z den a ya siralayip ekrana yazdirin

const sehirler = [  
    {sehiradi:'antep',plaka:22,komsu:['bitlis','diyabakir','urfa']},  //a
    {sehiradi:'burdur',plaka:25,komsu:['usak','antalya','marmaris']},  //b
    {sehiradi:'istanbul',plaka:34,komsu:['kocaeli','tekirdag','yalova']},  
    {sehiradi:'kastamonu',plaka:37,komsu:['samsun','tokat','sinop']},  
    {sehiradi:'agri',plaka:11,komsu:['kars','igdir','maras']},  
    {sehiradi:'malatya',plaka:22,komsu:['mersin','kirikkale','kirklareli']},  
]

 let zdenAyasiralama = sehirler.sort(function(a,b){
        if(a.sehiradi<b.sehiradi){
            return 1
        }
        else if(a.sehiradi>b.sehiradi){
            return -1
        }else return 0

  })

 console.log(zdenAyasiralama);

/************************************************************* */ 
SORU2 
kullanicidan alinan degere kadar olan sayilar dizisini fibonacci seklinde yazdirin 
fibonacci 0 1 1 2 3 5 8 13 21...
iki sayinin toplami bir sonraki sayiyi olusturuyor...



    function fibonacci(sayi){
       let yeniDizim = [0,1]
       for(let i =2; i<sayi; i++){
             let oAnkisayim = yeniDizim[i-1]+yeniDizim[i-2]
                  if(oAnkisayim <sayi){
                        yeniDizim[i] = oAnkisayim;  
                      }
                 else{break;
                 }
        }  
      return yeniDizim
    }
        console.log(fibonacci(50));

        
/**  ***************************************************************/
SORU3 
ogrencileri tutan bir dizi olusturun 
her bir ogrenci nesnesinde ad , soyad ve id degerleri olmali
id numarasi cift olan ogrencilerin adi ve soyadini birlestirilmis halde tutan diziyi
a dan zye sirali sekilde ekrana yazdiriniz 
bunlari yaparken map filter sort metodlarini kullanin 
islem bittikten sonra kodlari arrow function ve zincirleme haline donusturun



ogrenciler = [
    {ad:'kemal', soyad:'solyemm',id:11222},
    {ad:'mustafa', soyad:'solyemm1',id:12223},
    {ad:'ahmet', soyad:'solyemm2',id:1224},
    {ad:'veli', soyad:'solyemm3',id:1225},
    {ad:'hulya', soyad:'solyemm4',id:12226},
    {ad:'asiye', soyad:'solyemm5',id:32337},
    {ad:'suleyman', soyad:'solyemm6',id:4448},
]

/******************************************************** */

const ciftsayiliOgrenciler = ogrenciler.filter(function(ogrenci){
            return ogrenci.id % 2 === 0;
    })
const ogrencilerTumu =  ciftsayiliOgrenciler.map(function(ogrenci){
            return ogrenci.ad +" "+ ogrenci.soyad ;     
        })


  console.log(ogrencilerTumu);

//****************************************************** arrowlu hali 3.sorunun */ 

let yeniOgrenciler = ogrenciler.filter(ogrenci => ogrenci.id %2 ===0 )
    .map(ogrenci => ogrenci.ad +" "+ ogrenci.soyad )
    .sort()
    .reverse()
    console.log(yeniOgrenciler);//(4) ["suleyman solyemm6", "kemal solyemm", "hulya solyemm4", "ahmet solyemm2"]
