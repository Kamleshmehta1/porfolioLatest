//-----------------------Loading Page Handling-------------------------------------------------

setTimeout(() => {
    var loading = document.getElementById("loading-container");
    var section = document.getElementById("section");

    section.style.display = "none";

    setTimeout(() => {
        loading.style.display = "none";
        section.style.display = "block";
    }, 3000);
});

document.addEventListener("hashchange", function () {
    scrollBy(0, -50)
});

// -------------------------------Navbar Handling---------------------------------------------------
const burger = document.querySelector(".burger i");
const nav = document.querySelector('.nav');
const text = document.getElementById("text")

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
// --------------------------------------------------------------------------



// ----------------------My Portfolio link----------------------
function myPortfolio() {
    window.open(window.location.href, "_parent");
    // window.open("https://google.com", "_parent");
}
// -------------------------------------------------------------

// --------------------------navbar -toggle-handler(hide elements)-----------------------------------------
console.log(true);
var threeBars = document.querySelector(".fa-bars");
console.log(threeBars);
threeBars.addEventListener("click", (x) => {
    let navCross = document.querySelector(".fa-times");
    navCross != null ? document.getElementById("text").style.display = "none" : document.getElementById("text").style.display = "block"
});
// ----------------------------------------------------------------------------------------------------------

// ------------------------------------------hr styling grow----------------------------------------------------------------

let hr = document.querySelector(".flex-item-right");

hr.addEventListener('mouseover', function () {
    setTimeout(function () {
        document.querySelector(".trans--hr1").classList.add("grow");
        document.querySelector(".trans--hr2").classList.add("grow");
    }, 275);
});

hr.addEventListener('mouseout', function () {
    setTimeout(function () {
        document.querySelector(".trans--hr1").classList.remove("grow");
        document.querySelector(".trans--hr2").classList.remove("grow");
    }, 275);
});
// --------------------------------------------------------------------------------------------------------------------------------


// -----------------------------------------------------hide-left-panel/corner--------------------------------------------------------------

const toHide = document.querySelector(".text-container")
const flexCorner = document.querySelector(".flex-left-corner")

let a = document.addEventListener("scroll", function isInViewport() {
    const rect = section.getBoundingClientRect();
    console.log("entered");
    let ans = (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
    if (ans === true) {
        flexCorner.style.display = "none";
    } else {
        flexCorner.style.display = "block";
    }
})

// ------------------------------------------------------------------------------------------------------------------------------


function git() {
    window.open("https://github.com/");
}

function linkedin() {
    window.open("https://www.linkedin.com/feed/");
}

function twitter() {
    window.open("https://twitter.com");
}

function codepen() {
    window.open("https://codepen.io/pen/tour/welcome/start");
}

// ----------------------------------------hover on button------------------------------------------------------------------------------

const hoverButton = document.querySelector(".button");
const hoverButtonshowmore = document.querySelector(".showmore");
const hoverButtonshowless = document.querySelector("#showless");
const arrowsR = document.querySelector('.fa-angle-double-right');
const arrowsR1 = document.querySelector('.angle-showmore');
const arrowsR2 = document.querySelector('.angle-showless');

[hoverButton, hoverButtonshowmore, hoverButtonshowless].forEach((item) => {
    item.addEventListener("mouseover", () => {
        arrowsR.style.transform = 'rotate(90deg)';
        arrowsR1.style.transform = 'rotate(90deg)';
        arrowsR2.style.transform = 'rotate(-90deg)';
        arrowsR.style.color = "#b41e5f"
        arrowsR1.style.color = "#b41e5f"
        arrowsR2.style.color = "#b41e5f"
    })
    item.addEventListener("mouseout", () => {
        arrowsR.style.transform = 'rotate(0deg)';
        arrowsR1.style.transform = 'rotate(0deg)';
        arrowsR2.style.transform = 'rotate(0deg)';
        arrowsR.style.color = "#fff"
        arrowsR1.style.color = "#fff"
        arrowsR2.style.color = "#fff"
    })
})


// ---------------------------------------carousels-----------------------------------------------------------------


const slides = document.querySelector(".slideshow-container");
const slides2 = document.querySelector(".next-progress-container");
const skills = document.querySelector(".skills-heading");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");


slides2.style.display = "none";
prev.style.display = "none";


next.addEventListener('click', function () {

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

}, false);

prev.addEventListener('click', function () {

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

// -----------------------------------------------------------------------------------------------------------

function myResume() {
    window.open("https://drive.google.com/file/d/1Xi9pV_sb2BK-Vg7eJDZ1J3P-xNC4KWOO/view?usp=sharing");
}

// ----------------------------------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------------------------------