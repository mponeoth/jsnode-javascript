//axios: suana kadar kullandigimiz bu fecthin yaptigi islemleri cok daha guzel bir sekilde ele alan ve surekli olarak promise donduren bir http kutuphanesidir ben bu kutuphaneyi kullanarak JS de http istekleri yapabilicem 
//bir npm paketi olarak kurabilriz.  axios u hem front end de hem de node js yani arka planda da istek yapmak istiyorsak kullanabiliriz 

    const getBtn = document.getElementById("getBtn");
    const postBtn = document.getElementById("postBtn")
    const putPatchBtn = document.getElementById("putPatchBtn")
    const deleteBTn = document.getElementById("deleteBtn")
    const ayniBtn = document.getElementById("ayniBtn")
    const headerBtn = document.getElementById("headerBtn")
    const hataBtn = document.getElementById("hataBtn")

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', postData);
putPatchBtn.addEventListener('click', putPatchData);
deleteBTn.addEventListener('click', deleteData);
ayniBtn.addEventListener('click', ayniAndaData);
headerBtn.addEventListener('click', customHeader);
hataBtn.addEventListener('click', hataData);

        function getData(){

    //1)
    // axios({
    //     method:"GET",
    //     url:"https://jsonplaceholder.typicode.com/users",
    //     params:{
    //         _limit:2
    //     }
    // }).then(response => sonucEkranaYazdir(response))
    //    .catch(hata => console.log(hata))
    //    .then(()=>console.log('basariliiii'))

    //2)
    // axios
    //     .get('https://jsonplaceholder.typicode.com/users',{
    //         params:{
    //             _limit:1,
    //         }
    //     })
    // .then(response =>sonucEkranaYazdir(response))
    // .catch(hata => console.log(hata))
    // .then(()=>console.log('basariliiii'))

    //3)
        axios('https://jsonplaceholder.typicode.com/users?_limit=1')  //soru isareti ? ile basliyorsa bir istekde bulunucam anlamina gelir query parametresi denir  _limit=1 diyerek sadece birinci id yi istedik 
            .then(response => sonucEkranaYazdir(response))
            .catch(hata => console.log(hata))
            .then(() => console.log('calistii'))
        }

        //axiosda JSONstringfy dememize gerek yok axios da tanimli zaten kendisi otomatik fech de ki gibi yapmak tanimlamak zorunda degiliz 
        function postData(){                                                   
            // axios.post('https://jsonplaceholder.typicode.com/posts', {
            //     title:'yeni baslik',
            //     body:'burasi body kismi',
            //     userId:53
            // })
            // .then((response) => sonucEkranaYazdir(response))
            // .then(()=> console.log('post edilmistir') );
        
            axios.post('https://jsonplaceholder.typicode.com/posts', {
                name:'muhammet',
                surname:'kuruoglu',
                email:'msmdmasd@ssss',
                id:80
              })
            .then((response) => sonucEkranaYazdir(response))
            .then(()=> console.log('post edilmistir') );
        
        }

        //PUT ile PATCH biz veri kaynagini guncellemek istedigimizde kullaniyoruz put ile kullanirsak sadece istedigimiz verileri kalir ve diger kisimlarin hepsini siler
        //PATCH  ile yaptigimizda diger alanlar kalir ve guncelledigimiz yerlerde degismis bir sekilde gelir ekrana  genel olarakda patch kullanilir 

        function putPatchData(){ 
            // axios.put('https://jsonplaceholder.typicode.com/users/1',{ //    /1 diye yazdigimiz ise request parametresi olarak geciyor  id 1 demektir 
            //     name:'muhammet'         //id si bir olanda ne olursa olsun sadece name ekle cikar ekrana demektir adrestir emaildir hepsini sil demektir bunun anlami sadece name ekle ve gostr
            // }) 
            // .then(response =>  sonucEkranaYazdir(response))
            // .then(()=>console.log('put calisti'))
            
            axios.patch('https://jsonplaceholder.typicode.com/users/1' ,{
                name:'mami',
                surname:'kuruoglu',
                email:'muhammet@gmaiol.com'
            })
            .then((response) => sonucEkranaYazdir(response))
            .then(()=> console.log('patch calisti '))

        }

        function deleteData(){
            axios.delete('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => sonucEkranaYazdir(response))
            .then(()=> console.log('calisti delete'))
        }

        function ayniAndaData(){
            //1)1.yol

            // axios.all([
            //     axios.get('https://jsonplaceholder.typicode.com/users'),
            //     axios.get('https://jsonplaceholder.typicode.com/posts'),
            // ]).then(response =>{
            //     console.log(response[0].data)
            //     console.log(response[1].data)
            //     sonucEkranaYazdir(response[0])
            // })
            
            //2) yol 
            axios.all([
                axios.get('https://jsonplaceholder.typicode.com/users'),
                axios.get('https://jsonplaceholder.typicode.com/posts'),
            ]).then(axios.spread((kullanicilar , postlar) => {
                console.log(kullanicilar.data)
                console.log(postlar.data)
                sonucEkranaYazdir(kullanicilar)
            }))
        
        }
    
        //interceptors request yollanmadan once birseyler yapicaksan bu yapiyi kullanabilirsin 

        axios.interceptors.request.use(config => {
           
            console.log(` ${config.url} urlimiz ${config.method} methodumuz ${config.timeout} timeoutumuz`)
            return config;
          })

        //interceptors response yollandiktan sonra birseyler yapicaksan bu yapiyi kullanabiliriz 

        axios.interceptors.response.use(response => {
           
            if(response.status ===200){
                response.status = 999
            }
             return response;
          },  error => {
            
            return Promise.reject(error);
          });


          // custom header token olusturarak sadece yertkisi olan kisilerin post yapmasini istedik assagidaki ornegimizde
          //config in headers:{'Content-Type' :'application/json',Authorization:'sizin token degeriniz'} kismina yani server a mesajimizi gonderdik 
          //boylelikle sadece yetkisi olanlar post u kullanabilecek 

          axios.defaults.headers.common['X-Auth-Token'] = 'api token degeri';  //assagidaki gibi (config yazip icini doldurmak) yazmak zorunda degiliz default degerei vererek de server a mesaj gondere biliriz 
          axios.defaults.headers.common['Mytoken'] = 'my token'; 

          const axiosNesnesi = axios.create({
            baseURL : 'https://jsonplaceholder.typicode.com',
            headers:{'X-Request-With': 'XMLHttpRequest' , 'token' : 'asdadsasdas'},  //'X-Request-With': 'XMLHttpRequest' yazmaliyiz zorunlu
          })

        function customHeader (){

            axiosNesnesi.get('/users').then(response => console.log(response))

            const config ={
                headers:{
                    'Content-Type' :'application/json',
                    Authorization:'sizin token degeriniz'
                }
            }

            axios.post('https://jsonplaceholder.typicode.com/users', {
                name:'muhammet',
                surname:'kuruoglu',
                email:'msmdmasd@ssss',
                id:80
              },config).then((response) => sonucEkranaYazdir(response))
                        .catch(hata=> console.log(hata));
        }

 

        function hataData(){
            axios('https://jsonplaceholder.typicode.com/usersss?_limit=1')   
            .then(response => sonucEkranaYazdir(response))
            .catch(hata =>  hatayiYazdir(hata))
            .then(() => console.log('get iustegi tamamlandi calistii'))
        }
        

        function hatayiYazdir(error){
            console.log(error)
            document.querySelector('.sonuc').innerHTML = `
            <article  class="container-lg" >
                        <article class="alert alert-primary" >
                            <div class="alert alert-danger"><h1 class="subtitle">Sonuc</h1></div>
                            <div class="alert alert-danger"><h1 class="title">
                               <pre>${JSON.stringify(error.response,null ,2)}</pre>  
                            </h1></div>
                        </article> 
                    </article>

            `
        }

        function sonucEkranaYazdir(response){
            document.getElementById('sonuc').innerHTML=`
                <article  class="container-lg" >
                        <article class="alert alert-success" >
                        INFO
                        <div class="alert alert-light" role="alert">
                            <div class="alert alert-danger"><h1 class="subtitle">status</h1></div>
                            <div class="alert alert-danger"><h1 class="title">${response.status}</h1></div>
                            </div>
                        </article> 
                </article>
            

                <article  class="container-lg" >
                        <article class="alert alert-success" >
                            DATA
                            <div class="alert alert-light" role="alert">
                            <div class="alert alert-danger"><h1 class="subtitle">headers</h1></div>
                            <div class="alert alert-danger"><h1 class="title"> 
                        <pre> ${JSON.stringify(response.headers,null,2)} </pre>
                            </h1></div>
                            </div>
                        </article> 
                    </article>


                    <article  class="container-lg" >
                        <article class="alert alert-success" >
                            CONFIG 
                        <div class="alert alert-light" role="alert">
                        <div class="alert alert-danger"><h1 class="subtitle">data</h1></div>
                        <div class="alert alert-danger"><h1 class="title"> <pre> ${JSON.stringify(response.data,null,2)} </pre></h1></div>  
                        </div>
                        </article> 
                </article>

                <article  class="container-lg" >
                    <article class="alert alert-success" >
                        CONFIG 
                    <div class="alert alert-light" role="alert">
                    <div class="alert alert-danger"><h1 class="subtitle">config</h1></div>
                    <div class="alert alert-danger"><h1 class="title"> <pre> ${JSON.stringify(response.config,null,2)} </pre></h1></div>  
                    </div>
                    </article> 
                </article>
            `
        }