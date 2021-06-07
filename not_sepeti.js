
//innterText dersek yazi gostericez anlamindadir innerHTML dersek html kodu gostericegimiz anlamina gelir 

        const yeniGorev = document.querySelector('.input-gorev')
        const yeniGorevEkleBtn = document.querySelector('.btn-gorev-ekle')
        const gorevListesi = document.querySelector('.gorev-listesi')

        yeniGorevEkleBtn.addEventListener('click', gorevEkleButonu)
        gorevListesi.addEventListener('click',gorevSil)
        document.addEventListener('DOMContentLoaded',localStorageOku) //ekrani yeniledikten sonrada ekrandan herhangi bir item gitmez

        function gorevSil(e){
            const tiklanilanEleman = e.target
            if(tiklanilanEleman.classList.contains('gorev-tamamlandi')){
                console.log('checked yapildi');
                tiklanilanEleman.parentElement.classList.toggle('gorev-tamamlandi') 
            }  
            if(tiklanilanEleman.classList.contains('gorev-btn-sil')){
                tiklanilanEleman.parentElement.classList.toggle('kaybol')//toggle varsa siler yoksa ekler 

                //tiklanilanEleman.parentElement.remove('gorev-tamamlandi')//eger biz bunu silmek istiyorsak kokten parentina gitmeliyiz
                const silinecekOlan = tiklanilanEleman.parentElement.children[0].innerText      
            
                localStorageSil(silinecekOlan)

                tiklanilanEleman.parentElement.addEventListener('transitionend',function(){ //transitioned  gerceklesen bir animasyon varsa bitmesini bekler 
                        tiklanilanEleman.parentElement.remove()
                })
            }  

        }


    function localStorageArrayeDonustur(){
            let gorevler;
        
            if(localStorage.getItem('gorevler') === null){
                gorevler = []
            }
            else{
                gorevler = JSON.parse(localStorage.getItem('gorevler'));
            }
        
            return gorevler 
    }


     
    function gorevEkleButonu(e){
        e.preventDefault();
        
        if(yeniGorev.value.length > 0){
            gorevItemOlustur(yeniGorev.value)

            //localStoragekaydet i buradan cagiriyoruz  deger olarak input a verdigimiz  degeri veriyoruz 
            localStorageKaydet(yeniGorev.value)
        
            //inputumuzu yazdiktan sonra bos birakmak icin 
            yeniGorev.value = ''    

        }
        else{
            alert('bos birakmayiniz')
        }

    
    }








    
    function localStorageKaydet(yeniGorev){
        let gorevler =localStorageArrayeDonustur() // arrey olusturup yeniGorev(input ile) push yapiyoruz
        gorevler.push(yeniGorev)
        localStorage.setItem('gorevler',JSON.stringify(gorevler))

    }

    //ekrana yazdirma islemi
    function localStorageOku(){
        let gorevler = localStorageArrayeDonustur()

        gorevler.forEach(function(gorev){ //yazdiklarimizi ekrana yazdirmak icin gorevItemOlustur(olusturulan elementler) u kullaniyoruz 
            gorevItemOlustur(gorev) 
        })
    }


    function gorevItemOlustur(gorev){ //olusturdugumuz elementlerimiz
        //div olusturma 
        const gorevDiv = document.createElement('div')
        gorevDiv.classList.add('gorev-item')

        //li olusturma
        const gorevLi = document.createElement('li')
        gorevLi.classList.add('gorev-tanim')
        gorevLi.innerText = gorev
        gorevDiv.appendChild(gorevLi)

        //tamamlandi butonu ekle
        const grvTamamButton = document.createElement('button');
        grvTamamButton.classList.add('gorev-btn');
        grvTamamButton.classList.add('gorev-tamamlandi');
        grvTamamButton.innerHTML= ' <i class="fas fa-check-square"></i>';
        gorevDiv.appendChild(grvTamamButton);

        //Sil butonu ekle
        const grvSilButton = document.createElement('button');
        grvSilButton.classList.add('gorev-btn');
        grvSilButton.classList.add('gorev-btn-sil');
        grvSilButton.innerHTML= '<i class="fas fa-trash-alt"></i>';
        gorevDiv.appendChild(grvSilButton);
        

        //ul`ye olusturdugumuz divi ekleyelim 
        gorevListesi.appendChild(gorevDiv)

    }


 
    function localStorageSil(gorev){ 
        // localstorageda array olusturma yapisi
    let gorevler = localStorageArrayeDonustur()

    
        //

        const silinecekElemanIndex = gorevler.indexOf('gorev')
        console.log(silinecekElemanIndex);
        gorevler.splice(silinecekElemanIndex,1)//anlami sadece tikladigimizi sil geri kalani birak 

        localStorage.setItem('gorevler',JSON.stringify(gorevler))
    }


