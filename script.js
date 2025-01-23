// Select elements using the DOM
const menuBtn = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const navbar = document.getElementById('nav');

// Add event listener
menuBtn.addEventListener('click', function(){
    navbar.style.display = 'flex'
    menuBtn.style.display = 'none'
    closeMenu.style.display = 'block'
})

closeMenu.addEventListener('click', function(){
    navbar.style.display = 'none'
    menuBtn.style.display = 'block'
    closeMenu.style.display = 'none'
})
