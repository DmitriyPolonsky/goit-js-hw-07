import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector(".gallery");
const galleryEl = galleryItems.map((item) => {
    return `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
            />
        </a>
    </div>`;
  })
  .join("");
gallery.insertAdjacentHTML("beforeend", galleryEl);

//

gallery.addEventListener("click", onImageClick);

function onImageClick(event) {
    event.preventDefault();
    
    if (event.target.className !== "gallery__image") {
    return;
    };
        
    const srcLink = event.target.dataset.source;
    const instance = basicLightbox.create(
        `<img src="${srcLink}" width="800" height="600">`
    );
    instance.show();
 
    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            instance.close();
        };
     } )
};
//
console.log(galleryItems);