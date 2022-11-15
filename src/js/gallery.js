export default class GalleryEvents {
    
    constructor() {
        this.screenView = window.innerWidth;
        this.galleryElement = document.querySelector('.gallery');
    }

    slideGradients() {
        let currentAngleOfRotation = 0;
        setInterval(() => {
            currentAngleOfRotation += 10;
            this.galleryElement.style.background = `linear-gradient(${currentAngleOfRotation}deg, white, var(--primary))`;
        }, 1000)
    }
    rotateGradients() {
        let currentPercentageOfScale = 0;
        setInterval(() => {
            if( currentPercentageOfScale > 80 ) {
                currentPercentageOfScale = 0;
            } else  {
                currentPercentageOfScale += 2;
            }
            this.galleryElement.style.background = `radial-gradient(white ${currentPercentageOfScale}%, var(--primary))`;
        }, 100)
    }
    runEvents() {
        if( this.screenView >= '700') {
            this.slideGradients();
        } else this.rotateGradients();
    }

}



