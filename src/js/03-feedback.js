import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const input = document.querySelector('.feedback-form input');

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

// let formData = {};

getSaveMessage();

function onFormInput(evt) {
  let formData = localStorage.getItem(STORAGE_KEY);
  formData = formData ? JSON.parse(formData) : {};
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  let formData = localStorage.getItem(STORAGE_KEY);
  //   console.dir(evt.currentTarget.elements);
  const emailValue = evt.currentTarget.elements.email.value;
  const massageValue = evt.currentTarget.elements.message;

  if (emailValue === '' || massageValue === '') {
    return alert('Error!Enter your data');
  }

  localStorage.removeItem(STORAGE_KEY);
  evt.currentTarget.reset();
  console.log(formData);
  //   formData = {};
}

function getSaveMessage() {
  let savedForm = localStorage.getItem(STORAGE_KEY);

  if (savedForm) {
    savedForm = JSON.parse(savedForm);

    Object.entries(savedForm).forEach(([key, value]) => {
      form.elements[key].value = value;
    });
  }
}
