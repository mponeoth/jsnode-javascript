//eger bir hava durumu ile ilgili bir uygulama istiyorsak onunla ilgili bir api kaynagi bulmamiz lazim veya haberle ilgili bize kalmis 
//veya NODEJS gibi bir teknolojiyi kullanarak kendi veri tabanimizdaki degerleri size sunacak bir API olusturmamiz gerekiyor 

//jsonplaceHolder dan veri cektik get orngimiz asagidaki  


    const btnJSON = document.getElementById('apiJSON') 
    const sonucDiv = document.getElementById('sonuc1')
    btnJSON.addEventListener('click', getJSON) 

    function getJSON(e){
        e.preventDefault()

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(sonuc => veriGoster(sonuc))


    }

    function  veriGoster(data) {
        let veriAl =``
        data.forEach((ogr) =>{
            veriAl += ` <li> ${ogr.name} </li> \n` 
        })
        sonucDiv.innerHTML = veriAl 
    }


    //-----------------------------------------------------------------------------------
    //post ornegimiz 
    
    const postJSON = document.getElementById('postJSON')
    postJSON.addEventListener('click' , postFnJSON)


    function postFnJSON(e){
        e.preventDefault()

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: 'deneme1 1 2 ',
              body: 'ikincisi body kismi ',
              userId:7
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));

    }

   

