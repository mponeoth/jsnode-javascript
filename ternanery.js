let a =10, b=5,c=0;

if(a>b){
    c= a+b
}else{
    c =a-b
}
console.log("c : degeri " + c);
// a buyuktur b ise (dogruysa) hemen soru isaretten sonraki satir calistir yanlissa digerini calistir buna ternary operator denir 
c = (a>b) ?  (a+b) : (a-b) 
console.log("calisiyor" + c);