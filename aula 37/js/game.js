class Game{
    constructor(){

    };
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data) {
            gameState = data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }                                                       
    async start(){
        if (gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }else{
                playerCount = 0;
            }
            form = new Form();
            form.display(playerCount);
        }

        mcqueen = createSprite(100,200);
        carro2 = createSprite(300,200);
        carro3 = createSprite(500,200);
        carro4 = createSprite(700,200);
        carros = [mcqueen,carro2,carro3,carro4];

    }
    play(){
        form.hide();
        textSize(30)
        text("começando...",120,100);
        Player.getPlayerInfo();
        if(allPlayers!== undefined){
            var display_position = 130;
            var index = 0;
            var x = 0;
            var y;

            for(var plr in allPlayers){

                index = index +1;
                x = x +200;
                y = displayHeight-allPlayers[plr].distance;
                carros[index-1].x = x;
                carros[index-1].y = y;

                if(index === player.index){
                    carros[index-1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = carros[index-1].y;
                }
                //display_position +=20;
                //textSize(15);
                //text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_position);
            } 
        }
        if(keyDown(UP_ARROW)&&player.index!== null){
            player.distance+=50;
            player.update();
        }
        drawSprites();
    }

}