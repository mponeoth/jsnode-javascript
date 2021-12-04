class JokeApi{
    constructor(){
        this.baseURL = 'https://api.chucknorris.io'
        this.axiosNesne = axios.create({
            baseURL : this.baseURL
        })
    }

     async randomSakaGetir(){
         try{
            const sakaResponse = await this.axiosNesne.get('/jokes/random')
            console.log(sakaResponse)
            return sakaResponse.data.value

         }
         catch(err){
             console.log(err)
         }
        }
} 

    export default function sakaGetir(){
        const getirilenSaka =  new JokeApi().randomSakaGetir()
        return getirilenSaka
    }