var movingrectangle,fixedrectangle,fixedrectangle2,fixedrectangle1;
var result,result1,result2;
function setup() {
  createCanvas(800,400);
  movingrectangle=createSprite(400, 200, 80, 50);
  fixedrectangle=createSprite(200,100,80,40);
  fixedrectangle1=createSprite(300,100,80,40);
  fixedrectangle2=createSprite(500,100,80,40);
  movingrectangle.shapeColor="green" ;
  fixedrectangle.shapeColor="green";
  fixedrectangle1.shapeColor="green";
  fixedrectangle2.shapeColor="green";
  movingrectangle.debug=true;
  fixedrectangle.debug=true;
  fixedrectangle1.debug=true;
  fixedrectangle2.debug=true;
}

function draw() {
  background(255,255,255); 
 movingrectangle.x=mouseX;
 movingrectangle.y=mouseY;
 console.log(movingrectangle.y, fixedrectangle.y);

 result=isTouching(movingrectangle,fixedrectangle1);
if (result===true){
  movingrectangle.shapeColor="red";
  fixedrectangle1.shapeColor="red";
}
else{
  movingrectangle.shapeColor="green";
  fixedrectangle1.shapeColor="green";
}

result1=isTouching(movingrectangle,fixedrectangle2);
if (result1===true){
  movingrectangle.shapeColor="red";
  fixedrectangle2.shapeColor="red";
}
else{
  movingrectangle.shapeColor="green";
  fixedrectangle2.shapeColor="green";
}
  
  result2=isTouching(movingrectangle,fixedrectangle);
  if (result2===true){

  
  movingrectangle.shapeColor="red";
     fixedrectangle.shapeColor="red";
  }
  else{
     movingrectangle.shapeColor="green";
     fixedrectangle.shapeColor="green";
  }
  drawSprites();
}

