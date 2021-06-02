//-----Klavye ve Form
const myform = document.querySelector('#form')
const isimKutusu = document.querySelector('#ad')

isimKutusu.addEventListener('keydown',tiklanma) //klavyey bastigimizda
isimKutusu.addEventListener('keyup',tiklanma) //elimizi cektigimizde calisir
isimKutusu.addEventListener('keypress',tiklanma) // klavyeden herhangi bir tusa bastigimizda calisir
isimKutusu.addEventListener('focus',tiklanma) //kutucugu tikladigimizda calisir
isimKutusu.addEventListener('blur',tiklanma) //kutucugu kutucuktan ciktigimizda calisir
isimKutusu.addEventListener('cut',tiklanma) //klavyeden birseyi kesitimizde calisir
isimKutusu.addEventListener('paste',tiklanma) //klavyeden birseyi yapistirdigimizda calisir
isimKutusu.addEventListener('input',tiklanma) //herhangi bir eleman yazildiginda tetiklenir


    myform.addEventListener('submit', tiklanma) //buraya click dediyebilirdik submit dedik sadece submit yapildiginda calisdemektir formun icindeki hersey calisir


function tiklanma(e){
    console.log(isimKutusu.value);
    document.querySelector('.link').textContent = isimKutusu.value //isimKutusu.value muzu istedigimiz yere  yazdira biliyoruz
    console.log( isimKutusu.value);// e.target bize zaten ismi verir e.target.value = isimKutusu.value  ikisi ilede value sunu alabiliriz
    console.log('event adi :' + e.type);
    e.preventDefault()
}


//------ change eventi herhangi bir degisiklik old. calisir


const sehirler = document.querySelector('#sehir')

sehirler.addEventListener('change',eventYakalama)


function eventYakalama(e){
    console.log(e.target.value);
    console.log('event Adi:' + e.type);
    e.preventDefault()
}


//------event bubbling ve delegation 


document.querySelector('.parent').addEventListener('click',e =>{
        console.log('parent');
})

document.querySelector('.child').addEventListener('click',e =>{
    console.log('child');
})

document.querySelector('.item').addEventListener('click',e =>{
    console.log('itemmm');
})


//------ genellikle boyle durumlarda parenti seceriz hepsini calistirmasi icin unku merhaba yazisinda ilki calisir digerleri calismaz

document.querySelector('.child').addEventListener('click' ,e =>{    //suan tum merhaba itemlari calisti cunku parentindan ulastik hepsine
        console.log('child');
})

//--------//tum itemlara ulasmada 2. yol // e.target.className kosulu ilede yapiya (itemlara) inebiliriz //classNamelerde yapiya ulasman icin class adlarini tam yazmaliyiz

document.querySelector('.child').addEventListener('click' ,e =>{    
     if(e.target.className == 'item child-item'){   
         console.log('merhaba tikladin');
     }
})

//classList de tam ad yazmamiza gerek yok fakat classNamede var


document.querySelector('.child').addEventListener('click',e =>{
    if(e.target.classList.contains('item')){    
        console.log('merhaba contains ile baglandin merhabaya');
    } 
})



//---- Bu tur yapilarda yapiya (item) lara ulasmak icin parenti secip o sekilde yapiya inicez child yerine parend parend yerine body ide secebilirdik