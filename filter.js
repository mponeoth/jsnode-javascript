const bitkiler = [
    {ad:'cilek',tur:'meyve'},
    {ad:'muz',tur:'meyve'},
    {ad:'seftali',tur:'meyve'},
    {ad:'ispanak',tur:'sebze'},
    {ad:'portakal',tur:'meyve'},
    {ad:'kereviz',tur:'sebze'},
]
//Kendi Filter Fonksiyonumuzu yazma 

const kendiFilterYapim = function(dizi,filterSartlari){
        let  geciciDizi = []
        for(let i = 0; i<dizi.length; i++ ){
            const sonuc = filterSartlari(dizi[i]) //filtre sartina bir sart koyucaz ki dizimiz ona gore calissin bide degiskene aticaz if ile true donenleri alicaz
            if(sonuc){
                geciciDizi.push(dizi[i]) 
            } 
        }
        return geciciDizi
}

 function filtre(bitki){
     return bitki.tur === 'sebze'
 } 

const meyveler =  kendiFilterYapim(bitkiler,filtre)

console.log(meyveler);


//------------------------- assagidaki ornekde callback ve arrowlu hali

const bitkiler = [
    {ad:'cilek',tur:'meyve'},
    {ad:'muz',tur:'meyve'},
    {ad:'seftali',tur:'meyve'},
    {ad:'ispanak',tur:'sebze'},
    {ad:'portakal',tur:'meyve'},
    {ad:'kereviz',tur:'sebze'},
]
//Kendi Filter Fonksiyonumuzu yazma 

const kendiFilterYapim = function(dizi,filterSartlari){
        let  geciciDizi = []
        for(let i = 0; i<dizi.length; i++ ){
            const sonuc = filterSartlari(dizi[i]) //filtre sartina bir sart koyucaz ki dizimiz ona gore calissin bide degiskene aticaz if ile true donenleri alicaz
            if(sonuc){
                geciciDizi.push(dizi[i]) 
            } 
        }
        return geciciDizi
}

  

const meyveler =  kendiFilterYapim(bitkiler,bitki => bitki.tur === 'meyve' )

console.log(meyveler);//(4) [{…}, {…}, {…}, {…}]


//****************************************************** */ KISA HALI

  
const bitkiler = [
    {ad:'cilek',tur:'meyve'},
    {ad:'muz',tur:'meyve'},
    {ad:'seftali',tur:'meyve'},
    {ad:'ispanak',tur:'sebze'},
    {ad:'portakal',tur:'meyve'},
    {ad:'kereviz',tur:'sebze'},
]


const meyveler = bitkiler.filter(function(meyve){
        return meyve.tur === 'meyve'
})

const sebzeler =  bitkiler.filter(function(sebze){
    return sebze.tur === 'sebze'
})

console.log(meyveler);
console.log(sebzeler);

//**************************************************** */


--filter metodu bulunmadan once bu sekilde calisiyorduk 

function meyveleriBul(){//bitkiler global old icin parametre olarak atmamiza gerek yok 
        meyveler = []
        for(let i = 0; i<bitkiler.length; i++){
            if(bitkiler[i].tur === 'meyve'){
                meyveler.push(bitkiler[i])
            }
        }
        console.log(meyveler);
}

function sebzeleriBul(){
    sebzeler = []
    for(let i = 0; i<bitkiler.length; i++){
        if(bitkiler[i].tur === 'sebze'){
            sebzeler.push(bitkiler[i])
        }
    }
    console.log(sebzeler);
}

sebzeleriBul()
meyveleriBul()
