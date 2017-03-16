//toggle menu
function showToggle(x) {
    x.classList.toggle("change");
    x.classList.toggle("show-dropdown-content");
};

//make table for gallery section
$(function() {
    $("#page-wrap").wrapInner("<table cellspacing='50'><tr>");
    $(".post").wrap("<td>");
    //scroll horizontally on mousewheel
    $('body').mousewheel(function(e, delta) {
        this.scrollLeft -= (delta * 40);
        e.preventDefault();
    });
    //toggle about section
    $('.about-link').click(function() {
        $('.about').toggle();
    });
    $('.close-button').click(function() {
        $('.about').hide();
    });
    //show image title on hover
    $('.overlay').hover(
        function() {
            $(this).children(".title").show();
        }, function() {
            $(this).children(".title").hide();
        }
    );
    //show modal when image clicked
    $('.overlay').on('click', function() {
        var image = $(this).children("img").attr("src");
        var title = $(this).children("img").attr('alt');
        var caption = $(this).children("img").attr("caption");
        $('#modal-img').attr("src", image);
        $('.modal-title').html(title);
        $('.caption').html(caption);
        $('#modal').show();
    });
    $('.close').on('click', function() {
        $('#modal').hide();
    });
    $('html').on('click', function(event) {
        if (event.target == $('#modal')) {
            $('#modal').hide();
        };
    });
});