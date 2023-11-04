let tl2 = gsap.timeline()
function runAbout() {
    animateMenu();
    // sectionOne();
    setTimeout(() => {
        // sectionOne();
    }, 1000);

}

function sectionOne() {
    tl2.to("section:nth-of-type(1) .ruler:nth-of-type(1)", {
        width: 0, opacity: 0, duration: 1.5
    })
    tl2.to("section:nth-of-type(1) .ruler:nth-of-type(2)", {
        width: 0, opacity: 0, duration: 1.5
    })
    tl2.to("section:nth-of-type(1) .ruler:nth-of-type(3)", {
        width: 0, opacity: 0, duration: 0.5
    })
    tl2.to("section:nth-of-type(1) .ruler", {
        display: "none", duration: 0
    })

    //tl2.to("section:nth-of-type(1) .panel:nth-of-type(1)", { opacity: 0 })


    //  tl2.add(tween1)

}
/*
function sectionOne() {
    gsap.timeline()
        .to("section:nth-of-type(1)", { duration: 1, opacity: 1, delay: 1.2 })
    for (let i = 1; i <= 4; i++) {

        gsap.to("article:nth-of-type(" + i + ")",
            {
                duration: 1, opacity: 1, ease: "power1",

                scrollTrigger: {
                    trigger: "article:nth-of-type(" + i + ")",
                    start: "top 80%",// top of trigere hit view port
                    end: "bottom 30%",
                    //on enter , on leave on 
                    toggleActions: "play reverse play reverse",
                    shrub: true

                }
            })
    }




}

*/


/*
function sectionOne() {
    gsap.timeline()
        .to("main section:nth-of-type(1) .panel", { duration: 1.3, opacity: 1 })

    for (let i = 1; i <= 6; i++) {

        gsap.to(".item:nth-of-type("+i+")",
            {
                duration: 1.2, opacity: 1, width: "100%", ease: "power1",

                scrollTrigger: {
                    trigger: ".item:nth-of-type("+i+")",
                    start: "top 30%",// top of trigere hit view port
                    end: "bottom 20%",
                    //on enter , on leave on 
                    toggleActions: "play reverse play reverse",
                    shrub: true

                }
            })

        gsap.to(".item:nth-of-type("+i+") h1",
            {
                duration: 1.2, opacity: 1, width: "30%", ease: "power1",

                scrollTrigger: {
                    trigger: ".item:nth-of-type("+i+")",
                    start: "top 30%",// top of trigere hit view port
                    end: "bottom 20%",
                    //on enter , on leave on 
                    toggleActions: "play reverse play reverse"
                    

                }
            })

        gsap.to(".item:nth-of-type("+i+") div",
            {
                duration: 1.2, opacity: 1, ease: "power1",

                scrollTrigger: {
                    trigger: ".item:nth-of-type("+i+")",
                    start: "top 30%",// top of trigere hit view port
                    end: "bottom 20%",
                    //on enter , on leave on 
                    toggleActions: "play reverse play reverse",
                    

                }
            })
        gsap.to(".item:nth-of-type("+i+") div p,.item:nth-of-type("+i+") div img",
            {
                duration: 1.2, opacity: 1, ease: "power1",

                scrollTrigger: {
                    trigger: ".item:nth-of-type("+i+")",
                    start: "top 30%",// top of trigere hit view port
                    end: "bottom 20%",
                    //on enter , on leave on 
                    toggleActions: "play reverse play reverse",

                }
            })



    }


}

*/