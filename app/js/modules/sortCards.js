import { getItemsFromLocalStorage, setItemsToLocalStorage } from "../main";
import renderCards from "./renderCards";
import { cleanContainer } from "./utils";

const sortCards = () => {
  const select = document.getElementById('select');

  select.addEventListener('change', (e) => {
    let list;
    switch(e.target.value) {
      case 'Сначала дешевые':
        list = getItemsFromLocalStorage().sort((a, b) => +a.price - +b.price);
        cleanContainer();
        renderCards(list);
        setItemsToLocalStorage(list);
        break;
      case 'Сначала дорогие':
        list = getItemsFromLocalStorage().sort((a, b) => +b.price - +a.price);
        cleanContainer();
        renderCards(list);
        setItemsToLocalStorage(list);
        break;
      case 'По названию': 
        list = getItemsFromLocalStorage().sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        });
        cleanContainer();
        renderCards(list);
        setItemsToLocalStorage(list);
        break;
      case 'По умолчанию': 
        cleanContainer();
        renderCards(getItemsFromLocalStorage());
    }
  });
};

export default sortCards;