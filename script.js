'use strict';
//-----------------------------------------------------------------
// Base value -----------------------------------------------------
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll('.show-modal');
//-----------------------------------------------------------------
// Base function --------------------------------------------------
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

///////////////////////////////////////////////////////////////////
/////////////////////////// Code Start ////////////////////////////
//----------------------------------------------------------------
// Open Window ---------------------------------------------------
for (let i = 0; i < btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click',openModal)
}
//----------------------------------------------------------------
// Close Window --------------------------------------------------

//close with X button***
btnCloseModal.addEventListener('click',closeModal);
//close with emty space***
overlay.addEventListener('click',closeModal);
//close with Eec key***
document.addEventListener('keydown',function (e) {
    if (e.key === "Escape" && !modal.classList.contains('hidden') ) {
        closeModal();
     };
})
///////////////////////////////////////////////////////////////////
///////////////////////////// Code End ////////////////////////////