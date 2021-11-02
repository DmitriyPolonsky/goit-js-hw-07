import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryEl = galleryItems.map((item) => {
    return `<li>
    <a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>
    </li>`
}) .join("");
gallery.insertAdjacentHTML("beforeend", galleryEl);
//
var lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,

 });
//
console.log(galleryItems);
