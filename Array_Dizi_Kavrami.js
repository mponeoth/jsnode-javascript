//Verileri bir arada tutan yapilara array (dizi) denir

let arabaMarka1 = "mercedes";
let arabaMarka2 = "BMW";
let arabaMarka3 = "Audio";

//bizler herbir araba markasi icin her defasinda degisken olusturmak zorunda degiliz 
//onun icin belli amaca hizmet eden verileri biz tek bir nesnede toplayabiliriz

let arabaMarkalari = ["mercedes " , "BMW " , "Audio "];
console.log(arabaMarkalari.toString());
console.log(arabaMarkalari[1]);//BMW
console.log(arabaMarkalari[10]);//undefined cunku 10 uncu dizimiz olmadigi icin 

arabaMarkalari[2] ="Pegeout "; //guncelleyebiliriz
arabaMarkalari[3] ="Honda ";
arabaMarkalari[4] ="Ctroen ";
arabaMarkalari[8] ="Suzuki";
console.log(arabaMarkalari[6]);//undefined 
console.log(arabaMarkalari.length);//9

//en buyuk index , dizi eleman sayisinin 1 eksigidir
//dizi eleman sayisi 20 ise en buyuk index 19dur

console.log("araba markalari :" + arabaMarkalari.toString());//:mercedes ,BMW ,Pegeout ,Honda ,Ctroen ,,,,Suzuki

for(let i = 0; i<arabaMarkalari.length; i++){   //index 0 dan basladigi icin let i=0 dedik

        console.log("for ile arabaMarkalari :" + arabaMarkalari[i]);//yukardan assagiya tek tek yazdirir mercedes ,BMW ,Pegeout ,Honda ,Ctroen,undefined(3),Suzuki
}

//------ eger yukaridaki gibi indexlerle ugrasmayip ben sadece dizindeki elemanlarimi gorucem diyorsak --------
console.log("**************************************");

for(oAnkiDiziElema of arabaMarkalari){ //1. dizimi alip oAnkiDiziElema na atip yazdiriyor sonra tekrar tekrar ayni islemi yapiyor ust ornektenin aynisini yapiyor
    console.log(oAnkiDiziElema);
}
console.log("***********************************************");


let yeniDizi = [1,"elma",true]
for(elemanlar of yeniDizi){
    console.log(elemanlar);
}