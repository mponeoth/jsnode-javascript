//for dongusu
//for(ilk atama ; dogru_calistirma_sarti ; her_calisma_sonrasi_ne_olacak)

for(let i=0; i<10; i++){
    console.log("for denemesi yaptim");
}
for(let k=0, j=0; (k+j)<20 ; k=k+5,j=j+2){
    console.log("dongu calisti");
    console.log("k degeri " + k + "j degeri " + j);
}

//noktali virgul koyarsak sadece bir kere calisir fordan sonra noktali virgul olmaz 
//forun icindeki i degeri sadece forun icinde calisir disarida calismaz 
for(let i =0; i<5; i++); {
    console.log("merhaba");
}

let j;  //fakat bu sekilde disarida tanimlarsak calisir
for(j=0; j<6; j++){
    console.log("j tanimi" + j);
}
console.log("j ikinci versiyonu" +j);

/*
for(; ;){

}*/