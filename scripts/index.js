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
const btnCloseBigPhoto   = formPopupBigPhoto.querySelector('.popup__button-close_type_big-photo');
const imgBigPhoto        = formPopupBigPhoto.querySelector('.popup__big-size-photo');
const txtTitleBigPhoto   = formPopupBigPhoto.querySelector('.popup__big-size-title');

const containerCards     = document.querySelector('.cards');
const templateCard       = document.querySelector('.template-card').content.querySelector('.card');

function fillContainerCards(initialCards) {
  const cards = initialCards.map(function(card) {
    return createCard(card.name, card.link);
  });
  containerCards.append(...cards);
};

function createCard(name, link) {
  const cardNewItem  = templateCard.cloneNode(true);
  const imgCardItem = cardNewItem.querySelector('.card__image');
  imgCardItem.alt = name;
  imgCardItem.src = link;
  imgCardItem.addEventListener('click', handleResizePhoto);

  cardNewItem.querySelector('.card__title').textContent = name;

  const btnLike = cardNewItem.querySelector('.card__like-button');
  btnLike.addEventListener('click', handleLikeButton);

  const btnRemoveCard = cardNewItem.querySelector('.card__trash-button');
  btnRemoveCard.addEventListener('click', handleRemoveCard);

  return cardNewItem;
};

fillContainerCards(initialCards);

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscBtn);
  document.addEventListener('mousedown', closePopupClickOverlay);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscBtn);
  document.removeEventListener('mousedown', closePopupClickOverlay);
}

function handleLikeButton(evt) {
  evt.target.classList.toggle('card__like-button_active');
};

function handleRemoveCard(evt) {
  const currentCard = evt.target.closest('.card');
  currentCard.remove();
};

function handleFormEditSubmit(evt, popup) {
  evt.preventDefault();
  fldNameProfile.textContent = fldNameEditForm.value;
  fldCareerProfile.textContent = fldCareerEditForm.value;
  closePopup(popup);
}

function handleFormAddSubmit(evt, popup) {
  evt.preventDefault();
  containerCards.prepend(createCard(fldPlaceAddForm.value, fldUrlImageAddForm.value));
  closePopup(popup);
}

function handleResizePhoto(evt) {
  imgBigPhoto.src = evt.target.src;
  imgBigPhoto.alt = evt.target.alt;
  txtTitleBigPhoto.textContent = evt.target.alt;
  openPopup(formPopupBigPhoto);
};

btnEditProfile.addEventListener('click', function() {
  fldNameEditForm.value   = fldNameProfile.textContent;
  fldCareerEditForm.value = fldCareerProfile.textContent;
  openPopup(formPopupEdit);
});
formElementEdit.addEventListener('submit', function(evt) {
  handleFormEditSubmit(evt, formPopupEdit);
});
btnCloseEdit.addEventListener('click', function() {
  closePopup(formPopupEdit);
});

btnAddPhoto.addEventListener('click', function() {
  fldPlaceAddForm.value = "";
  fldUrlImageAddForm.value = "";
  openPopup(formPopupAddPhoto);
});
formElementAdd.addEventListener('submit', function(evt) {
  handleFormAddSubmit(evt, formPopupAddPhoto);
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
  const openPopup = document.querySelector('.popup_opened');
  if (evt.target === openPopup) {
    closePopup(openPopup);
  }
}



