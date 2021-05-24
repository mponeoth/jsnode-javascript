let deger;

deger = window // document alert vd kullnadigimiz seyler wwindow un icindedir 
deger = window.document
deger = window.document.all.length 
deger = window.document.all[5]
deger = window.document.all[5] 
deger = window.document.all

let dizi = Array.from(deger)//dizi gibi olan ama aslinda dizi olmayan bu yapiyi diziye cevirdik 

dizi.forEach(item =>{ console.log(item);})  //dizilerle ilgili metodlari burada direk kullanamiyoruz suan diziye cevirip gonderdik Array.from ile

console.log(deger); //DOM Document Object  Model windowun icinde bulunan kullana bilecegimiz object yapisiyla bize modelleyen yapidir


deger = document.head
deger = document.body
deger = document.URL
deger = document.domain //domainini gosterir bize 

deger = document.forms[0].id    
deger = document.links[2].className
deger = document


console.log(deger);