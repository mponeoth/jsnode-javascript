//webpack json ve js disinda hicbirsey bilmez
//css dosyasi olur sass dosyasi olur typescript olur bu ve bunun gibi yapilar icin farkli loader kullaniyoruz
import Ogrenci from "./Ogreci"
import './sass/mysass.scss'

const ogrenci = new Ogrenci("emre")
ogrenci.ogrenciBilgisi()

console.log("merhaba")