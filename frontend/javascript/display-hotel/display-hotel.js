
const tablebody = document.querySelector("tbody")
const imageContainer = document.querySelector(".carousel-inner")
const lalibela= document.getElementById('Lalibela')
const harar= document.getElementById('Harar')
const axum=  document.getElementById('Axum')
console.log(['axum',axum],['harar',harar],['lalibela'],lalibela)

async function display(){
    let Site;
    if (lalibela){
        Site="Lalibela"
    }
    if (harar){
        Site="Harar"
    }
    if (axum){
        Site="Axum"
    }
    const response =await fetch(
        "http://localhost:3000/hotels?"+  new URLSearchParams({
            tourismSite:Site
        }),
        {
            method: "GET",  
        }
    )
    const data = await response.json();
    let tempTableBody = ""
    let imageBody = ""

    
    data.forEach(dt =>{
        tempTableBody += `
            <tr class="table-row">
                <th scope="row" class="hotel--name">${dt.name}</th>
                <td class="hotel--price">${dt.price}</td>
                <td class="hotel--rate">${ dt.rating}</td>
                <td >${dt.location}</td>
            </tr>  `
        imageBody+=`
        <div class="carousel-item" data-bs-interval="2000">
            <div class="card">
            <img src="${dt.picturePath}" class="d-block w-100" alt="photo of ${dt.name}" style="height:500px;">
            <div class="card-body">
                <h3 class="card-text">${dt.name}</h3>
            </div>
            </div>
      
        </div>`
        
    })
    tablebody.innerHTML = tempTableBody
    imageContainer.innerHTML = imageBody
    imageContainer.childNodes[1].classList.add('active')
}

display()