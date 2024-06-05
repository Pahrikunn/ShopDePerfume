// navbar js

















// amount js

let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let quantityElement = document.getElementById('quantity');
let totalElement = document.getElementById('totalAmount');

plus.addEventListener('click', function(){
    let quantity = parseInt(quantityElement.textContent.trim()); 
    quantity++; 
    quantityElement.textContent = quantity; 
    calculateTotal(quantity);
});

minus.addEventListener('click', function(){
    let quantity = parseInt(quantityElement.textContent.trim());
    if(quantity > 1) {
        quantity--; 
        quantityElement.textContent = quantity; 
        calculateTotal(quantity);
    }
});

function calculateTotal(quantity) {
    const totalValue = parseFloat(totalElement.textContent.replace('Rp.', '').replace('.', '').trim()); 
    const totalSeluruh = totalValue * quantity; 
    totalElement.textContent = `Rp.${totalSeluruh.toLocaleString()}`; 
    updateDisplay();
}

function updateDisplay() {
    
}
