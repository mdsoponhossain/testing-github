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
    