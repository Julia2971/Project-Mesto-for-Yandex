const popup = document.querySelector('.popup');
const profilePopup = document.querySelector ('.popup_profile-edit')
const cardPopup = document.querySelector(".popup_new-place");
const popupImage = document.querySelector(".element__image");
const popupClose = document.querySelector('.popup__close')
const popupPlus = document.querySelector ('.profile__plus');
const profileEdit = document.querySelector('.profile__edit');
let inputName = document.querySelector('.popup__input_type_name')
let inputJob = document.querySelector('.popup__input_type_description')
let profileName = document.querySelector('.profile__title')
let profileJob = document.querySelector('.profile__subtitle')
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
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
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
document.querySelector('.popup__close_edit').addEventListener('click', function() {
  closePopup(profilePopup);
});
// слушатель для закрытия Новой карточки 
document.querySelector('.popup__close_new-place').addEventListener('click', function() {
  closePopup(cardPopup);
});

// Функция для лайков, слушатель вызовем при создании карточки
function handleCardLikeClick(event) {
  event.target.classList.toggle('card__like_active');
}


// Функция создания карточки.
function createCard(title, link) {
  const cardTemplate = document.querySelector('#card-template').content
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true)
  const imageElement = cardElement.querySelector('.card__image') 
  const titleElement = cardElement.querySelector('.card__title')
  imageElement.src = link
  imageElement.alt = title
  titleElement.textContent = title
  cardElement.querySelector('.card__like').addEventListener('click', handleCardLikeClick)
  return cardElement
}

const cardList = document.querySelector('.cards')
const renderCard = (cardList, cardElement) => {
  cardList.prepend(cardElement)
}

initialCards.forEach((item) => {
  cardList.prepend(createCard(item.name, item.link))
}) 


