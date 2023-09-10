
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

function partsGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
        `;
        
    }).join('');
}

const ul = document.querySelector('.gallery');
const markup = partsGallery(galleryItems);

ul.insertAdjacentHTML('beforeend', markup);


const lightbox = new SimpleLightbox('.gallery a', {
    sourceAttr: 'href', 
    captions: true,
    captionDelay: 250,
    captionPosition: 'bottom',
    captionType: 'attr',
    captionsData: 'alt', 
    
});
    