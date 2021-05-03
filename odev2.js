/* ile rastgele sayı üretebilirsiniz. Bu fonksiyon 0 dahil - 1 hariç bir değer üretir mesela 0.56 gibi. Sonrasında bu ifadenin sonucunu istediğiniz aralığın üst sınıırıyla çarparsanız verilen aralıkta değer üretmiş olursunuz.

Mesela 0 ile 10 arasında bir sayı için (Math.random() * 10)+1 size 1 ile 10 arasında ki 10 da dahil sayı üretmiş olur.

Üretilen bu sayı ondalıklı olabilir bunu tam sayıya dönüştürmek için Math.floor() kullanabilirsiniz.

Küçük bir piyango oyunu tasarlayınız. Sistem iki basamaklı bir sayı üretmeli.
Kullanıcıdan da bu sayıyı tahmin etmesini istemelisiniz.
 
Eğer kullanıcı sayıyı tam olarak doğru bilirse 10000 TL;
Eğer kullanıcı sayının basamaklarını bilirse yani 65 yerine 56 yazmıssa 5000TL
Eğer kullanıcı şanslı numaranın sadece bir basamağını bilirse 1000 TL kazanır.*/

//Math.floor ukusuratlari kaldirmak icin kullaniyoruz 
let randomDeger = Math.floor(Math.random() * 90)+10; //her zaman iki basamakli sayilar olusturur
console.log("Random deger " + randomDeger);

let verdigimizDeger = parseInt(prompt("lutfen bir sayi giriniz iki basamakli","10"))

let degerimizinBirlerBas = verdigimizDeger % 10;
let degerimizinOnlarBasamagi = Math.floor(verdigimizDeger / 10);

console.log('verdgimiz deger ' + verdigimizDeger);

let randomDegerBirlerBas = randomDeger % 10;
let randomDegerOnlarBas = Math.floor(randomDeger / 10);

 

console.log(`uretilen sayinin birler basamagi ${degerimizinBirlerBas}  uretilen degerimizin onlar basamagi ${degerimizinOnlarBasamagi}  `);

if(verdigimizDeger === randomDeger) {
    console.log(`tebrikler 1000 tl kazandiniz  +verdigmiz deger  ${verdigimizDeger} Random deger ${randomDeger} `);
}else if (randomDegerBirlerBas === degerimizinOnlarBasamagi &&  randomDegerOnlarBas === degerimizinBirlerBas ){
    console.log(`tebrikler 500 tl kazandiniz verdgimiz degerin birler basamagi ${degerimizinBirlerBas} verdigmiz degerin onlar basamagi ${degerimizinOnlarBasamagi}`);
}else if(randomDegerBirlerBas ===degerimizinBirlerBas || randomDegerOnlarBas === degerimizinOnlarBasamagi){
    console.log(`tebrikler 100 tl kazandiniz`);
}else{
    console.log("sorry mate");
}