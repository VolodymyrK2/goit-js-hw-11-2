import loadImages from "./loadImages";
const loadBtnEl = document.querySelector('.load-more');
export default function handleLoad(search){
    return onLoad=()=> {
        loadBtnEl.style.display = 'none';
        let page = 1;
        page++;
        console.log(search);
        loadImages(search, page);
    }
}