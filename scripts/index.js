const initialCards = [

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





function saveProfile(event){
   
   
   profileName.textContent = nameInput.value;
    profileDecription.textContent = descriptionInput.value;


    console.log(nameInput.value);

    editModalProfile.classList.remove("modal_opened");
    event.preventDefault();
}


function openProfileModal(){
    editModalProfile.classList.add("modal_opened");


    // change the placeholder to current profile name
    nameInput.value =profileName.textContent; 
    descriptionInput.value = profileDecription.textContent;


}

function closeProfileModal(){
    editModalProfile.classList.remove("modal_opened");
}


function openModalCard(){
    editModalCard.classList.add("modal_opened");




}

function closeModalCard(){
    editModalCard.classList.remove("modal_opened");



}






addCardModalOpenButton.addEventListener("click", openModalCard); 
closeButtonCard.addEventListener("click", closeModalCard);
closeButtonProfile.addEventListener("click", closeProfileModal);
editModalProfile.addEventListener("submit", saveProfile);
profileEditButton.addEventListener("click", openProfileModal);








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
editModalCard.addEventListener("submit", handleAddCardSubmit);


//array cards


initialCards.forEach(function(item){

    console.log(item.name);
    console.log(item.link);


});


console.log(initialCards);
