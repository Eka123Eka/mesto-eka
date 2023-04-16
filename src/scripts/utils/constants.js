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

export {configOfValidation, btnEditProfile, btnAddPhoto, btnEditAvatar, containerCards};
