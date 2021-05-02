function openMenu(){
    gsap.timeline()
    .to(".mobileMenu",{duration:0,display:"flex"})
    .to(".mobileMenu",{duration:1,opacity:1})

}
function closeMenu(){
    gsap.timeline()
    .to(".mobileMenu",{duration:1,opacity:0})
    .to(".mobileMenu",{duration:0,display:"none"})
}
