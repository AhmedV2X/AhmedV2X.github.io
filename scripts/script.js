function runHome(){
    sectionOne();
  //  sectionTwo();
}
function sectionOne(){
    var rule = CSSRulePlugin.getRule("section:nth-of-type(1) .panel:nth-of-type(1) h1::after"); //get the rule
   // gsap.

    gsap.timeline()
   .to("section:nth-of-type(1) .panel:nth-of-type(1) h1",{duration:1.5,opacity:1})
   .to(rule, {duration: 1, cssRule: {opacity: 1}})
   .to("section:nth-of-type(1),body",{duration:1,backgroundColor:"black"})
   .to("section:nth-of-type(1) .panel:nth-of-type(1)",{duration:0,display:"none"})

   .to("section:nth-of-type(1) .panel:nth-of-type(2)",{duration:0,display:"flex"})

   .to("section:nth-of-type(1) .panel:nth-of-type(2)",{duration:1.5,opacity:1})
   .to("section:nth-of-type(1) .panel:nth-of-type(2) h1", {duration: 1.5, text: "Ahmed Mahmoud", delay: 0})
   .to("section:nth-of-type(1) .panel:nth-of-type(2) h1", {duration: 2.5, text: "Full Stack Web Developer", delay: 2})
   .to("section:nth-of-type(1) .panel:nth-of-type(2) h1", {duration: 1, fontSize:"8vw",width:"80%",y:"5%"})

   .to("header", {duration: 0, display:"flex"})
   .to("header", {duration: 1, width:"100%"})
   .to("nav", {duration: 1, opacity:1,height:"100%"})

   .to("header", {duration: 1, borderBottomColor:"black"})

}

/*
function sectionTwo(){
        
    
    gsap.to("main section:nth-of-type(2) .left",
    {duration:1,x:"3%",opacity:1,ease:"power1",

        scrollTrigger:{
           trigger:"main section:nth-of-type(2)",
           start:"top 60%",// top of trigere hit view port
           end:"bottom 30%",
           //on enter , on leave on 
           toggleActions:"play reverse play reset"

       }
   })
   gsap.to("main section:nth-of-type(2) .right",
   {duration:1,x:"3%",opacity:1,ease:"power1",

       scrollTrigger:{
          trigger:"main section:nth-of-type(2)",
          start:"top 60%",// top of trigere hit view port
          end:"bottom 30%",
          //on enter , on leave on 
          toggleActions:"play reverse play reset"

      }
  })

}
function openMe(){
    gsap.timeline()
    .to("#email-pop",{duration:1,opacity:1,display:"flex"})


}*/