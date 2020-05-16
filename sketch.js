// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

var ground,ball,canonball,shootball,tanker;


/*
const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function preload(){
    
}


function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(500,500)

    tanker=new Tanker(100,200,50,20);

    ground= new Ground(200,200,500,10);
    
    canonball = new CanonBall(210,190,10,10);

}

function draw() {
// Remember to update the Matter Engine and set the background.

background(255,255,255);

ground.display();
tanker.display();
canonball.display();


}


function keyReleased() {
    // Call the shoot method for the cannon.
}