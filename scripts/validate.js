const configOfValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input-field',
  inputSet: '.popup__set',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input-field_type_error',
  errorClass: '.popup__input-error'
};

const disableSubmitBtn = (popup, config) => {
  const inputList = Array.from(popup.querySelectorAll(config.inputSelector));
  const buttonElement = popup.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, config);
}

const checkInputError = (popup, config) => {
  const inputList = Array.from(popup.querySelectorAll(config.inputSelector));
  inputList.forEach((inputElement) => {
    checkInputValidity(inputElement, config);
  });
}

const showInputError = (inputElement, errorMessage, config) => {
  const errorElement = inputElement.parentElement.querySelector(config.errorClass);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
};

const hideInputError = (inputElement, config) => {
  const errorElement = inputElement.parentElement.querySelector(config.errorClass);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(inputElement, inputElement.validationMessage, config);
  } else {
    hideInputError(inputElement, config);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement, config) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  //toggleButtonState(inputList, buttonElement, config);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    const fieldsetList = Array.from(formElement.querySelectorAll(config.inputSet));
    fieldsetList.forEach((fieldSet) => {
      setEventListeners(fieldSet, config);
    });
  });

};

enableValidation(configOfValidation);
