//What is the purpose of the modal__error_visible class? the input state error makes the red border visible i'm not sure what to use the other class for- I cant access the hub so i'm asking here

//styling the border for error state
// add class to grey out the button
// can add an empty post

const settings = {
  formSelector: "modal__form",
  inputSelector: "modal__input",
  submitButtonSelector: "modal__submit-btn",
  inactiveButtonClass: "modal__submit-btn_disabled",
  inputErrorClass: "modal__input_state_error",
  errorClass: "modal__error_visible",

  //not my class
};
// //working

////////////////////////////////////////////////////////////////////////
// working

const showInputError = (formEl, inputEl, errorMsg) => {
  const errorMsgEl = formEl.querySelector(`#${inputEl.id}-error`);
  errorMsgEl.textContent = errorMsg;
  inputEl.classList.add("modal__input_state_error");
  inputEl.classList.add("modal__error_visible");

  console.log("ahhhh");
  //inputEl.classList.add(settings.errorClass);

  //console.log(".modal__submit-btn_disabled");
  //console.log(".modal__input_state_error");
};

//////////////////////////////////////////////////////////////////
const hideInputError = (formEl, inputEl) => {
  // add setttings
  const errorMsgEl = formEl.querySelector(`#${inputEl.id}-error`);
  errorMsgEl.textContent = "";
  inputEl.classList.remove("modal__input_state_error");
  // inputEl.classList.remove(settings.errorClass);

  //console.log(formEl.querySelector(`#${inputEl.id}-error`));
};

/////////////////////////////////////////////////////////////
const checkInputValidity = (formEl, inputEl) => {
  //add settings??
  if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, inputEl.validationMessage);
  } else {
    hideInputError(formEl, inputEl);
  }
  //working only add errormsg or validationmessage
};

// ////////////////////////////////////////////////////////////

const hasInvaildInput = (inputList) => {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvaildInput(inputList)) {
    disableButton(buttonElement);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove("modal__submit-btn_disabled");
  }
};

const disableButton = (buttonElement) => {
  //add setttings??
  buttonElement.disabled = true;
  buttonElement.classList.add("modal__submit-btn_disabled");
};

// const hasInvaildInput = (inputList) => {
//   return inputList.some((input) => {
//     return !input.validity.valid;
//   });
// };

// const toggleButtonState = (inputList, buttonElement) => {
//   console.log(hasInvaildInput(inputList));
// //   if (hasInvaildInput(inputList)) {
// //     disableButton(buttonElement);

// //     // add class to grey out the button
// //   } else {
// //     buttonElement.disabled = false;
// //     buttonElement.classList.remove("modal__submit-btn_disabled");
// //   }
// };

//matching////////////////////////////////////////////////////////////
const setEventListeners = (formEl) => {
  //add settings??
  const inputList = Array.from(formEl.querySelectorAll(".modal__input"));
  const buttonElement = formEl.querySelector(".modal__submit-btn");

  toggleButtonState(inputList, buttonElement);
  // add settings??

  inputList.forEach((inputElement) => {
    //add settings
    inputElement.addEventListener("input", function () {
      checkInputValidity(formEl, inputElement);
      //add settings
      //error undefined
      toggleButtonState(inputList, buttonElement);
      // add settings
    });
  });
};

const enableValidation = (settings) => {
  //??? add settings

  //change class
  const formList = document.querySelectorAll(settings.formSelector);
  formList.forEach((formEl) => {
    setEventListeners(formEl);
    // add settings?
  });
};

enableValidation(settings);
// add settings
