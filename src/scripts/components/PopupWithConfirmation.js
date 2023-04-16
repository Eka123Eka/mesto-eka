import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(selector, handleFormSubmit) {
    super(selector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this.popup.querySelector('.popup__form');
    this._btnSubmit = this.popup.querySelector('.popup__submit');
    this._btnSubmitText = this._btnSubmit.textContent;
  }
  open(card) {
    this._card = card;
    super.open();
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', evt => {
      evt.preventDefault();
      this._handleFormSubmit(this._card);
    });
  }

  changeSubmitText() {
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
