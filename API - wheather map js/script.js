$(document).ready(() => {
    let city = $('#city-name')
    let searchBtn = $('#search-city')
    let con = $('.con')
    con.hide()

    searchBtn.on('click', () => {
        let cityVal = city.val()
        if(cityVal.length > 3){
         $('.top-con').empty()

         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=4b8dc9e0c8e19ccc3d4386a15af6d842`)
              .then(response => response.json()) //primim valorile din api
              .then(weather => {    //in loc de "Weather poate fi orice nume, se initializeaza fara "let"
                  console.log(weather)
              

              if(Number(weather.cod) === 404){
                $('.top-con').append('<p class="error">City name does not exist</p>')
              } else {
                  con.fadeIn(1000)
                  $('#selected-city').text(weather.name)
                  $('#city-country').text(weather.sys.country)
                  $('#temperature').text(`${Math.round(weather.main.temp - 273.15)}°C`)
                  $('#humidity').text(`${weather.main.humidity()}%`)
                  $('#visibility').text(`${weather.visibility/1000}m`)
              }
                })
              
            }else{
             $('.top-con').append('<p class="error">City name too short</p>')
        }
              
    })
})