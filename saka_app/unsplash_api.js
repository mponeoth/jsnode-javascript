class unsplashApi {
  constructor() {
    this.baseURL = 'https://api.unsplash.com';
    this.ClientID = 'Client-ID Mg8BUUq2TwB88PoLWd8ieMOHcF4qUIsl8tSjmhoHKVs';
    this.axiosNesne = axios.create({
      baseURL: this.baseURL,
      headers: {
        Authorization: this.ClientID
      },
      params:{
          query:'animal',
          count:1
      }
    });
  }

  async randomResimGetir() {
    try {
      const resimResponse = await this.axiosNesne.get('/photos/random');
      console.log(resimResponse.data[0].urls.regular);
      return resimResponse.data[0].urls.regular  ;
    } catch (err) {
      console.log(err);
      return 'https://www.google.co.uk/search?q=403+hata+kodu&sxsrf=AOaemvIwVkMep7n5_n6txgeKoWxtlW_AjA:1635848842614&source=lnms&tbm=isch&sa=X&ved=2ahUKEwif0a3pu_nzAhUk_7sIHfj6BFYQ_AUoAnoECAEQBA&biw=1920&bih=937&dpr=1#imgrc=9iO4QkiBVSNSwM'
    }
  }
}

export default function resimGetir(){
    const getirilenSaka =  new unsplashApi().randomResimGetir();
    return getirilenSaka
}
