import handleSubmit from './js/handleSubmit';
import handleLoad from './js/handleLoad';

const formEl = document.querySelector('#search-form');
const loadBtnEl = document.querySelector('.load-more');
let search = 'we';
// const onSubmitFn = handleSubmit(search);
// const onLoadFn = handleLoad(search);
formEl.addEventListener('submit', handleSubmit(search));
loadBtnEl.addEventListener('click', handleLoad(search));




 
