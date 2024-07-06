const express = require('express')
const router = express.Router()

// get country in url /:country
const getPulicIp = require('../../controllers/middlewares/country')

router.use(getPulicIp)

router.get('/:lang', (req, res) => {

    if (req.params.lang === 'ES') return res.render('home.ejs', { lang: req.params.lang })
    return res.render('home.ejs', { lang: req.params.lang })

})



module.exports = router