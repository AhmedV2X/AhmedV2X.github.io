let tl1 = gsap.timeline();

function openMenu() {
    gsap.timeline()
        .to(".mobileMenu", { duration: 0, display: "flex" })
        .to(".mobileMenu", { duration: 1, opacity: 1 })

}
function closeMenu() {
    gsap.timeline()
        .to(".mobileMenu", { duration: 1, opacity: 0 })
        .to(".mobileMenu", { duration: 0, display: "none" })
}


function animateMenu() {
    tl1
        .to("header", { duration: 0, display: "flex" })
        .to("header", { duration: 1, width: "100%" })
        .to("nav", { duration: 1, opacity: 1, height: "100%" })

}

