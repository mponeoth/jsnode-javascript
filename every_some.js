const sayilar = [1,2,3,4,5,6]

const sonuc = sayilar.every(function(sayilar){  //every metodu butun hepsi bu sarti sagliyacak anlamindadir hepsi bu sarti sagladigi zaman true doner true false ile sonuc verir
      return  sayilar<10
})

const someSonuc = sayilar.some(function(numaralar){//birtane bile dogru varsa true doner every de hepsi some sadece sadece biri dogru olmasi yeterli true olmasi icin
      return  numaralar<10  
    })

console.log(sonuc);//true
console.log(sosomeSonucnuc);//true 