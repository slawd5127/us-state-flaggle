class State {
  constructor(flag, name, long, lat) {
    this.flag = flag;
    this.name = name;
    this.long = long;
    this.lat = lat;
  }
}

class Round {
  constructor(correctState) {
    this.correctState = correctState;
    this.guesses = [];

  }

}

class Game {
  constructor(listofStates) {
    this.listofStates = listofStates;
    this.playedStates = [];
  }
}

let game;
let currentRound;
let allStates

function preload() {
  let alabama = new State(loadImage('images/alabama.jpg'), "Alabama", 32.366805, -86.299969);
  let alaska = new State(loadImage('images/alaska.jpg'), "Alaska", 58.301944, -134.419722);
  let arizona = new State(loadImage('images/arizona.jpg'), "Arizona", 33.448377, -112.074037);
  let arkansas = new State(loadImage('images/arkansas.jpg'), "Arkansas", 34.746481, -92.289595);
  let california = new State(loadImage('images/california.jpg'), "California", 38.581572, -121.494400);
  let colorado = new State(loadImage('images/colorado.jpg'), "Colorado", 39.739236, -104.990251)

  allStates = [alabama, alaska, arizona, arkansas, california, colorado]

  game = new Game(allStates);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  background(255, 255, 255)

  frameRate(1)

  newRound()

  createControls()

}

function newRound() {
  let state = random(game.listofStates)
  currentRound = new Round(state)
  // reset program status
  const CORRECT_STATE = 1;
  const GUESS_STATE = 0;
  let gameState = GUESS_STATE;

}

function draw() {
  //title
  strokeWeight(2);
  stroke(1);
  fill(0, 0, 0,);
  textAlign(CENTER);
  textSize(20);
  text("US STATE FLAGGLE", 220, 20);

  //outline
  strokeWeight(4);
  stroke(51);
  noFill();
  rect(44, 44, 352, 235);

  //flag
  //print(currentRound.correctState.name);
  image(currentRound.correctState.flag, 45, 45, 350, 233);

  // guess boxes 
  strokeWeight(2);
  fill(200, 200, 200)
  currentRound.guesses.forEach((guess, i) => {
    x = 45
    y = 300 + i * 50
    rect(x, y, 350, 30)
    text(guess, x, y);
  })

}



function createControls() {
  //input box
  let inp = createInput('');
  inp.position(50, 550);
  inp.size(355, 30);
  inp.input(myInputEvent)

  //button
  button = createButton('submit');
  button.position(370, 550);
  button.size(55, 30)
  button.mousePressed(myselectEvent);



}

function myInputEvent() {
  let guess = this.value();
  generateSelection(guess);

}

let sel;
function generateSelection(filter) {
  if (sel) { sel.remove() }
  sel = createSelect()
  sel.position(45, 500);
  sel.size(355, 30);
  allStates.forEach(state => {
    if (state.name.startsWith(filter)) {
      sel.option(state.name);
      sel.changed(myselectEvent);
    }
  })
}

function myselectEvent() {
  let statename = this.value();
  print("selected state", statename, currentRound.correctState.name);
  if (currentRound.guesses.includes(statename)){
    //pop up message
    //clear input box
  }

  else(
  if (statename != currentRound.correctState.name) {
    currentRound.guesses.push(statename);
  }
  else {
    //set status to correct
    //pop up message
  }
}

function mousePressed(){
  // if program status == correct, then make new round
}




//  p5.prototype.popup = (
//     message,
//     seconds = 1,
//     x = width / 2,
//     y = height / 2,
//     size = Math.max(innerWidth, innerHeight) / 50
// ) => {
//     let stop_frame_number = seconds * frameRate();
//     if (frameCount <= stop_frame_number) {
//         let opacity_value = floor(
//             map(
//                 abs(frameCount - stop_frame_number),
//                 0,
//                 stop_frame_number,
//                 0,
//                 255
//             )
//         );
