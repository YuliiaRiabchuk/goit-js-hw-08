// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);
console.log(SimpleLightbox);

const gallery = document.querySelector('.gallery');

const markupGallary = galleryItems
  .map(
    ({ preview, original, description }) =>
      ` 
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}/>
</a>
      `
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', markupGallary);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
