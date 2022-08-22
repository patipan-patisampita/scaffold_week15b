const express = require('express')
const router = express.Router()

//GET About page
router.get('/', (req,res,next) => {
    res.render('pages/contact', { title: 'Contact page' })
})

module.exports = router