// functions
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

// removed redirect of links
const menuLinks = document.querySelectorAll('.quick-link .quick-links-outer-container a')
let column1 = true;
let column2 = false;
let column3 = false;
let colorChoosed = 'gray';

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

// changes images
const PhotoCategory = document.querySelector('.half-hero img[alt="Cameras, Photo & Video"]');
const NetworkingCategory = document.querySelector('.half-hero img[alt="Networking"]');

NetworkingCategory.setAttribute('src', PhotoCategory.getAttribute('src'));