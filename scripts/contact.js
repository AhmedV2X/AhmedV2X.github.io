function runContact() {

    animateMenu();
    setTimeout(() => {
        sectionOne();

    }, 500);

}
function sectionOne() {
    gsap.timeline()
        .to("section:nth-of-type(1)", { duration: 1, opacity: 1 })
        .to(".panel .left p:nth-of-type(1)", { duration: 1, text: "Have An Idea " })
        .to(".panel .left p:nth-of-type(2)", { duration: 1, text: "A Project YOU Want To Build" })
        .to(".panel .right h1", { duration: 1, opacity: 1 })
        .to(".panel .right a", { duration: 1, opacity: 1 })
}

