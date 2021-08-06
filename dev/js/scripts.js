$(window).on('load', function () {  
    //mobile-menu
    const sidebar = document.querySelector('.menu--mobile'),
    menuItem = document.querySelectorAll('.menu li a'),
    hamburger = document.querySelector('.burger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('burger--active');
        sidebar.classList.toggle('menu--active');
    });
    menuItem.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            hamburger.classList.toggle('burger--active');
            sidebar.classList.toggle('menu--mobile');
        })
    });

    //footer menu
    if($(window).width() > 992){
        $('.menu__item').on('mouseover',function () {
            let item = $(this);
            item.addClass('menu__item--active');
            let submenu = $(this).find('.menu__list--sub');
            if(submenu){
                submenu.css({'opacity' : '1'});
            }
        }).on('mouseout', function (){
            $(this).removeClass('menu__item--active');
            if($(this).find('.menu__list--sub')){
                $(this).find('.menu__list--sub').css({'opacity' : '0'});
            }
        });
    }else{
        $('.page-footer__menu').on('click', function () {
            if($(this).find('.page-footer__list').text() != ''){
                $(this).toggleClass('page-footer__menu--active');
                $(this).find('.page-footer__list').slideToggle();
            }
        });
    }


    //sliders
    $('.promo-slider').slick({
        arrows: true,
        prevArrow: 
        '<button type="button" class="slick-arrow slick-prev">' +
            '<svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path d="M12 21L2 11L12 1" class="slick-arrow-blue" stroke-width="2" stroke-linecap="round"/>' +
            '</svg>' +
        '</button>',
        nextArrow: 
        '<button type="button" class="slick-arrow slick-next">' +
            '<svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path d="M1 1L11 11L1 21" class="slick-arrow-blue" stroke-width="2" stroke-linecap="round"/>' +
            '</svg>'+
        '</button>',
        fade: true
    }
    );

});