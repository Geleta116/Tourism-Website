const email = document.getElementById('email')
const password = document.getElementById('password')
const login_submit = document.getElementById('submit')
const error = document.getElementById('error')


login_submit.addEventListener('click', function(e){

    let value = []

    e.preventDefault()

    if (!email.value){
        value.push('Please enter your email')
    } 

    if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        value.push('Invalid Email address')
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

        if (value.length == 3){

           

           
            error.innerText = `Please fill all the required fields`
            error.style.display = 'block'
        }
        else{

            error.innerText = value[0]

            error.style.display = 'block'
        }
     }

     else{

          
        
        fetch( "http://localhost:3000/users/login", {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( {

            "email": email.value,
            "password": password.value,

        } )
    } ).then( res => res.json() )
        .then( res => {
            
            let inMemoryToken = res.access_token;
            if (inMemoryToken){
            location.href = "index.html";
            localStorage.setItem(`user`, JSON.stringify(res));
            }
            else{
            throw new Error('The user Already Exists')}
            
        } ).catch((erro) => {
            
            error.innerText=`wrong credentials`;
            error.style.display = "block";
          });
        
     }




})