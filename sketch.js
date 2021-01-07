var bullet,wall;
var speed,weight,thikness;

function setup() {
  createCanvas(1600,400);
 bullet = createSprite(50, 200, 50, 5);
 wall= createSprite(1200, 200, 60, 100);

 speed=random(55,90);
 weight=random(400,1500);
 thickness=random(22,83)
 bullet.velocityX = speed;
}

function draw() {
  background("black"); 
  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight* speed* speed/(thickness *thickness *thikness)

    if(damage>10)
    {
wall.shapeColor=shapeColor("green");     
    }
    if(damage<10)
    {
wall.shapeColor=shapeColor("red");     
    }

  }
  drawSprites();
}

function hasCollided (lbullet,lwall)
{
  bulletRightEdge=lbullet.x + lbullet.width
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
    return false;
}