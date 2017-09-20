const actions = {
    scrape: function () {
        console.log('getting articles...')
        fetch('api/articles/insert', { method: 'POST' })
            .then(res => {
                console.log('scraped articles...');
                return res.json()
            }).catch(err => console.log(err))
    },

    getSingleArticle: function(id) {
        fetch(`/api/articles/${id}`)
            .then(res => res.json())
            .catch(err => err )
    },

    getArticles: function () {
        fetch('/api/articles')
            .then(res => res.json())
            .catch(err => err )
    },

    deleteArticle: function (id) {
        console.log('deleting article...');
        fetch(`api/articles/delete/${id}`, { method: 'DELETE' })
            .then(res => {
                console.log(`deleted article #${id}...`)
                return res.json()
            }).catch(err => err );
    },

}

export default Object.assign({}, actions)