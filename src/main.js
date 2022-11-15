import { Form, SubscriptionHandler } from './js/form.js';
import GalleryEvents from './js/gallery.js';
import Revealer  from './js/scroll-animations.js';

class App {
    
    static init () {
        const form = new Form();
        form.run();
    }
    static runSubscription () {
        const subscription = new SubscriptionHandler();
        subscription.subscribe();
    }
    static runGalleryEvents() {
        const galleryEvents = new GalleryEvents();
        galleryEvents.slideGradients();
    }
    static runRevealer() {
        const revealer = new Revealer();
        revealer.handleEvents();
    }
}

App.init();
App.runSubscription();
App.runGalleryEvents();
App.runRevealer();

