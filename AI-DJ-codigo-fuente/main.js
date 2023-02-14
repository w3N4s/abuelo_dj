song = "";
leftWristX = 0;
leftWristY = 0;
righWristX = 0;
righWristY = 0;

function preload()
{
    song = loadSaund("music.mp3");
}
function setup (){
    canvas = createCanvas(600, 500);
    canvas.center();

    video =createCapture(VIDEOS);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function draw () { 
    image(video, 0, 0, 600, 500);
}
function play() {
   song.play();
   song.setVolume(1);
   song.rate(1);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX ="+ leftWristX +"leftWristY ="+ leftWristY);

        righWristX = results[0].pose.righWrist.x;
        righWristY = results[0].pose.righWrist.y;
        console.log("rightWristX =" + righWristX +" rightWristY ="+ rightWristY);
    }
}