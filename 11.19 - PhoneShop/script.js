// JSON
let phones = [
    {
        "brand": "iPhone",
        "model": "12 Pro",
        "price": "14500"
    },
    {
        "brand": "iPhone",
        "model": "11 Max",
        "price": "11500"
    },
    {
        "brand": "iPhone",
        "model": "13 Pro Max",
        "price": "25500"
    },
    {
        "brand": "Samsung",
        "model": "S9",
        "price": "15500"
    },
    {
        "brand": "Samsung",
        "model": "S10",
        "price": "19500"
    },
    {
        "brand": "Xiaomi",
        "model": "Mi 9",
        "price": "5500"
    },
    {
        "brand": "Xiaomi",
        "model": "Mi 7",
        "price": "3500"
    },
    {
        "brand": "Google",
        "model": "Pixel 4",
        "price": "13100"
    },
    {
        "brand": "Google",
        "model": "Pixel 3",
        "price": "7000"
    },
    {
        "brand": "OnePlus",
        "model": "7 Pro",
        "price": "7000"
    },
    {
        "brand": "OnePlus",
        "model": "8T",
        "price": "12500"
    }
]

// show phones
let phonesCon = document.querySelector(".con");

function showItems(arr) {
    arr.forEach(phone => {
        let phoneDiv = document.createElement("div")
        phoneDiv.classList = "phone"
    
        let phoneBrand = document.createElement("h3")
        let phoneModel = document.createElement("h4")
        let phonePrice = document.createElement("span")
    
        phoneBrand.textContent = phone.brand
        phoneModel.textContent = phone.model
        phonePrice.textContent = phone.price
    
        phoneDiv.append(phoneBrand, phoneModel, phonePrice)
    
        phonesCon.appendChild(phoneDiv)
    })
}

showItems(phones)

// select button
let select = document.getElementById("phone-brand")

function getSelectedPhone() {
    if (select.value === "All") {
        phonesCon.innerHTML = ""

        showItems(phones)
    } else {
        let phonesArr = phones.filter(phone => {
            return phone.brand === select.value
        })
        
        phonesCon.innerHTML = ""
        
        showItems(phonesArr)
    }
}

select.addEventListener("change", getSelectedPhone)

let ascBtn = document.getElementById("sort-asc")
let descBtn = document.getElementById("sort-desc")

ascBtn.addEventListener("click", () => {
    let ascArr = phones.sort((a, b) => {
        return a.price - b.price
    })

    phonesCon.innerHTML = ""

    showItems(ascArr)
})

descBtn.addEventListener("click", () => {
    let descArr = phones.sort((a, b) => {
        return b.price - a.price
    })
    
    phonesCon.innerHTML = ""

    showItems(descArr)
})