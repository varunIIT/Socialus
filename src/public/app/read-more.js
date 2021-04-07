// console.log("inside")
// console.log($('.readMore'))
$('.readMore').click((ev) => {
  //console.log("clicked")
  $('#content').load('../components/read-more.html', done)

  function done() {
    let id = $(ev.target).attr('data-component')
    $.get(`/post/${id}`, (p) => {

      $('#readMoreContent').append($(`<div class="card mt-5" style="width: 30rem;">
            <div class="card-body">
              <h5 class="card-title">${p.title}</h5>
              <b class=mb-2>By ${p.author}</b>
              <p class="card-text">${p.body}</p>
              <span  class="hand writeComment " ><button type="button"class="btn btn-outline-secondary" data-component="${p._id}">write comment!</button></span>
             <span  style="float:right" class="hand seeComments"><button type="button"class="btn btn-outline-secondary" data-component="${p._id}">see comments!</button></span>
            </div>
          </div>`))
          $('#readMoreContent').append($(`<script src="../app/writeComment.js"></script>`))
        $('#readMoreContent').append($(`<script src="../app/seeComments.js"></script>`))
         
    })
  }
})