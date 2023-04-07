import loadImages from "./loadImages";
import refs from './refs';
let page = 1;
export default function handleLoad(){
        refs.loadBtnEl.style.display = 'none';
        search = refs.loadBtnEl.dataset.page;
    console.log(search);
     page++;
        loadImages(search, page);
       
    }