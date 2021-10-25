   //javascript browserda yasar ve sizin dosya sisteminize erisme yetkisi yoktur suan ise live serverda(sunucuda) old. icin okudu 
   //eger live server da acmasaydik bize htttp ile baslayan bir dosya ver diye mesaj gonderecekti 
   //fetch in kullanimi size bir promise sagliyor 
   
    const btnTextGetir = document.getElementById('btn-text')
    btnTextGetir.addEventListener('click', getText)

   
        function  getText(e){
        e.preventDefault();

      //1)

      //   const fetchSonuc = fetch('./deneme.txt');
      //   fetchSonuc.then((response) =>{
      //       const responseText = response.text()
      //       responseText.then(sonuc =>{
      //          console.log(sonuc)
      //       })
      //   })
        
      

        //2)  kisa yolu 

            fetch('deneme.txt')
            .then(response => response.text())
            .then(sonuc => console.log(sonuc))
            .catch(hata => console.log(hata))//hata ayiklamak icin
         
         }

      
//----------------------------------------------------------------------------------------------
//deneme.txt deki klasorumuzun icindeki bilgileri ekranda gostericez consoleda degil bu sefer 
  
   const btnTextGetir = document.getElementById('btn-text')
   btnTextGetir.addEventListener('click', getText)
   
   const sonucDiv = document.getElementById('sonuc')
  

      function  getText(e){
       e.preventDefault();

    
       //2)  kisa yolu 

           fetch('deneme.txt')
           .then(response => response.text())
           .then(sonuc => sonucDiv.innerText =sonuc)
           .catch(hata => console.log(hata))//hata ayiklamak icin
        
        }


//---------------------------------------------------------------------------------------------
        //ogrenciler.json icindeki bilgileri ekrana yazdiriyoruz 

      const btnJsonGetir = document.getElementById('btn-Json')
      btnJsonGetir.addEventListener('click',getJSON)

         
     function getJSON(){

         fetch('ogrenciler.json')
         .then(response => response.json())
         .then(alim =>{
            let veriAl =''
            alim.forEach((ogr)=>{
               veriAl += `ogrencimizin adi ${ogr.ad} idm ${ogr.id} \n`
            })
            sonucDiv.innerText = veriAl
         })
         
      }
      
      
      