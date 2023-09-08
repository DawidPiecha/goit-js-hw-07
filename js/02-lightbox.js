import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryElements = galleryItems
  .map(
    (element) => `<li class="gallery__item">
  <a class="gallery__link" href="${element.original}">
  <img class="gallery__image" alt="${element.description}" src="${element.preview}" title="${element.description}">
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
  const description = event.target.title;
  const options = {
    captionData: description,
    captionDelay: 250,
  };
  const lightbox = new SimpleLightbox(".gallery__item a", options);
});
