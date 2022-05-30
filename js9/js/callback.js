//callbacks

const cars = [
    {
        brand: "Lada",
        model: "Vesta"
    },
    {
        brand: "Dacia",
        model: "Lohan"
    },
    {
        brand: "Rolls-Royce",
        model: "Phantom"
    }
]

//returnarea masinilor peste un interval de timp

function getCars() {
      setTimeout(() => {
// console.log("Hello")

let outPut=''
cars.forEach((car, index) => {
    //template string
    outPut += ` <h3>${car.brand}</h3>
    <span>${car.model}</span>`
    
})
document.body.innerHTML += outPut
      }, 3000);  
}

// getCars();

function addCar(car, callback) {
    setTimeout(() => {
        cars.push(car),
        callback() //poate avea orice alta denumire
    },3000)

}

addCar({
    brand: "Renault",
    model: "Megane"
},
getCars

)