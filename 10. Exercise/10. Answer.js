// links list of menu
const linksList = document.querySelectorAll('#cat-anav-content .anavmfe__accordion__item');

function getFilter(item) {
    for (const i of linksList) {
        if (i.querySelector('.anavmfe__accordion__item__name').innerText == item) {
            let tempLinks = i.querySelectorAll('.anavmfe__accordion__row_item');
            let tempIds = '';
            for (const j of tempLinks) {
                tempIds += `${j.querySelector('input').getAttribute('value')},`;
            }
            let tempBt = tempLinks[0].querySelector('input');
            tempBt.setAttribute('data-url', `${tempBt.getAttribute('data-url').split('?appliedRefinements=')[0]}?appliedRefinements=${tempIds}`);
            tempBt.click();
            break;
        }
    }
}

// Created a dynamic list
(function () {
    let listHTML = '<style>'
    listHTML += 'ul { display: flex; list-style: none;padding: 0;margin-bottom: 10px;flex-wrap: wrap;justify-content: space-between;}';
    listHTML += 'li { margin-bottom: 10px; }';
    listHTML += 'li a { background: #f3f3f3; border-radius: 4px; padding: 3px 5px; display: block; font-weight: 600; }';
    listHTML += '</style>';
    listHTML += '<ul>';

    for (const item of linksList) {
        listHTML += `<li><a class="swb-anchor-tag" href="javascript:void(0);" onclick="getFilter('${item.querySelector('.anavmfe__accordion__item__name').innerText}')">${item.querySelector('.anavmfe__accordion__item__name').innerText}</a></li>`
    }
    listHTML += "</ul>"
    document.querySelector('#cat-tiles-content').insertAdjacentHTML("beforeBegin", listHTML);
})()

