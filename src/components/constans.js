export const popups = Array.from(document.querySelectorAll('.popup'));
export const profilePopup = document.querySelector ('.popup_profile-edit')
export const cardPopup = document.querySelector(".popup_new-place");
export const popupImage = document.querySelector(".popup_image");
export const popupPicture = document.querySelector('.popup__picture');
export const popupFigcaption = document.querySelector('.popup__figcaption');
export const popupCloseProfile = profilePopup.querySelector('.popup__close')
export const popupSubmit = document.querySelector('.popup__submit_reset');
export const popupClosePlace = cardPopup.querySelector('.popup__close');
export const popupCloseImage = popupImage.querySelector('.popup__close')
export const popupPlus = document.querySelector ('.profile__plus');
export const profileEdit = document.querySelector('.profile__edit');
export const formElementProfile = document.querySelector('.popup__form_profile')
export const popupNewPlace = document.querySelector ('.popup_new-place')
export const inputName = document.querySelector('.popup__input_type_name')
export const inputJob = document.querySelector('.popup__input_type_description')  
export const profileName = document.querySelector('.profile__title')
export const profileJob = document.querySelector('.profile__subtitle')
export const cardList = document.querySelector('.cards')
export const cardTitle = document.querySelector ('.popup__input_type_title');
export const cardLink = document.querySelector ('.popup__input_type_link')
export const cardTemplate = document.querySelector('#card-template').content.querySelector('.card')
export const ESC_CODE = 'Escape';
export const validationObject = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input_error_visible'
}

export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];






