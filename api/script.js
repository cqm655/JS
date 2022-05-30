const countriesCon = document.getElementById("countries")

async function fetchCountries(){
    const response = await fetch('https://restcountries.com/v3.1/all')
    const countries = response.json()

    return countries
}
//await lucreaza mereu cu async, await va pune stop functiei pana cand
// fetch va primi toate datele
//await - omite anume blocari de cod cand info vine de pe server

async function renderCountries() {
    let countries = await fetchCountries()
    console.log(countries)
    countries.forEach(country => {
        let countryDiv = document.createElement('div')
        countryDiv.classList = 'country'

        countryDiv.innerHTML = `
        <img src='${country.flags['svg']}' alt='country flag' 
        width='250px'>
        <h3>${country.name.common}</h3>
        `;
        countriesCon.appendChild(countryDiv)
    })

}

renderCountries()


























// /*let p = new Promise((resolve, reject) => {
//     let a = 5+5;
//     if (a === 10){
//         resolve('Succes');
//     }else {
//         reject('Fail');
//     }
// })

// //then cuvant cheie care ne spune daca promisiunea a fost sau nu cu succes
// //message parametru, primit de sus de la ~resolve/~reject
// p.then((message) => {
//     console.log(message)
// }).catch((message) =>{
//     console.log('bye my dear connection ' + message)
// })
// */

// const goHome = new Promise((resolve) => {
//     resolve("the dog will be happy!")
// })

// // goHome.then((text) => {
// //     console.log(text + 'also and wife')
// // })

// const drinkBeer = new Promise((resolve, reject) => {
//     reject("Lose money!")
// })
// //folosim catch pentru a omite eroarea din consola
// drinkBeer.catch((text) => {
//     console.log("no more $...")
// })