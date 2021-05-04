//soru 1 klavyeden girilen 3 sayinin ortalalamsini alan bir uygulama yaziniz

// let alinanBirinciSayi = parseInt(prompt("birinci sayiyi giriniz ","1"))
// let alinanIkinciSayi =  parseInt(prompt("ikinci sayiyi giriniz","2"))
// let alinanUcuncuSayi =  parseInt(prompt("ucuncu sayiyi giriniz","3"))

// let toplamAlinan =Math.floor(alinanBirinciSayi + alinanIkinciSayi + alinanUcuncuSayi)/3;

// console.log(`alinan uc sayinin ortalamasi ${toplamAlinan}`);

//soru 2 klavyeden kenarlari girilen bir ucgenin cesidini veren uygulamayi yaziniz

// let aKenari = parseInt(prompt("a kenarini giriniz","a nin degeri"))
// let bKenari = parseInt(prompt("b kenarini giriniz","b nin degeri"))
// let cKenari = parseInt(prompt("c kenarini giriniz","c nin degeri"))

// //eskenar hepsi ayniysa //ikinz kenar ikisi ayniysa // cesitkenar ise hepsi farkliysa

// if((aKenari == bKenari) && (aKenari == cKenari)){
//     console.log("esKenardir");
// }else if(aKenari != bKenari && aKenari != cKenari && bKenari != cKenari){
//     console.log("cesitKenar");
// }else{
//     console.log("ikiz kenar");
// }   

//soru 3 klavyeden girilen vize ve final notlarina gore ogrencinin dersi gecip gecmedigini soyleyen bir uygulama 
//yaziniz (gecme notu 50 vizenin %40 finalin %60 gecerlidir)

// let vizeNot = parseInt(prompt("vize notunu giriniz","vize"))
// let finalNot = parseInt(prompt("final notunu giriniz","final"))

// let ortDonem = vizeNot*0.4 + finalNot*0.6

// if(ortDonem>=50){
//     console.log("sinifini gecti " + ortDonem);
// }
// else{
//     console.log("sinifta kaldi " + ortDonem);
// }