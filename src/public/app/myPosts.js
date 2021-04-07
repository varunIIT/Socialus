function loadMyPosts(){
    $.get('/post/my/posts',(data)=>{
        
        if(!data){
           
            return window.location.href = "/login";
        }
        data.reverse()
        for(let p of data){
          $('#postContainer').append($(`<div class="card m-2" style="width: 22rem;">
          <div class="card-body">
            <h5 class="card-title">${p.title}</h5>
            <b class=mb-2>By ${p.author}</b>
            <p class="card-text">${p.body.substring(0,200)}<span class="readMore hand" data-component="${p._id}">...read more</span></p>
            <span  class="hand writeComment " ><button type="button"class="btn btn-outline-secondary" data-component="${p._id}">write comment!</button></span>
             <span  style="float:right" class="hand seeComments" ><button type="button"class="btn btn-outline-secondary" data-component="${p._id}">see comments!</button></span>
           <div class="text-center hand mt-3"> <form action="/post/delete/${p._id}" method="POST"><button type="submit"  class="btn btn-outline-danger">Delete Post!</button></form></div>
          </div>
        </div>`))
       }
       $('#postContainer').append($(`<script src="../app/read-more.js"></script>`))
        $('#postContainer').append($(`<script src="../app/writeComment.js"></script>`))
        $('#postContainer').append($(`<script src="../app/seeComments.js"></script>`))
    })
}