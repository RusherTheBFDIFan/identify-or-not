img = "";
status1 = "";

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = 'Status: Detecting Objects...';
}

function modelLoaded(){
    console.log("Model's loaded.");
    status1 = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}

function preload(){
    img = loadImage("dog_cat.jpg");
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#2A52BE");
    text("Dog", 45, 75);
    noFill();
    stroke("#2A52BE");
    rect(30, 60, 450, 350);

    fill("#FF0000");
    text("Cat", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 270, 320);
}