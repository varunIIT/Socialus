$(()=>{
    $('.writeComment').click((event)=>{
        $('#content').html(`<div class="container">
        <h1 class="text-center">Write Comment</h1>
        <hr>
        <div class="row">
            <div class="col"></div>
            <div class="col-auto">
                
                    <form action="/comment/writeComment/${$(event.target).attr('data-component')}" method="POST">
                      
              
                        <div class="text-center"><label for="commentBody" class="form-label">write comment here...</label></div>
      
                      <textarea  id="commentBody" cols="60" rows="10" name="body" required></textarea>
                      <br>
                     
                     <div class="text-center">
                       <div class="my-2" >Your comment will be added to this Post!</div>
                        <button type="submit"  class="btn btn-primary">comment</button>
                      </div>
    
                    </form>
                  
            </div>
            <div class="col"></div>
        </div>
    </div>
    `)
    })

})