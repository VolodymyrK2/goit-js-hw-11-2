import { createCollection, informs, renderImages} from "./images";
import { PER_PAGE, getImages } from './apiClient';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import refs from './refs';

const lightbox = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
});
export default async function loadImages(search, page) {
    try {
    const response = await getImages(search, page); 
        const totalPages = Math.ceil(response.totalHits/PER_PAGE);
        informs(page, totalPages,response.totalHits);
        renderImages(createCollection(response.hits));
        lightbox.refresh();
                if (page === totalPages || totalPages===0) {
          refs.loadBtnEl.style.display = 'none';
        } else {
            refs.loadBtnEl.style.display = 'inline-block';
        }
    } catch(e) {
        console.log(e);
    }
   
}