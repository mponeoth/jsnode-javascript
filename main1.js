console.log(sayi)//undefined

a()//merhaba

console.log(sayi)//undefined
var sayi = 1;
var sayi = 2;

console.log(sayi)//2

a()//merhaba
function a() {
    console.log('naber')
}
a()//merhaba
function a() {
    console.log('merhba')
}
a()//merhaba

//2 soru

console.log(renk) /// undefined
var renk = 'mavi';// buradaki degisken funcition execution contexinin icerisine etkisi olmaz

var renginiSoyle = function () {
        console.log('en sevdigim renk ' + renk)// en sevdigim renk undefined 

        var renk ='yesil'
        console.log('en sevmedigim renk '  + renk)// en sevmedigim renk yesil
}

renginiSoyle()

//function decleration
function ad(){ }

//function expression
var dene = function () {  }

ad()
dene()

