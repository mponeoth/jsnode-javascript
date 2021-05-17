const isimler = ['emre','ali','hasan','ayse'];

const sayilar = [1,50,2,41,41,84,8,35,3];

const ogrenciler = [
        {id:12 , isim: 'emre', yas:25},//a dedigimiz burada bir objedir ben burada isme erismek istiyordum o yuzden a.isim dedik
        {id:22 , isim: 'hasan', yas:15},//b
        {id:32 , isim: 'fatma', yas:55},
        {id:13 , isim: 'nuriye', yas:19},
        {id:92 , isim: 'kemal', yas:45},
        {id:15 , isim: 'mustafa', yas:75},
        {id:44 , isim: 'ceren', yas:30},

]

    //string diziyi a-z siralama 

    const adanZyeSiraliIsimler = isimler.sort()
    console.log(isimler);//sort siralama yapar fakat bizim kaynagimizida azdan zye degistirir (4) ["ali", "ayse", "emre", "hasan"]
    console.log(adanZyeSiraliIsimler);//4) ["ali", "ayse", "emre", "hasan"]

    //-----------------------------

    //string diziyi z-a siralama

    //reverse in calismasi icin siralanmis bir dizi olmasi gerekir

    const zdenAyaSiralama = adanZyeSiraliIsimler.reverse()
    console.log(zdenAyaSiralama);//(4) ["hasan", "emre", "ayse", "ali"]

    //-----------------------------

    kisa = isimler.sort().reverse()
    console.log(kisa); //(4) ["hasan", "emre", "ayse", "ali"]


    //-----------------------------

    //sayilari kucukten - buyuge / buyukten kucuge siralama

    const kucuktenBuyugeSayilar = sayilar.sort((a,b) => a-b)
    console.log(kucuktenBuyugeSayilar);//(9) [1, 2, 3, 8, 35, 41, 41, 50, 84]

    //-----------------------------

    const buyuktenKucugeSayilar = sayilar.sort((a,b) => b-a)
    console.log(buyuktenKucugeSayilar);//(9) [84, 50, 41, 41, 35, 8, 3, 2, 1]

    //-----------------------------

    //nesneleri siralama

    //nesnelerde neye gore siralanmasi gerektigine karar vermeliyiz
      const  kucuktenBuyugeOgrenciler =  ogrenciler.sort((a,b) => a.yas - b.yas)//kucuktenn buyuge siralama id ve yas da bulabiliriz fakat 
    
      console.log(kucuktenBuyugeOgrenciler);

    //---------------------

    const  buyuktenKucugeOgrenciler =  ogrenciler.sort((a,b) => a.id - b.id)//kucuktenn buyuge a-b buyukten kucuge  b-a
    
    console.log(buyuktenKucugeOgrenciler);

    //---------------------
    
    ogrenciler.sort(function(a,b){
        //metinlerde normalde bu sekilde yapmaliyiz  nesnelerde(objectlerde)
        //pozitif negatif veya 0 degerini donduren bir yapidir
        if(a.isim < b.isim){    
                return 1        //eger z den aya istiyorsak tam tersini yapicaz buraya -1
        }else if(a.isim >b.isim){       
                return -1       //buraya +1 koyucaz        
        }else return 0

    })

    console.log(ogrenciler);