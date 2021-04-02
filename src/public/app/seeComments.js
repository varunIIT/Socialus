$(() => {
    $('.seeComments').click((ev) => {
        $('#content').load('./components/seeComments.html', done)
        function done() {
            let id = $(ev.target).attr('data-component')
            $.get(`/comment/seeComments/${id}`, (data) => {
                data.reverse()
                for (let comment of data) {
                    $('.loadComments').append($(`
                    <li class="list-group-item">
                        <b>By ${comment.author}</b>
                        <div>${comment.body}</div>
                        
                    </li>
                    `))
                }
            })
        }
    })
})