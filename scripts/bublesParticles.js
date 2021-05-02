let canvEle=document.querySelectorAll('canvas')[0];
canvEle.width=window.innerWidth;
canvEle.height=window.innerHeight;
//canvEle.height="100px";
var ctx=canvEle.getContext('2d');


function Circle(x,y,dx,dy,radius,color){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;
    this.color=color;
    this.draw=function(){
     

        ctx.beginPath();

        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        //ctx.stroke(); 
        ctx.fillStyle =color;
        ctx.fill();  
    }
    this.update=function(){
        if(this.x+this.radius>window.innerWidth||(this.x-this.radius)<0){
            this.dx=-this.dx; 
        }
        if((this.y+this.radius)>window.innerHeight||(this.y-this.radius)<0){
            this.dy=-this.dy;

        }

        this.x+=this.dx;
        this.y+=this.dy;
        this.draw();
    }
    
}

var circleArray=[];
for (var i = 0; i < 70; i++) {
        var red=Math.floor(Math.random()*255);
        var green=Math.floor(Math.random()*255);
        var blue=Math.floor(Math.random()*255);
        //var color="rgb("+red+','+green+','+blue+")";
        var color="rgb(0,0,0)";
    var radius=5;

    var x=Math.random()* (window.innerWidth-radius*2)+radius;
    var y=Math.random()*(window.innerHeight-radius*2)+radius;

    // var dx=(Math.random()-0.5)*10;
    //var dy=(Math.random()-0.5)*10;
    var dx=(Math.random()-0.5);
    var dy=(Math.random()-0.5);

    console.log("the dy is "+dy);

    circleArray.push(new Circle(x,y,dx,dy,radius,color))
}
console.log(circleArray)




function animate(){               

    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth,innerHeight)
    for(var i=0; i<circleArray.length;i++){
        circleArray[i].update();

    }


    


}
animate()
