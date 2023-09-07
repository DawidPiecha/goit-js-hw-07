import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryElements = galleryItems
  .map(
    (element) => `<li class="gallery__item">
  <a class="gallery__link" href="${element.original}">
  <img class="gallery__image" alt="${element.description}" src="${element.preview}"  data-source="${element.original}">
  </a>
  </li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryElements);

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const selectedImage = event.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${selectedImage}">`);

  instance.show();

  document.addEventListener("keydown", (event) => {
    event.preventDefault();
    if (event.code === "Escape") {
      instance.close();
    }
  });
});
