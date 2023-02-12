
let del = body.querySelectorAll('.delete-btn')
let update = body.querySelectorAll('.update-btn')
async function display(){
    let html=``
     await fetch("http://localhost:3000/hotels")
      .then(res=>res.json())
      .then(data=>{
          data.forEach(element => {
              html+=`
              
          <tr >

              <td scope="row" id="${element._id}"><button class="delete-btn">delete</button></td>
              <td><form id="form${element._id}"><input class='input' type="text" name='name' required disabled value="${element.name}"></form></td>
              <td><input form="form${element._id}" class='input' type="number" name='price' required disabled value="${element.price}"></td>
              <td><input form="form${element._id}" class='input' type="text" name="location" required disabled value="${element.location}"></td>
              <td>
                <select class="form-select input" name="tourismSite" form="form${element._id}" disabled>
                    <option selected hidden>${element.tourismSite}</option>
                    <option value="Axum">Axum</option>
                    <option value="Harar">Harar</option>
                    <option value="Lalibela">Lalibela</option>
                </select>
              </td>
              <td><input form="form${element._id}" class='input' type="number" required name='rating' step="0.1" min="1.0" max="5.0" onkeypress="return false" disabled value="${element.rating}"></td>
              <td><a  href="${element.picturePath}" target='_blank'>picture</a></td>
              <td scope="row" ><button class="update-btn">update</button></td>
            
          </tr>
          
          `  
          });
          
      })
      let body=document.getElementById('body')
      if (body){
        body.innerHTML=html
      }
      
      
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
display()
function updateRow(){

    let tableData=this.parentElement.parentElement.querySelectorAll('.input')
    const id =this.parentElement.parentElement.childNodes[1].id
    tableData.forEach(element=>{
        element.disabled=false
    })
    this.parentElement.innerHTML=`<button type='submit' form="form${id}" class="save-btn">save</button>`
   
    let save = body.querySelectorAll('.save-btn')
    if (save){
        save.forEach(btn=>{

        btn.addEventListener('click',saveRow)
        
        } )
}

}
function doThis(){

}
async function saveRow(e){
    e.preventDefault()
    const form=this.parentElement.parentElement.querySelector('form')

    const id =this.parentElement.parentElement.childNodes[1].id

    const formData= new FormData(form)

    let data={}
    for (let [key,val] of formData){

        data[key]=val
    }
   
    


    await fetch(`http://localhost:3000/hotels/${id}`,{
        method:'PATCH',
        body:JSON.stringify(data),
        headers: {
        'Content-Type': 'application/json'
        }

    })
    .then(res=>res.json())
    .then(data=>{

        let tableData=this.parentElement.parentElement.querySelectorAll('.input')
        let dataValue=[]
        for (let key in data){
            dataValue.push(data[key])
        }
        let i=1
        for (; i< dataValue.length-2;i++){
            tableData[i-1].value=dataValue[i]

        }
        this.parentElement.parentElement.querySelector('a').href=dataValue[i]
        tableData.forEach(element=>{
            element.disabled=true
        })
    
    })
    .catch(err=>console.log(err))

    this.parentElement.innerHTML=`<button class="update-btn">update</button>`

    let update = body.querySelectorAll('.update-btn')
    if (update){
        update.forEach(btn=>{
        btn.addEventListener('click',updateRow)
        
        } )
    }

}
async function deleteRow(){
const id =this.parentElement.id
await fetch(`http://localhost:3000/hotels/${id}`,{method:'DELETE'})
.then(res=>res.json())
display()

}
const Hotel= document.getElementById('form')
Hotel.addEventListener('submit',addHotel)
 



async function addHotel(e){
    e.preventDefault()
    const formData=new FormData(Hotel)
    let responseFetch;
   try{
        responseFetch=await fetch("http://localhost:3000/hotels",{
           method:'POST',
           body: formData
      
       })
   
   }catch(e){
       document.querySelector('error').innerHTML=error.message
   }
   if (responseFetch?.ok){
       responseFetch
       .then(res=> res.json())
       .then(data=>console.log("success",data))
   
   }else{
       if (responseFetch?.status==400){
           document.querySelector('.error').textContent=`allowed files are png, jpeg jpg or gif`
       }
   }
   
   }