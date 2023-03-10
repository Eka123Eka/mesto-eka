let popup = document.querySelector('.popup');
let formElement   = document.querySelector('.popup__form');
let profileName   = document.querySelector('.profile__name');
let profileCareer = document.querySelector('.profile__career');
let nameField   = formElement .querySelector('.popup__name-field');
let careerField = formElement .querySelector('.popup__career-field');
let editButton  = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__button-close');
let likeButtons = document.querySelectorAll('.card__like-button');

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

function toggle_likebutton(evt) {
  evt.preventDefault();
  evt.target.classList.toggle("card__like-button_active")
}

formElement.addEventListener('submit', handleFormSubmit);
editButton.addEventListener( 'click',  openPopup);
closeButton.addEventListener('click',  closePopup);

for (let index_lb = 0; index_lb < likeButtons.length; index_lb +=1) {
  likeButtons[index_lb].addEventListener("click", toggle_likebutton);
}


