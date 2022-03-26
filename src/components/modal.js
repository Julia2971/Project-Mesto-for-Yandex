import {ESC_CODE,popups} from './constans'


//  функция открытие попапов
export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown',  closeByEsc)
  };
//  функция для закрытие попапов
export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown',  closeByEsc)
};


export function closeByEsc(evt) {
  if (evt.key === ESC_CODE) {
    const popupActive = document.querySelector('.popup_opened');
    closePopup(popupActive); 
  }
} 

popups.forEach(function(popup) {
  popup.addEventListener("mousedown", function(evt) {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__button-close')) {
      closePopup(popup);
    }
  })
})
