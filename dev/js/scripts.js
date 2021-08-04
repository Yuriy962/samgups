$(window).on('load', function () {  

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
});