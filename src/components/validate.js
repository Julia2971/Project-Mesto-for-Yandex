

import {validationObject} from './constans.js'



const showInputError = (inputElement, errorMessage, validationObject) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.classList.add(validationObject.errorClass);
  inputElement.classList.add(validationObject.inputErrorClass);
  errorElement.textContent = errorMessage;
};

const hideInputError = (inputElement, validationObject) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.classList.remove(validationObject.errorClass);
  inputElement.classList.remove(validationObject.inputErrorClass);
  errorElement.textContent = '';
};


function checkInputValidity (formElement, inputElement, validationObject) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validationObject)
  } else {
    hideInputError(formElement, inputElement, validationObject);
  }
}

function toggleButtonState (inputList, buttonElement, validationObject) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validationObject.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(validationObject.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
};


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


function hasInvalidInput (inputList) {
  return inputList.some(inputElement => {
    return !inputElement.validity.valid;
  });
}



export function enableValidation (validationObject) {
  const formList = document.querySelectorAll(validationObject.formSelector);
  const formListArray = Array.from(formList);
  formListArray.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListener(formElement, validationObject);
  });
}