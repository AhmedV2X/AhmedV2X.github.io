function runHome() {
    sectionOne();
    //  sectionTwo();
}
function sectionOne() {
    var rule = CSSRulePlugin.getRule("main section:nth-of-type(1) .panel:nth-of-type(1) h1::after"); //get the rule
    // gsap.

    gsap.timeline()
        .to("main section:nth-of-type(1),body", { duration: 1, backgroundColor: "black" })
        .to("main section:nth-of-type(1) .panel:nth-of-type(1) h1", { duration: 1.5, opacity: 1 })
        .to(rule, { duration: 1, cssRule: { opacity: 1 } })
        .to("main section:nth-of-type(1) .panel:nth-of-type(1) h1", { duration: .5, opacity: 0 })
        .to("main section:nth-of-type(1) .panel:nth-of-type(1)", { duration: 0, display: "none" })
        .to("main section:nth-of-type(1) .panel:nth-of-type(2)", { duration: 0, display: "flex" })
        .to("main section:nth-of-type(1) .panel:nth-of-type(2)", { duration: 1.5, opacity: 1 })
        .to("main section:nth-of-type(1) .panel:nth-of-type(2) h1", { duration: 1.5, text: "Ahmed Mahmoud", delay: 0 })
        .to("main section:nth-of-type(1) .panel:nth-of-type(2) h1", { duration: 2.5, text: "Full Stack Web Developer", delay: 2 })
        .to("main section:nth-of-type(1) .panel:nth-of-type(2) h1", { duration: 1, fontSize: "8vw", width: "80%", y: "5%" })

        .to("header", { duration: 0, display: "flex" })
        .to("header", { duration: 1, width: "100%" })
        .to("nav", { duration: 1, opacity: 1, height: "100%" })

        .to("header", { duration: 1, borderBottomColor: "black" })

}


