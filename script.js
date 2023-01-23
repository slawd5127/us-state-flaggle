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

function preload() {
  let alabama = new State(loadImage('images/alabama.jpg'), "Alabama", 32.366805, -86.299969);
  let alaska = new State(loadImage('images/alaska.jpg'), "Alaska", 58.301944, -134.419722);
  let arizona = new State(loadImage('images/arizona.jpg'), "Arizona", 33.448377, -112.074037);
  let arkansas = new State(loadImage('images/arkansas.jpg'), "Arkansas", 34.746481, -92.289595);
  let california = new State(loadImage('images/california.jpg'), "California", 38.581572, -121.494400);
  let colorado = new State(loadImage('images/colorado.jpg'), "Colorado", 39.739236, -104.990251)

  let allStates = [alabama, alaska, arizona, arkansas, california, colorado]

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

}

function draw() {
  //title
  strokeWeight(3);
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
  print(currentRound.correctState.name);
  image(currentRound.correctState.flag, 45, 45, 350, 233);

  // guess boxes 
  strokeWeight(2);
  fill(200, 200, 200)
  rect(45, 300, 350, 30);
  rect(45, 350, 350, 30);
  rect(45, 400, 350, 30);
  rect(45, 450, 350, 30);
  rect(45, 500, 350, 30);

}



function createControls(){
   //input box
  let inp = createInput('');
  inp.position(50, 550);
  inp.size(355, 30);

  //button
  button = createButton('submit');
  button.position(370, 550);
  button.size(55, 30)
  button.mousePressed(InputEvent);

  
  
}

function generateSelection(filter){
  if(sel) {sel.remove()}
  sel = createSelect()
  sel.postion(50, 540);
  allStates.forEach(state => {
    if(state.name.startsWith(filter)){
      sel.option(state.name)
      sel.changed(myselectEvent)
    }
  })
}

function myselectEvent(){
  let statename = sel.value()
  if(sel.value = correctState.name){
    
  }
    




function InputEvent() {
 if (inp = correctState.name) {
    
   
    


  }
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
} 