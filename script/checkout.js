document.querySelector('[currentYear]').textContent =
    new Date().getUTCFullYear()

let checkoutCart = JSON.parse(localStorage.getItem('checkout')) ?
    JSON.parse(localStorage.getItem('checkout')) :
    []

let cartDisplay = document.querySelector('[cartDisplay]')

// checkoutCart.forEach(item => {

//     cartDisplay.innerHTML +=
//         `
//             <tr>
//               <td>${item.productName}</td>
//               <td>${item.category}</td>
//               <td>${item.quantity}</td> 
//               <td>R${item.price}</td>
//               <td>R${item.price * item.quantity}</td> 
              
//             </tr>
//         `;
// });

function displayItems() {debugger

    let items = Object.groupBy(checkoutCart, ({id})=> id)
    items.forEach((item, i) =>{
        cartDisplay.innerHTML +=
    `
        <tr>
          <td>${item[i].productName}</td>
          <td>${item[i].category}</td>
          <td>${item[i].quantity}</td> 
          <td>R${item[i].price}</td>
          <td>R${item[i].price * item[i].quantity}</td>              
        </tr>
    `;
    })

/*     try{

    }catch(e){console.log("reconsider life")} */

} displayItems()





















/* <td><button onclick="deleteItem('${item.id}')">Delete</button></td> */



/*     checkoutCart.forEach(item => {
        // Check if the item is already in the cart
        let existingItemIndex = checkoutCart.findIndex(cartItem => cartItem.id === item.id);
    
        if (existingItemIndex !== -1) {
            // If the item is already in the cart, increment its quantity
            checkoutCart[existingItemIndex].quantity += 1;
        } else {
            // If the item is not in the cart, add it to the cart with quantity 1
            item.quantity = 1;
            checkoutCart.push(item);
        }
    
        // Update the cart display in the HTML table
        updateCartDisplay();
    });
    
    function updateCartDisplay() {
        // Clear the cart display first
        cartDisplay.innerHTML = '';
    
        // Rebuild the cart display based on the updated checkoutCart array
        checkoutCart.forEach(cartItem => {
            cartDisplay.innerHTML +=
            `
                <tr>
                  <td>${cartItem.productName}</td>
                  <td>${cartItem.category}</td>
                  <td>${cartItem.quantity}</td>
                  <td>R${cartItem.price}</td>
                  <td>R${cartItem.price * cartItem.quantity}</td>
                  <td><button onclick="deleteItem('${cartItem.id}')">Delete</button></td>
                </tr>
            `;
        });
    
        // Save the updated cart to localStorage
        localStorage.setItem('checkout', JSON.stringify(checkoutCart));
    } */