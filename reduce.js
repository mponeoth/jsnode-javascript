const sayilar = [1, 2, 3, 4, 5, 6]

//--- reduce un map metod versiyonu

const yeniDiziReduceIle  =  sayilar.reduce(function(birOncekiEleman,guncelEleman){
         birOncekiEleman.push(guncelEleman *2)
         return birOncekiEleman    //geriye sayi gondermek degil dizi gondermek istedigimiz icin returnden sonra birOncekiEleman yazdik
},[])//initial value olarak bos arrey ile basladik

console.log(yeniDiziReduceIle);//6) [2, 4, 6, 8, 10, 12]



---map metodu

const yeniDizi = sayilar.map(sayi => sayi *2)

console.log(yeniDizi);//6) [2, 4, 6, 8, 10, 12]



//suana kadar ogrendigimiz tum helper functionlari reduce ile yapabiliriz  

const sonuc = sayilar.reduce(function(toplam,curr,index){    //reduce adinda anlasilacagindan azaltmaktir islem yaparak sayilari azaltir
      return  toplam = toplam + curr; //once bir ile 2 yi alir toplar toplama atar sonra cikan sonucla 3 sonra cikan sonucla 4 u alip toplar yani ama azaltmaktir 
},0);//0 initiallition 

console.log(sonuc);


 --yukaridaki reduceile toplama islemi yapilisi alttaki function ile yapilisidir

function elemanlariTopla(){
    let topla = 0;
    for(let i = 0; i<sayilar.length; i++){
        topla = topla + sayilar[i]
    }
    console.log(topla);
}
elemanlariTopla()



