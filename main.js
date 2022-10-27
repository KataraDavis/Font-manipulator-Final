noseX=0;
noseY=0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is initialized');
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nosex = "+ noseX + "nosey = "+ noseY );

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = "+ leftWristX + "rightWristX = "+ rightWristX + "difference = "+ difference );
    }
}

function draw()
{
    background("#ceff9d");
    document.getElementById("square_side").innerHTML = "width and height of a square will be "+ difference + "px";
    fill("#f0e478");
    textSize(difference);
    stroke("#f0e478");
    text("Katara", 50, 400);
}

