var here = document.getElementsByClassName("percentage");


function animateValue0(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function () {
        current += increment;
        here[0].innerHTML = current + "%";
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

function animateValue1(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function () {
        current += increment;
        here[1].innerHTML = current + "%";
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

function animateValue2(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function () {
        current += increment;
        here[2].innerHTML = current + "%";
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

function animateValue3(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function () {
        current += increment;
        here[3].innerHTML = current + "%";
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

function animateValue4(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function () {
        current += increment;
        here[4].innerHTML = current + "%";
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

function animateValue5(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function () {
        current += increment;
        here[5].innerHTML = current + "%";
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

const mainContainer = document.querySelector(".progress-container");

mainContainer.addEventListener("mouseover", () => {
    animateValue0("", 0, 75, 5000)
    animateValue1("", 0, 80, 5000)
    animateValue2("", 0, 60, 5000)
    animateValue3("", 0, 50, 5000)
    animateValue4("", 0, 55, 5000)
    animateValue5("", 0, 50, 5000)
}, {
    once: true
})

hoverButton.addEventListener("mouseover", () => {
    animateValue0("", 0, 75, 5000)
    animateValue1("", 0, 80, 5000)
    animateValue2("", 0, 60, 5000)
    animateValue3("", 0, 50, 5000)
    animateValue4("", 0, 55, 5000)
    animateValue5("", 0, 50, 5000)
}, {
    once: true
})



// --------------------------------------------------------------------------------------------

const school = document.querySelectorAll(".school");
const rightJourney = document.querySelectorAll(".my-journey-right");


rightJourney[0].style.display = "block";
rightJourney[1].style.display = "none";
rightJourney[2].style.display = "none";
rightJourney[3].style.display = "none";

school[0].classList.add("school-hover");


const schoolData = document.querySelectorAll(".school-data");

function schoolHover(elementNumber) {
    elementNumber.classList.add("school-hover");
    school.forEach((elements, value) => {
        if (elements != elementNumber) {
            elements.classList.remove("school-hover");
            rightJourney[value].style.display = "none"
            console.log(value);
        } else {
            rightJourney[value].style.display = "block"
        }
    })
}
// ----------------------------------------------------------------------------------------

var activea = document.querySelector(".topnav").querySelectorAll("a");

function linktogo(elementNumber) {
    elementNumber.classList.add("a-hover")
    activea.forEach((elements, value) => {
        if (elements != elementNumber) {
            elements.classList.remove("a-hover");
        }
    })
}
// ----------------------------------------------navbar automate active-------------------------------------------------------------------------

let journey = document.querySelector("#journey");
let headjourney = document.querySelector("#head-journey");
let aboutHover = document.querySelector("#about-flex-container");
let headabout = document.querySelector("#head-about");
let homeHover = document.querySelector("#text-container");
let projectHover = document.querySelector("#projects-container");
let contactHover = document.querySelector("#contact-container");
let headhome = document.querySelector("#head-home");
let headcontact = document.querySelector("#head-contact");
let headproject = document.querySelector("#head-project");


headjourney.classList.remove("a-hover");
headabout.classList.remove("a-hover");
headhome.classList.remove("a-hover");
headproject.classList.remove("a-hover");
headcontact.classList.remove("a-hover");

journey.addEventListener("mouseover", () => {
    headjourney.classList.add("a-hover");
    headabout.classList.remove("a-hover");
    headhome.classList.remove("a-hover");
    headproject.classList.remove("a-hover");
    headcontact.classList.remove("a-hover");
})

journey.addEventListener("mouseout", () => {
    headjourney.classList.remove("a-hover");
})


aboutHover.addEventListener("mouseover", () => {
    headabout.classList.add("a-hover");
    headjourney.classList.remove("a-hover");
    headhome.classList.remove("a-hover");
    headproject.classList.remove("a-hover");
    headcontact.classList.remove("a-hover");
})

aboutHover.addEventListener("mouseout", () => {
    headabout.classList.remove("a-hover");
})


homeHover.addEventListener("mouseover", () => {
    headhome.classList.add("a-hover");
    headjourney.classList.remove("a-hover");
    headabout.classList.remove("a-hover");
    headproject.classList.remove("a-hover");
    headcontact.classList.remove("a-hover");
})
homeHover.addEventListener("mouseout", () => {
    headhome.classList.remove("a-hover");
})

projectHover.addEventListener("mouseover", () => {
    headhome.classList.remove("a-hover");
    headjourney.classList.remove("a-hover");
    headabout.classList.remove("a-hover");
    headproject.classList.add("a-hover");
    headcontact.classList.remove("a-hover");
})
projectHover.addEventListener("mouseout", () => {
    headproject.classList.remove("a-hover");
})

contactHover.addEventListener("mouseover", () => {
    headhome.classList.remove("a-hover");
    headjourney.classList.remove("a-hover");
    headabout.classList.remove("a-hover");
    headproject.classList.remove("a-hover");
    headcontact.classList.add("a-hover");
})
contactHover.addEventListener("mouseout", () => {
    headcontact.classList.remove("a-hover");
})
// --------------------------------------------------------------------------------------------------------------------------------

let projectContainer = document.querySelector(".projects-container")
let hidemore = document.querySelector("#showmore")
let hideless = document.querySelector("#showless")

let glass = document.querySelectorAll(".glass")

for (let i = 3; i < glass.length; i++) {
    glass[i].style.display = "none";
}

hideless.style.display = "none";



function showmore() {
    hidemore.style.display = "none";
    hideless.style.display = "block";
    projectContainer.style.height = "auto"
    for (let i = 3; i < glass.length; i++) {
        glass[i].style.display = "block";
    }
}

function showless() {
    hideless.style.display = "none";
    hidemore.style.display = "block";
    projectContainer.style.height = "auto"
    for (let i = 3; i < glass.length; i++) {
        glass[i].style.display = "none";
    }
}

// ---------------------------------------input prevent default behavior----------------------------------------------------------

let inputtxt = [document.querySelector("#fname"), document.querySelector("#lname"), document.querySelector("#email"), document.querySelector("#number")]

inputtxt.forEach((item) => {
    item.addEventListener("keydown", (event) => {
        if (event.key == "Enter") {
            event.preventDefault()
        }
    })
})

// ----------------------------------------------------------------------------------------------------------------

function myFunction() {
    document.querySelector(".flex-item-left").addEventListener('dblclick', function () {

        next.style.display = "none";
        slides.classList.add('visuallyhidden');
        slides.addEventListener('transitionend', function (e) {
            slides2.classList.remove("visuallyshow");
            slides2.classList.remove("show");
            slides.classList.add('hidden');
            slides2.style.display = "block";
            prev.style.display = "block";
        }, {
            capture: false,
            once: true,
            passive: false
        });
    })
}


myFunction()



function myFunction1() {
    document.querySelector(".flex-item-left").addEventListener('dblclick', function () {

        // prev.style.display = "none";
        next.style.display = "block";
        slides2.classList.add('visuallyshow');
        slides2.addEventListener('transitionend', function (e) {
            slides2.classList.add("show")
            slides.classList.remove('hidden');
            slides.classList.remove("visuallyhidden")
        }, {
            capture: false,
            once: true,
            passive: false
        });
    }, false);
}


myFunction1()