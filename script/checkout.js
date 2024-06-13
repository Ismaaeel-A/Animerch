document.querySelector('[currentYear]').textContent =
    new Date().getUTCFullYear()

let checkoutCart = JSON.parse(localStorage.getItem('checkout')) ?
    JSON.parse(localStorage.getItem('checkout')) :
    []

let cartDisplay = document.querySelector('[cartDisplay]')


let grandTotalDisplay = document.querySelector('[grandTotalDisplay]')
let grandTotal = 0


checkoutCart.forEach(item => {
    let quantity = `${item.quantity.length}`
    let total = `${item.price * item.quantity.length}`

    let hold = 
        item.id

    cartDisplay.innerHTML +=
        `
            <tr>
              <td>${item.productName}</td>
              <td>${item.category}</td>
              <td>${quantity}</td> 
              <td>R${item.price}</td>
              <td>R${total}</td>    
              <td><button type="button" onclick="add(this)" value='${hold}'>ADD</button></td>          
            </tr>
        `;

        grandTotal += Number(total);
});

function displayTotal() {
    grandTotalDisplay.innerHTML = `R${grandTotal}`
    
}


displayTotal();

function add(button){
    console.log(button.value)
}






