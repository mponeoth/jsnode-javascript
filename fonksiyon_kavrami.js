let toplam11 = 0;
let toplama12 = 0;

for(let i = 0; i<=10; i++){
    toplam11 = toplam11 + i;
}

for(let i = 0; i<=20; i++){
    toplama12 = toplama12 + i;
}
console.log(toplama12 + " " + toplama12);

selamVer()
function selamVer(){
    console.log("s.a cumleten");
}

let sayAl = sayiVer(10,2)
console.log("toplam :" + sayAl);

function sayiVer(x,y){
    console.log(x + " " + y);
    return 15 +30 ;//return dedgimizde bizim bunu bir degiskene atamamiz gerekir returnden sonra bir kod yazilmaz cunku ilgili fonk. cikilmasini saglar
}
console.log(typeof sayiVer);//function

belirliAraliktakiSayilariTopla(0,10)
belirliAraliktakiSayilariTopla(20,40)


function belirliAraliktakiSayilariTopla(baslangic,bitis){

        toplam = 0
        for(let i = baslangic; i<bitis; i++){
            toplam = toplam + i;
        }
        console.log(toplam);

}
//return lu hali
let toplama1 = belirliAraliktakiSayilariTopla1(0,10)
let toplama2 = belirliAraliktakiSayilariTopla1(20,40)

console.log("toplam1 = " + toplama1 + " toplam2 = " + toplama2);

function belirliAraliktakiSayilariTopla1(baslangic,bitis){

        toplama = 0
        for(let i = baslangic; i<bitis; i++){
            toplama = toplama + i;
        }
        return toplama
}