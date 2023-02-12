const error = document.getElementById('error')
const first_name = document.getElementById('firstName')
const last_name = document.getElementById('lastName')
const email = document.getElementById('email')
const login_submit = document.getElementById('submit')
const phone = document.getElementById('phone')
const contact_submit = document.getElementById('submit')









contact_submit.addEventListener('click', function(e){
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


    if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        value.push('Invalid Email address')
    }

    if (!phone.value){
        value.push('Please enter your password')
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

          
        location.reload()
     }



})
