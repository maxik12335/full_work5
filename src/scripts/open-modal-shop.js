const shopButton = document.querySelector('.button-create-shop'),
    modal = document.querySelector('.modal'),
    cancelButton = document.querySelector('.modal-domen__button-gray')

shopButton.addEventListener('click', () => {
    modal.classList.toggle('modal-active')
})

cancelButton.addEventListener('click', () => {
    modal.classList.toggle('modal-active')
})