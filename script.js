$(document).ready(function() {
    $('div').mouseenter(function() {
        $('div').fadeTo('fast',1.00);
    });
    $('div').mouseleave(function() {
        $('div').fadeTo('fast', 0.5);
    });
})
