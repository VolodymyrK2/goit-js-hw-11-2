import loadImages from "./loadImages";
import { clearGallery } from "./images";

const loadBtnEl = document.querySelector('.load-more');

export default function handleSubmit(search) {
    return onSubmit = (e) => {
        e.preventDefault();
        const { elements: { searchQuery } } = e.currentTarget;
        const search = searchQuery.value.trim();
        if (search !== '') {
            clearGallery();
            loadBtnEl.style.display = 'none';
            loadImages(search, 1);
        }
    }
}    