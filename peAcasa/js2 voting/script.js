let like = document.getElementById('like');
let dislike = document.getElementById('dislike');
let number = document.getElementById('number')

let int = document.getElementById('number');

let integer = 0;

like.addEventListener('click', function() {
         integer +=1;
         int.innerHTML = integer;
         number.style.background='orange';
         number.style.color='black'
}) 

dislike.addEventListener('click', function() {
    integer -=1;
    int.innerHTML = integer;
    number.style.background='red'
    number.style.color='white'
}) 