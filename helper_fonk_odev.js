const sayilar = [1,2,3,4,5,6,7,8,9]

    function sonucuBul(sayilar) {
        const yeniSayilar = sayilar.filter(function(sayi){
            if(sayi % 2 !== 0){
               return  sayi;  
            }
            
         })

        console.log("tek sayilar " + yeniSayilar);


        const karesiAlinanlar = yeniSayilar.map(function(sayi){
        return sayi * sayi 
        })

        console.log(karesiAlinanlar);

        const  sayimizWithReduce  =   karesiAlinanlar.reduce(function(birOncekiSayi,sayi){
        if(sayi>10){
        return  birOncekiSayi = birOncekiSayi + sayi 
        }else{
            return birOncekiSayi 
        }
                        
        },0)//toplama old icin 0 ile basladik carpma olsaydi 1 ile baslardik cunku 0 dersek sonucumuz herzaman 0 olur

        console.log(sayimizWithReduce);



    }

    //----------------------------------- arrowlu hali 

    function kisaVersiyonu(sayilar){
        return sayilar.filter(sayi =>   sayi % 2 !== 0)
        .map(sayi => sayi * sayi)
        .reduce((birOncekiSayi,sayi) =>  sayi >10 ? birOncekiSayi += sayi : birOncekiSayi  ,0)
           
    }
  
sonucuBul(sayilar)
 console.log(kisaVersiyonu(sayilar)); 




