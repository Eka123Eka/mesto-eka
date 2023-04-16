import './index.css';

import {api} from '../scripts/components/Api.js';
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithConfirmation from '../scripts/components/PopupWithConfirmation.js';
import UserInfo from '../scripts/components/UserInfo.js';

const dataUser = new UserInfo({
  name:'.profile__name',
  career:'.profile__career',
  avatar:'.profile__avatar-photo',
});
const configOfValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input-field',
  inputSet: '.popup__set',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input-field_type_error',
  errorClass: '.popup__input-error'
};
const btnEditProfile    = document.querySelector('.profile__edit-button');
const btnAddPhoto       = document.querySelector('.profile__add-button');
const btnEditAvatar     = document.querySelector('.profile__avatar-button');
const containerCards    = document.querySelector('.cards');

Promise.all([
  api.getUserInfo(),
  api.getInitialCards(),
])
  .then(([responseUser, responseCards]) => {
    dataUser.setUserInfo(responseUser);
    itemSection.renderItems(responseCards);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`)
  });


const picturePopup = new PopupWithImage('.popup_type_big-photo');
picturePopup.setEventListeners();
function handleResizePhoto(data) {
  picturePopup.open(data);
};

function addNewCard(item) {
  popupAddCard._changeSubmitText();
  api.addNewCard( {name: item.place, link: item.urlImage} )
    .then((dataCard) => {
      itemSection.addItem(createCard(dataCard));
      popupAddCard.close();
    })
    .catch((err) => console.log(`Ошибка: ${err}`))
    .finally(() => popupAddCard._changeSubmitText())
  };
const popupAddCard = new PopupWithForm('.popup_type_add-photo', addNewCard);
popupAddCard.setEventListeners();

function editProfile(item) {
  popupEdit._changeSubmitText();
  api.sendUserInfo({name: item.name, career: item.career})
    .then(res => dataUser.setUserInfo(res))
    .then(() => this.close())
    .catch(err => console.log(`Ошибка: ${err}`))
    .finally(() => popupEdit._changeSubmitText());
}
const popupEdit = new PopupWithForm('.popup_type_edit-profile', editProfile);
popupEdit._fldNameEditForm   = popupEdit._popup.querySelector('[name="name-input"]');
popupEdit._fldCareerEditForm = popupEdit._popup.querySelector('[name="career-input"]');
popupEdit.setEventListeners();

function submitAvatar(item) {
  popupAvatar._changeSubmitText();
  api.sendAvatar(item)
    .then(res => dataUser.setUserInfo(res))
    .then(() => this.close())
    .catch(err => console.log(`Ошибка: ${err}`))
    .finally(() => popupAvatar._changeSubmitText());
}
const popupAvatar = new PopupWithForm('.popup_type_change-avatar', submitAvatar);
popupAvatar.setEventListeners();

function submitDeleteCard(card) {
  popupDeleteCard._changeSubmitText();
  api.deleteCard(card._idCard)
  .then(card._handleRemoveElementCard())
  .then(() => this.close())
  .catch(err => console.log(`Ошибка: ${err}`))
  .finally(() => popupDeleteCard._changeSubmitText());
}
function handleRemoveCard (card) {
   popupDeleteCard.open(card);
}
const popupDeleteCard = new PopupWithConfirmation('.popup_type_remove-card', submitDeleteCard);
popupDeleteCard.setEventListeners();

function handleBtnLikeCard (card) {
  api.toogleLike(card._idCard, card._checkIsLiked())
    .then(res => {
      if (res === undefined) {
        Promise.reject(`Ошибка: не удалось поставить лайк для карточки${err}`);
      } else {
        card._setLikesCard(res.likes)
      }
    })
    .catch(err => console.log(`Ошибка: ${err}`));
}

function createCard(itemCard) {
  return new Card ( itemCard,
                    '.template-card',
                    {handleResizePhoto: (data) => handleResizePhoto(data),
                     handleBtnLikeCard: (card) => handleBtnLikeCard(card),
                     handleRemoveCard:  (card) => handleRemoveCard(card)},
                    dataUser.getUserId()
                    ).makeCard();
};
const itemSection = new Section(itemCard => itemSection.addItem(createCard(itemCard), true), containerCards);

const cardList = new Section({renderer: (item) => {
  const card = createCard(item);
  cardList.addItem(card)}
    }, '.elements');

const addValidForm = new FormValidator(configOfValidation, popupAddCard._popup);
addValidForm.enableValidation();
const editValidForm = new FormValidator(configOfValidation, popupEdit._popup);
editValidForm.enableValidation();
const avatarValidForm = new FormValidator(configOfValidation, popupAvatar._popup);
avatarValidForm.enableValidation();

//listeners
btnEditProfile.addEventListener('click', () =>  {
  const currentUser = dataUser.getUserInfo();
  popupEdit._fldNameEditForm.value = currentUser.name;
  popupEdit._fldCareerEditForm.value = currentUser.career;
  popupEdit.open();
  editValidForm.resetValidation();
});

btnAddPhoto.addEventListener('click', () => {
  popupAddCard.open();
  addValidForm.resetValidation();
});

btnEditAvatar.addEventListener('click', () => {
  popupAvatar.open();
  avatarValidForm.resetValidation();
});


