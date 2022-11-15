import { Form, SubscriptionHandler } from 'assets/js/form';
import GalleryEvents from './js/gallery';
class App {
  static init() {
    const form = new Form();
    form.run();
  }
  static runSubscription() {
    const subscription = new SubscriptionHandler();
    subscription.subscribe();
  }
  static runGalleryEvents() {
    const galleryEvents = new GalleryEvents();
    galleryEvents.slideGradients();
  }
}
App.init();
// App.runSubscription();
App.runGalleryEvents();

// class GalleryEventsFn {

//     constructor() {
//         this.screenView = window.innerWidth;
//         this.galleryElement = document.querySelector('.gallery');
//     }

//     slideGradients() {
//         console.log('Sliding Gradients');
//         let currentAngleOfRotation = 0;
//         setInterval(() => {
//             currentAngleOfRotation += 10;
//             this.galleryElement.style.background = `linear-gradient(${currentAngleOfRotation}deg, white, var(--primary))`;
//         }, 1000)
//     }
//     rotateGradients() {
//         console.log('Rotating Gradients');
//         let currentPercentageOfScale = 0;
//         setInterval(() => {
//             if( currentPercentageOfScale > 80 ) {
//                 currentPercentageOfScale = 0;
//             } else  {
//                 currentPercentageOfScale += 2;
//             }
//             this.galleryElement.style.background = `radial-gradient(white ${currentPercentageOfScale}%, var(--primary))`;
//         }, 100)
//     }
//     runEvents() {
//         if( this.screenView >= '700') {
//             console.log('In  Tablet and Desktop views: ' + this.screenView);
//             this.slideGradients();
//         } else this.rotateGradients();
//     }
// }

// const galleryEvents = new GalleryEventsFn();
// galleryEvents.runEvents();