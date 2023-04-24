const express = require('express')
const router = express.Router()


const product = [
    {name: 'Orange'},
    {name: 'Apple'},
    {name: 'Banana'},
    {name: 'Cherry'}
 ]
router.get('/', (req,res) => {
    res.render('pages')
})

router.get('/product', (req,res) =>{
    res.json(product)
})
module.exports = router;