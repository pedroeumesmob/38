var database;
var gameState = 0;
var playerCount;
var form,player,game;
var allPlayers;
var carros,mcqueen,carro2,carro3,carro4

function setup(){
  database = firebase.database(); 
  createCanvas(displayWidth-20,displayHeight-30);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  if(playerCount === 2){
    game.update(1)
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}

