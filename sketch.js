var canvas,redBox;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    redBox=createSprite(300,100,80,10);
    redBox.shapeColor("red")
    greenBox=createSprite(300,100,80,10);
   greenBox.shapeColor("green")
    blueBox=createSprite(300,100,80,10);
    blueBox.shapeColor("blue")
    pinkBox=createSprite(300,100,80,10);
    pinkBox.shapeColor("pink")
                




    //create box sprite and give velocity
    Box=createSprite(200,200,0,20);
    Box.shapeColor("white")
    Box.velocity=5
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite



    //add condition to check if box touching surface and make it box
}
