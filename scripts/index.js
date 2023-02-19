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

let fldNameProfile    = document.querySelector('.profile__name');
let fldCareerProfile  = document.querySelector('.profile__career');
let btnEditProfile    = document.querySelector('.profile__edit-button');
let formPopupEdit     = document.querySelector('.popup_type_edit-profile');
let btnCloseEdit      = formPopupEdit.querySelector('.popup__button-close');
let formElementEdit   = formPopupEdit.querySelector('.popup__form');
let fldNameEditForm   = formElementEdit.querySelector('[name="name-input"]');
let fldCareerEditForm = formElementEdit.querySelector('[name="career-input"]');

let btnAddPhoto        = document.querySelector('.profile__add-button');
let formPopupAddPhoto  = document.querySelector('.popup_type_add-photo');
let btnCloseAdd        = formPopupAddPhoto.querySelector('.popup__button-close');
let formElementAdd     = formPopupAddPhoto.querySelector('.popup__form');
let fldPlaceAddForm    = formElementAdd.querySelector('[name="place-input"]');
let fldUrlImageAddForm = formElementAdd.querySelector('[name="urlImage-input"]');

let formPopupBigPhoto  = document.querySelector('.popup_type_big-photo');
let btnCloseBigPhoto   = formPopupBigPhoto.querySelector('.popup__button-close_type_big-photo');
let imgBigPhoto        = formPopupBigPhoto.querySelector('.popup__big-size-photo');
let txtTitleBigPhoto   = formPopupBigPhoto.querySelector('.popup__big-size-title');

let containerCards     = document.querySelector('.cards');
let templateCard       = document.querySelector('.template-card').content.querySelector('.card');

function fillContainerCards(initialCards) {
  const cards = initialCards.map(function(card) {
    return createCard(card.name, card.link);
  });
  containerCards.append(...cards);
};

function createCard(name, link) {
  let cardNewItem  = templateCard.cloneNode(true);
  cardNewItem.querySelector('.card__image').alt = name;
  cardNewItem.querySelector('.card__image').src = link;
  cardNewItem.querySelector('.card__title').textContent = name;

  let btnLike = cardNewItem.querySelector('.card__like-button');
  btnLike.addEventListener('click', handleLikeButton);

  let btnRemoveCard = cardNewItem.querySelector('.card__trash-button');
  btnRemoveCard.addEventListener('click', handleRemoveCard);
  let resizePhoto = cardNewItem.querySelector('.card__image');
  resizePhoto.addEventListener('click', handleResizePhoto);
  return cardNewItem;
};

fillContainerCards(initialCards);

function openPopup(popup) {
  popup.classList.add('popup_opened');
  if (popup === formPopupEdit) {
    fldNameEditForm.value   = fldNameProfile.textContent;
    fldCareerEditForm.value = fldCareerProfile.textContent;
  }
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function handleLikeButton(evt) {
  evt.target.classList.toggle('card__like-button_active');
};

function handleRemoveCard(evt) {
  let currentCard = evt.target.closest('.card');
  let currentImage = currentCard.querySelector('.card__image');
  initialCards.forEach(element => {
    if (element.name === currentImage.alt && element.link === currentImage.src) {
      initialCards.splice(initialCards.indexOf(element), 1);
    }
  });
  currentCard.remove();
};

function handleFormSubmit(evt, popup) {
  evt.preventDefault();
  if (popup === formPopupEdit) {
    fldNameProfile.textContent = fldNameEditForm.value;
    fldCareerProfile.textContent = fldCareerEditForm.value;
  } else if (popup === formPopupAddPhoto) {
    containerCards.prepend(createCard(fldPlaceAddForm.value, fldUrlImageAddForm.value));
    initialCards.unshift({
      name: fldPlaceAddForm.value,
      link: fldUrlImageAddForm.value
    });
  }
  closePopup(popup);
}

function handleResizePhoto(evt) {
  imgBigPhoto.src = evt.target.src;
  imgBigPhoto.alt = evt.target.alt;
  txtTitleBigPhoto.textContent = evt.target.alt;
  openPopup(formPopupBigPhoto);
};

formElementEdit.addEventListener('submit', function(evt) {
  handleFormSubmit(evt, formPopupEdit);
});
formElementAdd.addEventListener('submit', function(evt) {
  handleFormSubmit(evt, formPopupAddPhoto);
});
btnEditProfile.addEventListener('click', function() {
  openPopup(formPopupEdit);
});
btnAddPhoto.addEventListener('click', function() {
  openPopup(formPopupAddPhoto);
});
btnCloseEdit.addEventListener('click', function() {
  closePopup(formPopupEdit);
});
btnCloseAdd.addEventListener('click', function() {
  closePopup(formPopupAddPhoto);
});
btnCloseBigPhoto.addEventListener('click', function() {
  closePopup(formPopupBigPhoto);
});



