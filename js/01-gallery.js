import { galleryItems } from "./gallery-items.js";
// Change code below this line

const items = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
  })
  .join("");

const gallery = document.querySelector(".gallery");
gallery.innerHTML = items;

gallery.addEventListener("click", onClick);

function onClick(e) {
  e.preventDefault();
  const url = e.target.dataset.source;
  if (url) {
    const alt = e.target.alt;
    const instance = basicLightbox.create(`
    <img src="${url}" width="800" height="600" alt="${alt}">`);

    instance.show(() => {
      window.addEventListener("keydown", (e) => onEscPress(e, instance), {
        once: true,
      });
    });
  }
}

function onEscPress(e, instance) {
  if (e.key === "Escape") {
    instance.close();
  }
}
