// 1) //Promiseler ve asycn await ornkleri 

    function getUser(id) {
            console.log(`${id} id numaramiz`)
   
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{ 

                resolve({ad:"muhammet", id:id})

            }, 2000);

            }) 

        }

    getUser(12345)
    .then(sonc => console.log(sonc))


//2)--------------------------------------------------------------------------------------

    function getCourses(user){
        console.log(`${user} id numaramiz`)
   
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{ 
            resolve(['java','js','flatter'])
        }, 3000);

        }) 
    }

    getCourses('muhammet')
    .then(courseDizileri =>{console.log(courseDizileri)})


//3)-----------------------------------------------------------------------------------------

    /// getUser daki adimizi getCourses da yazdirdik 

    function getUser(id) {
    console.log(`${id} id numaramiz `)

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ 

        resolve({ad:"muhammet", id:id})

    }, 2000);
    })}

    function getCourses(user){
    console.log(`${user} kullanicinin kurslari getiriliyor `)

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ 
        resolve(['java','js','flatter'])
    }, 3000);

    })}


    getUser(12345).then(user => {
    getCourses(user.ad).then(kurslarDizisi =>{
        console.log(kurslarDizisi)
    })
    })

//-----------------------------------------------------------------------------------------------
//4)

    function getUser(id) {
    console.log(`${id} id numaramiz `)

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ 

        resolve({ad:"muhammet", id:id})

    }, 2000);
    })}

    function getCourses(user){
    console.log(`${user} kullanicinin kurslari getiriliyor `)

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ 
        resolve(['java','js','flatter'])
    }, 3000);

    })}

    function getComments(kursAdi){
    console.log(`${kursAdi} isimli kursun yorumlari getiriliyor`)    

        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("kurs harika")
            },3500)

        })
    }


  // 1) YOLU  
    // getUser(12345).then(user => {
    // getCourses(user.ad).then(kurslarDizisi =>{
    //      getComments(kurslarDizisi[0]).then(yorum =>{
    //          console.log(yorum)
    //      })
    //    })
    // })

  //2)YOLU kisa hali  
    getUser(12323)
    .then(user => getCourses(user.ad))
    .then(kursDizisi =>getComments(kursDizisi[0]))
    .then(yorum => console.log(yorum)) 
    
//------------------------------------------------------------------------------------------------
//5) hata yakalama 

    function getUser(id) {
    console.log(`${id} id numaramiz `)

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ 

        resolve({ad:"muhammet", id:id})

    }, 2000);
    })}

    function getCourses(user){
    console.log(`${user} kullanicinin kurslari getiriliyor `)

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ 
        reject("kurslar getirilirken hata cikti")
        resolve(['java','js','flatter'])
    }, 3000);

    })}

    function getComments(kursAdi){
    console.log(`${kursAdi} isimli kursun yorumlari getiriliyor`)    

        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("kurs harika")
            },3500)

        })
    }

    //2) hali
    // getUser(12323)
    // .then(user => getCourses(user.ad))
    // .then(kursDizisi =>getComments(kursDizisi[0]))
    // .then(yorum => console.log(yorum)) 
    // .catch(hata => console.log(hata))


    //3) ve en kisa hali async fonksiyon bunu kullandigimizda try catch ile hatayi yakalariz  
    yorumlariGoster() 
    async function yorumlariGoster(){
        const userObje = await getUser(123232)
        const kurslarDizisi = await getCourses(userObje.ad)
        const yorum = await getComments(kurslarDizisi[0])
        console.log(yorum)
    }




//------------------------------------------------------------------------------------------------
//6) hata yakalama 

function getUser(id) {
    console.log(`${id} id numaramiz `)

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ 

        resolve({ad:"muhammet", id:id})

    }, 2000);
    })}

    function getCourses(user){
    console.log(`${user} kullanicinin kurslari getiriliyor `)

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ 
        reject("kurslar getirilirken hata cikti")
        resolve(['java','js','flatter'])
    }, 3000);

    })}

    function getComments(kursAdi){
    console.log(`${kursAdi} isimli kursun yorumlari getiriliyor`)    

        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("kurs harika")
            },3500)

        })
    }

    //3) ve en kisa hali async fonksiyon bunu kullandigimizda try catch ile hatayi yakalariz  
    yorumlariGoster() 
    async function yorumlariGoster(){

        try{
            const userObje = await getUser(123232)
            const kurslarDizisi = await getCourses(userObje.ad)
            const yorum = await getComments(kurslarDizisi[0])
            console.log(yorum)

        }
        catch(err){
            console.log("hata cikti " + err)
        }
    }



//promislerin yada asyc awaitleri kullanmadan once dektekleyip desteklemedigine bakmaliyiz browserimizin

