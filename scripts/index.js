setInterval(() => {
    autoRotateCard();
  }, 3000);
let rotated=false;  
function autoRotateCard(){
    if(rotated==false){
        gsap.timeline()
        .to("#rotateCard",{rotationY:180},1)
        rotated=true;
        return;
    }

    gsap.timeline()
    .to("#rotateCard",{rotationY:0},1)
    rotated=false;

    return;


}
