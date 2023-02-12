const manage = document.getElementById("manage")
const inMemoryToken = JSON.parse(localStorage.getItem('user'))
manage.style.display="none"


const logout = document.getElementById('logout')
logout.style.display = "none";

if (inMemoryToken){
    logout.style.display = "block";
}

logout.addEventListener("click", function(){
    localStorage.removeItem('user')
    location.href = "index.html"
})

fetch( "http://localhost:3000/users/", {
          method: 'GET',
          headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${inMemoryToken.access_token}`,
          },
      } )
      .then( res => res)
          .then( res => {
               
                if (res.ok){
              manage.style.display="block"}
             
          } );


async function display(){
            let html=``
            const inMemoryToken = JSON.parse(localStorage.getItem('user'))
             await  fetch( "http://localhost:3000/users/", {
                  method: 'GET',
                  headers: {
                      'Accept': 'application/json, text/plain, */*',
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${inMemoryToken.access_token}`,
                  },
              } )
              .then(res=>res.json())
              .then(data=>{
                  data.forEach(element => {
                      html+=`
                      
                  <tr >
                    
                      <td scope="row" id="${element.email}"><button class="delete-btn">delete</button></td>
                      <td><form id="form${element.email}"><input type="text" name='name' disabled value="${element.firstname}"></form></td>
                      <td><input form="form${element.email}" type="text" name='price' disabled value="${element.lastname}"></td>
                      <td><input form="form${element.email}" type="text" name="location" disabled value="${element.email}"></td>
                      <td><input form="form${element.email}" type="text" name="tourismSite" disabled value="${element.role}"></td>
                     
                    
                  </tr>
                  `
                 
                      
                  });
                  
              })
              let body=document.getElementById('body')
              body.innerHTML=html
              
              let del = body.querySelectorAll('.delete-btn')
              let update = body.querySelectorAll('.update-btn')
              
              
            if (del){
              del.forEach(btn=>{
              btn.addEventListener('click',deleteRow)
               
              } )
            }
            if (update){
              update.forEach(btn=>{
              btn.addEventListener('click',updateRow)
               
              } )
            }
          
            
      
              
      
      
         }
         if (!document.getElementById('managing')){
          display()
         }
          



         function updateRow(){
            
            let tableData=this.parentElement.parentElement.querySelectorAll('input')
            tableData.forEach(element=>{
              element.disabled=false
            })
            
            
      
      
            
            
            this.parentElement.innerHTML=`<button class="save-btn">save</button>`
            let save = body.querySelectorAll('.save-btn')
            if (save){
              save.forEach(btn=>{
            
              btn.addEventListener('click',saveRow)
               
              } )
            }
            
          }
       
    
          async function deleteRow(){
            const id =this.parentElement.id
            await fetch(`http://localhost:3000/users/${id}`,{method:'DELETE'})
            .then(res=>res.json())
            .then(data=>console.log(data))
            display()
      
          }

