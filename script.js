function calculateDiscount() {
    var price = parseFloat(document.getElementById("price").value);
    var percentage = parseFloat(document.getElementById("percentage").value);

    if (isNaN(price) || isNaN(percentage)) {
        document.getElementById("discount-amount").innerHTML = "Ingrese valores numéricos válidos";
        return;
    }

    var discountAmount = price * (percentage / 100);
    var discountedPrice = price - discountAmount;

    document.getElementById("discount-amount").innerHTML = "Descuento: $" + discountAmount.toFixed(2) + "<br>Precio con descuento: $" + discountedPrice.toFixed(2);
}

function calculatePercentage() {
    var originalPrice = parseFloat(document.getElementById("original-price").value);
    var discountedAmount = parseFloat(document.getElementById("discounted-amount").value);

    if (isNaN(originalPrice) || isNaN(discountedAmount)) {
        document.getElementById("discount-percentage").innerHTML = "Ingrese valores numéricos válidos";
        return;
    }

    var discountPercentage = (discountedAmount / originalPrice) * 100;

    document.getElementById("discount-percentage").innerHTML = "Porcentaje de descuento: " + discountPercentage.toFixed(2) + "%";
}

function resetCalculator() {
    document.getElementById("price").value = "";
    document.getElementById("percentage").value = "";
    document.getElementById("discount-amount").innerHTML = "";

    document.getElementById("original-price").value = "";
    document.getElementById("discounted-amount").value = "";
    document.getElementById("discount-percentage").innerHTML = "";
}

