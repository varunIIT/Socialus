let navLinks=$('.hand')

navLinks.click((ev)=>{
    let componentUrl=`./components/${$(ev.target).attr('data-component')}.html`
    $('#content').load(componentUrl)
})