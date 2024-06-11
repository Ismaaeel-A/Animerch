document.querySelector('[currentYear]').textContent =
    new Date().getUTCFullYear()

let products = JSON.parse(localStorage.getItem('products')) ?
    JSON.parse(localStorage.getItem('products')) :
    localStorage.setItem('products',
        JSON.stringify(

            [
                {
                    id: "3",
                    productName: "toys",
                    catergory: "cups",
                    price: 123,
                    img_url: "https://ismaaeel-a.github.io/allimages/Images/Asuna.webp"
                },

                {
                    id: "5",
                    productName: "toys",
                    catergory: "cups",
                    price: 123,
                    img_url: "https://ismaaeel-a.github.io/allimages/Images/Asuna.webp"
                },

                {
                    id: "4",
                    productName: "toys",
                    catergory: "cups",
                    price: 123,
                    img_url: "https://ismaaeel-a.github.io/allimages/Images/Asuna.webp"
                }
            ]

        )
    )

let total_products
let displayArea = document.querySelector('[productDisplay]')

function recentProducts() {

    products.forEach(product => {
        console.log(product);
        displayArea.innerHTML +=
            `
 <div class="card m-3 bg-primary">
  <img src="${product.img_url}"" class="card-img-top" alt="${product.productName}">
  <div class="card-body">
  <h5>${product.productName}</h5>
    <p class="card-text">R${product.price}</p>
  </div>
</div>
        `
    });
}

recentProducts()