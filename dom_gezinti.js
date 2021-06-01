//------------------DOM elemanlari arasinda Gezinti 
let deger;

const myList = document.querySelector('ul.liste')
console.log(myList);

//cagirirken element olarak cagirmaliyiz

deger = myList.firstChild;//#text
deger = myList.firstElementChild // Bursa

deger = myList.lastChild;//#text
deger = myList.lastElementChild//sivas

//parent element 
deger = myList.parentNode;//body 
deger = myList.parentElement.parentElement //HTML

const myInput = document.querySelector('input')
console.log(myInput.parentElement); ;//<form id="formID" action="wwww.muhammetkuruglu.123@gmail.com"

deger = document.querySelector('li').nextElementSibling.nextElementSibling.previousElementSibling//sonraki sonraki onceki anlamindadir sadece kardesleri kontrol eder

console.log(deger);//istanbul 


//----------------------Eleman ekleme Silme ve Degistirme 

const yeniListeElemani = document.createElement('li');

yeniListeElemani.className = 'liste-item';
yeniListeElemani.textContent = 'kastamonu'; 
yeniListeElemani.id= 'yeni id'
yeniListeElemani.setAttribute('deger','yeni-deger')

document.querySelector('ul.liste').appendChild(yeniListeElemani)
console.log(yeniListeElemani);

//replace

const yeniKucukBaslik = document.createElement('h6')

yeniKucukBaslik.className = 'yeni classname'
yeniKucukBaslik.textContent = 'yeni content'
yeniKucukBaslik.id= ' yeni id'

const eskiBaslik = document.querySelector('h2')
const baslikParent = document.querySelector('body')
baslikParent.replaceChild(yeniKucukBaslik,eskiBaslik)

console.log(yeniKucukBaslik);

//remove

const listeItem = document.querySelector('li')
listeItem.remove()

const tumListeSil = document.querySelector('.liste')
tumListeSil.remove()

//---------------------------------------

document.querySelector('.liste').removeChild(document.querySelectorAll('li')[3])

const textBolumu = document.querySelector('input');

document.querySelector('form').removeChild(document.querySelector('input'))
