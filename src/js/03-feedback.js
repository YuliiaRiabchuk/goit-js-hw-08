import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const input = document.querySelector('.feedback-form input');

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

let formData = {};

getSaveMessage();

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  console.log(formData);
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
}

function getSaveMessage() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    formData = JSON.parse(savedMessage);

    Object.entries(formData).forEach(([key, value]) => {
      form.elements[key].value = value;
    });
  }
}
