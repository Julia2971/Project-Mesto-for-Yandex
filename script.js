const popup = document.querySelector('.popup');
const profilePopup = document.querySelector ('.popup_profile-edit')
const cardPopup = document.querySelector(".popup_new-place");
const popupImage = document.querySelector(".popup_image");
const popupPicture = document.querySelector('.popup__picture');
const popupFigcaption = document.querySelector('.popup__figcaption');
const popupCloseProfile = profilePopup.querySelector('.popup__close')
const popupClosePlace = cardPopup.querySelector('.popup__close');
const popupCloseImage = popupImage.querySelector('.popup__close')
const popupPlus = document.querySelector ('.profile__plus');
const profileEdit = document.querySelector('.profile__edit');
const formElementProfile = document.querySelector('.popup__form_profile')
const popupNewPlace = document.querySelector ('.popup_new-place')
let inputName = document.querySelector('.popup__input_type_name')
let inputJob = document.querySelector('.popup__input_type_description')
let profileName = document.querySelector('.profile__title')
let profileJob = document.querySelector('.profile__subtitle')
const cardList = document.querySelector('.cards')
const cardTitle = document.querySelector ('.popup__input_type_title');
const cardLink = document.querySelector ('.popup__input_type_link')
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card')
const initialCards = [
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



//  функция открытие попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
// слушатель для открытия Редактирования профиля
profileEdit.addEventListener('click', function () {
  openPopup(profilePopup)
});
// слушатель для открытия новой карточки 
popupPlus.addEventListener('click', function() {
  openPopup(cardPopup)
});

//  функция для закрытие попапов
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

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
// Функция для лайков, слушатель вызовем при создании карточки
function CardLikeClick(event) {
  event.target.classList.toggle('card__like_active');
}

// Функция для удлаения карточек, слушатель так же будет при создании карточки
function CardRemoveClick(event) {
  event.target.closest(".card").remove();
}


// Функция создания карточки.
function createCard(item) {
  const cardTemplate = document.querySelector('#card-template').content
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true)   // клонируем
  const imageElement = cardElement.querySelector('.card__image') 
  const titleElement = cardElement.querySelector('.card__title')
  imageElement.src = item.link;
  imageElement.alt = item.name;
  titleElement.textContent = item.name;
  cardElement.querySelector('.card__like').addEventListener('click', CardLikeClick);
  cardElement.querySelector('.card__trash').addEventListener('click', CardRemoveClick);
  imageElement.addEventListener('click', () => {     // попап с фоткой
    popupPicture.src = item.link;
    popupPicture.alt = item.name;
    popupFigcaption.textContent = item.name;
    openPopup(popupImage);
  });
  return cardElement
}

// функция добавления элемента карточки в верстку(рендер)
function renderCard (item) {
  cardList.prepend(item)
}

initialCards.forEach((item) => {     // перебор массива
  cardList.prepend(createCard(item))
}) 



// функция сабмита для попапа профиля
function formSubmitHandlerProfile(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup(profilePopup)
}
formElementProfile.addEventListener('submit', formSubmitHandlerProfile);

// функция сабмита для попапа с местом
function formSubmitHandlerCard (evt) {
  evt.preventDefault();
  const popupNameValue = cardTitle.value;
  const popupLinkValue = cardLink.value;
  const addCard = createCard({name: popupNameValue,link:popupLinkValue});
  cardList.prepend(addCard);
  closePopup(cardPopup);
};

popupNewPlace.addEventListener('submit', formSubmitHandlerCard);


