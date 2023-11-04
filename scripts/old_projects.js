let tl2 = gsap.timeline();
let tl3 = gsap.timeline();
let animeTL = anime.timeline({
    easing: 'easeOutExpo',
    duration: 350
});

function runProjects() {

    animateMenu();

    //switch 
    sectionOne()

    sectionTwo();
    sectionThree();
    sectionFour();
    sectionFive();
    sectionSix();
}

function animateMenu() {
    tl2
        .to("header", { duration: 0, display: "flex" })
        .to("header", { duration: 1, width: "100%" })
        .to("nav", { duration: 1, opacity: 1, height: "100%" })

}
//slider code
/*
var slideCount = 1;
function nextSlide(totalSlides) {

    let ele = ".panel:nth-of-type(" + slideCount + ")";

    tl2
        .to(ele, { duration: 1, opacity: 0 })
        .to(ele, { duration: 0, display: "none" })

    slideCount++;
    if (slideCount > totalSlides) {
        slideCount = 1;

    }
    ele = ".panel:nth-of-type(" + slideCount + ")";

    tl2
        .to(ele, { duration: 0, display: "flex" })
        .to(ele, { duration: 0.7, opacity: 1, delay: 1 })
    document.getElementById("slideNumber").innerText = slideCount;
}
function preSlide(totalSlides) {

    let ele = ".panel:nth-of-type(" + slideCount + ")";

    tl2
        .to(ele, { duration: 1, opacity: 0 })
        .to(ele, { duration: 1, display: "none" })

    slideCount--;
    if (slideCount < 1) {
        slideCount = totalSlides;

    }
    ele = ".panel:nth-of-type(" + slideCount + ")";

    tl2
        .to(ele, { duration: 1, display: "flex" })
        .to(ele, { duration: 0.7, opacity: 1 })
    document.getElementById("slideNumber").innerText = slideCount;

}*/
function sectionOne() {
    animeTL
        .add({
            targets: '.headLetters1',
            translateY: -10,
            opacity: 1,
            easing: 'linear',
            delay: anime.stagger(200)

            //delay: anime.stagger(250)
        })
        .add({
            targets: '#img1',
            opacity: 1,
            easing: 'linear',
            delay: anime.stagger(200)

            // delay: anime.stagger(250)
        })
        .add({
            targets: '.bodyLetters1',
            opacity: 1,
            translateX: 5,
            easing: 'linear',
            delay: anime.stagger(200)

            //  delay: anime.stagger(200)
        })
}
function sectionTwo() {
    animeTL
        .add({
            targets: '.headLetters2',
            translateY: -10,
            opacity: 1,
            easing: 'linear',
            delay: anime.stagger(200)

            //delay: anime.stagger(250)
        })
        .add({
            targets: '#img2',
            opacity: 1,
            easing: 'linear',
            delay: anime.stagger(200)

            // delay: anime.stagger(250)
        })
        .add({
            targets: '.bodyLetters2',
            opacity: 1,
            translateX: 5,
            easing: 'linear',
            delay: anime.stagger(200)

            //  delay: anime.stagger(200)
        })



}

function sectionThree() {

    animeTL
        .add({
            targets: '.headLetters3',
            translateY: -10,
            opacity: 1,
            easing: 'linear',
            delay: anime.stagger(200)

            // delay: anime.stagger(250)
        })
        .add({
            targets: '#img3',
            opacity: 1,
            easing: 'linear',
            delay: anime.stagger(200)
        })
        .add({
            targets: '.bodyLetters3',
            opacity: 1,
            translateX: 5,
            easing: 'linear',
            delay: anime.stagger(200)

            //  delay: anime.stagger(200)
        })
    /*for (let i = 2; i <= 5; i++) {
        ScrollTrigger.create({
            trigger: "section:nth-of-type(" + i + ")",
            onEnter: scrollEnterAnimation(i),
            onLeave: scrollEnterAnimation(i),
            onEnterBack: scrollEnterAnimation(i),
            onLeaveBack: scrollEnterAnimation(i),
            //    toggleActions: "play reverse play reverse",

        })

    }*/

}
function sectionFour() {
    animeTL
        .add({
            targets: '.headLetters4',
            translateY: -10,
            opacity: 1,
            easing: 'linear',
            delay: anime.stagger(200)

            // delay: anime.stagger(250)
        })
        .add({
            targets: '#img4',
            opacity: 1,
            easing: 'linear',
            delay: anime.stagger(200)
        })
        .add({
            targets: '.bodyLetters4',
            opacity: 1,
            translateX: 5,
            easing: 'linear',
            delay: anime.stagger(200)

            //  delay: anime.stagger(200)
        })
}

function sectionFive() {
    animeTL
        .add({
            targets: '.headLetters5',
            translateY: -10,
            opacity: 1,
            easing: 'linear',
            delay: anime.stagger(200)

            // delay: anime.stagger(250)
        })
        .add({
            targets: '#img5',
            opacity: 1,
            easing: 'linear',
            delay: anime.stagger(200)
        })
        .add({
            targets: '.bodyLetters5',
            opacity: 1,
            translateX: 5,
            easing: 'linear',
            delay: anime.stagger(200)

            //  delay: anime.stagger(200)
        })
}

function sectionSix() {
    animeTL
        .add({
            targets: '.headLetters6',
            translateY: -10,
            opacity: 1,
            easing: 'linear',
            delay: anime.stagger(200)

            // delay: anime.stagger(250)
        })
        .add({
            targets: '#img6',
            opacity: 1,
            easing: 'linear',
            delay: anime.stagger(200)
        })
        .add({
            targets: '.bodyLetters6',
            opacity: 1,
            translateX: 5,
            easing: 'linear',
            delay: anime.stagger(200)

            //  delay: anime.stagger(200)
        })
}

function scrollEnterAnimation(i) {
    //console.log("hi" + i)
    animeTL
        .add({
            targets: '.headLetters' + i,
            translateY: -10,
            opacity: 1,
            easing: 'linear',
            delay: anime.stagger(0)

            // delay: anime.stagger(250)
        })
        .add({
            targets: '#img' + i,
            opacity: 1,
            easing: 'linear',
            delay: anime.stagger(0)
        })
        .add({
            targets: '.bodyLetters' + i,
            opacity: 1,
            translateX: 5,
            easing: 'linear',
            delay: anime.stagger(0)

            //  delay: anime.stagger(200)
        })
}

function scrollLeaveAnimation(i) {
    //console.log("hi" + i)
    animeTL2
        .add({
            targets: '.headLetters' + i,
            opacity: 0,
            easing: 'linear',
        })
        .add({
            targets: '#img' + i,
            opacity: 0,
            easing: 'linear'
        })
        .add({
            targets: '.bodyLetters' + i,
            opacity: 0,
            translateX: 0,
            easing: 'linear',
        })
}