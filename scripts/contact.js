function runContact() {

    animateMenu();
    sectionOne();

}
function sectionOne() {
    gsap.timeline()

        .to("section:nth-of-type(1)", { duration: 1, opacity: 1, delay: 1 })
        .to(".panel .left p:nth-of-type(1)", { duration: 1, text: "Have An Idea ", delay: 0 })
        .to(".panel .left p:nth-of-type(2)", { duration: 1.5, text: "A Project YOU Want To Build" })
        .to(".panel .right h1", { duration: 1.5, opacity: 1 })

        .to(".panel .right a", { duration: 1, opacity: 1 })
    //.to(".panel .left p span", {duration: 1, color:"red",delay:4})

}

function animateMenu() {
    gsap.timeline()

        .to("header", { duration: 0, display: "flex" })
        .to("header", { duration: 1, width: "100%" })
        .to("nav", { duration: 1, opacity: 1, height: "100%" })

}