//JS object oriented bir dildir ama bu onun Java, C# gibi oldugu anlamina gelmez 
//OOP bir aile ise, class based onunbir parcasidir diyebiliriz. protype-base gibi 

//Javascript is a multi-paradigm language that supports procedural, object-oriented  
//(prototype-based) and functional programming styles.


class Person{
    
    constructor(ad,soyad){
        this.adimiz = ad;
        this.soyadimiz = soyad;
    }
    selamVer(){
        return `adim ${this.adimiz} soyadim ${this.soyadimiz}`
    }   
}

class Ogrenci extends Person{

}

const muhammet = new Person("muhammet","kuruoglu")
console.log(muhammet);
console.log(muhammet.selamVer());

//----------------- Person dan ogrenciye genislettik Ogrencinin icine hic birsey yazmasak bile bizePersondakinin aynisini dondurur
const Enes = new Ogrenci("enes","yahya")
console.log(Enes);
console.log(Enes.selamVer());


//---- Peki eger ogrenciye yeni birsey eklemek istersek altsinif(Ogrenci) ustsinifin degerlerini kullanabilir fakat ust sinif altsinifinkini kullamaz   

class Person{
    
    constructor(ad,soyad){
        this.adimiz = ad;
        this.soyadimiz = soyad;
    }
    selamVer(){
        return `adim ${this.adimiz} soyadim ${this.soyadimiz}`
    }   
}

class Ogrenci extends Person{

    constructor(ad,soyad,sinif){
        super(ad,soyad), //ad ve soyad i git ustte yap demektir super
        this.sinif = sinif
    }

    sinifiSoyle(){
        return ` ben ${this.sinif}. dayim`
    }
}

const halil = new Ogrenci("halil","dag",12)

console.log(halil);

console.log(halil.sinifiSoyle());

const ayse = new Person("ayse","fatma",10) //sinifiniSoyle fonk. ogrencide kullanabiliriz Personda kullanamayiz mantiken personu genislettik ogrencinin icine

console.log(ayse.sinifiSoyle());


//---- eger istersek Persondaki selamVer() i begenmiyorsak extends yaptigimiz Ogrencinin icinde guncelleme yapabiliriz 


class Person{
    
    constructor(ad,soyad){
        this.adimiz = ad;
        this.soyadimiz = soyad;
    }
    selamVer(){
        return `adim ${this.adimiz} soyadim ${this.soyadimiz}`
    }   
}

class Ogrenci extends Person{

    constructor(ad,soyad,sinif){
        super(ad,soyad),  
        this.sinif = sinif
    }

    sinifiSoyle(){
        return ` ben ${this.sinif}. dayim`
    }

    selamVer(){
        return `adim ${this.adimiz} soyadim ${this.soyadimiz} sinifim ise ${this.sinif}`
    }       
}

    const emre = new Ogrenci("emre","ali",22)
    console.log(emre);//Ogrenci {adimiz: "emre", soyadimiz: "ali", sinif: 22}
    console.log(emre.selamVer());//adim emre soyadim ali sinifim ise 22

    
//----- static olarak  fonk. ve sayac olusturma 
    
    class Person{
        
        static sayac =0

        constructor(ad,soyad){
            this.adimiz = ad;
            this.soyadimiz = soyad;
            Person.sayac++; 
        }
        selamVer(){
            return `adim ${this.adimiz} soyadim ${this.soyadimiz}`
        }   
    }

    class Ogrenci extends Person{

        constructor(ad,soyad,sinif){
            super(ad,soyad),  
            this.sinif = sinif
        }

        sinifiSoyle(){
            return ` ben ${this.sinif}. dayim`
        }

        selamVer(){
            return `adim ${this.adimiz} soyadim ${this.soyadimiz} sinifim ise ${this.sinif}`
        }       
        static test(){
            console.log("ben bir static testim");
        }
    }

    const emre = new Person("emre","hasan")

    console.log(emre); //1

    
    const hasan = new Person("hasan","enre")

    console.log(hasan); //2

    const yunus = new Ogrenci("yunus","kahya",12)

    console.log(yunus);
    console.log(yunus.selamVer());

    //biz herbir Obje(nesne) olusturdugumuzda kutularimiz olusur emre hasan yunus gibi 3 tane kutu olustu ve sayacdada 3 kisi  gozuktu

    console.log("olusturulan Person" +  Person.sayac); // kactane Person olusturulduysa onu bize gosterir


    Ogrenci.test() //static  fonk. da olusturabiliriz ama bu sekilde cagirmaliyiz staticde bizim olusturdugumuz objelere ozgu degerimiz yok hasan gibi ayse gibi o yuzden bu sekilde cagirmaliyiz



    

    