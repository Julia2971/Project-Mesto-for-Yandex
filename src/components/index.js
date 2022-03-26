import '../pages/index.css'
import {openPopup, closePopup} from './modal.js';
import {popups, profileEdit, popupPlus, popupSubmit, popupCloseProfile, profilePopup, cardPopup, popupClosePlace, inputName, profileName, inputJob, profileJob, cardTitle, cardList, cardLink,initialCards,popupCloseImage,popupImage,formElementProfile, popupNewPlace, validationObject} from './constans.js';
import {renderCard, createCard} from './card.js';
import {enableFormValidation} from './validate.js';

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
  openPopup(cardPopup);

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

function formSubmitHandlerProfile(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup(profilePopup)
}

// функция сабмита для попапа с местом
function formSubmitHandlerCard (evt) {
  evt.preventDefault();
  const popupNameValue = cardTitle.value;
  const popupLinkValue = cardLink.value;
  const addCard = createCard({name: popupNameValue,link:popupLinkValue});
  cardList.prepend(addCard);
  closePopup(cardPopup);
  popupSubmit.classList.add('popup__submit_disabled');
  popupSubmit.setAttribute('disabled', true)
};


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




enableFormValidation(validationObject)