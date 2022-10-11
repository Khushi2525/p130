music1 = "";
music2 = "";
leftWrist_x = 0;
leftWrist_y = 0;
rightWrist_x = 0;
rightWrist_y = 0;
scoreLeftWrist = 0;
scoreRightWrist = 0;
song_ls = "";
song_2s="";
function setup(){
    canvas = createCanvas(500,500);
    canvas.position(520,200)
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0, 0, 500, 500);

    fill("red");
    stroke("red");

   song_1s=music1.isPlaying();
   song_2s=music2.isPlaying();

    if (scoreLeftWrist > 0.2){
        circle(leftWrist_x ,leftWrist_y,20);
    music2.stop();

        if(song_1s== false){
            music1.play();
            document.getElementById("song").innerHTML="SONG NAME:HARRY POTTER";
            
        }
    }

    

    if (scoreRightWrist > 0.2){
        circle(rightWrist_x ,rightWrist_y,20);
     music1.stop();

        if(song_2s == false){
            music2.play();
            document.getElementById("song").innerHTML="SONG NAME:PETTER PAN";
        }
    }
}

function preload(){
   music1 = loadSound("music.mp3"); 
   music2 = loadSound("music2.mp3");
}

function modelloaded(){
    console.log("Posenet is intialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log(scoreLeftWrist);

        scoreRightWrist = results[0].pose.keypoints[10].score;
        console.log(scoreRightWrist);

        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("leftWrist_x = "+leftWrist_x+"leftWrist_y = "+leftWrist_y);

        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("rightWrist_x = "+rightWrist_x+"rightWrist_y = "+rightWrist_y);
    }
}
