$(document).ready(() => {
    let user = $('#user-name')
    let btn = $('#search-user')
    let btnAll = $('#show-all')
    $('.show-user').hide()

btnAll.on('click', () => {
    showAll()
    $('.show-user').hide(1000)
    $('user-name').empty()
})
    
btn.on('click', () => {
    
    let userr = user.val()
    $('.show-user').fadeIn(1000)
    let avatar=''
    fetch('https://api.github.com/users/' + userr)
    .then(response => response.json())
    .then(userName => {
        $('#user').text(userName.login)
        $('#id').text(userName.id)
        avatar += `
        <img src="${userName.avatar_url}">
        `
        $('.show-img').html(avatar)
    })
})


})

function showAll ()  {
    
    fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(userName1 => {
        let userList = userName1
        let avatar1 = ''
        $.each(userList, (index, login) => {
            
            avatar1 += `
                    <div class="movie">
                        <h4>Login: ${login.login}</h4>
                        <br>
                        <span>User Type: ${login.type}</span>
                        <br>
                        <span>Login ID :${login.id}</span>
                       
                    </div>
                    <div><img src="${login.avatar_url}"></div>
                `
                
        })
        $('.show-img').html(avatar1)
        
    })
}



