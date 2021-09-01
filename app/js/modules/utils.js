const renewCardsId = (cardsList) => {
  cardsList.forEach((item, index) => item.id = index);
};

const cleanContainer = () => {
  const container = document.querySelector('.cards-wrapper');
  container.querySelectorAll('.card').forEach(item => item.remove());
}

export {renewCardsId, cleanContainer};