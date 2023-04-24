const list = document.querySelector('.list')
const run = async () => {
    const result = await axios.get('/product')
    console.log(result.data);
    result.data.forEach(element => {
        list.innerHTML += `<div>${element.name}</div>`
    });
}

run();