
//innterText dersek yazi gostericez anlamindadir innerHTML dersek html kodu gostericegimiz anlamina gelir 

    const yeniGorev = document.querySelector('.input-gorev')
    const yeniGorevEkleBtn = document.querySelector('.btn-gorev-ekle')
    const gorevListesi = document.querySelector('.gorev-listesi')

    yeniGorevEkleBtn.addEventListener('click', gorevEkleButonu)
    gorevListesi.addEventListener('click',gorevSil)


    function gorevSil(e){
        const tiklanilanEleman = e.target
        if(tiklanilanEleman.classList.contains('gorev-tamamlandi')){
            console.log('checked yapildi');
            tiklanilanEleman.parentElement.classList.toggle('gorev-tamamlandi') 
        }  
        if(tiklanilanEleman.classList.contains('gorev-btn-sil')){
            tiklanilanEleman.parentElement.classList.toggle('kaybol')//toggle varsa siler yoksa ekler 

             //tiklanilanEleman.parentElement.remove('gorev-tamamlandi')//eger biz bunu silmek istiyorsak kokten parentina gitmeliyiz
             console.log('Deleted');

             tiklanilanEleman.parentElement.addEventListener('transitionend',function(){ //transitioned  gerceklesen bir animasyon varsa bitmesini bekler 
                    tiklanilanEleman.parentElement.remove()
             })
        }  

    }


function gorevEkleButonu(e){
    e.preventDefault();
    
    //div olusturma
    const gorevDiv = document.createElement('div')
    gorevDiv.classList.add('gorev-item')

    //li olusturma
    const gorevLi = document.createElement('li')
    gorevLi.classList.add('gorev-tanim')
    gorevLi.innerText = yeniGorev.value
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
    
     //inputumuzu yazdiktan sonra bos birakmak icin 
     yeniGorev.value = ''

    //ul`ye olusturdugumuz divi ekleyelim 
    gorevListesi.appendChild(gorevDiv)

}



