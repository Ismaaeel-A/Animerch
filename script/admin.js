document.querySelector('[currentYear]').textContent =
    new Date().getUTCFullYear()

let itemsDisplay = document.querySelector('[itemsDisplay]')
let products = JSON.parse(localStorage.getItem('products')) ?
    JSON.parse(localStorage.getItem('products')) : []

console.table(products)

products.forEach(product => {
    let hold = product.id

    itemsDisplay.innerHTML +=
        `
                <tr>
                  <td>${product.productName}</td>
                  <td>${product.id}</td>
                  <td>${product.category}</td> 
                  <td>R${product.price}</td>
                  <td><img src="${product.img_url}" alt="${product.productName}">
                  <td>
                    
                    
                    <button type="button" class=" bi-pencil-fill" data-bs-toggle="modal" data-bs-target="#staticBackdrop1"  onclick="editItemLoad(this)" value='${hold}'></button>


                    <div class="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdrop1Label" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5 text-dark" id="staticBackdrop1Label">Edit...</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                             <div class="modalFields">
                                <label>Name: <input type="text" name="name" required editName></label>
                                <label>ID: <input type="number" id="id" required readonly editID></label>
                                <label>Category: <select category editCategory>
                                    <option value="clothes">clothes</option>
                                    <option value="figures">figures</option>
                                    <option value="art">art</option>
                                </select></label>
                                <label>Price: <input type="number" price="price" required editPrice></label>
                                <label>Img url: <input type="text" img_url required editUrl></label>
                                <label></label>

                           </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="refreshPage()">Close</button>
                            <button type="button" class="btn btn-primary" onclick="editItemConfirm()">Confirm</button>
                        </div>
                        </div>
                    </div>
                    </div>

                    <button type="button" onclick="removeItem(this)" value='${hold}' class="bi-trash3-fill"></button>
                  </td>

                        
                </tr>
        `
});

function editItemLoad(button) {
    let editID = button.value
    console.log(editID, button.value)
    let position
    products.forEach((target, i) => {
        if (target.id == editID) {
            position = i
            console.log(products[position].productName)

            let editName = document.querySelector('[editName]')
            let editID = document.querySelector('[editID]')
            let editCategory = document.querySelector('[editCategory]')
            let editPrice = document.querySelector('[editPrice]')
            let editUrl = document.querySelector('[editUrl]')



            editName.value = products[position].productName
            editID.value = products[position].id
            editCategory.value = products[position].category
            editPrice.value = products[position].price
            editUrl.value = products[position].img_url

            return;
        }

    })
}

function editItemConfirm() {
    let Name = document.querySelector('[editName]')
    let id = document.querySelector('[editID]')
    let category = document.querySelector('[editCategory]')
    let price = document.querySelector('[editPrice]')
    let quantity = "1"
    let img_url = document.querySelector('[editUrl]')
    products.push(new Create(id.value, Name.value, category.value, price.value, quantity.value, img_url.value))
    localStorage.setItem('products', JSON.stringify(products))

    let itemID = id
    let position
    products.forEach((target, i) => {
        if (target.id == itemID) {
            position = i
            console.log(position)
            products.splice(position, 1)
            localStorage.setItem('products', JSON.stringify(products))
            
            return;
        }

    })


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
                      <td>
                      <button type="button" class="bi-pencil-fill" data-bs-toggle="modal" data-bs-target="#staticBackdrop1"  onclick="editItemLoad(this)" value='${hold}'></button>


                    <div class="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdrop1Label" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5 text-dark" id="staticBackdrop1Label">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                             <div class="modalFields">
                                <label>Name: <input type="text" name="name" required editName></label>
                                <label>ID: <input type="number" id="id" required readonly editID></label>
                                <label>Category: <select category editCategory>
                                    <option value="clothes">clothes</option>
                                    <option value="figures">figures</option>
                                    <option value="art">art</option>
                                </select></label>
                                <label>Price: <input type="number" price="price" required editPrice></label>
                                <label>Img url: <input type="text" img_url required editUrl></label>
                                <label></label>

                           </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="refreshPage()">Close</button>
                            <button type="button" class="btn btn-primary" onclick="editItemConfirm()">Confirm</button>
                        </div>
                        </div>
                    </div>
                    </div>
                          <button type="button" onclick="removeItem(this)" value='${hold}' class="bi-trash3-fill"></button></td>    
                                
                    </tr>
            `
        });
    } catch (e) {
        alert("An error has occurred. Reload the page.")
    }
}