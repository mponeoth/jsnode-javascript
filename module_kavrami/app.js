import {sayilariTopla ,sayilariBol, selamVer, Ogrenci, PI } from './utils.js';

sayilariTopla(5,8)//13
sayilariBol(22,3)//7.333333333333333
selamVer('emre')//hosgeldiniz emre

const AlinanOgre = new Ogrenci('muhgammet',27)  //classlarda bu sekilde atamaa yapmaliyiz
console.log(AlinanOgre)//adim muhgammet  id 27
 
console.log(PI)  //3.14
 

//asagidaki ornekler kullanilmiyor artik 
//------------------------------------------------------------------------------------------------
//commonjs(sekrondur) ==>browserify , amd(asekron module definiton) ==>requires  //modulleri require olarak kullanmaniz icin bunu browserify olarak islememiz lazim fakat bunun kotu yani asekron calismaz sekron calisir   
//browserify i kurmak zorundayiz global olarak fakat node js de kurmak zorunda degiliz otomatik icinde var 
// const yardimciFonksiyonlar = require('utils')
// const yardimciFonksiyonlar2 = require('utils')
// const yardimciFonksiyonlar3 = require('utils')
// yardimciFonksiyonlar.ekle(2,6)

//     define(['m1','m2'])

//     function(m1import , m2import){
//         const module1 = m1import;
//         const module2 = m2import;

//         function test(){


//         }
//         return{
//             test
//         }
//     }

// NOT : eskiden kullanilan module islemleridir ama gunumuzde artik kullanilmiyor

//-----------------------------------------------------------------------------------------------





