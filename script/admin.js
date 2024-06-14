document.querySelector('[currentYear]').textContent =
    new Date().getUTCFullYear()

let itemsDisplay = document.querySelector('[itemsDisplay]')
let products = JSON.parse(localStorage.getItem('products')) ?
    JSON.parse(localStorage.getItem('products')) : []

console.table(products)

products.forEach(product => {
    itemsDisplay.innerHTML +=
        `
                <tr>
                  <td>${product.productName}</td>
                  <td>${product.id}</td>
                  <td>${product.category}</td> 
                  <td>R${product.price}</td>
                  <td><img src="${product.img_url}" alt="${product.productName}"></td>    
                  <td></td>          
                </tr>
        `
});

/* let createItem = document.querySelector('[createItem]') */
class Create{
    constructor(id) {
    this.id = id
    this.name = name
    this.category = category
    this.price = price
    this.img_url = img_url
}
}


function createItem() {
    let Name = document.querySelector('[name]')
    let id = document.querySelector('[id]')
    let category = document.querySelector('[category]')
    let price = document.querySelector('[price]')
    let img_url = document.querySelector('[img_url]')
    products.push(new Create(id.value))
    console.log(Name, id, category, price, img_url)
    console.log('fromcmcdicd');
}