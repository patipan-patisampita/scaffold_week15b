const express = require('express')
const router = express.Router()

//GET About page
router.get('/', (req,res,next) => {
    res.render('pages/about', { title: 'About page' })
})

module.exports = router