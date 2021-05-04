//SORU4 Kendi adınızı ekrana 5 kere yazdıran uygulamayı tüm döngülerle yapınız.

//for
/*
for (let i = 0; i < 5; i++) {
    console.log((i + 1) + " Emre Altunbilek");
}

//while
let sayac = 0;
while(sayac<5){
    console.log("muhammet kuruoglu while ile");
    sayac++;
}

let sayac2 = 0;
do{
    console.log("muhammet kuruoglu do while ile");//burada once yazdirir normalinkinden farki 
    sayac2++
}
while(sayac2<5);

*/

//SORU5 1’den 100’e kadar olan sayıların toplamını bulan uygulamayı yazınız.
/*let toplam = 0
for(let bas=1; bas<100; bas++){
    toplam += bas
    //toplam = toplam + i
    console.log(toplam);
}
*/


//SORU6 1’den 10a kadar olan sayıları sıra ile ve aralarında virgül olacak şekilde yazan bir uygulamayı for döngüsü ile yazınız.
/*
let siralanmisNo = "";
for(let i =1; i<=10; i++){

    if(i!=10){
        siralanmisNo = siralanmisNo + i +","
    }
    else{
        siralanmisNo = siralanmisNo + i  
    }
}
console.log(siralanmisNo);
*/

//Soru 7: Klavyeden girilen bir sayının faktöriyelini alan bir uygulama yazınız.
/*
let verilenDeger = parseInt(prompt("bir sayi girniz" ,"10"))
let faktoriyel = 1;

for(let i =1; i<=verilenDeger; i++){
    faktoriyel = faktoriyel *i;
}
console.log(`girdiginiz deger ${verilenDeger} faktoriyeli ise ${faktoriyel}`);
*/