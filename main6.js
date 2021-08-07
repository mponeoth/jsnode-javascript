//2 explicit bindings
// call , bind , apply

const emre={
    ad:'emre',
    yas:32,
    okul:'ege'
}

const hasan={
    ad:'hasan',
    yas:22,
    okul:'marmara'
}

    const bilgilerimiYazdir = function(){

        console.log(this) //{ad: "hasan", yas: 22, okul: "marmara"}
        console.log(`benim adim ${this.ad} yasim ${this.yas} okulum ${this.okul}`) //benim adim hasan yasim 22 okulum marmara
    }

    bilgilerimiYazdir.call(hasan) //call: ilgili fonk. verdigimiz contexe gore cagirir hasani cagirdik 
   

    const bilgilerimiYazdir1 = function(...args){

        console.log(this) //{ad: "hasan", yas: 22, okul: "marmara"}
        console.log(`benim adim ${this.ad} yasim ${this.yas} okulum ${this.okul}`) //benim adim hasan yasim 22 okulum marmara
        console.log(`sevdigim renler ${args} `)
    }

    bilgilerimiYazdir1.call(hasan , 'kirmizi' ,'maviss') //ikinci ve ucuncu bize parametreleri verir renk1 ve renk2 ye ulasiriz

    bilgilerimiYazdir1.apply(hasan, ['kirmizi','mavi23','turuncu'])//call ile aynidir sadece tek fark apply da dizi icerisine yazilir  

    const cagir =bilgilerimiYazdir1.bind(hasan,'gumus','siyah') //call apply ve bind  hepsi ayni gorevi gorur tek bind da ise bi yere atama yapmaliyiz ondan sonra cagirmaliyiz calismasi icin
   
    cagir()//sevdigim renler gumus,siyah 


    //new Binding

    const araba = function(renk , model){
        this.renk = renk;
        this.model = model;
        this.sevdigimAraba = function(){
            console.log(`sevdigim renk ${this.renk} en sevdigim model ${this.model} `) 

        }

    }

    const markam = new araba("kirmizi " , 2002)
    markam.sevdigimAraba() //sevdigim renk kirmizi  en sevdigim model 2002 
      

    console.log(this) //herzaman windowu gosterir hic nesne kullanmasak bile 


