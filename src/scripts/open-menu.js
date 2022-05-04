const burger = document.querySelector('.burger'),
    navMenu = document.querySelector('.nav-menu'),
    closeBurger = document.querySelector('.close-burger')

burger.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu-open')
    burger.classList.toggle('burger-active')
})

closeBurger.addEventListener('click', () => {
    navMenu.classList.remove('nav-menu-open')
    burger.classList.remove('burger-active')
}) 