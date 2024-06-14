document.querySelector('[currentYear]').textContent =
    new Date().getUTCFullYear()

let products = JSON.parse(localStorage.getItem('products')) ?
    JSON.parse(localStorage.getItem('products')) :
    localStorage.setItem('products',
        JSON.stringify(

            [{
                    id: "235",
                    productName: "Chad 1:6",
                    category: "figures",
                    price: 300,
                    quantity: 1,
                    img_url: "https://ismaaeel-a.github.io/allimages/Images/plc.png"
                },

                {
                    id: "853",
                    productName: "Akatsuki cloak",
                    category: "clothes",
                    price: 800,
                    quantity: 1,
                    img_url: "https://ismaaeel-a.github.io/allimages/Images/plc.png"
                },

                {
                    id: "480",
                    productName: "300x400 Asuka Portrait",
                    category: "art",
                    price: 1200,
                    quantity: 1,
                    img_url: "https://ismaaeel-a.github.io/allimages/Images/plc.png"
                },

                {
                    id: "245",
                    productName: "300x400 Itachi Portrait",
                    category: "art",
                    price: 800,
                    quantity: 1,
                    img_url: "https://ismaaeel-a.github.io/allimages/Images/plc.png"
                },

                {
                    id: "194",
                    productName: "Plain sweater pattern",
                    category: "clothes",
                    price: 450,
                    quantity: 1,
                    img_url: "https://ismaaeel-a.github.io/allimages/Images/plc.png"
                },

                {
                    id: "212",
                    productName: "Ichigo 1:16",
                    category: "figures",
                    price: 120,
                    quantity: 1,
                    img_url: "https://ismaaeel-a.github.io/allimages/Images/plc.png"
                }
            ]
        )
    )

let checkoutCart = JSON.parse(localStorage.getItem('checkout')) ?
    JSON.parse(localStorage.getItem('checkout')) :
    []



let searchValue = document.querySelector('[search]')
let displayArea = document.querySelector('[productDisplay]')

function allProducts() {
    displayArea.innerHTML = ""
    products.forEach(product => {
        let hold = {
            id: `${product.id}`,
            productName: `${product.productName}`,
            category: `${product.category}`,
            price: `${product.price}`,
            quantity: `${product.quantity}`,
            img_url: `${product.img_url}`
        };
        displayArea.innerHTML +=
            `
      <div class="card m-3">
        <img src="${product.img_url}"" class=" card-img-top" alt="${product.productName}">
        <div class="card-body">
          <h6>${product.productName}</h6>
                <p class="card-text">R${product.price}</p>
     <div class="row justify-content-between">
    <button class="bi-plus-circle storeBTn" type="button" onclick="add(this)" value='${JSON.stringify(hold)}'></button>
</div>
        </div>
      </div>
        `
    });
}
allProducts()



let category = document.querySelector('[category]')

function categoryLog() {

    if (category.value == 0) {
        displayArea.innerHTML = ""

        allProducts()
    }

    if (category.value == 1) {
        displayArea.innerHTML = ""

        products.forEach(product => {
            if (`${product.category}` == "clothes")
                createCard(product)
        })
    }

    if (category.value == 2) {
        displayArea.innerHTML = ""

        products.forEach(product => {
            if (`${product.category}` == "figures")
                createCard(product)
        })
    }

    if (category.value == 3) {
        displayArea.innerHTML = ""

        products.forEach(product => {
            if (`${product.category}` == "art")
                createCard(product)
        })
    }
}



function createCard(product) {
    let hold = {
        id: `${product.id}`,
        productName: `${product.productName}`,
        category: `${product.category}`,
        price: `${product.price}`,
        quantity: `${product.quantity}`,
        img_url: `${product.img_url}`
    };

    displayArea.innerHTML +=
        `
    <div class="card m-3">
    <img src="${product.img_url}" class="card-img-top" alt="${product.productName}" style="width: 200px; height: 200px;">
    <div class="card-body">
    <h6>${product.productName}</h6>
    <p class="card-text">R${product.price}</p>
    <div class="row justify-content-between">     
    <button class="bi-plus-circle storeBTn" type="button" onclick="add(this)" value='${JSON.stringify(hold)}'></button>
</div>

    </div>
    </div>
    `;
}

function search() {

    if (searchValue.value.length > 0) {
        displayArea.innerHTML = ""

        products.forEach(product => {
            let valid = product.productName.toLowerCase().includes(searchValue.value)
            if (valid === true) {
                createCard(product)
            } else {
                console.log("problem")
            }
        })

    } else {
        allProducts()
    }

}

function add(button) {
    let newItem = JSON.parse(button.value); // Parse the JSON string back into an object
    let existingItem = checkoutCart.find(item => item.id === newItem.id); // Check if item already exists in checkoutCart

    if (existingItem) {

        existingItem.quantity += newItem.quantity;
    } else {

        checkoutCart.push(newItem);
    }

    // Update localStorage with the updated checkoutCart
    localStorage.setItem('checkout', JSON.stringify(checkoutCart));
}