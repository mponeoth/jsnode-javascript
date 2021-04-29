//console.log(++sayi3)
//console.log(sayi3)

//Aritmetik atama operatorleri
// +=, -=, *=, /=, %=
let sayi1 =10;
let sayi2 =4;
//sayi2 += sayi1// sayi2 = sayi2 + sayi1; =14
//sayi2 -= sayi1//sayi2 = sayi2 - sayi1; =-6
//console.log(sayi2)

console.log(sayi1>sayi2) //true 
console.log(sayi1!=sayi2) //esit degil (!=) ve true doner == esit anlamindadir kucuk esit (<=) buyuk esit (>=)

let yas = 30
let metinYas = '30'

console.log(yas == metinYas)//degerler karsilastirilir //true
console.log(yas === metinYas) //hem degere hem de veri tipine bakariz //false 
console.log(yas !== metinYas)//hem degere hem de veri tipine bakariz  //true

//mantiksal operatorler ve , veya 

console.log((sayi1<5) && (sayi2 <10)) //false her ikiside dogru ise ve 
console.log((sayi1<5) || (sayi2 <10)) //birisinin dogru olmasi yeterlidir veya 
