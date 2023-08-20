/* price collecting from field and find out the price numbers by function */
function getThePrice(TextFieldId){
    const priceField =document.getElementById(TextFieldId);
    const priceString = priceField.innerText;
    const priceValue = parseFloat(priceString);
    return priceValue;
}

/* product name collecting from field and find out the name by function */
function getTheProductName(nameFieldId){
    const nameField =document.getElementById(nameFieldId);
    const productName = nameField.innerText;
    return productName;
}

/* calculating the total price function */

function getTotalPrice(idTotalPrice,newAmount){
    const totalPriceField = document.getElementById(idTotalPrice);
    const totalPriceString = totalPriceField.innerText;
    const totalPrice = parseFloat(totalPriceString);
    const totalAmount = totalPrice + newAmount;
    totalPriceField.innerText = totalAmount;
    return totalAmount;
}

/* discount calculating */

function findDiscount( replacePosition,totalPrice){
    const replaceField = document.getElementById(replacePosition);
    const discount= totalPrice*20/100;
    const replaceValue =replaceField.innerText;
    replaceField.innerText = discount;
    return discount;
}  
    

function totalPayment(replacePosition,totalPrice,totalDiscount){
    const replaceField = document.getElementById(replacePosition);
    const totalPaymentAmount = totalPrice-totalDiscount;
    replaceField.innerText = totalPaymentAmount;
}
    



/* if total cart is less than  200 tk (no discount function)  */

function noDiscount(replacePosition,totalAmount){
    const replaceField = document.getElementById(replacePosition);
    replaceField.innerText = totalAmount;
}

/* removing button disable attribute function */
function openButton(couponBtn){
    const attributeField =document.getElementById(couponBtn);
    attributeField.removeAttribute('disabled');
}
    

    


    