document.querySelector('[currentYear]').textContent =
    new Date().getUTCFullYear()

let checkoutCart = JSON.parse(localStorage.getItem('checkout')) ?
    JSON.parse(localStorage.getItem('checkout')) :
    []

let cartDisplay = document.querySelector('[cartDisplay]')


let grandTotalDisplay = document.querySelector('[grandTotalDisplay]')
let grandTotal = 0




function displayTotal() {


}

function addItem() {
    checkoutCart.forEach(item => {
        let quantity = `${item.quantity.length}`
        let total = `${item.price * item.quantity.length}`

        let hold = item.id

        cartDisplay.innerHTML +=
            `
                <tr>
                  <td>${item.productName}</td>
                  <td>${item.category}</td>
                  <td>${quantity}</td> 
                  <td>R${item.price}</td>
                  <td>R${total}</td>    
                  <td><button type="button" onclick="add(this)" value='${hold}'>DELETE</button></td>          
                </tr>
            `;

        grandTotal += Number(total);
        grandTotalDisplay.innerHTML = `R${grandTotal}`
    });
} addItem()

displayTotal();

function add(button) {
    console.log(button.value)
    let itemID = button.value
    let position

    checkoutCart.forEach((target, i) => {
        if (target.id == itemID) {
            position = i
            console.log(position)
            cartDisplay.innerHTML = ""
            checkoutCart.splice(position, 1)
            localStorage.setItem('checkout', JSON.stringify(checkoutCart))
            addItem()
            return;
        }

    })
}








