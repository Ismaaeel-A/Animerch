document.querySelector('[currentYear]').textContent =
    new Date().getUTCFullYear()

let products = JSON.parse(localStorage.getItem('products')) ?
    JSON.parse(localStorage.getItem('products')) :
    localStorage.setItem('products',
        JSON.stringify(

            [{
                id: "235",
                productName: "Rukia Figure",
                category: "figures",
                price: 300,
                quantity: 1,
                img_url: "https://ismaaeel-a.github.io/allimages/Images/Rukia.jpg"
            },

            {
                id: "853",
                productName: "Naruto Hoodie",
                category: "clothes",
                price: 800,
                quantity: 1,
                img_url: "https://ismaaeel-a.github.io/allimages/Images/Naruto.jpg"
            },

            {
                id: "480",
                productName: "Sanji Portrait",
                category: "art",
                price: 1200,
                quantity: 1,
                img_url: "https://ismaaeel-a.github.io/allimages/Images/Sanji.jpg"
            },

            {
                id: "245",
                productName: "Zorro Portrait",
                category: "art",
                price: 800,
                quantity: 1,
                img_url: "https://ismaaeel-a.github.io/allimages/Images/Zorro.jpg"
            },

            {
                id: "194",
                productName: "Sasuke Hoodie",
                category: "clothes",
                price: 450,
                quantity: 1,
                img_url: "https://ismaaeel-a.github.io/allimages/Images/Sasuke.jpg"
            },

            {
                id: "212",
                productName: "Renji Figure",
                category: "figures",
                price: 120,
                quantity: 1,
                img_url: "https://ismaaeel-a.github.io/allimages/Images/Renji.jpeg"
            }
            ]
        )
    )

let checkoutCart = JSON.parse(localStorage.getItem('checkout')) ?
    JSON.parse(localStorage.getItem('checkout')) :
    []