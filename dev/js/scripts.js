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
        fade: true,
        responsive: [
            {
                 breakpoint: 992,
                 settings: {
                    arrows: false,
                    dots: true
                 }
            }
        ]
    }
    );

    //map
    YaMapsShown = false; 
    $(window).scroll(function() {
        if (!YaMapsShown){     
            showYaMaps();   
            YaMapsShown = true;
        }
    });
    function showYaMaps(){
        var script   = document.createElement("script");
        script.type  = "text/javascript";
        script.src   = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A7d756685574180ab33deecba9327360b2f018aa59415ab87ce71a2310d56e6ec&amp;width=100%25&amp;height=712&amp;lang=ru_RU&amp;scroll=true";
        document.getElementById("YaMaps").appendChild(script);
    }
});