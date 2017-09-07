const express = require('express')
const GoogleImages = require('google-images')

const config = require('../config')

const app = express()
const imageClient = new GoogleImages(config.cseId, config.apiKey)

app.get('/', (req, res) => {
    res.send('Server up!')
})

app.get('/api/imagesearch/:term', (req, res) => {
    const term = req.params.term
    const options = {}

    if (req.query.offset)
        options.page = +req.query.offset

    imageClient.search(term, options)
        .then((images) => {
            const mapped = images.map((image) => {
                return {
                    url: image.url,
                    snippet: image.description,
                    thumbnail: image.thumbnail.url,
                    context: image.parentPage
                }
            })
            res.json(mapped)
        })
})

module.exports = app