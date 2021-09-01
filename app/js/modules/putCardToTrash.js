
const putCardToTrash = () => {

  const markByTrash = (card) => {
    if (card.querySelector('.card__basket')) {
      card.querySelector('.card__basket').remove();
      return;
    } 

    const basket = document.createElement('img');
    basket.src = './images/basket.png';
    basket.className = 'card__basket';
    card.append(basket);
  }; 

  document.addEventListener('click', e => {
    if ((e.target.matches('.card') || e.target.matches('.card *')) 
        && !e.target.matches('.card__basket')) {
      const choosenCard = e.target.closest('.card');
      markByTrash(choosenCard);
    } 
    
  });


};

export default putCardToTrash;