var mycanvas =document.getElementById("mycanvas");
var ctx=mycanvas.getContext("2d");
var w=500,h=500;
//canvas styles
mycanvas.height=h;
mycanvas.width=w;
var ball_pos = [mycanvas.width / 2, mycanvas.height / 2];;
var counter=0;
var sliderSpeed=50;
var i = setInterval( update, sliderSpeed );
var sliderAction=0;
document.getElementById("play").style.display='none';
document.getElementById("pause").style.display='none';
//document.getElementById("range").style.display='none';  
//balls array
var ball=[];
//Class for creating ball
function Ball(x,y,r,c,vx,vy){
  this.x=x;
  this.y=y;
  this.r=r;
  this.c=c;
  this.vx=vx;
  this.vy=vy;
  this.update=function(){
        ctx.beginPath();
        ctx.lineWidth = 1;       
		ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, false);
		ctx.fillStyle = this.c;
		ctx.fill();
		ctx.closePath();
        this.x += this.vx;
        this.y += this.vy;
        if(this.y>=(w-10)||this.y<=10){
        this.vy=-this.vy;
            counter+=1
           setCounter(counter)
         }
        if(this.x>=(h-10)||this.x<=10){
        this.vx=-this.vx;
            counter+=1
            setCounter(counter)
         }

}
}
function setCounter(counter){
 document.getElementById("counterValue").innerHTML="<b>"+counter+"</b>";
}
 function setCount(){
  counter=0;
  document.getElementById("counterValue").innerHTML="<b>"+counter+"</b>";     
 }
setInterval(setCount,1000);
//clearing canvas
function clearCanvas(){
ctx.clearRect(0, 0, w, h);
}

 function click(evt) {
    var bound = mycanvas.getBoundingClientRect();     
    ball_pos[0] = evt.clientX - bound.left;
    ball_pos[1] = evt.clientY - bound.top;
   // alert(ball_pos[0]+", "+ball_pos[1])
 }


var color = ["red","blue","yellow","black","green","Cyan","Navy","violet","maroon","olive"];
var count=0;//counting balls
//adding balls
function addBall(){
    if( sliderAction==0){
      clearInterval( i );
      i = setInterval(update,sliderSpeed);
      var rndColor=Math.floor((Math.random() * 9) + 1);
      var rndX=Math.floor((Math.random() * 8) + 1);
      var rndY=Math.floor((Math.random() * 8) + 1);
        window.onclick = click;
      ball[count]= new Ball(ball_pos[0],ball_pos[1],Math.floor((Math.random() * 10) + 5),color[rndColor],rndX,rndY);
      count++; 
      document.getElementById("pause").style.display='block'; 
      //document.getElementById("range").style.display='block'; 
    }
}
function addBallOnClick(){
    if( sliderAction==0){
      clearInterval( i );
      i = setInterval(update,sliderSpeed);
      var rndColor=Math.floor((Math.random() * 9) + 1);
      var rndX=Math.floor((Math.random() * 8) + 1);
      var rndY=Math.floor((Math.random() * 8) + 1);
      ball[count]= new Ball(Math.floor((Math.random() * 490) + 1),Math.floor((Math.random() * 490) + 1),Math.floor((Math.random() * 10) + 5),color[rndColor],rndX,rndY);
      count++; 
      document.getElementById("pause").style.display='block'; 
      //document.getElementById("range").style.display='block'; 
    }
}
function removeBall(){
  if(count>0){
  var rndColor=Math.floor((Math.random() * 9) + 1);
  var rndX=Math.floor((Math.random() * 8) + 1);
  var rndY=Math.floor((Math.random() * 8) + 1);
  ball[count]= new Ball(Math.floor((Math.random() * 490) + 1),Math.floor((Math.random() * 490)+1),Math.floor((Math.random() * 10) + 5),color[rndColor],rndX,rndY);
  count--;  
}
 if(count<=0){
    document.getElementById("pause").style.display='none'; 
    document.getElementById("play").style.display='none'; 
    //document.getElementById("range").style.display='none';  
    sliderAction=0 
    clearInterval( i );
    i = setInterval(update,sliderSpeed); 
 }
}

function pause(){
     document.getElementById("pause").style.display='none';
     document.getElementById("play").style.display='block';
    sliderAction=1        
    clearInterval(i);    
}
function play(){  
     document.getElementById("play").style.display='none';
     document.getElementById("pause").style.display='block';
     sliderAction=0
     i = setInterval(update,sliderSpeed); 
}

function showValue(newValue){  	
    if(newValue==10){
     sliderSpeed=50     
    }
    if(newValue==20){
     sliderSpeed=40      
    }
    if(newValue==30){
     sliderSpeed=30     
    }
    if(newValue==40){
     sliderSpeed=20     
    }
    if(newValue==50){
     sliderSpeed=10    
    } 
    clearInterval( i );  
    if(sliderAction==0){
    i = setInterval(update,sliderSpeed);     
    }
}
//updating canvas
function update(){
  var i;
  clearCanvas();
  for(i=0;i<count;i++){
  ball[i].update();
}
}
    

 


