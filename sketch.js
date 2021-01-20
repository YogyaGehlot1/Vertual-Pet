var dogsp, dog, happyDog
var food
var dataBase

function preload()
{
	dog=loadImage('images/dogImg.png')
  happyDog=loadImage('images/dogImg1.png')
}

function setup() {
  createCanvas(800, 700);
  dogsp=createSprite(400, 350, 50, 50)
  dogsp.addImage(dog)
  dataBase=firebase.database()
  dataBase.ref("petFoodCount").on("value",readFoodStock)
}

function draw() {
  background("#E7B9EE")
  if (food==10)
  textSize(30)
  if(food > 0){
  text("Pet Food Left : "+food,300,50)
  drawSprites();
  }
  else if(food <= 0){
    text("Press SPACE to refill food",300,50)
  }
}

function readFoodStock(data){
  food=data.val()
}
function keyPressed(){
  if(keyCode==UP_ARROW){
    dataBase.ref("/").update({'petFoodCount':food-1})
    console.log("-_-")
  }
  if(keyCode==32 & food <= 0){
    dataBase.ref("/").update({'petFoodCount':10})
    console.log(":)")
  }
}
