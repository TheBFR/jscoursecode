var carPic = document.createElement("img");
var roadPic = document.createElement("img");
var wallPic = document.createElement("img");

var picsToLoad = 0;//set automaticall based on imageList in loadImages()

function countLoadedImagesAndLuanchIfReady() {
    picsToLoad--;
    console.log(picsToLoad);
    if(picsToLoad == 0) {
        imageLoadingDoneSoStartGame();
    }
}

function beginLoadingImage(imgVar, fileName){
    imgVar.onload = countLoadedImagesAndLuanchIfReady;
    imgVar.src = fileName;
}

function loadImages() {
    var imageList = [
        {varName: carPic, theFile: "player1car.png"},
        {varName: roadPic, theFile: "track_road.png"},
        {varName: wallPic, theFile: "track_wall.png"}
        ];

    picsToLoad = imageList.length;

    for(var i=0; i<imageList.length; i++){
        beginLoadingImage(imageList[i].varName, imageList[i].theFile);
    }
}
 