//dort tane onemli kavramimiz var webpackde birisi entry digerleri output, loader, plug in `dir
//node js serverlar uzerinden calisir suan benim bilgisayarim aslinda bir server gibi davraniyor
// mesela benim pc c12/muhamnmettir baska pc ise c14/emre dir herkesin pc si farklidir bu gibi durumlari bizim dinamik olarak cozmemiz gerekiyor. o yuzden require olarak almamiz gerekiyor
//path i kullanarak bunu bulabiliriz 
//mode un bircok tanimli olani var bunlardan development, production gibi biz buna development dedigimiz zaman hala gelisim asamasinda old. soyluyoruz ve bizim kodlarimiz hangi satirda olduklarini bize gosteriyor 


const path = require('path')

module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'main2.js', //surada olusturularacak yerin tam yolunu veriyor 
        path: path.resolve(__dirname,'dist') 
    },
    mode:'development'
}


//JSON dosyasinda yaptigim degisiklik
// "scripts": {
//     "start": "webpack --config webpack.config.js" // npm start olarak cagirmamiz yeterli olur
//   },

