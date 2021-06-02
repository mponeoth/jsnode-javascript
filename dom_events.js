// e.preventDefault() ayni sayfada birakir baska adrese goturmez bizi 
document.querySelector('.link').addEventListener('click',function(e){
        console.log('clicked');
        e.preventDefault()
})

//----------  function(e) deki (e) event nedir
document.querySelector('.link').addEventListener('click',function(e){
        let deger;
        deger = e       
        console.log(e); //bize event icinde ne varsa gosterir target , clientX clientY gibi
})

//---------- event icindeki target bize olayin gerceklestigi yeri verir 

document.querySelector('.link').addEventListener('click',function(e){
        let deger;
        deger = e.target       
        console.log(deger); //<a href="https://www.emrealtunbilek.com"  class="link">Blog sitem</a>
})

//--------- type ise tiklanma olayinin turunu belli eder 

document.querySelector('.link').addEventListener('click',function(e){
        let deger;
        deger = e.type      
        console.log(deger); //click turudur,dblclick,mousedown gibi
        e.preventDefault()
})


//---------- mouse ile yapabildigimiz eventler  

 
document.querySelector('.link').addEventListener('click', tiklanma) //tiklandiginda
document.querySelector('.link').addEventListener('dblcick', tiklanma)//iki kere tiklandiginda

document.querySelector('.link').addEventListener('mousedown', tiklanma) //basili tuttugumuzda calisir
document.querySelector('.link').addEventListener('mouseup', tiklanma) //biraktigimizda

document.querySelector('.container').addEventListener('mouseenter', tiklanma) //uzerine geldigimizde calisir 
document.querySelector('.link').addEventListener('mouseleave',tiklanma)//yazinin uzerinden ciktigimizda calisir

document.querySelector('.link').addEventListener('mouseover',tiklanma)//yazinin uzerinden gectigimizde calisir
document.querySelector('.link').addEventListener('mouseout',tiklanma)//yazinin uzerinden ayrildigimizda calisir

document.querySelector('.container').addEventListener('mousemove',arkaplanKordinatlari)

function tiklanma(e){
        let deger;
        deger = e.type
        console.log(deger);
        e.preventDefault()
}

function arkaplanKordinatlari(e){
        document.querySelector('.yazi').textContent = `X: ${e.clientX} Y: ${e.clientY}`;
        document.querySelector('.container').style.backgroundColor = `rgb(${e.clientX}, ${e.clientY}, ${e.clientX + e.clientY})`;
}





