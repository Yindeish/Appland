class Carousel {
  constructor() {
    this.carouselSlider = document.querySelector('.image-slider');
    this.carouselSlides = [...document.querySelectorAll('.image-slide')];
    this.activeSlide = document.querySelector('.activeSlide');
    this.transitionValue = 0;
    this.count = 0;
    this.currentSlide = this.carouselSlides[this.count];
    this.transalationIncrement = this.currentSlide.getBoundingClientRect().width;
    // this.transalationIncrement = this.currentSlide.previousElementSibling.getBoundingClientRect().width;
  }

  next() {
    setInterval(() => {
      if (this.count > 11) {
        this.count = 0;
        this.transitionValue = -this.transalationIncrement;
        if (this.currentSlide == this.activeSlide) {
          this.transalationIncrement = this.currentSlide.previousElementSibling.getBoundingClientRect().width;
          this.transitionValue = this.transalationIncrement;
        }
      }
      this.currentSlide = this.carouselSlides[this.count];
      // TargetSlide is the damn active slide
      // The +4 maintains the targetSlide being at the center
      // That is the 4th element of seven elements
      this.targetSlide = this.carouselSlides[this.count + 4];
      this.transitionValue -= this.transalationIncrement;
      this.carouselSlider.style.transform = `translateX(${this.transitionValue}px)`;
      this.carouselSlides.forEach(slide => {
        slide.classList.remove('activeSlide');
      });
      if (!this.targetSlide.classList.contains('activeSlide')) {
        this.targetSlide.classList.add('activeSlide');
        this.targetSlide.previousElementSibling.classList.remove('activeSlide');
      } else {
        this.targetSlide.classList.remove('activeSlide');
      }
      this.count++;
      // console.log(this.targetSlide);
    }, 2000);
    console.log(this.count);
  }
}
;
class CarouselIndicator extends Carousel {
  constructor() {
    super();
  }
  proceed() {
    console.log(this.targetSlide);
  }
}
let homePageCarousel = new Carousel();
homePageCarousel.next();
let homePageCarouselIndicator = new CarouselIndicator();
homePageCarouselIndicator.proceed();