const kisiler = [
    {id:1,ad:'emre1'},
    {id:11,ad:'emre11'},
    {id:111,ad:'emre111'},
    {id:1111,ad:'emre1111'},
    {id:2,ad:'emre2'},
    {id:22,ad:'emre22'},
    {id:222,ad:'emre222'},
    {id:2222,ad:'emre2222'},
]
//-------------Higher Order Function da nasil yazariz 


function kendiMapMeodum(dizi,mapSarti){
     let geciciDizi = []
    for(let i =0; i<dizi.length; i++){
        let arananlar = mapSarti(dizi[i])
        if(arananlar){
          return geciciDizi = dizi[i]
        }
    }
 }

console.log(kendiMapMeodum(kisiler,veriCek => veriCek.id === 111)); 



//-------------------------------------  
-----kisa hali  metodu kullanarak


const alinanVeri = kisiler.find(kisi => kisi.id === 1)

console.log(alinanVeri);

---------------------------------------
 
----uzun hali  metodsuz


function findMetod(dizi){
     for(let i =0; i<dizi.length; i++){
         if(dizi[i].id ===11){
            return dizi[i]
         }
     }
 }

console.log(findMetod(kisiler)) //{id:11,ad:'emre11'},

 