/* first card */
document.getElementById("first-card").addEventListener('click', function () {
    const price1 = getThePrice('p-one');
    const name1 = getTheProductName('n-1');
    /*  product name entry in the list  */
    const nameSet = document.getElementById("product-name-entry");
    const p = document.createElement('p');
    const count = nameSet.childElementCount;
    p.classList.add('text-2xl', 'font-medium', 'p-1');
    nameSet.appendChild(p);
    p.innerHTML = `${count + 1}. ${name1}`
    const totalPrice1 = getTotalPrice('total-price', price1);

    if (totalPrice1 >= 0) {
        /* removing the disable  */
        openButton('purchases-btn');
        noDiscount('total', totalPrice1);

    }

    if (totalPrice1 >= 200) {
        /* removing the disable  */
        openButton('coupon-btn');
        noDiscount('total', totalPrice1);

    }

    else {
        noDiscount('total', totalPrice1);

    }
})

function theName() {
    const inputField = document.getElementById('coupon-input');
    const inputValue = inputField.value;
    inputField.value = '';
    if (inputValue === 'SELL200') {
        const price1 = getThePrice('p-one');
        const finalP1 = price1 - price1;
        const totalPrice1 = getTotalPrice('total-price', finalP1);
        const finalTotal = totalPrice1
        console.log(finalTotal);
        const discountAmount = findDiscount('discount', finalTotal);

        totalPayment('total', finalTotal, discountAmount);
    }
}




/* second card */
document.getElementById('second-card').addEventListener('click', function () {
    const price2 = getThePrice('p-two');
    const name2 = getTheProductName('n-2');
    /*  product name entry in the list  */
    const nameSet = document.getElementById("product-name-entry");
    const p = document.createElement('p');
    const count = nameSet.childElementCount;
    p.classList.add('text-2xl', 'font-medium', 'p-1');
    nameSet.appendChild(p);
    p.innerHTML = `${count + 1}. ${name2}`
    const totalPrice2 = getTotalPrice('total-price', price2);
    if (totalPrice2 >= 0) {
        /* removing the disable  */
        openButton('purchases-btn');
        noDiscount('total', totalPrice2);

    }
    /* removing the disable  */
    if (totalPrice2 >= 200) {
        openButton('coupon-btn');
    }
    else {
        noDiscount('total', totalPrice2);
    }
})


function theName() {
    const inputField = document.getElementById('coupon-input');
    const inputValue = inputField.value;
    inputField.value = '';
    if (inputValue === 'SELL200') {
        const price2 = getThePrice('p-two');
        const finalP2 = price2 - price2;
        const totalPrice2 = getTotalPrice('total-price', finalP2);
        const finalTotal = totalPrice2
        console.log(finalTotal);
        const discountAmount = findDiscount('discount', finalTotal);

        totalPayment('total', finalTotal, discountAmount);
    }
}










/* third card */
document.getElementById("third-card").addEventListener('click', function () {
    const price3 = getThePrice('p-three');
    const name3 = getTheProductName('n-3');
    /*  product name entry in the list  */
    const nameSet = document.getElementById("product-name-entry");
    const p = document.createElement('p');
    const count = nameSet.childElementCount;
    p.classList.add('text-2xl', 'font-medium', 'p-1');
    nameSet.appendChild(p);
    p.innerHTML = `${count + 1}. ${name3}`
    const totalPrice3 = getTotalPrice('total-price', price3);

    if (totalPrice3 >= 0) {
        /* removing the disable  */
        openButton('purchases-btn');
        noDiscount('total', totalPrice3);
    }

    if (totalPrice3 >= 200) {
        /* removing the disable  */
        openButton('coupon-btn');
        noDiscount('total', totalPrice3);
    }

    else {
        noDiscount('total', totalPrice3);
    }
})



function theName() {
    const inputField = document.getElementById('coupon-input');
    const inputValue = inputField.value;
    inputField.value = '';
    if (inputValue === 'SELL200') {
        const price3 = getThePrice('p-three');
        const finalP3 = price3 - price3;
        const totalPrice3 = getTotalPrice('total-price', finalP3);
        const finalTotal = totalPrice3
        console.log(finalTotal);
        const discountAmount = findDiscount('discount', finalTotal);

        totalPayment('total', finalTotal, discountAmount);
    }
}





