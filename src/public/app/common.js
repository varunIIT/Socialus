$(()=>{
    $('#header').load('./components/header.html',loginIfNeeded)
    function loginIfNeeded(){
        $.post('/user',(data)=>{
            //console.log(data)
            if(data=='User'){
                $('#login-out').append($('<a class="btn btn-outline-info" href="/login">Login</a>'))
                $('#sign-up').append($('<a class="btn btn-outline-danger" href="/signup">Sign Up</a>'))
            }
            else{
                $('#login-out').append($('<a class="btn btn-outline-danger" href="/logout">Logout</a>'))
            }
            $('#username').text(`Hello ${data}`)
        })
    }
    $('#content').load('./components/showPosts.html')
    
    $('#footer').load('./components/footer.html')
    
})
