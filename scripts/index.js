let popup = document.querySelector('.popup');
let formElement   = document.querySelector('.popup__form');
let profileName   = document.querySelector('.profile__name');
let profileCareer = document.querySelector('.profile__career');
let nameField     = formElement.querySelector('[name="name-input"]');/*formElement .querySelector('.popup__name-field');*/
let careerField   = formElement.querySelector('[name="career-input"]');/*formElement.career-input;formElement .querySelector('.popup__career-field');*/
let editButton    = document.querySelector('.profile__edit-button');
let closeButton   = document.querySelector('.popup__button-close');

function openPopup() {
  nameField.value   = profileName.textContent;
  careerField.value = profileCareer.textContent;
  popup.classList.toggle('popup_opened');
}

function closePopup() {
  popup.classList.toggle('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameField.value;
  profileCareer.textContent = careerField.value;
  closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);
editButton.addEventListener( 'click',  openPopup);
closeButton.addEventListener('click',  closePopup);



