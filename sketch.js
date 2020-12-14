let clouds;
let scroll;

let planeX = 200;
let planeY = 200;

let isLeft;
let isRight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  scroll = 0;
  
  isLeft = false;
  isRight = false;
  
  
  clouds = [

    {
      x: -1000,
      y: 200,
      w: 100,
      h: 50
    },
    {
      x: -300,
      y: 500,
      w: 150,
      h: 60
    },
    {
      x: -500,
      y: 200,
      w: 100,
      h: 80
    },
    {
      x: 100,
      y: 600,
      w: 150,
      h: 40
    },
    {
      x: 300,
      y: 200,
      w: 100,
      h: 50
    },
    {
      x: 700,
      y: 400,
      w: 140,
      h: 50
    },
    {
      x: 1000,
      y: 100,
      w: 100,
      h: 30
    },
    {
      x: 1600,
      y: 300,
      w: 300,
      h: 80
    },
    {
      x: 2000,
      y: 500,
      w: 140,
      h: 60
    }

  ]
}

function draw() {
  background(135, 206, 235);
  push();
  translate(scroll, 0)
  //clouds
  for (let i = 0; i < clouds.length; i++) {
    fill(255);
    noStroke();
    ellipse(clouds[i].x, clouds[i].y - 20,
      clouds[i].w - 10, clouds[i].h)

    ellipse(clouds[i].x + 20, clouds[i].y,
      clouds[i].w, clouds[i].h)

    ellipse(clouds[i].x - 20, clouds[i].y,
      clouds[i].w, clouds[i].h)
  }
  pop();
  if(isLeft == true){
  //state2
  fill(175, 0 , 0)
  ellipse(planeX, planeY, 150, 40)
  arc(planeX + 55, planeY-8, 25, 65,PI,0)
  
  fill(175)
  arc(planeX - 10, planeY - 20, 30, 70, PI, 0)
  arc(planeX - 9, planeY , 30, 100, 0, PI)
  
  } else {
    
  //state1
  fill(175, 0 , 0)
  ellipse(planeX, planeY, 150, 40)
  arc(planeX - 55, planeY-8, 25, 65,PI,0)
  
  fill(175)
  arc(planeX - 10, planeY - 20, 30, 70, PI, 0)
  arc(planeX - 9, planeY , 30, 100, 0, PI)
  
  } 
  
  //logic scroll
  if(isLeft){
    if(planeX > width * 0.2){
      
      planeX -= 5
    
    }else{
    
      scroll += 5
    }
  
  }
  
  if(isRight){
    if(planeX < width * 0.8){
      
      planeX += 5
    
    }else{
    
      scroll -= 5
    }
  
  }
  
}
function keyPressed(){
  if(keyCode == LEFT_ARROW){
  
    isLeft = true;
  }
  if(keyCode == RIGHT_ARROW){
  
    isRight = true;
  }

}

function keyReleased(){
  if(keyCode == LEFT_ARROW){
  
    isLeft = false;
  }
  if(keyCode == RIGHT_ARROW){
  
    isRight = false;
  }

}
