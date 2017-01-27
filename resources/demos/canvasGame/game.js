/**
 * Created by Shaun on 27/01/2017.
 */
var canvas = null;
var context = null;
var img = null;

onImageLoad = function(){
    context.drawImage(img, 300, 200);
}

setup = function(){
    canvas = document.getElementById("my_canvas");
    context = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 400;

    img = new Image();
    img.src = "ralphyrobot.jpg";
    img.onload = onImageLoad();
}

setup();