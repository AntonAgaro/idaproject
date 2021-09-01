import renderCards from './modules/renderCards';
import putCardToTrash from './modules/putCardToTrash';
import validateForm from './modules/validateForm';
import {renewCardsId, cleanContainer} from './modules/utils';
import sortCards from './modules/sortCards';

const getItemsFromLocalStorage = () => {
  const list = JSON.parse(localStorage.getItem('cardsList'));
  return list;
};

const setItemsToLocalStorage = (newList) => {
  localStorage.setItem('cardsList', JSON.stringify(newList));
};

window.addEventListener('DOMContentLoaded', () => {

  if (localStorage.getItem('cardsList')) {
    renderCards(getItemsFromLocalStorage());
  } else {
    fetch('./cardsList.json')
    .then(res => res.json())
    .then(json => {
      const list = json;
      setItemsToLocalStorage(list);
      renderCards(getItemsFromLocalStorage());
    });
  }

  putCardToTrash();

  document.addEventListener('click', e => {
    if (e.target.matches('.card__basket')) {
      const choosenCard = e.target.closest('.card');
      const changedList = getItemsFromLocalStorage().filter(item => item.id !== +choosenCard.id);
      renewCardsId(changedList);
      setItemsToLocalStorage(changedList);
      cleanContainer();
      renderCards(getItemsFromLocalStorage());
    }
  });

  validateForm();

  sortCards();
});

export {getItemsFromLocalStorage, setItemsToLocalStorage};