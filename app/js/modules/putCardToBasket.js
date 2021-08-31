const putCardToBasket = () => {
  const cards = document.querySelectorAll('.card');

  const markByBasket = (card) => {
    if (card.querySelector('.card__basket')) {
      card.querySelector('.card__basket').remove();
      return;
    } 

    const basket = document.createElement('img');
    basket.src = './images/basket.png';
    basket.className = 'card__basket';
    card.append(basket);
  } 

  cards.forEach(item => {
    item.addEventListener('click', (e) => {
      const choosenCard = e.target.closest('.card');
      markByBasket(choosenCard);
    });
  })
}

export default putCardToBasket;