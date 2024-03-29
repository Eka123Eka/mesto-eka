export default class Card {
  constructor( { name, link, likes = [], _id, owner }, templateCard, handleFunctions, idUser) {
    this.idCard = _id;
    this.likes = likes;
    this._name = name;
    this._link = link;
    this._idUser = idUser;
    this._ownerCard = owner;
    this._isLiked = null;
    this._selectors = templateCard;
    this._elementCard = this._getElement();
    this._titleCard       = this._elementCard.querySelector('.card__title');
    this._imgCard         = this._elementCard.querySelector('.card__image');
    this._counterLikeCard = this._elementCard.querySelector('.card__like-counter');
    this._btnLikeCard     = this._elementCard.querySelector('.card__like-button');
    this._btnTrashCard    = this._elementCard.querySelector('.card__trash-button');
    this._handleResizePhoto = handleFunctions.handleResizePhoto;
    this._handleBtnLikeCard = handleFunctions.handleBtnLikeCard;
    this._handleRemoveCard  = handleFunctions.handleRemoveCard;
    this.checkIsLiked  = this.checkIsLiked.bind(this);
  }
  makeCard () {
    this._imgCard.alt = this._name;
    this._imgCard.src = this._link;
    this._titleCard.textContent = this._name;
    this.setLikesCard();
    this._setEventListeners();
    return this._elementCard;
  }
  setLikesCard() {
    this._counterLikeCard.textContent = this.likes.length;
    this._isLiked = this.checkIsLiked();
    this._isLiked ? this._btnLikeCard.classList.add('card__like-button_active')
                  : this._btnLikeCard.classList.remove('card__like-button_active')
  }
  removeElementCard() {
    this._elementCard.remove();
    this._elementCard = null;
  }

  _setEventListeners() {
    if (this._btnTrashCard) {
      if(this._ownerCard._id !== this._idUser) {
        this._btnTrashCard.remove();
        this._btnTrashCard = null;
      } else {
        this._btnTrashCard.addEventListener('click', () => this._handleRemoveCard(this));
      }
    };
    if (this._imgCard) {
      this._imgCard.addEventListener('click', evt => this._handleResizePhoto({
        name: evt.target.alt,
        link: evt.target.src
      }));
    };
    if (this._btnLikeCard) {
      this._btnLikeCard.addEventListener('click', () => this._handleBtnLikeCard(this));
    };
  };
  checkIsLiked() {
    return this.likes.some(user => user._id === this._idUser);
  }
  _getElement() {
    return document.querySelector(this._selectors).content.querySelector('.card').cloneNode(true);
  };
}
