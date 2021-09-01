const renewCardsId = (cardsList) => {
  cardsList.forEach((item, index) => item.id = index);
};

export default renewCardsId;