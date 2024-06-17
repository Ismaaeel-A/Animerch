document.querySelector('[currentYear]').textContent =
    new Date().getUTCFullYear()

let checkoutCart = JSON.parse(localStorage.getItem('checkout')) ?
    JSON.parse(localStorage.getItem('checkout')) : []

let cartDisplay = document.querySelector('[cartDisplay]')


let grandTotalDisplay = document.querySelector('[grandTotalDisplay]')
let grandTotal = 0




function displayTotal() {
    grandTotalDisplay.innerHTML = `R${grandTotal}`
}

function addItem() {
    try {
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
              <td><button type="button" onclick="remove(this)" value='${hold}' class="bi-trash3-fill"></button></td>          
            </tr>
        `;

            grandTotal += Number(total);

        });
    } catch (e) {
        alert("An error has occurred. Please reload the page.")
    }
}
addItem()

displayTotal();

function remove(button) {
    try {
        console.log(button.value)
        let itemID = button.value
        let position
        grandTotal = 0
        checkoutCart.forEach((target, i) => {
            if (target.id == itemID) {
                position = i
                console.log(position)
                cartDisplay.innerHTML = ""
                checkoutCart.splice(position, 1)
                localStorage.setItem('checkout', JSON.stringify(checkoutCart))
                addItem()
                displayTotal()
                return;
            }

        })
    } catch (e) {
        alert("An error has occurred. Please reload the page.")
    }
}

function CLear() {
    try {
        checkoutCart = [];
        localStorage.removeItem('checkout');
        cartDisplay.innerHTML = ""
        grandTotalDisplay.innerHTML = "R0"
    } catch (e) {
        alert("An error has occurred. Please reload the page.")
    }
}

function pay() {
    CLear()
    alert("Thank you for your purchase! Until we meet again")
}