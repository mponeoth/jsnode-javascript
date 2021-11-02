class Ekran{
    constructor(){
        this.btnSakaUret = document.getElementById('BtnsakaUret')
        this.btnSakaUret.addEventListener('click', ()=>this.sakaUretf()) //arrow func. kendi parendi yoktur globalde ne varsa onu alir bu yuzden arrow funk. kullandik bind(this) de diyebilirdik

    }
    async sakaUretf(){
        const randomResimGetir = await new unsplashApi().randomResimGetir() //await yapisiyla hepsi birbirini bekliyor once resim sonra saka sonra ceviri
        const randomSakaGetir = await new JokeApi().randomSakaGetir()
        const translateCevir = await new translateAPI(randomSakaGetir).ceviriYap()
        const tumSonuclar = {
            randomResimGetir,
            randomSakaGetir,
            translateCevir
        }

        this.ekranaSonuclariYazdir(tumSonuclar)
    }
    ekranaSonuclariYazdir(sonuclar){
        document.getElementById('sonuc').innerHTML=`
        <div class="card">

            <div class="card-body">
                <h5 class="card-title"></h5>
                <img src="${sonuclar.randomResimGetir}" alt="Girl in a jacket" width="500" height="600">
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.
                </p>
            </div>

        </div>  

            <h3 class="text-info">${sonuclar.randomSakaGetir}</h3>

            <h3 class="text-primary">${sonuclar.translateCevir}</h3>

        `
    }
}
