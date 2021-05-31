//TEK ELEMENT SECICILER 

console.log(document.getElementById('baslik'))//js dersleri 

console.log(document.getElementById('baslik').className)//baslikSinif class adini gosterir

console.log(document.getElementById('baslik').id)//baslik id nin adini gosterir

//Stili degistirme 

baslik.style.backgroundColor = 'red'

baslik.style.color='white'

baslik.style.padding= '2rem'

//Icerik 

baslik.textContent= 'Bu yeni basligimiz ' //yazimizi degistirir

const test = baslik.textContent;

console.log(test);


baslik.innerHTML ='<img src="./avatar-1-1310x737.jpg" alt="">'

console.log(document.querySelector('h2')); //  <h2>Document Object Model</h2>
console.log(document.querySelector('#liste')); //id ye gore diyez isareti olmali  //<ul id="liste" class="liste">  </ul>
console.log(document.querySelector('.liste-item')); //<li class="liste-item">Bursa</li>
console.log(document.querySelector('ul li ')); //her zman ilk siradakini cagirir  //<li class="liste-item">Bursa</li>
console.log(document.querySelector('.link.link-google')); //    <a class="link link-google" href="www.google.com">Google</a><br>


const myList = document.querySelector('li')
myList.style.color = 'blue';


document.querySelector('li:last-child').style.color = 'orange'//sonuncuyu turuncu yaptu
document.querySelector('li:nth-child(2)').style.color = 'silver'//2.yi silver yapti
document.querySelector('li:nth-child(3)').style.color = 'red'//3.yu red yapti 


//------------------------------------------DOM COKLU ELEMAN SECILMESI VE DEGISTIRILMESI


const linkler = document.getElementsByClassName('link') //sinif adina gore arar cagirir class da link yazan hepsini alir
console.log(linkler[0]);//dizilere ulasir gibi ulasabiliriz 
console.log(linkler[2]);

linkler[0].style.color = 'red'
linkler[1].style.backgroundColor = 'silver'
linkler[2].textContent = 'INSTAGRAM LINKI' //yazimizi degistiririz
    
console.log(document.getElementsByClassName('liste-item'));////burada hepsini secer class da liste-item yazan 5()


console.log(document.querySelector('ul').getElementsByClassName('liste-item'));//burada ise ul icindeki listeitem lari cagirir 4()


const dizi = Array.from(linkler)
dizi.reverse(); //dizi metotudur once diziye cevirmeliyiz
dizi.forEach(item =>{
        console.log(item);
})

//getelementById dedigimizde bir elemanin sadece bir idsi olur 

const listeElemanlarim = document.getElementsByTagName('h4')

console.log(listeElemanlarim);//HTMLCollection [h4#baslik.baslikSinif, baslik: h4#baslik.baslikSinif]


const linkListesi = document.querySelectorAll('.link');  
console.log(linkListesi);//NodeList(3) [a.link.link-google, a.link.link-facebook, a.link.link-instagram]


const sehirler = document.querySelectorAll('li'); 
console.log(sehirler);//NodeList(4) [li.liste-item, li.liste-item, li.liste-item, li.liste-item]


const sehirlerTek = document.querySelectorAll('li:nth-child(odd)') //tek sayilari alir
const sehirlerCift = document.querySelectorAll('li:nth-child(even)')//cift sayilari alir

sehirlerTek.forEach(item =>{//html collection old. icin direk kullanabiliyoruz diziye cevirmemize gerek yok 
        item.style.color='silver'
})

for(let i = 0; i<sehirlerCift.length; i++){
        sehirlerCift[i].style.color='purple'
}

 