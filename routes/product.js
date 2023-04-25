const express = require('express')
const router = express.Router()


const product = [
    {name: 'Orange', id: 'Orange', img:'https://media.istockphoto.com/id/185284489/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BE%D1%80%D0%B0%D0%BD%D0%B6%D0%B5%D0%B2%D1%8B%D0%B9.jpg?s=612x612&w=0&k=20&c=BEvPMfEJVCwAp12OqKQBKYZPyGwbL60qdoUDtpc2cLA='},
    {name: 'Apple', id: 'Green', img:'https://lekostyle.ua/assets/thumbnails/crop/436x/c8/c8d0b98cee08c54cb0e68e921b41bd6d.png'},
    {name: 'Banana', id: 'Yellow', img: 'https://static9.depositphotos.com/1642482/1149/i/450/depositphotos_11490587-stock-photo-bananas.jpg'},
    {name: 'Cherry', id: 'Red', img: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Cherry_fruit_on_white_background.jpg'}
 ]
router.get('/', (req,res) => {
    res.render('pages')
})

router.get('/product', (req,res)=> {
    res.json(product)
})

router.get('/product/filter', (req,res) =>{

    const filter = product.filter(item => item.id === req.query.q)
    res.json(filter)
})
module.exports = router;