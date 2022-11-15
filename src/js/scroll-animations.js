export default class RevealElements {

    constructor() {
        this.revealPoint = 150;
        this.windowHeight = window.innerHeight;
        this.reveals = [...document.querySelectorAll('.reveal')];
        this.revealToLeft = [...document.querySelectorAll('.reveal-to-left')];
        this.revealToRight = [...document.querySelectorAll('.reveal-to-right')];
        this.revealToShake = [...document.querySelectorAll('.reveal-to-shake')];
        this.revealToFadeUp = document.querySelector('.back-to-top');
    }

    move(revealType, revealClass = 'activeReveal') {
        revealType.forEach(reveal => {
            let revealTop = reveal.getBoundingClientRect().top;
            if (revealTop < this.windowHeight - this.revealPoint) {
                reveal.classList.add(revealClass);
            }
            else {
                reveal.classList.remove(revealClass);
            }
        }) 
    }
    revealBeforeScroll() {
        this.reveals[0].classList.add('active-scroll-animation');
        this.reveals[1].classList.add('active-scroll-animation');
    }
    toUp() {
        this.move(this.reveals, 'active-scroll-animation');
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
        if (window.scrollY > this.windowHeight) {
            this.revealToFadeUp.classList.add('activeReveal');
        }
        else {
            this.revealToFadeUp.classList.remove('activeReveal');
        }
    }
    handleEvents() {
        this.revealBeforeScroll();
        window.addEventListener('scroll', () => this.toUp());
        window.addEventListener('scroll', () => this.toRight());
        window.addEventListener('scroll', () => this.toLeft());
        window.addEventListener('scroll', () => this.toShake());
        window.addEventListener('scroll', () => this.toFadeUp());
    }

}

