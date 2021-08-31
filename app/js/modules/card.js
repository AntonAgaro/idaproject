export default class Card {
  constructor(id, img, name, descr, price, container) {
    this.id = id;
    this.img = img;
    this.name = name;
    this.descr = descr;
    this.price = price;
    this.container = container;
  }

  render() {
    const card = document.createElement('div');
    card.id = this.id;
    card.className = 'card';
    card.innerHTML = `
      <img class="card__img" src=${this.img} alt="card">
      <div class="card__text-wrapper">
        <div class="card__title">${this.name}</div>
        <div class="card__descr">${this.descr}</div>
        <div class="card__price">${this.price}</div>
      </div>
    `;

    this.container.append(card);
  }
}