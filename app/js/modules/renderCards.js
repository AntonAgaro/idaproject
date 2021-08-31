import Card from "./card";

const renderCards = (cards) => {
  const cardsWrapper = document.getElementById('cards-wrapper');

  cards.forEach((item, index) => {
    const {img, name, descr, price} = item;
    new Card(index, img, name, descr, price, cardsWrapper).render();
  });
}

export default renderCards;