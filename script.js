$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $('.dropdown-submenu a.test').on('click', function(e){
        e.stopPropagation();
        $(this).next('ul').toggle();
        $(this).parent().siblings('.dropdown-submenu').children('ul.dropdown-menu').hide();
        e.preventDefault();
    });
    $('.flip-btn').on('click',function(){
        $(this).text($(this).text() == 'See profile' ? 'Close profile' : 'See profile');
        $(this).parent().prev().find('.flip-card-inner').toggleClass('rotate')
    });
});

