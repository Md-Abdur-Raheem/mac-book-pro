// total price calculation without discount
function calculateFirstTotalPrice() {
    const bestPrice = document.getElementById('best-price').innerText;
    const bestPriceValue = parseFloat(bestPrice);

    const memeoryCost = document.getElementById('memory-cost').innerText;
    const memeoryCostValue = parseFloat(memeoryCost);
    
    const storageCost = document.getElementById('storage-cost').innerText;
    const storageCostValue = parseFloat(storageCost);

    const deliveryCharge = document.getElementById('delivery-cost').innerText;
    const deliveryChargeValue = parseFloat(deliveryCharge);

    const firstTotal = bestPriceValue + memeoryCostValue + storageCostValue + deliveryChargeValue;

    let firstTotalPrice = document.getElementById('first-total-price');
    let newTotalPrice = document.getElementById('new-total-price');

    firstTotalPrice.innerText = firstTotal;
    newTotalPrice.innerText = firstTotal;
}



//extra memeory, storage & delivery charge calculation
function extraCostCalculation(buttonId) {
    const memoryCost = document.getElementById('memory-cost');
    const storageCost = document.getElementById('storage-cost');
    const deliveryCost = document.getElementById('delivery-cost');

    if (buttonId == '8-gb-memeory-btn') {
        memoryCost.innerText = 0;
        calculateFirstTotalPrice();
    }
    else if (buttonId == '16-gb-memeory-btn') {
        memoryCost.innerText = 180;
        calculateFirstTotalPrice();
    }
    else if (buttonId == '256-gb-ssd-btn') {
        storageCost.innerText = 0;
        calculateFirstTotalPrice();
    }
    else if (buttonId == '512-gb-ssd-btn') {
        storageCost.innerText = 100;
        calculateFirstTotalPrice();
    }
    else if (buttonId == '1-tb-ssd-btn') {
        storageCost.innerText = 180;
        calculateFirstTotalPrice();
    }
    else if (buttonId == 'free-delivery-btn') {
        deliveryCost.innerText = 0;
        calculateFirstTotalPrice();
    }
    else if (buttonId == 'fast-delivery-btn') {
        deliveryCost.innerText = 20;
        calculateFirstTotalPrice();
    }
}



//memory, storage & delivery charge button events handling
document.getElementById('8-gb-memeory-btn').addEventListener('click', function () {
    extraCostCalculation('8-gb-memeory-btn');
})

document.getElementById('16-gb-memeory-btn').addEventListener('click', function () {
    // debugger;
    extraCostCalculation('16-gb-memeory-btn');
})

document.getElementById('256-gb-ssd-btn').addEventListener('click', function () {
    extraCostCalculation('256-gb-ssd-btn');
})

document.getElementById('512-gb-ssd-btn').addEventListener('click', function () {
    extraCostCalculation('512-gb-ssd-btn');
})

document.getElementById('1-tb-ssd-btn').addEventListener('click', function () {
    extraCostCalculation('1-tb-ssd-btn');
})

document.getElementById('free-delivery-btn').addEventListener('click', function () {
    extraCostCalculation('free-delivery-btn');
})

document.getElementById('fast-delivery-btn').addEventListener('click', function () {
    extraCostCalculation('fast-delivery-btn');
})



//discount calculation
function discountCalculation() {
    const promoBtn = document.getElementById('promo-btn');
    const promoCode = document.getElementById('promo-code').value;
    const newTotalPrice = document.getElementById('new-total-price');
    let firstTotalPrice = document.getElementById('first-total-price');
    if (promoCode == 'stevekaku') {
        firstTotalPrice.innerText = firstTotalPrice.innerText - (firstTotalPrice.innerText * .20);
        newTotalPrice.innerText = firstTotalPrice.innerText;
        promoBtn.setAttribute('disabled',true); // to avoid extra discount
    }
    else {
        alert('Promo code does not match')
    }
};

