import loadImages from "./loadImages";
import { clearGallery } from "./images";
import refs from './refs';

export default function handleSubmit(e) {
    e.preventDefault();
    // const data = {};
    // console.log(new FormData(e.currentTarget));
    // new FormData(e.currentTarget).forEach((value, name) => {
    //     data[name] = value;
    // })
    // console.log(data.searchQuery);
        const { elements: { searchQuery } } = e.currentTarget;
        const search = searchQuery.value.trim();
        refs.loadBtnEl.dataset.page = search;
        if (search !== '') {
            clearGallery();
            refs.loadBtnEl.style.display = 'none';
            loadImages(search, 1);
        }
    }