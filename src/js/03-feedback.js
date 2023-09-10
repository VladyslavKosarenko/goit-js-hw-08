import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const email = form.querySelector('input[name="email"]');
const message = form.querySelector('textarea[name="message"]');
form.addEventListener('input', onInput)
const infoKey = "feedback-form-state";
function onInput() {
    
    const formInfo = {
        
        email: email.value,
        message: message.value,
    }
    localStorage.setItem(infoKey, JSON.stringify(formInfo));
}
function restoreForm() {
    const getForm = localStorage.getItem(infoKey);
    if (getForm) {
        const parse = JSON.parse(getForm);
        email.value = parse.email;
        message.value = parse.message;
    }
    else {
        email.value = '';
        message.value = '';
    }
}
const throttledSaveForm = throttle(onInput, 500);
form.addEventListener('input', throttledSaveForm);
restoreForm();

form.addEventListener('submit', onSubmit);
function onSubmit(event) {
    event.preventDefault();
    const formInfo = {
        
        email: email.value,
        message: message.value,
    }
    console.log(formInfo);
    email.value = '';
    message.value = '';
    localStorage.removeItem(infoKey)

}
