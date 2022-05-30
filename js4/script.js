const numbers = [1, 2, 3, 4, 5]
const words = ['one', 'elephant', 'car', 'Moldova', 'Africa', 'Japan']
/*
const car = {
    brand: "Ford",
    model: "Mustang"
}
console.log(car)
*/

const cars = [
    {brand: "Ford", model: "Mustang", price: 17500},
    {brand: "Toyota", model: "RAV4", price: 25000},
    {brand: "Nissan", model: "Micra", price: 15000},
    {brand: "Mercedes-Benz", model: "E-Klasse", price: 15000},
    {brand: "Lamborghini", model: "Urus", price: 150000},
    {brand: "Nissan", model: "Qashqai", price: 15000}
]

// filter
// returneaza un tablou
const filteredWords = words.filter(function(word) {
    return word.length > 3
})
// console.log(filteredWords)

const bigNumbers = numbers.filter(number => number > 2)
// console.log(bigNumbers)

const cheapCars = cars.filter(car => {
    if (car.brand === "Nissan" && car.price < 20000) {
        return car
    }
})
// console.log(cheapCars)

// map
const biggerNumbers = numbers.map(number => {
    if (number > 2) {
        return number * 2
    } else {
        return number
    }
})
// console.log(biggerNumbers)

const newWords = words.map(word => {
    return "The new " + word + "!"
})
// console.log(newWords)

const carsOnSale = cars.map(car => {
    if (car.price > 20000) {
        car.price = car.price - (car.price * 5) / 100
        return car
    } else if (car.price > 100000) {
        car.price = car.price - (car.price * 15) / 100
        return car
    } else {
        car.price = car.price - (car.price * 2) / 100
        return car
    }
})
// console.log(carsOnSale)

// find
const Nissan = cars.find(function(car) {
    return car.brand === "Nissan"
})
// console.log(Nissan)

const negative = cars.find(function(car) {
    return car.price < 0
})
// console.log(negative)

const moldova = words.find(function(word) {
    return word === "Moldova"
})
// console.log(moldova)

const five = numbers.find(function(number) {
    return number === 5
})
// console.log(five)

/*
numbers.forEach(function(number) {
    number += 10
})

cars.forEach(function(car) {
    document.write(car.brand + " " + car.model + " " + car.price + "EUR<br>")
})
*/

// some
const someValue = numbers.some(function(number) {
    return number < 0
})
// console.log(someValue)

const someWords = words.some(word => word.length > 10)
// console.log(someWords)

const someCars = cars.some(car => car.brand === "Mercedes-Benz")
// console.log(someCars)

// every
const allValues = numbers.every(number => number > 1)
// console.log(allValues)

const allWords = words.every(word => word.length > 0)
// console.log(allWords)

const allCars = cars.every(car => car.price > 10000)
// console.log(allCars)

// includes
const includesOrNot = numbers.includes(-2)
// console.log(includesOrNot)

// reduce
const sumNumbers = numbers.reduce((sum, number) => {
    return number + sum
}, 0)
// console.log(sumNumbers)

const shopValue = cars.reduce((priceSum, car) => {
    return priceSum + car.price
}, 0)
// console.log(shopValue)

const games = [
    {gameName: "Minecraft", price: 25, releaseYear: 2006},
    {gameName: "Grand Theft Auto 5", price: 12.5, releaseYear: 2013},
    {gameName: "CS:GO", price: 0, releaseYear: 2012},
    {gameName: "Dota 2", price: 0, releaseYear: 2008},
    {gameName: "Cyberpunk 2077", price: 30, releaseYear: 2020}
]

/*
    1. forEach - pentru afisara jocurilor
    2.0 filter - afisa jocurile din anul 2010+
    2.1 filter - afisa jocurile cu pretul 10+
    2.2 filter - afisa jocurile gratuite
    3. map - reducere 
    (daca jocul este din 2010+ -> reducere de 10%, daca 2010- -> reducere de 25%)
    4. ruduce - afisa suma jocurilor
    5. console.log('Hello JS')
*/

// localStorage
/*
localStorage.setItem('name', 'Tristan')

const name = localStorage.getItem('name')
console.log(name)
document.write(name)

localStorage.removeItem('name')
*/

// sessionStorage
/*
sessionStorage.setItem('country', 'Moldova')

const country = sessionStorage.getItem('country')

sessionStorage.remove('country')
*/

// FORM
const form = document.getElementById('form')
// const inputLogin = form.getElementById('login')

function getData(event) {
    event.preventDefault()

    const login = document.getElementById('login')
    console.log(login.value)

    const password = document.getElementById('password')
    console.log(password.value)

    if (password.value.length < 3 || password.value.length > 30) {
        alert('Parola este prea scurta sau prea lunga!')
    }

    if (password.value === "password") {
        alert("Password can not be 'password'")
    }

    if (login.value === "tristan" && password.value === "qwerty123") {
        alert('Bine ai venit!!!!!!')
    }

    localStorage.setItem('login', login.value)
}

form.addEventListener('submit', getData)