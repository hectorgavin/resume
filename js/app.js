$(document).ready(function() {
    // Make sidebar stick in parent when scrolling
    $('.c-sidebar').stick_in_parent({'offset_top': 100});

    // Display nav once .c-intro is not longer visible
    window.affix.bind($('.c-nav'), $('.c-resume').offset().top);
});