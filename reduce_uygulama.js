//split türkçede bölmek manasına gelir. split() metodu verilen bir stringi(metin) diziye dönüştürür ve bu diziyi döndürür.
//Bölme işlemini istediğimiz karaktere(seperator) göre yapabiliriz. 

                function parantezlerDengeliMi(metin){
               
                const dizi = metin.split('')//verdigimiz elemanlardan yeni bir dizi olustur demis oluyoruz

                const sonuc = dizi.reduce(function(previous,karakter){

                        console.log(previous,karakter);
                        if(previous < 0 ){
                             return previous   // )(  gibi ifadeler icin ) yani -1 sa sayiyi return et diyoruz
                        }
                        if(karakter === '('){
                             return ++ previous   //once azaltiyor sonra return ediyor previous ++ once return sonra arttirir
                        }
                        if(karakter === ')'){
                             return -- previous  //hicbir parantez bu sekilde baslamaz o yuzden -- ile basladiginda return yapmasini istedik
                        }
                        return previous
                },0);//previous 0 dan baslar
                if(!sonuc){//true degilse demek yani 0 sa 
                        console.log(metin + 'dengeli bir yapidadir');//elimizde 0 kaliyorsa dengeli yapidadir
                }else{
                        console.log(metin + 'dengeli bir yapida degildir');
                }
        }

        parantezlerDengeliMi(')(')
