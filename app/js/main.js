import Card from './modules/card';
import {cardsList} from './modules/cardsList';
import putCardToBasket from './modules/putCardToBasket';

window.addEventListener('DOMContentLoaded', () => {
  const cardsWrapper = document.getElementById('cards-wrapper');

  cardsList.forEach((item, index) => {
    const {img, name, descr, price} = item;
    new Card(index, img, name, descr, price, cardsWrapper).render();
  })

  putCardToBasket();
});