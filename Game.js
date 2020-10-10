class Game{
 constructor(){
 }

 register(){
     if(gameState===0){
     form = new Form();
     //background(224, 201, 71);
     background(0, 29, 255);
     //background(bgImg);  
     form.display();
     }
 }

 play(){
    
     if(gameState===1){
        form.hide(); 
        //background(225,225,225);
        background(224, 201, 71);
        // background(0, 29, 255);
        // dragon1 = createSprite(400, 400);
        // dragon1.addAnimation("dragon1", dragon1Img);
        // dragon1.scale = 0.5;
        // dragon2 = createSprite(800, 600);
        // dragon2.addAnimation("dradon2", dragon2Img);
        player1.body.visible = true;
        player2.body.visible = true;
        dragon1.visible = true;
        // rotate(dragon1);
        // dragon2.visible = true;
        // dragon3.visible = true;
        if (gameState===1 && dragon1.y<550){
            dragon1.velocityX = 2;
            dragon1.velocityY = 3;
          }
        
          if(dragon1.y>550){
            console.log("am inside");
            dragon1.x = 800;
            dragon1.y = 400;
          }
        
          if(keyDown(RIGHT_ARROW)){
            player1.body.x  = player1.body.x + 10;
          }
        
          if(player1.body.isTouching(egg)){
            gameState = 2;
            egg.destroy();
            dragon1.destroy();
          }
        
        drawSprites();
     }
 }

 playMaze(){
    // egg.destroy();
    // dragon1.destroy();
if(gameState===2){
    background(0);
    player1.body.changeImage("MazePlayer1", player1Maze);
    player2.body.changeImage("MazePlayer2", player2Maze);
    drawSprites();
}
 }

 
}