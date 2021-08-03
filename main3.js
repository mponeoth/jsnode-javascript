//yaptigimiz break pointler uygulamamizi durdururur source kismindan yapiyoruz breakpointlerimizi 

var sayi = 10

function a(){

    function b(){
        function c(){
            console.log(sayi)
        }
        c()
    }
    b()
}

a()

//Scope yani kapsam bir degiskenin tanimli old. alan demekti

//JS function scope bir dildir Bir fonk. icerisinde tanimlandiysa fonk. icersinde herhangi bir yerden erisilebilir

function a() { //functionda bir bloctur
    var isim = 'emre' //ben vurda isim mi bircok kez tanimlayabilirim ve karisikliga sebeb olabilir baska bir 

    if(5>4){ //if bir blocktur 
    console.log(isim)
    var ad = 'adnan'
    }

    for(var i = 0; i<3; i++){//for bir blocktur
        console.log(isim)
        console.log(ad)
    }
    var ad = 'mahmut'
    console.log(ad)
}

a()


// let ve const ile olusturulan degiskenler block scopetur yani sadece olusturuldugu blogun icinde gecerlidir 
// let ve const ile tanimladigimiz bir degisken adini ayni isimle bir daha tanimlayamayiz
// let ve const da hoisting ozelligi yok yani sen beni kullanmak istiyorsan benim once tanimimi yap sonra beni cagir 
// var anahtar kelimesi function scope ozelliktedir let ve const ise block scopetur  ilgili blocklarin icinde gecerlidir  

// a fonk. icinde tanimladigimiz isim disarda tanimladigimiz isim birbirlerine karismadan calisir
 
function a() { 
    let isim = 'emre'

    if(5>2){
        console.log(isim)//emre
        let ad = 'yunus'
        console.log(ad)//yunus
    }

    console.log(isim)//emre
    //console.log(ad)

    //const degiskeni ile tanimlanmis bir seyi tekrardan degistiremeyiz fakat objelerde durum farkli
    const sabit = 'emre'
    sabit='yunus';
    

    //fakat let de degisiklik yapabiliriz
    let deger = 'elaa'
    deger = 'mevsimlelr'
    console.log(deger)
    

    const obj = { //objelerde degisiklik yapabiliriz
        ad:'ahmet',
        soyad:'altunbilek'
    }

    obj.ad = 'hasan'

    for(let i = 0; i<2; i++){
        console.log(i)
    }
 
    //var da hoisting olur 
    console.log(a)//undefined
    var a = 'mehmet' 
    
    
    //let ve const da hoisting yoktur
    console.log(b) //Uncaught ReferenceError: Cannot access 'b' before initialization
    let b = 'busra';
    

}
a()


let isim = 'ahmet'

function b(){
    console.log(isim)//ahmet
}
b()

var test = 'test'
let test1 = 'test1'
const test2 = 'test2'

// let ve const global objeye assing edilmez console dan this => stop icinde gorebiliriz global objelerimizi

