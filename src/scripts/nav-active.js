const navItem = document.querySelectorAll('.nav-menu__list-item')

navItem.forEach(item => {
    item.addEventListener('click', (e) => {
        navItem.forEach(item => {
            item.classList.remove('nav-menu__list-item-active')
        })
        item.classList.add('nav-menu__list-item-active')
    })
})