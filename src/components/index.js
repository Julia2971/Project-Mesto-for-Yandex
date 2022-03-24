import '../pages/index.css'
import {openPopup, closePopup} from './utils.js';
import {popup, popups, profileEdit, popupPlus, popupCloseProfile, profilePopup, cardPopup, popupClosePlace, inputName, profileName, inputJob, profileJob, cardTitle,cardLink,initialCards,popupCloseImage,popupImage,formElementProfile, popupNewPlace, validationObject} from './constans.js';
import {renderCard, createCard} from './card.js';
import {formSubmitHandlerCard, formSubmitHandlerProfile} from  './modal.js';

// import {enableValidation} from './validate.js';

// слушатель для открытия Редактирования профиля
profileEdit.addEventListener('click', function () {
  inputName.value = profileName.textContent
  inputJob.value = profileJob.textContent
  openPopup(profilePopup)
});
// слушатель для открытия новой карточки 
popupPlus.addEventListener('click', function() {
  cardTitle.value = '';
  cardLink.value = '';
  openPopup(cardPopup)
});


// слушатель для закрытия Редактирования профиля
popupCloseProfile.addEventListener('click', function() {
  closePopup(profilePopup);
});
// слушатель для закрытия Новой карточки 
popupClosePlace.addEventListener('click', function() {
  closePopup(cardPopup);
});

popupCloseImage.addEventListener ('click', function() {
  closePopup(popupImage)
});



initialCards.forEach((item) => {     // перебор массива
  renderCard(createCard(item))
}) 


formElementProfile.addEventListener('submit', formSubmitHandlerProfile);

popupNewPlace.addEventListener('submit', formSubmitHandlerCard);

document.addEventListener("keydown", function(evt) {
  const popupActive = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(popupActive);
  }
});


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




function showError (formElement, inputElement, errorMessage, validationObject) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validationObject.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationObject.errorClass);
}

// Скрыть ошибку

function hideError (formElement, inputElement, validationObject) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validationObject.inputErrorClass);
  errorElement.classList.remove(validationObject.errorClass);
  errorElement.textContent = "";
}

// Проверка формы на корректность
// введенных данных

function checkInputValidity (formElement, inputElement, validationObject) {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage, validationObject)
  } else {
    hideError(formElement, inputElement, validationObject);
  }
}

function setEventListener (formElement, validationObject) {
  const inputList = Array.from(formElement.querySelectorAll(validationObject.inputSelector));
  const buttonElement = formElement.querySelector(validationObject.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, validationObject);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, validationObject);
      toggleButtonState(inputList, buttonElement, validationObject);
    });
  })
}

function enableFormValidation (validationObject) {
  const formList = Array.from(document.querySelectorAll(validationObject.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListener(formElement, validationObject);
  });
}

function hasInvalidInput (inputList) {
  return inputList.some((inputElement) => {
    return (!inputElement.validity.valid);
  })
}

function toggleButtonState (inputList, buttonElement, validationObject) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validationObject.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(validationObject.inactiveButtonClass);
    buttonElement.disabled = false;
  }
}

enableFormValidation(validationObject)