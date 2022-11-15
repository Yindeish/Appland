"use strict"
// var reveals = document.querySelectorAll('.reveal');
// var revealToLeft = document.querySelectorAll('.reveal-to-left');
// var revealToRight = document.querySelectorAll('.reveal-to-right');
// var revealToShake = document.querySelectorAll('.reveal-to-shake');
// reveals[0].classList.add('active-scroll-animation');
// reveals[1].classList.add('active-scroll-animation');


// window.addEventListener('scroll', revealElementsToUp);
// window.addEventListener('scroll', revealElementsToRight);
// window.addEventListener('scroll', revealElementsToLeft);
// window.addEventListener('scroll', revealElementsToShake);
// window.addEventListener('scroll', revealElementsToFadeUp);

// function revealElementsToUp () {
//     var revealPoint = 150;
//     for( let i = 0; i < reveals.length; i++) {
//         var windowHeight = window.innerHeight;
//         var revealTop = reveals[i].getBoundingClientRect().top;
//         if (revealTop < windowHeight - revealPoint) {
//             reveals[i].classList.add('active-scroll-animation');
//         }
//         else {
//             reveals[i].classList.remove('active-scroll-animation');
//         }
//     }
// }

// function revealElementsToLeft () {
//     var revealPoint = 150;
//     for( let i = 0; i < revealToLeft.length; i++) {
//         var windowHeight = window.innerHeight;
//         var revealTop = revealToLeft[i].getBoundingClientRect().top;
//         if (revealTop < windowHeight - revealPoint) {
//             revealToLeft[i].classList.add('activeReveal');
//         }
//         else {
//             revealToLeft[i].classList.remove('activeReveal');
//         }
//     }
// }
// function revealElementsToRight () {
//     // var revealPoint = 10;
//     var revealPoint = 150;
//     for( let i = 0; i < revealToRight.length; i++) {
//         var windowHeight = window.innerHeight;
//         var revealTop = revealToRight[i].getBoundingClientRect().top;
//         if (revealTop < windowHeight - revealPoint) {
//             revealToRight[i].classList.add('activeReveal');
//         }
//         else {
//             revealToRight[i].classList.remove('activeReveal');
//         }
//     }
// }

// function revealElementsToShake () {
//     // var revealPoint = 10;
//     var revealPoint = 150;
//     for( let i = 0; i < revealToShake.length; i++) {
//         var windowHeight = window.innerHeight;
//         var revealTop = revealToShake[i].getBoundingClientRect().top;
//         if (revealTop < windowHeight - revealPoint) {
//             revealToShake[i].classList.add('activeReveal');
//         }
//         else {
//             revealToShake[i].classList.remove('activeReveal');
//         }
//     }
// }

// Back To Top Button
// function revealElementsToFadeUp () {
//     var windowHeight = window.innerHeight;
//     var backToTopBtn = document.querySelector('.back-to-top');
//     if (window.scrollY > windowHeight) {
//         backToTopBtn.classList.add('activeReveal');
//     }
//     else {
//         backToTopBtn.classList.remove('activeReveal');
//     }
// }

export default class RevealElements {

    constructor() {
        this.revealPoint = 150;
        this.windowHeight = window.innerHeight;
        this.reveals = document.querySelectorAll('.reveal');
        this.revealToLeft = document.querySelectorAll('.reveal-to-left');
        this.revealToRight = document.querySelectorAll('.reveal-to-right');
        this.revealToShake = document.querySelectorAll('.reveal-to-shake');
    }

    move(revealType, revealClass = 'activeReveal') {
        for( let reveal of revealType) {
            let revealTop = revealType[reveal].getBoundingClientRect().top;
            if (revealTop < this.windowHeight - this.revealPoint) {
                revealType[reveal].classList.add(revealClass);
            }
            else {
                revealType[reveal].classList.remove(revealClass);
            }
        }
    }
    revealBeforeScroll() {
        this.reveals[0].classList.add('active-scroll-animation');
        this.reveals[1].classList.add('active-scroll-animation');
    }
    toUp() {
        // this.move(this.reveals, 'active-scroll-animation');
        console.log(this);
    }
    toRight() {
        this.move(this.revealToRight);
    }
    toLeft() {
        this.move(this.revealToLeft);
    }
    toShake(){
        this.move(this.revealToShake);
    }
    // Back To Top Button
    toFadeUp() {
        this.move(this.revealElementsToFadeUp);
    }
    handleEvents() {
        this.revealBeforeScroll();
        window.addEventListener('scroll', this.toUp);
        // window.addEventListener('scroll', this.toRight);
        // window.addEventListener('scroll', this.toLeft);
        // window.addEventListener('scroll', this.toShake);
        // window.addEventListener('scroll', this.toFadeUp);
    }

}

