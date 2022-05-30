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




function addCar(car){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           cars.push(car)

           const error = false

           if(!error){
               resolve()
           }else{
               reject('error!')
           }

        }, 1500)
    })
}

addCar({
    brand: "Renault",
    model: "Megane"

})
.then(getCars)
.catch(err => console.log(err))