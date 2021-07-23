var weight = [101,205,145,180];
function setup()
{
  createCanvas(400,400);
avg_weight();  
}

function draw() 
{
background("blue");
 
}
seaImg = loadImage("sea.png");
ship1 = loadImage("ship-1.png");
ship2 = loadImage("ship-2.png");
ship3 = loadImage("ship-3.png");
ship4 = loadImage("ship-4.png");

spriteName.addImage(seaImg);

if(sea.x < 0){
  sea.x = sea.width/2;
}

function avg_weight(){
  var sum = weight[0]+weight[1]+weight[2]+weight[3];
  var avg = sum/weight.length
  console.log(avg)
}