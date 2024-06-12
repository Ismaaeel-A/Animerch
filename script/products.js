document.querySelector('[currentYear]').textContent =
    new Date().getUTCFullYear()

let products = JSON.parse(localStorage.getItem('products')) ?
    JSON.parse(localStorage.getItem('products')) :
    localStorage.setItem('products',
        JSON.stringify(

            [{
                id: "3",
                productName: "ttibs",
                catergory: "art",
                price: 123,
                img_url: "https://ismaaeel-a.github.io/allimages/Images/Asuna.webp"
            },

            {
                id: "57",
                productName: "toys",
                catergory: "cups",
                price: 123,
                img_url: "https://ismaaeel-a.github.io/allimages/Images/Asuna.webp"
            },

            {
                id: "52",
                productName: "toys",
                catergory: "cups",
                price: 123,
                img_url: "https://ismaaeel-a.github.io/allimages/Images/Asuna.webp"
            },

            {
                id: "51",
                productName: "toys5432",
                catergory: "clothes",
                price: 123,
                img_url: "https://ismaaeel-a.github.io/allimages/Images/Asuna.webp"
            },

            {
                id: "5",
                productName: "toys",
                catergory: "figures",
                price: 123,
                img_url: "https://ismaaeel-a.github.io/allimages/Images/Asuna.webp"
            },

            {
                id: "4",
                productName: "xsdb",
                catergory: "clothes",
                price: 123,
                img_url: "https://ismaaeel-a.github.io/allimages/Images/Asuna.webp"
            }
            ]
        )
    )

let searchValue = document.querySelector('[search]')
let displayArea = document.querySelector('[productDisplay]')

function allProducts() {
    displayArea.innerHTML = ""
    products.forEach(product => {
        displayArea.innerHTML +=
            `
      <div class="card m-3 bg-primary">
        <img src="${product.img_url}"" class=" card-img-top" alt="${product.productName}">
        <div class="card-body">
          <h5>${product.productName}</h5>
          <p class="card-text">R${product.price}</p>
        </div>
      </div>
        `
    });
}
allProducts()



let catergory = document.querySelector('[catergory]')

function catergoryLog() {
    console.log(catergory.value)

    if (catergory.value == 0) {
        displayArea.innerHTML = ""

        allProducts()
    }

    if (catergory.value == 1) {
        displayArea.innerHTML = ""

        products.forEach(product => {
            if (`${product.catergory}` == "clothes")
                searchResult(product)
        })
    }

    if (catergory.value == 2) {
        displayArea.innerHTML = ""

        products.forEach(product => {
            if (`${product.catergory}` == "figures")
                searchResult(product)
        })
    }

    if (catergory.value == 3) {
        displayArea.innerHTML = ""

        products.forEach(product => {
            if (`${product.catergory}` == "art")
                searchResult(product)
        })
    }
}



function searchResult(product) {
    displayArea.innerHTML +=
        `
    <div class="card m-3 bg-primary">
    <img src="${product.img_url}"" class=" card-img-top" alt="${product.productName}" style="width: 200px; height: 200px;">
    <div class="card-body">
    <h5>${product.productName}</h5>
    <p class="card-text">R${product.price}</p>
    </div>
    </div>
    `
}

function search() { 

    if (searchValue.value.length > 2){
        displayArea.innerHTML = ""
        
        products.forEach(product => { 
            let valid = product.productName.toLowerCase().includes(searchValue.value)
            if (valid === true) {
                searchResult(product)
            } else{
                console.log("problem")
            }          
        })

    } else {
        allProducts()
    }

}