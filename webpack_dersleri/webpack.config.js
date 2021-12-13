//dort tane onemli kavramimiz var webpackde birisi entry digerleri output, loader, plug in `dir
//node js serverlar uzerinden calisir suan benim bilgisayarim aslinda bir server gibi davraniyor
// mesela benim pc c12/muhamnmettir baska pc ise c14/emre dir herkesin pc si farklidir bu gibi durumlari bizim dinamik olarak cozmemiz gerekiyor. o yuzden require olarak almamiz gerekiyor
//path i kullanarak bunu bulabiliriz 
//mode un bircok tanimli olani var bunlardan development, production gibi biz buna development dedigimiz zaman hala gelisim asamasinda old. soyluyoruz ve bizim kodlarimiz hangi satirda olduklarini bize gosteriyor 
//CleanWebpackPlugin bizim olusan main2 2asssdsdsd main2 sdsdsdsd  eski dosyarimizi supurmek icin kullaniriz 
//catch kavrami bir web sitesine gittigimizde orn emrealtunbilek.com a gidiyoruz ilk acilis genellikle sitelerde yavas olur sonrakilere gore network kismina gidip js ve css kisimlarina bakmak istiyorum dosyalar getiriliyor yanlarinda size`a 
//baktigimizda diyor ben bu dosyayi catchden cektim ben bu dosyayi (memorycatch) den cektim diye yazi goruruz  ben burada control + f5 bu cacth mekanizmasini iptal etmis oluyoruz ve ve dosyalarimizi catchden degil serverdan cekmis oluyoruz 


const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path')

module.exports = {
    entry:'./src/index.js', //ilk once nerden calismaya baslamasi gerektigini soyluyoruz
    output:{//amacimiz ise bir output olusturmak
        filename:'main2.[contenthash].js', //surada olusturularacak yerin tam yolunu veriyor 
        path: path.resolve(__dirname,'dist') 
    },
    mode:'development',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
        template:"./src/index.html"
    })],
    module: {
        rules: [
            {
              test: /\.s[ac]ss$/i,
              use: [
                // Creates `style` nodes from JS strings islem onceligi 3 
                "style-loader",
                // Translates CSS into CommonJS islem onceligi 2 
                "css-loader",  
                // Compiles Sass to CSS islem onceligi 1 
                "sass-loader",   
              ],
            },
          ],
      },
}


//JSON dosyasinda yaptigim degisiklik
// "scripts": {
//     "start": "webpack --config webpack.config.js" // npm start olarak cagirmamiz yeterli olur
//   },

