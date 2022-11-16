var count = 1;
var swiperWrapper = document.getElementById('swiper-wrapper');

setInterval(() => {
    if( count > 5) {
        count = 1;
    }; 
    var transitionSequence = [...document.querySelectorAll('.testimonials .swiper-slide')][0].getBoundingClientRect().width;
    var value = -transitionSequence * count;
    swiperWrapper.style.transform = `translateX(${value}px)`;
    if ( count <= 5 ) {
        document.querySelector('#swiper-pagination-btn-' + count).classList.add('swiper-pagination-btn-active');
        [...document.querySelectorAll('.swiper-pagination-btn')].forEach(btn => {
        if (!( document.querySelector('#swiper-pagination-btn-' + count) == btn)) {
            btn.classList.remove('swiper-pagination-btn-active');
            // Swiper Btns Click Event
            (function btnClick () {
                var i = 1;
                if ( i > [...document.querySelectorAll('.swiper-pagination-btn')].length) {
                i = 1;
                }
                [...document.querySelectorAll('.swiper-pagination-btn')][i].addEventListener('click', e => {
                count = i;
                value = -577 * i;
                // swiperWrapper.style.transform = `translateX(${value - 577}}px)`;
                });
            i++;
            }());
        }
        });
    }
    
    count++;
    
}, 3000);
