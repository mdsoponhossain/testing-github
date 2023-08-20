/* first card */
document.getElementById("first-card").addEventListener('click', function () {
    const price1 = getThePrice('p-one');
    console.log(price1);
    const name1 = getTheProductName('n-1');
    console.log(name1);
    /*  product name entry in the list  */
    const nameSet = document.getElementById("product-name-entry");
    const p = document.createElement('p');
    const count =nameSet.childElementCount;
    p.classList.add('text-2xl','font-medium','p-1');
    nameSet.appendChild(p) ;
    p.innerHTML = `${count +1}. ${name1}`
})
    

/* second card */
document.getElementById('second-card').addEventListener('click', function () {
    const price2 = getThePrice('p-two');
    console.log(price2);
    const name2 = getTheProductName('n-2');
    console.log(name2);
     /*  product name entry in the list  */
     const nameSet = document.getElementById("product-name-entry");
     const p = document.createElement('p');
     const count =nameSet.childElementCount;
     p.classList.add('text-2xl','font-medium','p-1');
    nameSet.appendChild(p) ;
    p.innerHTML = `${count +1}. ${name2}`
})

/* third card */
document.getElementById("third-card").addEventListener('click', function () {
    const price3 = getThePrice('p-three');
    console.log(price3);
    const name3 = getTheProductName('n-3');
    console.log(name3);
     /*  product name entry in the list  */
     const nameSet = document.getElementById("product-name-entry");
     const p = document.createElement('p');
     const count =nameSet.childElementCount;
     p.classList.add('text-2xl','font-medium','p-1');
    nameSet.appendChild(p) ;
    p.innerHTML = `${count +1}. ${name3}`
})
/* forth card */
document.getElementById("forth-card").addEventListener('click', function () {
    const price4 = getThePrice('p-four');
    console.log(price4);
    const name4 = getTheProductName('n-4');
    console.log(name4);
    /*  product name entry in the list  */
    const nameSet = document.getElementById("product-name-entry");
    const p = document.createElement('p');
    const count =nameSet.childElementCount;
    p.classList.add('text-2xl','font-medium','p-1');
    nameSet.appendChild(p) ;
    p.innerHTML = `${count +1}. ${name4}`
})
/* fifth card */
document.getElementById("fifth-card").addEventListener('click', function () {
    const price5 = getThePrice('p-five');
    console.log(price5);
    const name5 = getTheProductName('n-5');
    console.log(name5);
    /*  product name entry in the list  */
    const nameSet = document.getElementById("product-name-entry");
    const p = document.createElement('p');
    const count =nameSet.childElementCount;
    p.classList.add('text-2xl','font-medium','p-1');
    nameSet.appendChild(p) ;
    p.innerHTML = `${count +1}. ${name5}`
})
/* sixth card */
document.getElementById("sixth-card").addEventListener('click', function () {
    const price6 = getThePrice('p-six');
    console.log(price6);
    const name6 = getTheProductName('n-6');
    console.log(name6);
    /*  product name entry in the list  */
    const nameSet = document.getElementById("product-name-entry");
    const p = document.createElement('p');
    const count =nameSet.childElementCount;
    p.classList.add('text-2xl','font-medium','p-1');
    nameSet.appendChild(p) ;
    p.innerHTML = `${count +1}. ${name6}`
})






