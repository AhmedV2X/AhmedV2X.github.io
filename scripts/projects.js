let tl2 = gsap.timeline();

function runProjects() {

    animateMenu();
    sectionOne();

}
function sectionOne() {
    gsap.timeline()

        .to("section:nth-of-type(1)", { duration: 1, opacity: 1, delay: 2 })
}

function animateMenu() {
    gsap.timeline()

        .to("header", { duration: 0, display: "flex" })
        .to("header", { duration: 1, width: "100%" })
        .to("nav", { duration: 1, opacity: 1, height: "100%" })

}
//slider code
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

}
