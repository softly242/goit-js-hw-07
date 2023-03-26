import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const items = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>`;
  })
  .join("");

const gallery = document.querySelector(".gallery");
gallery.innerHTML = items;

const lightbox = new SimpleLightbox(".gallery__link", {
  captions: true,
  captionsData: "alt",
  captionsDelay: 250,
});

console.log(lightbox);
