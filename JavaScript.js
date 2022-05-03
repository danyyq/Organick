$(document).ready (function(){
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active') ;
        $('.header').toggleClass('active') ;
        $('body').toggleClass('lock') ;
    }) ;
}) ;