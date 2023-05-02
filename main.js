function setup() 
{ 
    canvas = createCanvas(450,450);
    canvas.position(700,150);
    video = createCapture(VIDEO);
    video.size(450,450);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);    
}

function modelLoaded(){
        console.log("poseNet is initialized")
}

left_wristX = 0;
right_wristX = 0;
difference = 0;

function gotPoses(results){
    if (results.length > 0)
    {
    
        left_wristX = results[0].pose.leftWrist.x;
        right_wristX = results[0].pose.rightWrist.x;
        
        difference =floor(left_wristX-right_wristX)

        console.log("left wrist X is : "+left_wristX+" , Right wrst X is : "+right_wristX+" and difference is :"+difference);    
    } 
}
function draw(){
    background("#00FFFF");
    textSize(difference/3)
    fill("green");
    text("Peter",50,400);
    document.getElementById("status").innerHTML="The font of the text is "+difference/3;
}