


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
    if (totalPrice1 >= 200) {
        openButton('coupon-btn');
        const discountAmount = findDiscount('discount', totalPrice1);
        totalPayment('total', totalPrice1, discountAmount);
    }
    else {
        noDiscount('total', totalPrice1);
    }


})








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
    if (totalPrice2 >= 200) {
        openButton('coupon-btn');
        const discountAmount = findDiscount('discount', totalPrice2);
        totalPayment('total', totalPrice2, discountAmount);
    }
    else {
        noDiscount('total', totalPrice2);
    }

})








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
    if (totalPrice3 >= 200) {
        openButton('coupon-btn');
        const discountAmount = findDiscount('discount', totalPrice3);
        totalPayment('total', totalPrice3, discountAmount);
    }
    else {
        noDiscount('total', totalPrice3);
    }
})





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
    if (totalPrice4 >= 200) {
        openButton('coupon-btn');
        const discountAmount = findDiscount('discount', totalPrice4);
        totalPayment('total', totalPrice4, discountAmount);
    }
    else {
        noDiscount('total', totalPrice4);
    }


})


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
    if (totalPrice5 >= 200) {
        openButton('coupon-btn');
        const discountAmount = findDiscount('discount', totalPrice5);
        totalPayment('total', totalPrice5, discountAmount);
    }
    else {
        noDiscount('total', totalPrice5);
    }
})




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
    if (totalPrice6 >= 200) {
        openButton('coupon-btn');
        const discountAmount = findDiscount('discount', totalPrice6);
        totalPayment('total', totalPrice6, discountAmount);
    }
    else {
        noDiscount('total', totalPrice6);
    }

})
