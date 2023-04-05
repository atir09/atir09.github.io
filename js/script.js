let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a")

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop
        let height = sec.offsetHeight
        let id = sec.getAttribute("id")

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector('header nav a[href*=' + id + ']').classList.add("active");
            })
        }
    })

    // ...................................Sticky Navbar.........................................
    let header = document.querySelector("header")
    header.classList.toggle("sticky", window.scrollY > 100);


    // ...................Removing navbar when scroll............................

    menuicon.classList.remove('bx-x')
    navbar.classList.remove('active')
}


// ...........toggle icon of Navbar.................................................

let menuicon = document.querySelector("#menu-icon")
let navbar = document.querySelector(".navbar")

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}


// ...........Scroll reveal.................................................


ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .project-box', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });



// ...........type reveal.................................................

const typed  = new Typed('.multiple-text',{
    strings:['Full Stack Developer','Node.js Backend Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:100,
    loop:true

})
