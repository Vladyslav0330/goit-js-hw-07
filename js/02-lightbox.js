import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainerList = document.querySelector(".gallery");
const galleryMarkup = createGalleryList(galleryItems);

galleryContainerList.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryList(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <a class="gallery__item" href="${original}"
    ><img class="gallery__image" src="${preview}" alt="${description}"
  /></a>
`;
    })
    .join("");
}

new SimpleLightbox(
  ".gallery a",
  { captionsData: "alt" },
  { captionDelay: 250 }
);
