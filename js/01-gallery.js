import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGallery(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
<div class="gallery">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>
        `;
    })
    .join("");
}

galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const bigPictureSrc = evt.target.dataset.source;

  const instance = basicLightbox.create(
    `<img src="${bigPictureSrc}" width="800" height="600">`
  );
  instance.show();

  galleryContainer.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
