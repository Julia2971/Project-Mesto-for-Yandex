import {popup} from  './constans';


//  функция открытие попапов
export function openPopup(popup) {
    popup.classList.add('popup_opened');
  };
//  функция для закрытие попапов
export function closePopup(popup) {
  popup.classList.remove('popup_opened');
};
