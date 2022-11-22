var lx, ly, rx, ry;

function preload() {
  hedwigs = loadSound("hedwigs.mp3");
  star = loadSound("star.mp3");
}

function setup() {
  canvas = createCanvas(640, 500);
  canvas.center();

  video = createCapture(VIDEO);
  video.hide();

  posenet = ml5.poseNet(video, modelLoaded);
  posenet.on("pose", gotPoses);
}

function modelLoaded() {
  console.log('Posenet is On!')
}

function gotPoses(results) {
  if(results.length > 0) {
    console.log(results)
    lx = results[0].pose.leftWrist.x
    ly = results[0].pose.leftWrist.y
    rx = results[0].pose.rightWrist.x
    ry = results[0].pose.rightWrist.y
  }
}

function draw() {
  image(video, 0, 0, 640, 500);
}
