export default class Popup {
  constructor(selector) {
    this._popup = document.querySelector(selector);
    this._closeButton = this._popup.querySelector('.popup__button-close');
    this._handlePopupEscBtn = this._handlePopupEscBtn.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handlePopupEscBtn);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handlePopupEscBtn);
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', this._handlePopupClickOverlay.bind(this));
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

  _changeSubmitText() {
    if (this._btnSubmit.textContent === "Сохранить"
      || this._btnSubmit.textContent === "Создать"
      || this._btnSubmit.textContent === "Да") {
      this._btnSubmit.textContent = "Сохранение..."
    } else {
      if (this._btnSubmitText !== '') {
        this._btnSubmit.textContent = this._btnSubmitText;
      }
    }
  }
}
