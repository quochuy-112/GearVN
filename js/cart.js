function increaseQuantity(inputId) {
    const input = document.getElementById(inputId);
    let value = parseInt(input.value);
    input.value = value + 1;
}

function decreaseQuantity(inputId) {
    const input = document.getElementById(inputId);
    let value = parseInt(input.value);
    if (value > 1) {
        input.value = value - 1;
    }
}