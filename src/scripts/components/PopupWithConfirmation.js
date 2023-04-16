import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(selector, handleFormSubmit) {
    super(selector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._btnSubmit = this._popup.querySelector('.popup__submit');
    this._btnSubmitText = this._btnSubmit.textContent;
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', evt => {
        evt.preventDefault();
        this._handleFormSubmit(this._card);
      });
    }
  open(card) {
    this._card = card;
    super.open();
  }
}
