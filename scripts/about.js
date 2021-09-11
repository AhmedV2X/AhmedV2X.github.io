function runAbout(){
    animateMenu();
    sectionOne();

}
function sectionOne(){
    gsap.timeline()
    .to("section:nth-of-type(1)", {duration: 1, opacity:1,delay:1.2})
    for (let i = 1; i <= 4; i++) {

        gsap.to(".part:nth-of-type("+i+")",
            {
                duration: 1, opacity: 1,  ease: "power1",

                scrollTrigger: {
                    trigger: ".part:nth-of-type("+i+")",
                    start: "top 80%",// top of trigere hit view port
                    end: "bottom 30%",
                    //on enter , on leave on 
                    toggleActions: "play reverse play reverse",
                    shrub: true

                }
            })
        }

 


}
function animateMenu(){
    gsap.timeline()

    .to("header", {duration: 0, display:"flex"})
    .to("header", {duration: 1, width:"100%"})
    .to("nav", {duration: 1, opacity:1,height:"100%"})
 

}
