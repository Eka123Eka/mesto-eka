export default class Card {
  constructor( { name, link } , selectors, functions) {
    this._name = name;
    this._link = link;
    this._selectors = selectors;
    this._openPopup = functions.openPopup;
    this._Popup = functions.Popup;
  }

  makeCard () {
      this._cardElement    = this._getElement();

      this._imgCardItem    = this._cardElement.querySelector('.card__image');
      this._imgCardItem.alt = this._name;
      this._imgCardItem.src = this._link;

      this._cardElement.querySelector('.card__title').textContent = this._name;

      this._setEventListeners();
      return this._cardElement;
  }

  _getElement() {
    return document.querySelector(this._selectors.template).content.querySelector('.card').cloneNode(true);
  };

  _setEventListeners() {
    this._imgCardItem.addEventListener('click', (evt) => {
      this._handleResizePhoto(evt, this)});

    this._cardElement.querySelector('.card__like-button').addEventListener('click', (evt) => {
      this._handleLikeButton(evt);
    });

    this._cardElement.querySelector('.card__trash-button').addEventListener('click', () => {
      this._handleRemoveCard();
    });
  }

  _handleResizePhoto(evt) {
    const imgBigPhoto        = this._Popup.querySelector(this._selectors.imgBigPhoto);
    const txtTitleBigPhoto   = this._Popup.querySelector(this._selectors.txtTitleBigPhoto);
    imgBigPhoto.src = evt.target.src;
    imgBigPhoto.alt = evt.target.alt;
    txtTitleBigPhoto.textContent = evt.target.alt;
    this._openPopup(this._Popup);
  };

  _handleLikeButton(evt) {
    evt.target.classList.toggle('card__like-button_active');
  };

  _handleRemoveCard() {
    this._cardElement.closest('.card').remove();
  };

}
