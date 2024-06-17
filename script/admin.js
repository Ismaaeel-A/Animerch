document.querySelector('[currentYear]').textContent =
    new Date().getUTCFullYear()

let itemsDisplay = document.querySelector('[itemsDisplay]')
let products = JSON.parse(localStorage.getItem('products')) ?
    JSON.parse(localStorage.getItem('products')) : []

console.table(products)

products.forEach(product => {
    let hold = product.id
    console.log(`${hold}`)
    itemsDisplay.innerHTML +=
        `
                <tr>
                  <td>${product.productName}</td>
                  <td>${product.id}</td>
                  <td>${product.category}</td> 
                  <td>R${product.price}</td>
                  <td><img src="${product.img_url}" alt="${product.productName}">
                  <td><button type="button" onclick="editItem(this)" value='${hold}' class="bi-pencil-fill"></button>
                    <button type="button" onclick="removeItem(this)" value='${hold}' class="bi-trash3-fill"></button>
                  </td>

                        
                </tr>
        `
});

function editItem(button) {
    console.log(button.value)
    alert(button.value)
}

function removeItem(button) {
try {
    console.log(button.value)
    let itemID = button.value
    let position
    itemsDisplay.innerHTML = ""
    products.forEach((target, i) => {
        if (target.id == itemID) {
            position = i
            console.log(position)

            products.splice(position, 1)
            localStorage.setItem('products', JSON.stringify(products))

            return;
        }

    })

    refreshPage()
} catch (e) {
    alert("An error has occured. Reload the page.")
}
}

class Create {
    constructor(id, productName, category, price, quantity, img_url) {
        this.id = id
        this.productName = productName
        this.category = category
        this.price = price
        this.quantity = quantity
        this.img_url = img_url
    }
}


function createItem() {
    let Name = document.querySelector('[name="name"]')
    let id = document.querySelector('#id')
    let category = document.querySelector('[category]')
    let price = document.querySelector('[price="price"]')
    let quantity = "1"
    let img_url = document.querySelector('[img_url]')
    products.push(new Create(id.value, Name.value, category.value, price.value, quantity.value, img_url.value))
    localStorage.setItem('products', JSON.stringify(products))
    refreshPage()
}

function refreshPage() {
try {
    itemsDisplay.innerHTML = ""

    products.forEach(product => {
        let hold = product.id
        console.log(`${hold}`)
        itemsDisplay.innerHTML +=
            `
                    <tr>
                      <td>${product.productName}</td>
                      <td>${product.id}</td>
                      <td>${product.category}</td> 
                      <td>R${product.price}</td>
                      <td><img src="${product.img_url}" alt="${product.productName}">
                      <td><button type="button" onclick="editItem(this)" value='${hold}' class="bi-pencil-fill"></button>
                          <button type="button" onclick="removeItem(this)" value='${hold}' class="bi-trash3-fill"></button></td>    
                                
                    </tr>
            `
    });
} catch (e) {
    alert("An error has occurred. Reload the page.")
}
}