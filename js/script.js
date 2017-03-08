function showToggle(x) {
    x.classList.toggle("change");
    x.classList.toggle("show-dropdown-content");
};


$(function() {
    $("#page-wrap").wrapInner("<table cellspacing='50'><tr>");
    $(".post").wrap("<td>");
 });

 $(document).ready(function () {
    $('body').mousewheel(function(e, delta) {
        this.scrollLeft -= (delta * 40);
        e.preventDefault();
    });
    $('.about-link').click(function() {
    	$('.about').toggle();
    });
    $('.close-button').click(function() {
        $('.about').hide();
    });
});
