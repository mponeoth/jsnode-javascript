class translateAPI{
        constructor(ingilizceSaka){
            this.baseURL ='https://translation.googleapis.com/'
            //https://translation.googleapis.com/language/translate/v2?target=tr&key=AIzaSyD-H9NZ61Jt3fBXSZhq3UY5jGzAdryUVeA&q=car
            this.aranacakCumle = ingilizceSaka;
            this.axiosNesnesi = axios.create({
                baseURL : this.baseURL, 
                params:{
                    target:'tr',
                    key:'AIzaSyD-H9NZ61Jt3fBXSZhq3UY5jGzAdryUVeA',
                    q:this.aranacakCumle
                }
            })

        }

        async ceviriYap(){
            try{
                const ceviri = await this.axiosNesnesi.get('language/translate/v2')
                console.log(ceviri.data.data.translations[0].translatedText)
    
                return ceviri.data.data.translations[0].translatedText

            }
            catch(err){
                console.log(err)
            }
        }

}

    export default function ceviriliYapilacak(ceviri){
        const ceviriler =  new translateAPI(ceviri).ceviriYap()
        return ceviriler
    } 

