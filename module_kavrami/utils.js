class Ogrenci{
    constructor(ad,id){
        this.ad = ad
        this.id = id
        this.bilgilendirmeFonk()
    }   
    bilgilendirmeFonk(){
        console.log(`adim ${this.ad}  id ${this.id}`)
    }
}

const PI =3.14

function sayilariTopla(s1,s2){
    console.log(s1+s2)
}

function sayilariCarp(s1,s2){
    console.log(s1*s2)
}

  
function sayilariBol(s1,s2){
    console.log(s1/s2)
}


function selamVer(adiniz){
    console.log(`hosgeldiniz ${adiniz}`)
}

export {
    sayilariTopla,
    sayilariBol,
    selamVer,
    Ogrenci,
    PI
}

 
