const lalibela = document.getElementById("lalibela_btn")
const axum = document.getElementById("axum_btn")
const harer = document.getElementById("harer_btn")



let hotel_access = (link)=>{
      const inMemoryToken = JSON.parse(localStorage.getItem('user'))
      
      try {fetch( "http://localhost:3000/users/hotels", {
            method: 'get',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${inMemoryToken.access_token}`,
            },
        } )
        .then( res => res )
            .then( res => {

                  console.log(res)
                 
                  if (res){
                location.href = `${link}`}
                
               
            } )}  catch(erro) {

                  location.href =  'login_page.html'
           
                }
}

lalibela.addEventListener("click", function(){
      hotel_access('lalibala_page.html')
})

axum.addEventListener("click", function(){
     hotel_access('Axum_page.html')
})

harer.addEventListener("click", function(){
      hotel_access('Harar.html')
})



