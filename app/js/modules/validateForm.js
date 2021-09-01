import renderCards from "./renderCards";
import {getItemsFromLocalStorage, setItemsToLocalStorage} from '../main';
import {renewCardsId, cleanContainer} from "./utils";

const validateForm = () => {
  
  const form = document.getElementById('add-card-form');
  const button = document.getElementById('form-button');
  const inputs = form.querySelectorAll('.form__input');

  const state = {
    name: '',
    price: '',
    img: ''
  };

  const getInputValue = (input) => {
    state[input.id] = input.value;
  };

  const enableButton = () => {
    if (state.name.length > 0 && state.img.length > 0 && state.price.length > 0) {
      button.removeAttribute('disabled');
      button.classList.remove('form__button--disabled');
    } else {
      button.setAttribute('disabled', 'disabled');
      button.classList.add('form__button--disabled');
    }
  };

  const splitDigitsOfNumber = value => {
    const arrayOfValueParts = value.toString().split('.');
    arrayOfValueParts[0] = arrayOfValueParts[0].replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    return arrayOfValueParts.join('.');
  };

  inputs.forEach(item => {
    item.addEventListener('input', () => {
      if (item.id === 'price') {
        item.value = item.value.slice(0).replace(/[^\d.]/g, '');
        item.value = splitDigitsOfNumber(item.value);
      }
      getInputValue(item);
      enableButton();
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newCardsList = getItemsFromLocalStorage();
    newCardsList.push(state);
    renewCardsId(newCardsList);
    setItemsToLocalStorage(newCardsList);
    cleanContainer();
    renderCards(getItemsFromLocalStorage());
    e.target.reset();
  });
  
};

export default validateForm;