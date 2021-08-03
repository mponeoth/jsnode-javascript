//eger biz bir fonk tanimini veya degisken tanimini baska bir fonk. icinde yazmiyorsak bu bir global degiskendir

//mesela b u ornegimizde neden globaldan kacinmaliyiz kanitidir cunku tanimladigimiz bir degikende istemedigimiz sonuclar verebilir



let ad = 'emre'
let yas = 32

function a(){
    console.log(`selam ben ${ad} ve yasim ${yas}`) //selam ben hasan ve yasim 55
}

b()
a()

function b(){
    ad = 'hasan'
    yas=55
}

//bu sekilde olusturdugumuz IIFE yapilarina disardan erisemeyiz bu degiskenler burada yasiyor ve oluyorlar YANI GLOBAL OLARAK TANIMLAMAMIS OLURUZ 

(function(){
    let ad ='mami'
    let yas = 27
    console.log(" merhaba adim "+ad+" + " + yas)
})(); 

