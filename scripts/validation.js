//styling the border for error state
// add class to grey out the button
// can add an empty post

const settings = {
    
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-btn",
  inactiveButtonClass: ".modal__submit-btn_disabled",
  inputErrorClass: "modal__input_state_error",
 // errorClass: "modal__error_visible"

  
}


const showInputError = (formEl, inputEl, errorMsg, config) => {
const errorMsgEl = formEl.querySelector(`#${inputEl.id}-error`);
errorMsgEl.textContent = errorMsg;
inputEl.classList.add("modal__input_state_error");


};

const hideInputError = (formEl, inputEl, config) => {
const errorMsgEl = formEl.querySelector(`#${inputEl.id}-error`);
errorMsgEl.textContent = "";
inputEl.classList.remove("modal__input_state_error");


};


const checkInputValidity = (formEl, inputEl, config) => {

    if(!inputEl.validity.valid){
    showInputError(formEl, inputEl, inputEl.validationMessage);
   // try console.log(inputEl.validationMessage);
} else{
    hideInputError(formEl, inputEl);
}

};

const hasInvaildInput = (inputList) => {
    return inputList.some((input) => {
    return !input.validity.valid;
    });

}

const toggleButtonState = (inputList, buttonElement) => {
   
  // try console.log(hasInvaildInput(inputList));
     if(hasInvaildInput(inputList)) {
        disableButton(buttonElement);

// add class to grey out the button


    } else{
        buttonElement.disabled = false;
        buttonElement.classList.remove("modal__submit-btn_disabled");
    }

}

const disableButton = (buttonElement) => {
    buttonElement.disabled = true;
    buttonElement.classList.add("modal__submit-btn_disabled");
}




const setEventListeners = (formEl, config) => {
 const inputList = Array.from(formEl.querySelectorAll(config.inputSelector));
 const buttonElement = formEl.querySelector(config.submitButtonSelector);
 console.log(buttonElement);



 toggleButtonState(inputList, buttonElement, config);




  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formEl, inputElement, config);
      //error undefined
      toggleButtonState(inputList, buttonElement, config);

      
    });
  });

};

const enableValidation = (config) => {
    
const formList = document.querySelectorAll(config.formSelector);
formList.forEach((formEl) => {
    setEventListeners(formEl, config);
});
};


enableValidation(settings);

