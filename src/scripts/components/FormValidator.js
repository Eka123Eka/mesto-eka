export default class FormValidator {
  constructor(config, formElements) {
    this._selectors = config;
    this._elements = formElements;
    this._inputList = Array.from(this._elements.querySelectorAll(this._selectors.inputSelector));
    this._buttonElement = this._elements.querySelector(this._selectors.submitButtonSelector);
  }

  enableValidation() {
    this._setEventListeners();
  };

  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
        this._hideInputError(inputElement);
    });
  };

  //inner
  _setEventListeners () {
    this._elements.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };

  _toggleButtonState () {
    if (this._hasInvalidInput(this._inputList)) {
      this._buttonElement.classList.add(this._selectors.inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._selectors.inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  };

  _hasInvalidInput () {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };

  _checkInputValidity (inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _showInputError (inputElement, errorMessage) {
    inputElement.classList.add(this._selectors.inputErrorClass);
    const errorElement = inputElement.parentElement.querySelector(this._selectors.errorClass);
    errorElement.textContent = errorMessage;
  };


  _hideInputError (inputElement) {
    inputElement.classList.remove(this._selectors.inputErrorClass);
    const errorElement = inputElement.parentElement.querySelector(this._selectors.errorClass);
    errorElement.textContent = '';
  };










}
