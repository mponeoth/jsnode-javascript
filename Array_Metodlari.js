let isimler = ["emre","Recep","Muhammet"]

console.log(isimler.toString());//metin olarak gormek istiyorsak toString() kullanmaliyiz
console.log((isimler.join(" | ")));

let elemanSayisi = isimler.push("kardelen ")//push metodunu elemansayisini bulmak icinde kullanabiliriz
console.log(isimler.toString() + "dizinin Eleman sayisi :" + elemanSayisi);

let DizidenCikarilanEleman = isimler.pop() //pop metodu sondaki diziyi cikartir 

console.log(isimler + " diziden cikarilan eleman :" + DizidenCikarilanEleman);

isimler.shift();    //basindaki elemani sola dogru  kaydirdigi icin  otomatik silinir
 
console.log(isimler.toString());

isimler.unshift("yeni eleman") //basina eleman eklemek istedigimizde unshift kullaniriz unshift ekler ve saga dogru kaydirir

console.log(isimler.toString());

delete isimler[1] //deletein calismasi icin index nosunu vermeliyiz silmek istedigimiz indexsin nosunu

console.log(isimler.toString() + " " +isimler[1]);//undefined cunku sildik

let sayilar = [1, 2, 3, 4, 5, 6, 7, 8]; //index no 0 1 2 3 4 5 6 7

sayilar.splice(8, 0, 9, 10); //8 den basla 0 hicbir elemani silme demektir 9 ve 10 ekle demektir anlami bastaki no bizim hangi indexse eklemek istedigimizle ilgilidir

console.log(sayilar.toString());

let silinenler = sayilar.splice(0,4) //anlami 0 dan basla 4 e kadar sil demektir ve sildiklerimi silinenlere at

console.log(sayilar.toString());//5,6,7,8,9,10

console.log(silinenler.toString());//silinenler 1,2,3,4 

console.log("*****************************************");//splice(bas,son,ekle,ekle,ekle,ekle) splice ilki nereden basladigi ikinci nereye kadar silinecegi sonralari no eklenecegini gosterir

sayilar.splice(0,4,10,11,12,13) //0 indexden 4 uncu index e kadar sil 10,11,12,13 no`larini ekle demektir

console.log(sayilar.toString());//10,11,12,13,9,10 9 ile 10 onceki degiskende kalmadir

let tekSayilar = [1,3,5];
let ciftSayilar =[2,4,6];

let sayilarim = tekSayilar.concat(ciftSayilar);//ilk tek sonra cift sayilari yazdirir 

console.log(sayilarim.toString());//1,3,5,2,4,6

let yeniDizi = sayilarim.slice(0,3);//sayilarin dizini(yerlerini) bozmadan sayilari aliriz 0,1,2 yani  3 tane elemani aldik yerlerini bozmadan kaynak dizimize dokunmadan

console.log("slice yapilan dizilerimiz :" + yeniDizi.toString() + " normalde dizilerimiz " + sayilarim.toString()); 
