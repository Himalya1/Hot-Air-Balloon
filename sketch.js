var balloon,balloonImage1;
// create database and position variable here
var database, height;

function preload(){
   bg =loadImage("cityImage.png");

   balloonImage1=loadAnimation("hotairballoon1.png");

   
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotairballoon",balloonImage1);
  balloon.scale=0.5;

  var balloonPosition= database.ref('balloon/height');
  balloonPosition.on("value", readHeight, showError);
}

// function to display UI
function draw() {
  background(bg);
  if(height!=null){

  
  if(keyDown(LEFT_ARROW)){
    updateHeight(-10,0);
    
    //write code to move air balloon in left direction
    
  }
  else if(keyDown(RIGHT_ARROW)){
    updateHeight(10,0);
    
    //write code to move air balloon in right direction
    
  }
  else if(keyDown(UP_ARROW)){
    updateHeight(0,-10);
    
    //write code to move air balloon in up direction
  
  }
  else if(keyDown(DOWN_ARROW)){
    updateHeight(0,10);
    
    
    //write code to move air balloon in down direction
    
  }
}
  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

function updateHeight(x,y){
  database.ref('balloon/height').set({
    'x': height.x + x,
    'y': height.y + y
  })
}

function readHeight(data){
  height = data.val();
  balloon.x = height.x;
  balloon.y = height.y;
}

function showError(){
  console.log("Error in writing to the database");
}
