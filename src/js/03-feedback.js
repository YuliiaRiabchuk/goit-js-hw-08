import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const input = document.querySelector('.feedback-form input');

console.log(form);

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

let formData = {};

getSaveMessage();

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  console.log(formData);
}

function onFormSubmit(evt) {
  const elements = evt.currentTarget.elements;
  const email = elements.email.value;
  const message = elements.message.value;
  console.log(message);

  if (email === '' || message === '') {
    const message = alert`Enter your data`;
    return false;
  }

  evt.preventDefault();
  evt.target.reset();
  localStorage.removeItem('feedback-form-state');
}

function getSaveMessage() {
  const savedMessage = localStorage.getItem('feedback-form-state');

  if (savedMessage) {
    formData = JSON.parse(savedMessage);

    Object.entries(formData).forEach(([key, value]) => {
      form.elements[key].value = value;
    });
  }
}
