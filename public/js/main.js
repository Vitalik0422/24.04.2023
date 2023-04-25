const sel_filter= document.querySelector('.select_filter')
const list = document.querySelector('.list')
const filter_none = document.querySelector('.filter_none')
const run = async () =>{
    const product = await axios.get('/product')
    product.data.forEach(element => {
        list.innerHTML += `<div class='product'>${element.name}
        <img src="${element.img}"></div>`
    })
}

run()


sel_filter.addEventListener('change', ()=> {
    filter_none.classList.add('on')
    list.innerHTML = ''
    filter()
})

filter_none.addEventListener('click', ()=>{
    filter_none.classList.remove('on')
    list.innerHTML = ''
    run()  
})
const filter = async () => {
    const product = await axios.get('/product/filter',{
        params: {
            q: sel_filter.value
        }
    })
    const name = product.data.forEach(element => {
        list.innerHTML += list.innerHTML += `<div class='product'>${element.name}
        <img src="${element.img}"></div>`
    })
}