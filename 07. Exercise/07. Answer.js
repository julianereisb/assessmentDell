// with css
$(".play.overlay-video-trigger.btn.primary.cta-v2").css('pointer-events','none');


// with JS Vanilla
function stopDefAction(event) {
    event.stopPropagation();
    event.preventDefault();
}
document.querySelector('.play.overlay-video-trigger.btn.primary.cta-v2').addEventListener(
    'click', stopDefAction, false
);


// with jQuery
$(".play.overlay-video-trigger.btn.primary.cta-v2").click(function(e) {
    e.preventDefault();
    e.stopPropagation();
});