/* forth card */
document.getElementById("forth-card").addEventListener('click', function () {
    const price4 = getThePrice('p-four');
    const name4 = getTheProductName('n-4');
    /*  product name entry in the list  */
    const nameSet = document.getElementById("product-name-entry");
    const p = document.createElement('p');
    const count = nameSet.childElementCount;
    p.classList.add('text-2xl', 'font-medium', 'p-1');
    nameSet.appendChild(p);
    p.innerHTML = `${count + 1}. ${name4}`
    const totalPrice4 = getTotalPrice('total-price', price4);
    if (totalPrice4 >= 0) {
        /* removing the disable  */
        openButton('purchases-btn');
        noDiscount('total', totalPrice4);
    }


    /* removing the disable  */
    if (totalPrice4 >= 200) {
        openButton('coupon-btn');
        noDiscount('total', totalPrice4);

    }
    else {
        noDiscount('total', totalPrice4);
    }
})




function theName() {
    const inputField = document.getElementById('coupon-input');
    const inputValue = inputField.value;
    inputField.value = '';
    if (inputValue === 'SELL200') {
        const price4 = getThePrice('p-four');
        const finalP4 = price4 - price4;
        const totalPrice4 = getTotalPrice('total-price', finalP4);
        const finalTotal = totalPrice4
        console.log(finalTotal);
        const discountAmount = findDiscount('discount', finalTotal);

        totalPayment('total', finalTotal, discountAmount);
    }
}








/* fifth card */
document.getElementById("fifth-card").addEventListener('click', function () {
    const price5 = getThePrice('p-five');
    const name5 = getTheProductName('n-5');
    /*  product name entry in the list  */
    const nameSet = document.getElementById("product-name-entry");
    const p = document.createElement('p');
    const count = nameSet.childElementCount;
    p.classList.add('text-2xl', 'font-medium', 'p-1');
    nameSet.appendChild(p);
    p.innerHTML = `${count + 1}. ${name5}`
    const totalPrice5 = getTotalPrice('total-price', price5);
    if (totalPrice5 >= 0) {
        /* removing the disable  */
        openButton('purchases-btn');
        noDiscount('total', totalPrice5);
    }


    if (totalPrice5 >= 200) {
        /* removing the disable  */
        openButton('coupon-btn');
        noDiscount('total', totalPrice5);
    }
    else {
        noDiscount('total', totalPrice5);
    }
})


function theName() {
    const inputField = document.getElementById('coupon-input');
    const inputValue = inputField.value;
    inputField.value = '';
    if (inputValue === 'SELL200') {
        const price5 = getThePrice('p-five');
        const finalP5 = price5 - price5;
        const totalPrice5 = getTotalPrice('total-price', finalP5);
        const finalTotal = totalPrice5
        console.log(finalTotal);
        const discountAmount = findDiscount('discount', finalTotal);

        totalPayment('total', finalTotal, discountAmount);
    }
}







/* sixth card */
document.getElementById("sixth-card").addEventListener('click', function () {
    const price6 = getThePrice('p-six');
    const name6 = getTheProductName('n-6');
    /*  product name entry in the list  */
    const nameSet = document.getElementById("product-name-entry");
    const p = document.createElement('p');
    const count = nameSet.childElementCount;
    p.classList.add('text-2xl', 'font-medium', 'p-1');
    nameSet.appendChild(p);
    p.innerHTML = `${count + 1}. ${name6}`
    const totalPrice6 = getTotalPrice('total-price', price6);
    /* removing the disable  */
    if (totalPrice6 >= 0) {
        openButton('purchases-btn');
        noDiscount('total', totalPrice6);
    }

    if (totalPrice6 >= 200) {
        /* removing the disable  */
        openButton('coupon-btn');
        noDiscount('total', totalPrice6);
    }

    else {
        noDiscount('total', totalPrice6);
    }
})




function theName() {
    const inputField = document.getElementById('coupon-input');
    const inputValue = inputField.value;
    inputField.value = '';
    if (inputValue === 'SELL200') {
        const price6 = getThePrice('p-six');
        const finalP6 = price6 - price6;
        const totalPrice6 = getTotalPrice('total-price', finalP6);
        const finalTotal = totalPrice6
        console.log(finalTotal);
        const discountAmount = findDiscount('discount', finalTotal);

        totalPayment('total', finalTotal, discountAmount);
    }
}


/* page reset function */
document.getElementById('go-home-btn').addEventListener('click', function () {
    location.reload();
})



