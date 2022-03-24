import { popupPicture,popupFigcaption,popupImage,cardList, initialCards} from './constans.js'
import {openPopup} from './utils.js'


// Функция для лайков, слушатель вызовем при создании карточки
function clickLikeCard(event) {
    event.target.classList.toggle('card__like_active');
  }
  
  // Функция для удлаения карточек, слушатель так же будет при создании карточки
  function clickRemoveCard(event) {
    event.target.closest(".card").remove();
  }



  // Функция создания карточки.
export function createCard(item) {
    const cardTemplate = document.querySelector('#card-template').content
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true)   // клонируем
    const imageElement = cardElement.querySelector('.card__image') 
    const titleElement = cardElement.querySelector('.card__title')
    imageElement.src = item.link;
    imageElement.alt = item.name;
    titleElement.textContent = item.name;
    cardElement.querySelector('.card__like').addEventListener('click', clickLikeCard);
    cardElement.querySelector('.card__trash').addEventListener('click', clickRemoveCard);
    imageElement.addEventListener('click', () => {     // попап с фоткой
      popupPicture.src = item.link;
      popupPicture.alt = item.name;
      popupFigcaption.textContent = item.name;
      openPopup(popupImage);
    });
    return cardElement
  }
  

  // функция добавления элемента карточки в верстку(рендер)
export function renderCard (item) {
    cardList.prepend(item)
  }

