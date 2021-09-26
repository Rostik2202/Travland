$(function () {

    $('.offers__slider').slick({
        dots: true,
        arrow: true,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,

        responsive: [
            {
                breakpoint: 1591,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 1301,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1001,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: false,
                }
            },
            {
                breakpoint: 801,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                }
            },

        ],
        prevArrow: '<img class="prev-arrow" src="./images/prev-arrow.svg" alt="prev"></img>',
        nextArrow: '<img class="next-arrow" src="./images/next-arrow.svg" alt="prev"></img>',

    });


});

$(function () {
    const burger__menu = document.querySelector('.burger__menu');
    burger__menu.addEventListener('click', () => {
        burger__menu.classList.toggle('burger__menu-active');
    })
});

$('.burger__menu').on('click', function () {
    $('.header__list').slideToggle();
});