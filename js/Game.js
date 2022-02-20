class Game {
  constructor() {
    this.input2 = createInput("");
    this.button = createButton('Yield');
    this.resetButton = createButton("Reset Game");
    this.QNo=0;
    this.SNo=0;
    this.merit=0;
    this.RndNo=[];
    
    database.ref("/").set({
      playerCount: 0,
      gameState: 0,
      players: {}
    })
  }

  start()
  {
    form = new Form();
    form.display();

    player = new Player();
    player.getCount();
  }

  handleElements()
  {
    form.hide();
    this.input2.position(width/2-600,height/2+200);
    this.button.position(width/2-400,height/2+200);
    this.resetButton.position(width-300, height-height+100);
  }
  
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }
  play()
  {
    this.handleElements();
    this.handleResetButton();
    Player.getPlayersInfo();

    if(allPlayers!=undefined){
      question = new Question()
      question.display();
      this.QNo+=1;
    }
   
  }
  end()
  {
    question.hide();   
    this.button.hide();
    this.input2.hide();
    textSize(100)
    fill("red")
    text("Bravo! Mission Accomplished",width-width+70,height/2+270)
    image(loki,0,0,453.5,507.5)
  }
  handleResetButton()
     {
       this.resetButton.mousePressed(()=>{
         database.ref("/").set({
           playerCount: 0,
           gameState: 0,
           players: {}
         })

         this.RndNo=[];
         window.location.reload()
       })
     }
  
}
