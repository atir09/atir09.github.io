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




// ......................................Open Resume in new window.........................................

document.getElementById("resume-button-1").onclick = () => {
    window.open(
      "https://drive.google.com/file/d/15z7KUP1JL1hqhf2E9J8c9jRfL_psPNuj/view?usp=sharing"
    );
  };
  
  document.getElementById("resume-button-2").onclick = () => {
    window.open(
      "https://drive.google.com/file/d/15z7KUP1JL1hqhf2E9J8c9jRfL_psPNuj/view?usp=sharing"
    );
  };

// ...............................Project Image Change..........................................


let project_img_1 = document.getElementById("project-1-img")
let images_arr_1 = ["img/qr/1.png", "img/qr/2.png", "img/qr/3.png", "img/qr/4.png", "img/qr/5.png", "img/qr/6.png", "img/qr/7.png", "img/qr/8.png", "img/qr/9.png"]
var count_image_1 = 0
var isChanging_1 = false;

let project_img_2 = document.getElementById("project-2-img")
let images_arr_2 = ["img/go-fit/1.png", "img/go-fit/2.png", "img/go-fit/3.png", "img/go-fit/4.png", "img/go-fit/5.png", "img/go-fit/6.png", "img/go-fit/7.png", "img/go-fit/8.png", "img/go-fit/9.png","img/go-fit/10.png","img/go-fit/11.png","img/go-fit/12.png",]
var count_image_2 = 0
var isChanging_2 = false;

let project_img_3 = document.getElementById("project-3-img")
let images_arr_3 = ["img/beautify/1.jpg", "img/beautify/2.jpg", "img/beautify/3.jpg", "img/beautify/4.jpg", "img/beautify/5.jpg", "img/beautify/6.jpg"]
var count_image_3 = 0
var isChanging_3 = false;

let project_img_4 = document.getElementById("project-4-img")
let images_arr_4 = ["img/Tat/1.png", "img/Tat/2.png", "img/Tat/3.png", "img/Tat/4.png", "img/Tat/5.png", "img/Tat/6.png", "img/Tat/7.png", "img/Tat/8.png", "img/Tat/9.png", "img/Tat/10.png", "img/Tat/11.png"]
var count_image_4 = 0
var isChanging_4 = false;

window.addEventListener('scroll', ()=>{
    Project_Image_1()
    Project_Image_2()
    Project_Image_3()
    Project_Image_4()
});



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

const typed = new Typed('.multiple-text', {
    strings: ['Full Stack Developer', 'Node.js Backend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true

})



// ....................................................Project Card Images Change Function ...........................................

function Project_Image_1 () {
    var image1Position = project_img_1.getBoundingClientRect().top;

    var windowHeight = window.innerHeight;

    if (image1Position < windowHeight && !isChanging_1) {

        isChanging_1 = true;

        console.log("in-change")

        var Interval1 = setInterval(() => {

            changeImage1()

            if (image1Position >= windowHeight) {
                clearInterval(Interval1)
                isChanging_1 = false
            }
        }, 2300)
        
    }

}

function changeImage1(){
    project_img_1.src=images_arr_1[count_image_1]
    count_image_1=(count_image_1 + 1) % images_arr_1.length
}




function Project_Image_2 () {
    var image2Position = project_img_2.getBoundingClientRect().top;

    var windowHeight = window.innerHeight;

    if (image2Position < windowHeight && !isChanging_2) {

        isChanging_2 = true;

        console.log("in-change2")

        var Interval2 = setInterval(() => {

            changeImage2()

            if (image2Position >= windowHeight) {
                clearInterval(Interval2)
                isChanging_2 = false
            }
        }, 2300)
        
    }

}

function changeImage2(){
    project_img_2.src=images_arr_2[count_image_2]
    count_image_2=(count_image_2 + 1) % images_arr_2.length
}




function Project_Image_3 () {
    var image3Position = project_img_3.getBoundingClientRect().top;

    var windowHeight = window.innerHeight;

    if (image3Position < windowHeight && !isChanging_3) {

        isChanging_3 = true;

        var Interval3 = setInterval(() => {

            changeImage3()

            if (image3Position >= windowHeight) {
                clearInterval(Interval3)
                isChanging_3 = false
            }
        }, 2500)
        
    }

}

function changeImage3(){
    project_img_3.src=images_arr_3[count_image_3]
    count_image_3=(count_image_3 + 1) % images_arr_3.length
}




function Project_Image_4 () {
    var image4Position = project_img_4.getBoundingClientRect().top;

    var windowHeight = window.innerHeight;

    if (image4Position < windowHeight && !isChanging_4) {

        isChanging_4 = true;


        var Interval4 = setInterval(() => {

            changeImage4()

            if (image4Position >= windowHeight) {
                clearInterval(Interval4)
                isChanging_4 = false
            }
        }, 2000)
        
    }

}

function changeImage4(){
    project_img_4.src=images_arr_4[count_image_4]
    count_image_4=(count_image_4 + 1) % images_arr_4.length
}