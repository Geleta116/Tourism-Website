const error = document.getElementById('error')
const submit_button = document.getElementById('submit')
const first_name = document.getElementById('firstName')
const last_name = document.getElementById('lastName')
const email = document.getElementById('email')
const password = document.getElementById('password')


submit_button.addEventListener('click', function(e){
    let value = []

    e.preventDefault()

    if (!first_name.value){
        value.push('Please enter your first name')
    } 

    if (!last_name.value){
        value.push('Please enter your last name')
    } 

    if (!email.value){
        value.push('Please enter your email')
    } 


  

    if (!password.value){
        value.push('Please enter your password')
    } 
    if (password.value){
    
        if (password.value.length < 8){
            value.push('length of password should be more than 8 characters')

        }
    }
    

    if (value.length > 0){

        if (value.length == 5){

      

           
            error.innerText = `Please fill all the required fields`
            error.style.display = 'block'
        }
        else{
          
          
            error.innerText = value[0]

            error.style.display = 'block'
        }
     }

     else{

       
           const result = fetch( "http://localhost:3000/users/signup", {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( {

            "email": email.value,
            "password": password.value,
            "firstname":first_name.value,
            "lastname":last_name.value,
            // "role":"user"

        } )
    } )
    .then( res => res.json() )
        .then( res => {

            
            if(res.msg === 'User successfully registered'){
            
            location.href = "login_page.html"
            }
            else{
            throw new Error('The user Already Exists')}
            
        } )
           .catch((erro) => {
            // TypeError: Failed to fetch
            error.innerText=`This Email has already been used`;
            error.style.display = "block";
          });





  
        

        
     }



})

