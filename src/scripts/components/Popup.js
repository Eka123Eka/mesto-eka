export default class Popup {
  constructor(selector) {
    this.popup = document.querySelector(selector);
    this._closeButton = this.popup.querySelector('.popup__button-close');
    this._handlePopupEscBtn = this._handlePopupEscBtn.bind(this);
  }

  open() {
    this.popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handlePopupEscBtn);
  }
  close() {
    this.popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handlePopupEscBtn);
  }

  setEventListeners() {
    this.popup.addEventListener('mousedown', this._handlePopupClickOverlay.bind(this));
    this._closeButton.addEventListener('click', () => this.close());
  }

  _handlePopupClickOverlay(evt) {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  }

  _handlePopupEscBtn(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }


}
