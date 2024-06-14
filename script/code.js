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