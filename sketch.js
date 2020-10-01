var dog,happydog
var database
var foodS,foodStock

function preload(){
 dogImage = loadImage("images/dogimg.png");
 happyDog = loadImage("images/dogimg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,250,50,50);
  dog.addImage(dogImage);
  dog.scale = 0.3;
}

function draw() {  
background(46,139,87);

foodStock = database.ref('Food');
foodStock.on('value',readStock);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);

}
  drawSprites();
}
function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<-0){
    x = 0;
  }
  else{
    x = x - 1;
  }
  database.ref('/').update({
    Food:x
  })
}

