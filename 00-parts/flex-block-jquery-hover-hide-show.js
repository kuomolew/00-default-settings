$('.activities-item').hover( 
    function() {
        $(this).children('.activities-item_hidden')
        .css("display", "flex")
        .hide()
        .slideDown();
    },
    function() {
        $(this).children(".activities-item_hidden").slideUp();
});