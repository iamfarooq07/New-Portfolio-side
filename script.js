const mobIcon = document.querySelector(".fa-bars");
const menuBar = document.getElementById("menu");
const forms = document.getElementById("form");
const formsName = document.getElementById("formName");
const navbar = document.getElementById('navbar');
console.log(navbar);


// Menu Bar open and close
let menu = 0
mobIcon.addEventListener('click', () => {
    if (menu === 0) {
        menuBar.style.display = "block"
        menu = 1
    } else {
        menuBar.style.display = "none"
        menu = 0
    }
})
// =================
var typed = new Typed('#typing', {
    strings: ["Frontend Developer", "HTML", "CSS", "Bootstrap 5", "Tailwind CSS", "JavaScript"],
    typeSpeed: 100,
    loop: true,
    backDelay: 1000,
})
// ===================


forms.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = formsName.value.trim();
    if (input === "") {
        alert(`please Enter Your Name`)
    }
    else {
        alert(`WellCome to My Portfoilo WebSite "${input}"`)
        forms.reset()
    }
})

// ============================

navbar.addEventListener('scroll', () => {
    navbar.style.backgroundColor = "#4c439e"
})