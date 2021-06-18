// change categories
const categories = document.querySelectorAll('h5');
for (const cat of categories) {
    const textHightlight = cat.innerText.split(/ (.+)/)[0];
    const textAll = cat.innerText.split(/ (.+)/)[1] != undefined ? cat.innerText.split(/ (.+)/)[1] : '';
    cat.innerHTML = `<mark>${textHightlight}</mark> ${textAll}`
}

// change subcategories
const subCats = document.querySelectorAll('.sub-category');
for (const uls of subCats) {
    for (const lis of uls.children) {
        const textHightlight = lis.innerText.split(/ (.+)/)[0];
        const textAll = lis.innerText.split(/ (.+)/)[1] != undefined ? lis.innerText.split(/ (.+)/)[1] : '';
        lis.innerHTML = `<mark>${textHightlight}</mark> ${textAll}`
    }
}