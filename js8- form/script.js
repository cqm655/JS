$(document).ready(() => {
    let form = $('form')
    let login = $('#login')
    let password = $('#pass')
    let btn = $('#btn')



    form.hide()

    $('h3').hover(() => {
        password.hide()
        btn.hide()
        form.slideDown(1000)
    })

    form.keyup(() => {
        if(login.val().length > 3 ){
            password.slideDown(1000)
           login.css({
               'border': '2p solid green'
           })
           password.slideDown(500)
              if(password.val().length > 3){
                  btn.slideDown(500)
                  btn.css({
                      
                  })
              }
        }
    })
})