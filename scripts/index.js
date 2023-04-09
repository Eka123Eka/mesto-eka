import Card from './Card.js';
import FormValidator from './FormValidator.js';
//import {initialCards} from './cards.js';

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const configOfValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input-field',
  inputSet: '.popup__set',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input-field_type_error',
  errorClass: '.popup__input-error'
};

const fldNameProfile    = document.querySelector('.profile__name');
const fldCareerProfile  = document.querySelector('.profile__career');
const btnEditProfile    = document.querySelector('.profile__edit-button');
const formPopupEdit     = document.querySelector('.popup_type_edit-profile');
const btnCloseEdit      = formPopupEdit.querySelector('.popup__button-close');
const formElementEdit   = formPopupEdit.querySelector('.popup__form');
const fldNameEditForm   = formElementEdit.querySelector('[name="name-input"]');
const fldCareerEditForm = formElementEdit.querySelector('[name="career-input"]');

const btnAddPhoto        = document.querySelector('.profile__add-button');
const formPopupAddPhoto  = document.querySelector('.popup_type_add-photo');
const btnCloseAdd        = formPopupAddPhoto.querySelector('.popup__button-close');
const formElementAdd     = formPopupAddPhoto.querySelector('.popup__form');
const fldPlaceAddForm    = formElementAdd.querySelector('[name="place-input"]');
const fldUrlImageAddForm = formElementAdd.querySelector('[name="urlImage-input"]');

const formPopupBigPhoto  = document.querySelector('.popup_type_big-photo');
const btnCloseBigPhoto     = formPopupBigPhoto.querySelector('.popup__button-close_type_big-photo');
const selectors = {
  template: '.template-card',
  formPopupBigPhoto: '.popup_type_big-photo',
  imgBigPhoto: '.popup__big-size-photo',
  txtTitleBigPhoto: '.popup__big-size-title',
}

const containerCards     = document.querySelector('.cards');

function fillContainerCards(initialCards) {
  const cards = initialCards.map((item) => {
    return createCard(item);
  });
  containerCards.append(...cards);
};

function createCard(itemCard) {

  return new Card ( itemCard,
                    selectors, {Popup: formPopupBigPhoto,
                    openPopup: (namePopup) => openPopup(namePopup),
                  }).makeCard();

};

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscBtn);
  popup.addEventListener('mousedown', closePopupClickOverlay);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscBtn);
  popup.removeEventListener('mousedown', closePopupClickOverlay);
}

fillContainerCards(initialCards);

const addValidForm = new FormValidator(configOfValidation, formPopupAddPhoto);
addValidForm.enableValidation();
const editValidForm = new FormValidator(configOfValidation, formPopupEdit);
editValidForm.enableValidation();

//listeners
btnEditProfile.addEventListener('click', function() {
  fldNameEditForm.value   = fldNameProfile.textContent;
  fldCareerEditForm.value = fldCareerProfile.textContent;
  editValidForm.resetValidation();
  openPopup(formPopupEdit);
});

btnAddPhoto.addEventListener('click', function() {
  fldPlaceAddForm.value = "";
  fldUrlImageAddForm.value = "";
  addValidForm.resetValidation();
  openPopup(formPopupAddPhoto);
});

formElementAdd.addEventListener('submit', function(evt) {
  handleFormAddSubmit(evt, formPopupAddPhoto);
});

formElementEdit.addEventListener('submit', function(evt) {
  handleFormEditSubmit(evt, formPopupEdit);
});

//submit
function handleFormEditSubmit(evt, popup) {
  evt.preventDefault();
  fldNameProfile.textContent = fldNameEditForm.value;
  fldCareerProfile.textContent = fldCareerEditForm.value;
  closePopup(popup);
}

function handleFormAddSubmit(evt, popup) {
  evt.preventDefault();
  containerCards.prepend(createCard({name:fldPlaceAddForm.value, link:fldUrlImageAddForm.value}));
  closePopup(popup);
}

//close
btnCloseEdit.addEventListener('click', function() {
  closePopup(formPopupEdit);
});

btnCloseAdd.addEventListener('click', function() {
  closePopup(formPopupAddPhoto);
});

btnCloseBigPhoto.addEventListener('click', function() {
  closePopup(formPopupBigPhoto);
});

function closePopupEscBtn (evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
};

function closePopupClickOverlay (evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  }
}
