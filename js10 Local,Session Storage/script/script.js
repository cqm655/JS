$(document).ready(() => {
    // console.log("fdsfsd")
    const popUp = $('#pop-up')
    popUp.hide()

    const popUpBtn = $('#pop-up-btn')
    popUpBtn.on('click', () => {
        // console.log("fdsfsd")
        popUp.fadeIn(1000)
    })

    const closePopUp = $('#close-pop-up')
    closePopUp.css('cursor', 'pointer')
    closePopUp.on('click', ()=> {
        popUp.fadeOut(1000)
    })

    $('#form').on('submit', (e) => {
        e.preventDefault()

        let login = $('#login').val()
        let pass = $('#password').val()

        if(login.length > 0 && pass.length > 0){
            sessionStorage.setItem('user', login)
            sessionStorage.setItem('password', pass)
            $('#message').text('OK')
            $('#message').css('color','green')
        } else {
            $('#message').text('introduceti datele corecte')
            $('#message').css('color','red')
        }
    })

    let reviews = JSON.parse(localStorage.getItem('reviews')) || []

    function showReviews() {
       reviews.slice().reverse().forEach(review => {

    document.querySelector('.reviews').innerHTML += `
    <div class="review">
    <h5>${review.id}</h5>
    <h3>${review.author}</h3>`
    if(sessionStorage.getItem('user')===review.author){
        document.querySelector('.reviews').innerHTML += `
        <textarea class="new-review" cols="10" rows="10"> 
        ${review.review}
        </textarea>
        <button class="change-data"> Change review</button>
    `;
    
    } else {
        document.querySelector('.reviews').innerHTML +=`
        <p>${review.review}</p>`;
    }
document.querySelector('.reviews').innerHTML +=`
    </div>`;  
}) 
    }

showReviews();

let id = 0;

    $('#add-review').on('click', () =>{
        let review = $('#review').val()
        
        let revObj = {
            id : id+=1,
            author : sessionStorage.getItem('user'),
            review : review
        }
        // console.log(revObj)
        reviews.push(revObj)
        localStorage.setItem('reviews', JSON.stringify(reviews))
        showReviews();
    })

    function changeReview() {
       
    }
})