// In JS Vanilla
const elements = document.querySelectorAll('p');
for(let i=0; i < (elements.length-1); i++) {
    elements[i].onclick = function() {
        this.style.background = "#d0d";
    };
}

// In jQuery
$("p").not(":last").click(function() {
    $(this).css( "background-color","#d0d" );
})