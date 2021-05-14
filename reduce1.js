//find metodu
const sayilar = [31, 22, 13, 43]
 
const yeniSayilar = sayilar.find(function(sayi){
        return sayi === 3
})

console.log(yeniSayilar);

//*********************************************** reduce with find  */

const findWithReduced = sayilar.reduce(function(pre,curr,index){

        console.log(pre,curr,index); //biz parametrelerimizin degerlerini gorebiliriz 
            if(curr === 31){
                return curr
            }else{
                return pre
            }
          
},undefined)//pre ilk basladiginda undefined olarak baaslar//undifined olarak basladik sayimizi bulamadigi zaman undefined doner eger [] verseydik buldugumuz sayiyi arreyin icine atar

console.log(findWithReduced);



// filter metodu  
  
const sayilar = [1, 2, 3, 4, 5, 6]

let yeniDizi = sayilar.filter(function(sayi,index){
        return sayi < 3
})

console.log(yeniDizi); //(2) [1, 2]

//**************************************************************** */ reduce filter ile

let filterWidthReduced = sayilar.reduce(function(pre,curr,index){
            if(curr >3){       //return e kadar olan hersey bizim reducer imiz oluyor ifden baslayip 
                pre.push(curr);
            }
           return pre;
   },[])  // 1 -> [] 2-> [] 3-> [4] bir oncekine 4 atti 4 ->[4,5] 5 -> [4,5,6]  6 ->[4,5,6] kaliyor elimde
 
console.log(filterWidthReduced);
