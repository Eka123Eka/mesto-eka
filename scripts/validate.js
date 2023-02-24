const fldOfValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input-field',
  inputSet: '.popup__set',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input-field_type_error',
  errorClass: '.popup__input-error'
};

const showInputError = (inputElement, errorMessage) => {
  const errorElement = inputElement.parentElement.querySelector(fldOfValidation.errorClass);
  inputElement.classList.add(fldOfValidation.inputErrorClass);
  errorElement.textContent = errorMessage;
};

const hideInputError = (inputElement) => {
  const errorElement = inputElement.parentElement.querySelector(fldOfValidation.errorClass);
  inputElement.classList.remove(fldOfValidation.inputErrorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(inputElement, inputElement.validationMessage);
  } else {
    hideInputError(inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(fldOfValidation.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(fldOfValidation.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(fldOfValidation.inputSelector));
  const buttonElement = formElement.querySelector(fldOfValidation.submitButtonSelector);

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(inputElement);

      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(fldOfValidation.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    const fieldsetList = Array.from(formElement.querySelectorAll(fldOfValidation.inputSet));
    fieldsetList.forEach((fieldSet) => {
      setEventListeners(fieldSet);
    });
  });

};

enableValidation();
