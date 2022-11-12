class Form {

    form = document.querySelector('.php-email-form');
    nameField = document.getElementById('name');
    emailField = document.getElementById('email');
    subjectField = document.getElementById('subject');
    messageField = document.querySelector('textarea');
    inputFields = document.querySelectorAll('input');
    submitBtn = document.getElementById('submit-btn');

    updatePlaceholder ( inputField, placeholderText ) {
        if ( inputField.value === '' ) {
            inputField.placeholder = placeholderText;
            inputField.classList.add('danger');
            return false;
        } else {
            inputField.placeholder = '';
            inputField.classList.remove('danger');
            return true;
        }
    }
    validate () {
        const a  = this.updatePlaceholder(this.nameField, 'Name is required');
        const b  = this.updatePlaceholder(this.emailField, 'Email is required');
        const c  = this.updatePlaceholder(this.subjectField, 'Subject is required');
        return a && b && c;
    }
    clearField() {
        this.nameField.value = '';
        this.emailField.value = '';
        this.subjectField.value = '';
        this.messageField.value = '';
    }
    click () {
        this.inputFields.forEach(inputField => {
            inputField.addEventListener('input', e => {
                e.preventDefault()
                this.validate();
            });
        });
        this.submitBtn.addEventListener('click', e => {
            e.preventDefault();
            this.validationResult = Boolean(this.validate());
            if ( this.validationResult === true ) {
                this.sendData();
            } 
        });
    }
    async sendData () {
        const formData = {
            userName: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            subject: document.getElementById('subject').value.trim(),
            message: document.querySelector('textarea').value.trim()
        };
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://applandusers-default-rtdb.firebaseio.com/userComments.json');
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.responseType = 'json';
            xhr.onload = () => {
                if ( xhr.status >= 200 || xhr.status < 300) {
                    if( xhr.readyState == '4' ) {
                        this.clearField();
                        document.querySelector('.submit-notification .loading').style.display = 'none';
                    }
                    resolve(xhr.response);
                } else {
                    reject(xhr.response);
                }
            }
            xhr.onprogress = () => {
                document.querySelector('.submit-notification .loading').style.display = 'block';
            }
            xhr.onerror = () => {
                reject("Couldn't reach the Server");
                setTimeout(() => {
                    document.querySelector('.submit-notification .error-message').style.display = 'none';
                }, 3000);
                document.querySelector('.submit-notification .error-message').style.display = 'block';
                document.querySelector('.submit-notification .error-message').style.color = 'red';
                document.querySelector('.submit-notification .error-message').textContent = 'Failed to connect to server';
            }
            xhr.send(JSON.stringify(formData));
        })
        .then(data => {
            const messageId = data.name;
            setTimeout(() => {
                document.querySelector('.submit-notification .sent-message').style.display = 'none';
            }, 3000);
            document.querySelector('.submit-notification .sent-message').style.display = 'block';
            document.querySelector('.submit-notification .sent-message').textContent = 'Sent and encrypted with ' + messageId;
        })
        .catch(err => {
            setTimeout(() => {
                document.querySelector('.sent-message').style.display = 'none';
            }, 3000);
            document.querySelector('.submit-notification .error-message').style.display = 'block';
            document.querySelector('.submit-notification .error-message').style.color = 'red';
            document.querySelector('.submit-notification .error-message').textContent = err;
        })
    }
    run() {
        this.click();
    }
   
}

class SubscriptionHandler {
    constructor() {
        this.subscribeBtn = document.querySelector('.subscribeBtn');
        this.subscriptionEmail = document.querySelector('.subscriptionEmail');
        this.subscribed = false;
        this.validated = false;
    }

    subscribe() {
        this.subscriptionEmail.addEventListener('input', this.validate);
        this.subscribeBtn.addEventListener('click', event => {
            this.validate();
            event.preventDefault();
            if( this.validated ) {
                this.subscribed = true;

                this.subscriptionEmail.parentElement.style.border = '1px solid transparent';
                if( this.subscribed ) {
                    this.subscribeBtn.value = 'Subscribe';
                    setTimeout(() => {
                        this.subscribeBtn.value = 'Subscribed';
                        this.subscribeBtn.style.backgroundColor = 'green';
                    }, 2000);
                    setTimeout(() => {
                        this.clearField();
                        this.subscribeBtn.value = 'subscribe';
                        this.subscribeBtn.style.backgroundColor = 'var(--primary)';
                    }, 3000);
                } else {
                    this.subscribeBtn.value = 'Subscribe';
                }
               
                return new Promise((resolve, reject) => {
                    const xhr = new XMLHttpRequest();
                    xhr.open('POST', 'https://appland-929cd-default-rtdb.firebaseio.com/newsletter.json');
                    xhr.setRequestHeader('Content-type','application/json');
                    xhr.responseType = 'json';
                    xhr.onload = () => {
                        if( this.status >= 200 || this.status <= 300 ) {
                            console.log('Status is ok');
                            resolve(xhr.response);
                        } else {
                            console.log("Status is bad");
                            reject(xhr.response);
                        }
                    }
                    xhr.onerror = () => {
                        console.log("Couldn't sent message!");
                    }
                    xhr.send(JSON.stringify(document.querySelector('.subscriptionEmail').value))
                }).then(data => {
                    console.log(data.json());
                }).catch(err => {
                    console.log(err);
                })
                
            } 
            if( !this.validated ) {
                this.subscriptionEmail.parentElement.style.border = '1px solid red';
            }
        })
    }
    clearField() {
        this.subscriptionEmail.value = '';
    }
    validate() {
        if (document.querySelector('.subscriptionEmail').value === '' ) {
            this.validated = false;
            document.querySelector('.subscriptionEmail').placeholder = 'Fill in a valid email';
        } else {
            this.validated = true;
            document.querySelector('.subscriptionEmail').placeholder = '';
        }
    }
}

class App {
   
    static init () {
        let form = new Form();
        form.run();
    }
    static runSubscription () {
        let subscription = new SubscriptionHandler();
        subscription.subscribe();
    }
}

App.init();
App.runSubscription();





