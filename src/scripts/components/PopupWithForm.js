import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(selector, handleFormSubmit) {
    super(selector);
    this._submitFormFunction = handleFormSubmit;
    this._inputList = this.popup.querySelectorAll('.popup__input-field');
    this._popupForm = this.popup.querySelector('.popup__form');
    this._btnSubmit = this.popup.querySelector('.popup__submit');
    this._btnSubmitText = this._btnSubmit.textContent;
  }

  close () {
    super.close();
    this._popupForm.reset();
  }
  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[(input.name).split('-')[0]];
    });
  }
  setEventListeners () {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', evt => {
      evt.preventDefault();
      const initialText = this._btnSubmit.textContent;
      this._btnSubmit.textContent = 'Сохранение...';
      this._submitFormFunction(this._getInputValues())
        .then(() => this.close())
        .finally(() => this._btnSubmit.textContent = initialText)
    })//this._submitFormFunction(this._getInputValues());
  }

  _getInputValues () {
    this._inputValues = {};
    this._inputList.forEach(input => {
      this._inputValues[(input.name).split('-')[0]] = input.value;
    });
    return this._inputValues;
  }


}
