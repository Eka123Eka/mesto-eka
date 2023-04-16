import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(selector, handleFormSubmit) {
    super(selector);
    this._submitFormFunction = handleFormSubmit;
    this._inputList = this._popup.querySelectorAll('.popup__input-field');
    this._popupForm = this._popup.querySelector('.popup__form');
    this._btnSubmit = this._popup.querySelector('.popup__submit');
    this._btnSubmitText = this._btnSubmit.textContent;
  }

  setEventListeners () {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', evt => {
      evt.preventDefault();
      this._submitFormFunction(this._getInputValues());
    })
  }
  _getInputValues () {
    this._inputValues = {};
    this._inputList.forEach(input => {
      this._inputValues[(input.name).split('-')[0]] = input.value;
    });
    return this._inputValues;
  }

  close () {
    super.close();
    this._popupForm.reset();
  }
}
