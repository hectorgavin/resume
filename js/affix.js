window.affix = {
    bind: function($element, top) {
        $(document).scroll(function() {
            $element.toggleClass('affix', $(this).scrollTop() > top);
        });
    }
};