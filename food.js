class Food{
    constructor(){

        this.image= createSprite(60,70);
        image.addImage('milk',mBottle);
    }
    getFoodStock(){
        var foodStockRef=database.ref('food');
        foodStockRef.on("value",function(data){
            food=data.val();
        })
    }
    updateFoodStock(stock){
        database.ref('/').update({
            food:stock
        })
    }

    display(){
       var x=100;
       var y=70;
       imageMode(CENTER)
        image(this.image,720,200,60,70)
        if(foodStockRef!=0){
            for(i=0;i<foodStockRef;i++){
                if(i%10){
                    x=100
                    y=y+50
                }
                image(this.image,x,y,60,70)
                x=x+30
            }
        }
    }
}