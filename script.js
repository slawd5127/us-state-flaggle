class State {
  constructor(flag, name, long, lat) {
    this.flag = flag;
    this.name = name;
    this.long = long;
    this.lat = lat;
  }
}

class Round {
  constructor(correctState){
    this.correctState = correctState;
    this.guesses = [];
    
  }
  
}

class Game {
  constructor(listofStates){
    this.listofStates = listofStates;
    this.playedStates = [];
  }
}

let game;
let currentRound;

function preload() {
  let alabama = new State(loadImage('images/alabama.jpg'), "Alabama", 32.366805, -86.299969);
let alaska = new State(loadImage('images/alaska.jpg'), "Alaska", 58.301944, -134.419722);
let arizona = new State(loadImage('images/arizona.jpg'), "Arizona", 33.448377, -112.074037);
let arkansas = new State(loadImage('images/arkansas.jpg'), "Arkansas", 34.746481, -92.289595);

let allStates = [alabama, alaska, arizona, arkansas]

  game = new Game(allStates);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  background(255, 255, 255)

  frameRate(1)

 newRound() 
  

}

function newRound(){
  let state = random(game.listofStates)
  currentRound = new Round(state)
  
}

function draw(){
  print(currentRound.correctState.name)
  image(currentRound.correctState.flag, 0, 0)
  fill(200,200,200)
  //align(CENTER);
  rect(45, 300, 350, 30);
  rect(45, 350, 350, 30);
  rect(45, 400, 350, 30);
  rect(45, 450, 350, 30);
  rect(45, 500, 350, 30);
  
  //rect(object.style.textAlign = "center");
  
   // TODO: draw guesses
  // input box
  // submit button
}

