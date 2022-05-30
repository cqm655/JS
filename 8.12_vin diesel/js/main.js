$(document).ready(() => {
    $('#search-btn').click(() => {
        // console.log($('#movie-name').val())
        let movieName = $('#movie-name').val()
        showMovies(movieName)
    })
}) // int main() {} -> void, int, float

// async function showMovies(name) {
//     // console.log(name)
//     const result = await fetch ('https://www.omdbapi.com/?apikey=451f145b&s=' + name)
//     // console.log(result)
//     const data = result.json()
//     console.log(data)
// }

function showMovies(name) {
    fetch ('https://www.omdbapi.com/?apikey=451f145b&s=' + name)
        .then(result => result.json())
        .then(data => {
            // console.log(data)
            // console.log(data.Search)
            let movieList = data.Search
            let output = ''
            $.each(movieList, (index, movie) => {
                console.log(movie)
                output += `
                    <div class="movie">
                        <img src="${movie.Poster}">
                        <h3>${movie.Title}</h3>
                        <span>Year: ${movie.Year}</span>
                        <a onclick="movieDetails('${movie.imdbID}')" class="btn btn-success" href="#">
                            Movie Details
                        </a>
                    </div>
                `
            })
            // innerHTML
            $('.movies').html(output)
        })
}

function movieDetails(movieId) {
    sessionStorage.setItem('movieId', movieId)
    window.location = 'movie.html'
}

function getDetails() {
    let movieId = sessionStorage.getItem('movieId')
    // document.body.innerHTML += movieId
    fetch('https://www.omdbapi.com/?apikey=451f145b&i=' + movieId)
        .then(result => result.json())
        .then(data => {
            output = `
                <h3>${data.Title}</h3>
                <img src="${data.Poster}">
            `
            $('.movie').html(output)
        })
}