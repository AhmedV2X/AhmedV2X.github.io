let animeTL = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
});
function runProject() {
    animateMenu();
    sectionOne();
}
function animateMenu() {
    gsap.timeline()

        .to("header", { duration: 0, display: "flex" })
        .to("header", { duration: 1, width: "100%" })
        .to("nav", { duration: 1, opacity: 1, height: "100%" })


}
function sectionOne() {
    animeTL
        .add({
            targets: '.headLetters',
            translateX: 15,
            opacity: 1,
            easing: 'linear',
            delay: anime.stagger(100)

            //delay: anime.stagger(250)
        })
}