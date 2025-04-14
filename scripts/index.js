const initialCards = [

    {name: "Val Thorens", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg"},
    {name: "Restaurant terrace", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg"},
    {name: "An outdoor cafe", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"},
    {name: "A very long bridge, over the forest and through the trees", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"},
    {name: "Tunnel with morning light", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg"},
    {name: "Mountain house", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg"},


];


console.log(initialCards);


const profileEditButton = document.querySelector(".profile__edit-button");
const editModalCard = document.querySelector("#edit-card-modal");
const editModal = document.querySelector("#edit-profile-modal");
const closeButton = editModal.querySelector(".modal__close-btn");
const closeButtonCard = editModalCard.querySelector(".modal__close-btn");
const saveModal = editModal.querySelector(".modal__submit-btn");
const nameInput = editModal.querySelector("#name");
const descriptionInput = editModal.querySelector("#description");
const profileName = document.querySelector(".profile__name");
const profileDecription = document.querySelector(".porfile__description");
const addCardFormElement = document.querySelector(".profile__add-button"); 
const modalSubmitCard = editModalCard.querySelector(".modal__submit-btn"); // wrong selectorr?? no log to console
const nameInputCard = editModalCard.querySelector("#link"); 
const linkInput = editModalCard.querySelector("#caption");





function saveProfile(event){
   
   
   profileName.innerHTML = nameInput.value;
    profileDecription.innerHTML = descriptionInput.value;


    console.log(nameInput.value);

    editModal.classList.remove("modal_opened");
    event.preventDefault();
}


function openModal(){
    editModal.classList.add("modal_opened");


    // change the placeholder to current profile name
    nameInput.value =profileName.textContent; 
    descriptionInput.value = profileDecription.textContent;


}

function closeModal(){
    editModal.classList.remove("modal_opened");
}


function openModalCard(){
    editModalCard.classList.add("modal_opened");




}

function closeModalCard(){
    editModalCard.classList.remove("modal_opened");



}






addCardFormElement.addEventListener("click", openModalCard); // correct??
closeButtonCard.addEventListener("click", closeModalCard);
closeButton.addEventListener("click", closeModal);
saveModal.addEventListener("click", saveProfile);
profileEditButton.addEventListener("click", openModal);








// Create the form submission handler.
function handleAddCardSubmit(event) {
  // Prevent default browser behavior.
 
 
  // Log both input values to the console.

  console.log(nameInputCard.value);
  console.log(linkInput.value);
  

  // Close the modal.
  editModalCard.classList.remove("modal_opened");

  event.preventDefault(); 
}

// Create the submit listener.
modalSubmitCard.addEventListener('click', handleAddCardSubmit);
