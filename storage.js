// Local ve Session storage   //bu iki yapiyi veri saklamak icin kullaniyoruz
//local storage miz sadece stringlerle calisiyor 
//Local kalici Seession gecici kayit yapar kapatip actigimizda Session a kaydettigimiz veriler kaybolur 

localStorage.setItem('ad', 'muhammet')
localStorage.setItem('yas','32')

sessionStorage.setItem('isim','emre')

console.log(localStorage.getItem('ad')); //muhammet cagirmak icin key imizi yazmaliyiz

localStorage.removeItem('ad') //key i ad olan verimiz silindi

localStorage.clear(); //dedigimizde tum degerleri siler

//web api için JSON tercih edildiğini görüyoruz.

//varolan string yapisini JSON a donusturup oyle kaydetmeliyiz birden fazla bir yapiyi bir arada tutan yapi JS de arreylerdir bunu birden fazla verimizi kaydetmek icin yapiyoruz 
//normalde tek bir veri kaydediceksek JSON kullanmamiza gerek yok localStoragimize JSON kullanrak birden fazla verimizi yukleyebiliriz
//JSON.parse ise String formatindaki veriyi Javascript object yapar JSON.stringify metodu bir nesne alır ve string türünde dizgeye çevirir.
//--------------------------------------- 
///------------ekrana yazdirmak icin forEach li kullanimi 

    const ulListesi = document.querySelector('.liste')
    const isimDizisi = JSON.parse(localStorage.getItem('isimListesi'))

    if(isimDizisi != null){
        isimDizisi.forEach(function(isim){
            const yeniLi = document.createElement('li')
            yeniLi.textContent = isim 
            ulListesi.appendChild(yeniLi)
        })
    }

//---------------------

        document.querySelector('#form').addEventListener('submit', e =>{
        const yeniIsim = document.querySelector('.isim').value
        let isimDizisi;

        if(localStorage.getItem('isimListesi') === null){
            isimDizisi = [];
        }
        else{
            isimDizisi = JSON.parse(localStorage.getItem('isimListesi'))
        }
        isimDizisi.push(yeniIsim)

        localStorage.setItem('isimListesi' , JSON.stringify(isimDizisi))

        e.preventDefault()
    })




