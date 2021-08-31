import renderCards from './modules/renderCards';
import {cardsList} from './modules/cardsList';
import putCardToTrash from './modules/putCardToBasket';
import validateForm from './modules/validateForm';

window.addEventListener('DOMContentLoaded', () => {
  renderCards(cardsList);
  putCardToTrash();
  validateForm(cardsList);
});