


function calculateHST(subtotal) {
    var total = subtotal * 0.15;
    return total;
}

function calculateTotal(subtotal) {
    var tax = calculateHST(subtotal);
    var final = subtotal + tax;
    return final;
}

var subtotal = 100;
var total = calculateTotal(subtotal);

alert(final);

