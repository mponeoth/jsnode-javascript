for (let j=5; j<15;j++){
    console.log("for dongusu merhaba");
}


let sayi =5;
while(sayi<15){ //burada ise once bakar dogru mu yanlis mi diye
    console.log("Merhaba");
    sayi++;
}


let yas = 20;
do{
    console.log("Do while Merhaba");
    yas++;
}
while(yas<30) //once calistirir sonra bakar dogrumu yanlis mi diye

//break, continue

for(let i=0; i<50; i++){
    if(i==12){//12 esit oldugunda durdurur
        break;
    }
    console.log("break kullanimi");
}

for(let i=10; i<30; i++){
    if(i==15){// haric hepsini aliriz
        continue;
    }
    console.log("continue kullanimi" + i);
}

 