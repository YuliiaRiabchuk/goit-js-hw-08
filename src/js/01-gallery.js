// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

console.log(SimpleLightbox);

const gallery = document.querySelector('.gallery');
const markupGallary = createGalleryMarkup(galleryItems);

function createGalleryMarkup(items) {
  const markup = items
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" 
        href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    `;
    })
    .join('');

  return markup;
}

gallery.insertAdjacentHTML('beforeend', markupGallary);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
