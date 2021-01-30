song = "";

LeftWristX = 0;
RightWristX = 0;
LeftWristY = 0;
RightWristY = 0;

scoreRightWrist= 0;
scoreLeftWrist=0;
function preload() {
	song = loadSound("music1.mp3");
}

function setup() {
	canvas = createCanvas(600, 400);
	canvas.center();
	canvas.position(470, 270);
	video = createCapture(VIDEO);
	video.hide();

	posenet = ml5.poseNet(video, modelLoaded);
	posenet.on('pose', gotPoses);
}
function modelLoaded() {
	console.log("Loaded Successfully");
}
function gotPoses(results) {
	if (results.length > 0) {
		console.log(results);
	  LeftWristX=results[0].pose.leftWrist.x;
	  LeftWristY=results[0].pose.leftWrist.y;
	  RightWristX=results[0].pose.rightWrist.x;
	  RightWristY=results[0].pose.rightWrist.y;

	  scoreLeftWrist=results[0].pose.keypoints[9].score;
	  scoreRightWrist=results[0].pose.keypoints[10].score;
	}
}
function draw() {
	image(video, 0, 0, 600, 400);
	fill("#FFFB33");
	stroke("endregion");
	if(scoreLeftWrist > 0.2){
		circle(LeftWristX,LeftWristY,20);
		num=Number(LeftWristY);
		number=num.toFixed(3);
		rem_deci=floor(number);
		volume=rem_deci/600;
		song.setVolume(volume);
		document.getElementById("volume").innerHTML="volume="+volume;
	}
	if(scoreRightWrist > 0.2){
		circle(RightWristX,RightWristY,20)
		if(RightWristY > 0 && RightWristY <= 100){
			document.getElementById("speed").innerHTML="Speed=0.5X";
			song.rate(0.5);
		}

		else if(RightWristY > 100 && RightWristY <= 200){
			document.getElementById("speed").innerHTML="Speed=1X";
			song.rate(1);
		}

		else if(RightWristY > 200 && RightWristY <= 300){
			document.getElementById("speed").innerHTML="Speed=1.5X";
			song.rate(1.5);
		}

		else if(RightWristY > 300 && RightWristY <= 400){
			document.getElementById("speed").innerHTML="Speed=2X";
			song.rate(2);
		}

		else if(RightWristY > 400){
			document.getElementById("speed").innerHTML="Speed=2.5X";
			song.rate(2.5);
		}
	}
	
}

function play() {
	song.play();
	song.setVolume(1);
	song.rate(1);
}
email = localStorage.getItem("email");
document.getElementById("email").innerHTML = "<h1>Welcome " + email + "!</h1>";
