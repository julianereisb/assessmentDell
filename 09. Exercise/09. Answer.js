// redirect of links and colorize the categories
function colorizeIt(event) {
    event.stopPropagation();
    event.preventDefault();

    let colorChoosed = event.target.parentElement.classList.value
    // change background color
    const backgroundCategories = document.querySelectorAll('.half-hero .gray-light')
    for (const item of backgroundCategories) {
        item.style.background = colorChoosed
    }
}

// categorize the links according to color
(function () {
    const menuLinks = document.querySelectorAll('.quick-link .quick-links-outer-container a')
    let column1 = true;
    let column2 = false;
    let column3 = false;

    for (const item of menuLinks) {
        if (column1) {
            item.classList.add('purple');
            column1 = false;
            column2 = true;
        } else if (column2) {
            item.classList.add('green');
            column2 = false;
            column3 = true;
        } else if (column3) {
            item.classList.add('orange');
            column3 = false;
            column1 = true;
        }

        item.addEventListener('click', colorizeIt, false );
    };
})()

// changed the images of the products in the Networking section
(function () {
    const PhotoCategory = document.querySelector('.half-hero img[alt="Cameras, Photo & Video"]').closest(".half-hero").querySelector('.half-modules-outer-container');
    const NetworkingCategory = document.querySelector('.half-hero img[alt="Networking"]').closest(".half-hero").querySelector('.half-modules-outer-container');

    const PhotoProducts = PhotoCategory.querySelectorAll('.half-modules-inner-container');
    let NetworkingProducts = NetworkingCategory.querySelectorAll('.half-modules-inner-container');
    for (let item = 0; item < NetworkingProducts.length; item++) {
        let tempImg = PhotoProducts[item] != undefined && (PhotoProducts[item].querySelector('.half-inner-module-image img').getAttribute('src'));
        tempImg != undefined && (NetworkingProducts[item].querySelector('.half-inner-module-image img').setAttribute('src', tempImg))
    }
})()

// self-invoking function that sums the prices of all products listed on the Power, Batteries & Adapters section
(function () {
    const PowerCategory = document.querySelector('.half-hero img[alt="Power, Batteries & Adapters"]').closest(".half-hero").querySelector('.half-modules-outer-container');
    const PhotoProducts = PowerCategory.querySelectorAll('.half-modules-inner-container');
    let sumProducts = 0;
    for (const item of PhotoProducts) {
        sumProducts += parseFloat(item.querySelector('.half-hero-pricing').innerText.split('$')[1]);
    }
    alert(`The total value of the products in the Power, Batteries & Adapters section is $${sumProducts}`)
})()