let tl2 = gsap.timeline()
let slide_number = 1

function runTimeline() {
    animateMenu();
    // sectionOne();
    setTimeout(() => {
        sectionOne();
    }, 1000);

}
function sectionOne() {
    gsap.timeline()
        .to(".swiper", { opacity: 1 })
}
function next_color(action) {
    // console.log("sl" + slide_number)
    if (slide_number % 2 == 0) {
        gsap.timeline()
            .to(".swiper-button-next, .swiper-button-prev", {
                color: "white"
            })
            .to(".swiper-pagination-bullet", {
                background: "white"
            })
    }
    else {
        gsap.timeline()
            .to(".swiper-button-next, .swiper-button-prev", {
                color: "black"
            })
            .to(".swiper-pagination-bullet", {
                background: "black"
            })
    }
    if (action == "next") {
        slide_number += 1

    }
    else {
        slide_number -= 1

    }

}

