import './index.css';

import {api} from '../scripts/components/Api.js';
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithConfirmation from '../scripts/components/PopupWithConfirmation.js';
import UserInfo from '../scripts/components/UserInfo.js';

import {configOfValidation, btnEditProfile, btnAddPhoto, btnEditAvatar, containerCards} from '../scripts/utils/constants.js';

const dataUser = new UserInfo({
  name:'.profile__name',
  career:'.profile__career',
  avatar:'.profile__avatar-photo',
});

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

Promise.all([
  api.getUserInfoServer(),
  api.getInitialCards(),
])
  .then(([responseUser, responseCards]) => {
    dataUser.setUserInfo(responseUser);
    itemSection.renderItems(responseCards);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`)
  });
//попапы
function handleResizePhoto(data) {
  picturePopup.open(data)
};
const picturePopup = new PopupWithImage('.popup_type_big-photo');
picturePopup.setEventListeners();

function addNewCard(item) {
  return api.addNewCardServer( {name: item.place, link: item.urlImage} )
    .then((dataCard) => {
      itemSection.addItem(createCard(dataCard));
    })
    .catch((err) => console.log(`Ошибка: ${err}`))
  };
const popupAddCard = new PopupWithForm('.popup_type_add-photo', addNewCard);
popupAddCard.setEventListeners();

function editProfile(item) {
  return api.sendUserInfo({name: item.name, about: item.career})
    .then(res => dataUser.setUserInfo(res))
    .then(popupEdit.setInputValues(dataUser.getUserInfo()))
    .catch(err => console.log(`Ошибка: ${err}`))
}
const popupEdit = new PopupWithForm('.popup_type_edit-profile', editProfile);
popupEdit.setEventListeners();

function submitAvatar(item) {
  return api.sendAvatar(item.urlAvatar)
    .then(res => dataUser.setUserInfo(res))
    .catch(err => console.log(`Ошибка: ${err}`))
}
const popupAvatar = new PopupWithForm('.popup_type_change-avatar', submitAvatar);
popupAvatar.setEventListeners();

function submitDeleteCard(card) {
  popupDeleteCard.changeSubmitText();
  api.deleteCardServer(card.idCard)
  .then(card.removeElementCard())
  .then(() => this.close())
  .catch(err => console.log(`Ошибка: ${err}`))
  .finally(() => popupDeleteCard.changeSubmitText());
}
function handleRemoveCard (card) {
   popupDeleteCard.open(card);
}
const popupDeleteCard = new PopupWithConfirmation('.popup_type_remove-card', submitDeleteCard);
popupDeleteCard.setEventListeners();

function handleBtnLikeCard (card) {
  api.toogleLikeServer(card.idCard, card.checkIsLiked())
    .then(res => {
        card.likes = res.likes;
        card.setLikesCard()})
    .catch(err => console.log(`Ошибка: ${err}`));
}

const addValidForm = new FormValidator(configOfValidation, popupAddCard.popup);
addValidForm.enableValidation();
const editValidForm = new FormValidator(configOfValidation, popupEdit.popup);
editValidForm.enableValidation();
const avatarValidForm = new FormValidator(configOfValidation, popupAvatar.popup);
avatarValidForm.enableValidation();

//listeners
btnEditProfile.addEventListener('click', () =>  {
  popupEdit.setInputValues(dataUser.getUserInfo());
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


