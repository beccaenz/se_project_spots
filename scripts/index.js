const initialCards = [
  {
    name: "San Fran",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

const profileEditButton = document.querySelector(".profile__edit-button");
const modalFormProfile = document.querySelector("#profile-edit");
const modalFormCard = document.querySelector("#add-card");
const editModalCard = document.querySelector("#edit-card-modal");
const editModalProfile = document.querySelector("#edit-profile-modal");
const closeButtonProfile = editModalProfile.querySelector(".modal__close-btn");
const closeButtonCard = editModalCard.querySelector(".modal__close-btn");
const nameInput = editModalProfile.querySelector("#name");
const descriptionInput = editModalProfile.querySelector("#description");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const addCardModalOpenButton = document.querySelector(".profile__add-button");
const nameInputCard = editModalCard.querySelector("#caption");
const linkInput = editModalCard.querySelector("#link");
const cardTemplate = document.querySelector("#card-template");
const cardList = document.querySelector(".cards__list");
const cardFormSubmitButton = editModalCard.querySelector(".modal__submit-btn");
//
const previewModal = document.querySelector("#preview-modal");
const previewModalCloseBtn = previewModal.querySelector(".modal__close-btn");
const previewImageElement = previewModal.querySelector(".modal__image");
const previewImageCaption = previewModal.querySelector(".modal__caption");
const addCard = document.querySelector("#add-card");

const modals = document.querySelectorAll(".modal");

modals.forEach((modal) => {
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      // modal.classList.remove("modal_opened");
      closeModal(openModal);
    }
  });
});

function handleEscape(evt) {
  if (evt.key === "Escape") {
    const openModal = document.querySelector(".modal.modal_opened");
    if (openModal) {
      closeModal(openModal);
    }
  }
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscape);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscape);
}

function saveProfile(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;

  closeModal(editModalProfile);
}

function openProfileModal() {
  openModal(editModalProfile);
  // reset validation errors

  // change the placeholder to current profile name
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  resetValidation(editModalProfile, settings);
}

function closeProfileModal() {
  closeModal(editModalProfile);
}

function openModalCard() {
  openModal(editModalCard);
}

function closeModalCard() {
  closeModal(editModalCard);
}

function closepreviewModal() {
  closeModal(previewModal);
}

addCardModalOpenButton.addEventListener("click", openModalCard);
closeButtonCard.addEventListener("click", closeModalCard);
closeButtonProfile.addEventListener("click", closeProfileModal);
previewModalCloseBtn.addEventListener("click", closepreviewModal);
modalFormProfile.addEventListener("submit", saveProfile);
profileEditButton.addEventListener("click", openProfileModal);

// Create the form submission handler.
function handleAddCardSubmit(event) {
  // Prevent default browser behavior.

  event.preventDefault();

  // Log both input values to the console.

  //console.log(linkInput.value);
  //console.log(nameInputCard.value);

  const cardEl = getCardElement({
    name: nameInputCard.value,
    link: linkInput.value,
  });
  cardList.prepend(cardEl);

  // Close the modal.

  closeModal(editModalCard);

  //working

  ////////////////////////////////////////////////////////////////////
  disableButton(cardFormSubmitButton, settings);
  // add settings

  addCard.reset();
}

// Create the submit listener.
modalFormCard.addEventListener("submit", handleAddCardSubmit);

//array cards

//template clone

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);
  const cardElementTitle = cardElement.querySelector(".card__title");
  const cardElementImage = cardElement.querySelector(".card__image");
  const cardLikeBtnEl = cardElement.querySelector(".card__like-button");

  cardElementImage.src = data.link;
  cardElementImage.alt = data.name;
  cardElementTitle.textContent = data.name;

  //event listener for like button

  cardLikeBtnEl.addEventListener("click", () => {
    cardLikeBtnEl.classList.toggle("card__like-button_active");
  });

  const deleteButton = cardElement.querySelector(".delete-btn");
  deleteButton.addEventListener("click", () => {
    deleteButton.closest(".card").remove();
  });

  cardElementImage.addEventListener("click", () => {
    previewImageElement.src = data.link;
    previewImageElement.alt = data.name;
    previewImageCaption.textContent = data.name;

    openModal(previewModal);

    //reset here
  });

  return cardElement;
}

initialCards.forEach(function (item) {
  const cardEl = getCardElement(item);
  cardList.append(cardEl);
});
