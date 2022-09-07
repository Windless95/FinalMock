let btn = document.querySelector("button.mobile-menu-button-close");
let btn1 = document.querySelector("button.mobile-menu-button-open");
let menu = document.querySelector('.mobile-menu');
let desk = document.querySelector('.desktop-menu')
let desk1 = document.querySelector("button.desktop-menu-button")



//event listener for the mobile menu to open.

btn.addEventListener('click', () => {
  menu.classList.toggle('hidden')
} )

btn1.addEventListener('click', () => {
    menu.classList.toggle('hidden')
})

desk1.addEventListener('click', () => {
    desk.classList.toggle('hidden')
})

