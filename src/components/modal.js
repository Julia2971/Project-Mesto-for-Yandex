import { profileName, profileJob, inputName, inputJob, profilePopup, cardTitle, cardLink, cardList, cardPopup } from "./constans.js";
import { closePopup } from "./utils.js";
import { createCard } from "./card.js";
// функция сабмита для попапа профиля
export function formSubmitHandlerProfile(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    closePopup(profilePopup)
  }
  
  // функция сабмита для попапа с местом
 export function formSubmitHandlerCard (evt) {
    evt.preventDefault();
    const popupNameValue = cardTitle.value;
    const popupLinkValue = cardLink.value;
    const addCard = createCard({name: popupNameValue,link:popupLinkValue});
    cardList.prepend(addCard);
    closePopup(cardPopup);
  };