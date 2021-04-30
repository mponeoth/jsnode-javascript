let haftaninKacinciGunu = 5;
/*
if (haftaninKacinciGunu ===1){
    console.log("pazatesi");
}else if(haftaninKacinciGunu ===2){
    console.log("sali");
}else if(haftaninKacinciGunu ===3){
    console.log("carsamba");
}else
console.log("herhangi bir gun ");
*/
        switch(haftaninKacinciGunu){
        case 1:console.log("pazartesi");break;
        case 2:console.log("sali");break;
        case 3:console.log("carsamba");break;
        case 4:console.log("persembe");break;
        case 5:console.log("cuma");break;
        case 6:console.log("cumartesi");break;
        case 7:console.log("pazar");break;
        default:console.log("gecersiz gun girilmistir");//sartlarin hicbiri degilse  
        //not:eger break yazmazsak verdigmiz degisken haricinde de true doner break demek true yu bul bitir demektir
        }
        console.log("breakten cikti");
