$(document).ready(() => {
    showAll()
    let phoneName = $('#phone-name')
})

let phonesRow = document.querySelector(".row");
function showAll() {

    fetch('phoneApi.json')
        .then(response => response.json())
        .then(phone => phonesRow=phone)
        .then(phone => {
           
            let phonee = phone
            let output = ''
            $.each(phonee, (index, phone) => {
              
                output += `
                        <div class="col">
                           <h5>Brand: ${phone.brand}</h5>
                           <h5>Brand model:  ${phone.model}</h5>
                           <h5>Launch date: ${phone.launch}</h5>
                           <h5>OS: ${phone.os} </h5>
                           <h5>Chipset: ${phone.chipset} </h5>
                           <h5>Battery: ${phone.battery} </h5>
                           <h2>Price: ${phone.price} $</h2>
                           <img id="image" src="${phone.photo}">
                           
                        </div>
                        
                    `
                   
            })
            $('.row').html(output)
            
            
            
        })
}




let select = document.getElementById('phone-brand')

function getSelectedPhone() {
    if (select.value === "All") {
        showAll()
        
    } else {
        let phonesArr = phonesRow.filter(phonesCon => {
            return phonesCon.brand === select.value
            console.log(phonesRow)
        })

        phonesCon.innerHTML = ""
        
        showItems(phonesArr)
        console.log(phonesArr)
    }
}
select.addEventListener("change", getSelectedPhone)


let phonesCon = document.querySelector(".row");

function showItems(arr) {
    arr.forEach(phone => {
       
            let phoneDiv = document.createElement("div")
            phoneDiv.classList = "col"
            let phoneBrand = document.createElement("h5")
            let phoneModel = document.createElement("h5")
            let phoneYear = document.createElement("h5")
            let phoneOS = document.createElement("h5")
            let phoneBattery = document.createElement("h5")
            let phoneChipset = document.createElement("h5")
            let phonePrice = document.createElement("h2")
            let phoneImage = document.createElement("img")
            phoneImage.id="image"

            phoneBrand.textContent = phone.brand
            phoneModel.textContent = phone.model
            phonePrice.textContent = phone.price
            phoneYear.textContent = phone.year
            phoneOS.textContent = phone.os
            phoneBattery.textContent = phone.Battery
            phoneChipset.textContent = phone.Chipset
            phoneImage.src = phone.photo
            
            

            phoneDiv.append(phoneBrand, phoneModel,phoneYear, phonePrice, phoneImage,phoneOS,phoneBattery,phoneChipset)

            phonesCon.appendChild(phoneDiv)
            

        
        
    })
}

let ascBtn = document.getElementById("sort-asc")
let descBtn = document.getElementById("sort-desc")

ascBtn.addEventListener("click", () => {
    let ascArr = phonesRow.sort((a, b) => {
       
        return a.price - b.price
    })

    phonesCon.innerHTML = ""

    showItems(ascArr)
})

descBtn.addEventListener("click", () => {
    let descArr = phonesRow.sort((a, b) => {
        return b.price - a.price
    })
    
    phonesCon.innerHTML = ""

    showItems(descArr)
})

let selectRam = document.getElementById("ram")

function ram() {
    if (selectRam.value === "All") {
        showAll()
        
    } else {
        let phonesArr = phonesRow.filter(phonesCon => {
            return phonesCon.memory.ram === selectRam.value
            console.log(phonesArr)
        })

        phonesCon.innerHTML = ""
        
        showItems(phonesArr)
        console.log(phonesArr)
    }
}
selectRam.addEventListener("change", ram)

let selectMemory = document.getElementById("hard-memory")

function memory() {
    if (selectMemory.value === "All") {
        showAll()
        
    } else {
        let phonesArr = phonesRow.filter(phonesCon => {
            return phonesCon.memory.internal === selectMemory.value
            console.log(phonesArr)
        })

        phonesCon.innerHTML = ""
        
        showItems(phonesArr)
        console.log(phonesArr)
    }
}
selectMemory.addEventListener("change", memory)

let selectFind = document.getElementById("search-btn")

// function phoneName(){
//     let phoneName = $('#phone-name')

//     if(phoneName.value === phonesCon.brand){
//           console.log("Fdsf")
         
//         }
       
//     }

// selectFind.addEventListener("click", phoneName)

