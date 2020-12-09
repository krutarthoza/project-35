var dog,dogHappy;
var foodS,foodStock;
var database;
var fedTime,lastFed;
var foodObj;
var feed,addFood;
var foodc;

function preload()
{
dog=loadImage('images/dogImg.png')
dogHappy=loadImage('images/dogImg1.png')
mBottle=loadImage('images/Milk(1).png')
}

function setup() {
  foodc=new Food()
	createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250,250,10,10)
  dog.addImage('dogImg',dog)
  dog.shapeColor = "red";
  foodStock=database.ref('food')
  foodStock.on("value",readStock);

  feed=createbutton('feed')
  feed.position(700,95);
  feed.mousePressed(feedDog)

  addFood=createbutton('add')
  feed.position(800,95)
  feed.mousePressed(addFood)
  foodc.display();

}


function draw() {  
  fedTime=database.ref('feedTime')
  fedTime.on('value',function(data){
    feedTime=data.val();
  })
  fill(255,255,254);
  textSize(15);
  if(lastFed<=12){
    text("Last Feed :",lastFed%12,350,40)
  }else if(lastFed===0){
    text("Last Feed :12 AM",350,40)
  }else{
    text("Last Feed :",lastFed,"AM",350,40)
  }
 
  drawSprites();
  //add styles here

}

function feedDog(){
  dog.addImage(dogHappy);
    foodObj.updateFoodStock(foodObj.getFoodStock()-1);
    database.ref('/').update({
      food:getFoodStock(),
      feedTime:hour(),
    })
  
}

function addFood(){
  foodS++;
  database.ref('/').update({
    food:foodS
  })
}
