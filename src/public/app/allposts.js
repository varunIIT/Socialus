function loadAllPosts(){
    $.get('/post',(data)=>{
        data.reverse()
        for(let p of data){
           $('#postContainer').append($(`<div class="card m-2" style="width: 22rem;">
           <div class="card-body">
             <h5 class="card-title">${p.title}</h5>
              <b class=mb-2>By ${p.author}</b>
             <p class="card-text">${p.body.substring(0,200)}<span class="readMore hand" data-component="${p._id}">...read more</span></p>
             <span  class="hand writeComment " data-component="${p._id}"><button type="button"class="btn btn-outline-secondary">write comment!</button></span>
             <span  style="float:right" class="hand seeComments" data-component="${p._id}"><button type="button"class="btn btn-outline-secondary">see comments!</button></span>
           </div>
         </div>`))
        }
        $('#postContainer').append($(`<script src="../app/read-more.js"></script>`))
        $('#postContainer').append($(`<script src="../app/writeComment.js"></script>`))
        $('#postContainer').append($(`<script src="../app/seeComments.js"></script>`))
    })
}