const modal = document.querySelector(`.modal`);
const openModal = document.querySelectorAll(`.show-modal`);
const closeModal = document.querySelector(`.close-modal`);
const overlay = document.querySelector(`.overlay`);

const openModalFunc = function(){
  modal.classList.remove(`hidden`);
    overlay.classList.remove(`hidden`)
}
const closeModalFunc = function(){
  modal.classList.add(`hidden`);
    overlay.classList.add(`hidden`)
}

for(i = 0; openModal.length>i; i++){
  openModal[i].addEventListener(`click`, openModalFunc)
}
overlay.addEventListener(`click`, closeModalFunc);
closeModalButton.addEventListener(`click`, closeModalFunc);