const initialCards = [

    {name: "San Fran", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg"},
    {name: "Val Thorens", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg"},
    {name: "Restaurant terrace", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg"},
    {name: "An outdoor cafe", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"},
    {name: "A very long bridge, over the forest and through the trees", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"},
    {name: "Tunnel with morning light", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg"},
    {name: "Mountain house", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg"},


];



const profileEditButton = document.querySelector(".profile__edit-button");
const editModalCard = document.querySelector("#edit-card-modal");
const editModalProfile = document.querySelector("#edit-profile-modal");
const closeButtonProfile = editModalProfile.querySelector(".modal__close-btn");
const closeButtonCard = editModalCard.querySelector(".modal__close-btn");
const nameInput = editModalProfile.querySelector("#name");
const descriptionInput = editModalProfile.querySelector("#description");
const profileName = document.querySelector(".profile__name");
const profileDecription = document.querySelector(".profile__description");
const addCardModalOpenButton = document.querySelector(".profile__add-button"); 
const nameInputCard = editModalCard.querySelector("#link"); 
const linkInput = editModalCard.querySelector("#caption");
const cardTemplate = document.querySelector("#card-template");
const cardList = document.querySelector(".cards__list");
//error
const previewModal = document.querySelector("#preview-modal");
const previewModalCloseBtn = previewModal.querySelector(".modal__close-btn");
const previewImageElement = previewModal.querySelector(".modal__image");
const previewImageCaption = previewModal.querySelector(".modal__caption");




function openModal(modal){
    modal.classList.add("modal_opened");
}

function closeModal(modal){
    modal.classList.remove("modal_opened");
}


function saveProfile(event){
   
   
   profileName.textContent = nameInput.value;
    profileDecription.textContent = descriptionInput.value;


    console.log(nameInput.value);

  

    closeModal(editModalProfile);
    event.preventDefault();

    
}


function openProfileModal(){
   
    openModal(editModalProfile);

    // change the placeholder to current profile name
    nameInput.value =profileName.textContent; 
    descriptionInput.value = profileDecription.textContent;


}

function closeProfileModal(){
   
    closeModal(editModalProfile);
}


function openModalCard(){
   


    openModal(editModalCard);

}

function closeModalCard(){
  
    closeModal(editModalCard);


}

function closepreviewModal(){
   
    closeModal(previewModalCloseBtn);
}




addCardModalOpenButton.addEventListener("click", openModalCard); 
closeButtonCard.addEventListener("click", closeModalCard);
closeButtonProfile.addEventListener("click", closeProfileModal);
previewModalCloseBtn.addEventListener("click", closepreviewModal);
editModalProfile.addEventListener("submit", saveProfile);
profileEditButton.addEventListener("click", openProfileModal);








// Create the form submission handler.
function handleAddCardSubmit(event) {
  // Prevent default browser behavior.
 
 

  
  // Log both input values to the console.

  console.log(nameInputCard.value);
  console.log(linkInput.value);
  
  const cardEl = getCardElement({
    name: nameInputCard.value,
    link: linkInput.value,
  });
  cardList.prepend(cardEl);

  // Close the modal.
  editModalCard.classList.remove("modal_opened");

  event.preventDefault(); 
}

// Create the submit listener.
editModalCard.addEventListener("submit", handleAddCardSubmit);


//array cards



//template clone

function getCardElement(data){
    
    const cardElement = cardTemplate.content.querySelector(".card").cloneNode(true);
    const cardElementTitle = cardElement.querySelector(".card__title");
    const cardElementImage = cardElement.querySelector(".card__image");
    const cardLikeBtnEl = cardElement.querySelector(".card__like-button");

    cardElementImage.src = data.link;
    cardElementImage.alt = data.name;
    cardElementTitle.textContent = data.name;

    //event listener for like button

    cardLikeBtnEl.addEventListener("click",() => {
        cardLikeBtnEl.classList.toggle("card__like-button_active");
    })

    const deleteButton = cardElement.querySelector(".delete-btn");
    deleteButton.addEventListener("click",() =>{
        deleteButton.closest(".card").remove();


    });

// errors
cardElementImage.addEventListener("click", ()=> {
    previewImageElement.src = data.link;
    previewImageElement.alt = data.name;
    previewImageCaption.textContent = data.name;
   previewImageElement.textContent = data.name;
//error
    openModal(previewModal);


});

return cardElement;
};


initialCards.forEach(function(item){

 

const cardEl = getCardElement(item);
cardList.append(cardEl);

});


