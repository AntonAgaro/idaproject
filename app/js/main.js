import renderCards from './modules/renderCards';
import putCardToTrash from './modules/putCardToTrash';
import validateForm from './modules/validateForm';
import renewCardsId from './modules/renewCardsId';

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
      const container = document.querySelector('.cards-wrapper');
      const choosenCard = e.target.closest('.card');
      console.log(typeof choosenCard.id );
      const changedList = getItemsFromLocalStorage().filter(item => item.id !== +choosenCard.id);
      console.log(changedList);
      renewCardsId(changedList);
      setItemsToLocalStorage(changedList);
      container.querySelectorAll('.card').forEach(item => item.remove());
      renderCards(getItemsFromLocalStorage());
    }
  });

  validateForm('.cards-wrapper');
});

export {getItemsFromLocalStorage, setItemsToLocalStorage};