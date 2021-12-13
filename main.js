mg = "";
status1 = "";
objects = [];

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
        objects = results;
    }
}

function preload(){
    img = loadImage("dog_cat.jpg");
}

function draw(){
    image(img, 0, 0, 640, 420);
    if (status != ""){
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status: Object Detected";
            fill("#007FFF");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("#007FFF");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

