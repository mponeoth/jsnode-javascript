let isim = "muhammet";//globaldir global olani function icinde ve disinda calisir

selamVer();

function selamVer() {
    let yas = 30; //localdir fakat local olan degiskenimiz fonksiyon disinda calismaz sadece icinde islevi vardir
    console.log("merhaba " + isim);
}
let yas = 50;
//let isim = "kemal"//daha onceden tanimladigimiz icin calismaz 
//console.log(isim);//
console.log("yas :" + yas);//50

//------------------------------------------------------------------------------------
//-- shadowed degiskeni 
let favoriRengim1 = "mavi"
favoriRengim(favoriRengim1)

function favoriRengim(renk){
    let favoriRengim1 = "turuncu"
    console.log("favoriRengim " + favoriRengim1);
}

console.log(favoriRengim1);
