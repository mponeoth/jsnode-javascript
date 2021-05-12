const sayilar = [1,2,3,4,5,6]

//kendi map Fonksiyonumuzu olusturucaz 

let kendiMap =  function(sayilar,islem){
        yeniDizi = []
        for(let i = 0; i<sayilar.length; i++){
        yeniDizi.push(islem(sayilar[i]))    
        }
        return yeniDizi
}

    const olusanYeniDizi = kendiMap(sayilar,function(sayi){
            return sayi * 5;
    })

    console.log(olusanYeniDizi);


//-----------------------------------------------------------

const sayilar = [1,2,3,4,5,6]

const yeniSayilar =  sayilar.map(function(sayi){
    return sayi * 2  //ana kaynagi bozmadan yepyeni bir dizi olusturduk
})


console.log(sayilar);
console.log(yeniSayilar);

//-------------------------------------------------------------

const kitaplar = [
    {adi :'1',sayisi:30},
    {adi :'2',sayisi:40},
    {adi :'3',sayisi:50}
];

const kitapSayisi = kitaplar.map(function(kitap){
        return kitap.sayisi
})

console.log(kitapSayisi);

//-----------------------------------------------------

const kisiler = [ 
    {ad:'muhammet',soyad:'kuruoglu'},
    {ad:'emre',soyad:'altunbilek'},
    {ad:'canan',soyad:'karatay'},
    {ad:'haluk',soyad:'levent'},
]

const yeniKisiler =  kisiler.map((kisi) => kisi.ad + " soyadim " + kisi.soyad) //arrowlu map 

console.log(yeniKisiler); 
