import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._imgBigPhoto = this._popup.querySelector('.popup__big-size-photo');
    this._txtBigPhoto = this._popup.querySelector('.popup__big-size-title');
  }

  open ({ name, link }) {
    this._imgBigPhoto.alt         = name;
    this._imgBigPhoto.src         = link;
    this._txtBigPhoto.textContent = name;
    super.open();
  }
}
