//------- klasik fonksiyon kullanimi 
function selamVer(){
    console.log("selam veriyorum");
}
selamVer()

const selamAliyorum = function(){
    console.log("selam aliyorum ");
}
selamAliyorum()
//----------        Arrow Fonksiyonu kullanimi 
const fatArrow = _ =>{
    console.log("merhaba fatArrow");
}
fatArrow()

//-----------        klasik function kullanimi

function karesiniAl(sayi){
    return sayi * sayi
}

function karesiniAlDegisken(sayi){
    return sayi * sayi

}

console.log(karesiniAl(5));
console.log(karesiniAlDegisken(7));

//-----------      Array ES6 kullanimi

const karesiniAlArrow1 = (sayi) =>{
    return sayi * sayi
}
console.log(karesiniAlArrow1(12));

const karesiniAlArrow2 = sayi => sayi * sayi    //eger tek satirsa return kullanmamiza gerek yok

console.log(karesiniAlArrow2(10));

const sayilariTopla = (s1,s2) => s1+s2  //iki parametreli arrowlar

console.log(sayilariTopla(10,15));

const sayilariTopla2 = (s1,s2) =>{
    return s1+s2
}
console.log(sayilariTopla2(5,2));
//-------------- klasik hali

const sayilariTopla3 = function (s1,s2){
    return s1+s2;
}
console.log(sayilariTopla3(15,30));
