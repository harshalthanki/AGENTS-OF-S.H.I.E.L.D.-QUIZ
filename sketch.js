var canvas, bg;
var bg1Img, bg2Img, bg3Img;
var database;
var form, player, game, question;
var playerCount;
var gameState;
var allPlayers;
var loki;

function preload() {
  bg1Img = loadImage("assets/Bg1.jpg");
  bg2Img = loadImage("assets/Bg2.jpg");
  bg3Img = loadImage("assets/Bg3.jpg");
  loki = loadImage("assets/Loki.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(bg3Img);
  //drawSprites();
  if(playerCount == 2)
  {
    game.update(1);
  //  console.log("1");
  }
  if(gameState === 1)
  {
    //console.log("2");
    if(game.QNo<15)
    {
      if(game.SNo === game.QNo)
      {
        game.play();
      }
      
    }
    else
    {
      if(game.SNo===15)
    {
      game.update(2);
    }
     }
    
     fill("red");
     textSize(50);
     text("Your Score: " + game.merit + " / 15", width-450,height/2-310);
  }
  if(gameState===2)
  {
     game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}