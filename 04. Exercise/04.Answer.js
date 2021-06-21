const breakpoints = {xxlarge:1600,xlarge:1280,large:980,medium:768,small:640};
function insertNewBackground() {
    let winSize = ($(window).width());
    $.each(breakpoints, function(index, obj) {
        if(obj >= winSize && winSize <= 768) {
                $('#tt-content .header-img').css({
                "background":"url(https://placekitten.com/1280/425) no-repeat center center/cover",
                "min-height": "250px",
                "height": "inherit"
            });

        } else {
            $('#tt-content .hero .rendition.content').css({
                "background":"url(https://placekitten.com/1280/425) no-repeat center center/cover",
                "min-height": "425px",
                "height": "inherit"
            });
        }
    });
}

insertNewBackground();
$(window).resize(function() {
    insertNewBackground();
});

