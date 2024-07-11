const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

function openModal() {
    console.log("Modal is Open");
    overlay.classList.add("overlayActive");
    modal.classList.add("active");
}

function closeModal() {
    console.log("Modal is Close");
    overlay.classList.remove("overlayActive");
    modal.classList.remove("active");
}