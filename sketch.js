var canvas;

var foodStock,foodS;


var database;





function preload(){
    dog=loadImage("dog.png")
    happyDog=loadImage("happyDog.png")
    milkImg=loadImage("Milk.png")
    
}

function setup(){
  canvas = createCanvas(500,500);
  database = firebase.database();


  dog=createSprite(width/2,height/2)
  dog.addImage(dog)
  foodStock=database.ref("Food");
  foodStock.on("value",readStock)
}


function draw(){

   background("green");

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog)
  }
  drawSprites();
  text("press up arrow to feed drago milk!",width/2,20)
  text("food remaining: "+x,width/2,dog.y+50)
  }
  //Function to read values from DB
function readStock(data) {
  foodS=data. val();
  }

//Function to write values in DB
function writeStock(x) {
  if(x<=0){
    x=0
  }else{
    x-=1
  }
  database. ref('/ ') .update({
  Food : x
  })
}
  
