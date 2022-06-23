let menuBtn = document.getElementById('menu-Btn')
let menuLists = document.getElementById('nav-lists')
let menuOthers = document.querySelector('.login')

menuBtn.addEventListener('click', function () {
    if(menuLists.style.display === "block") {
        menuLists.style.display = "none";
    } else {
        menuLists.style.display = "block";
    }
})
