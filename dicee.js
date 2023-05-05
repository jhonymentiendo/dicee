const max = 6;
const min = 1;

var randomNumber1 = Math.floor( (Math.random() * max) + min );
var randomNumber2 = Math.floor( (Math.random() * max) + min );
var randomdiceimage = "./images/dice"+randomNumber1+".png";
var randomdiceimage2 = "./images/dice"+randomNumber2+".png";

var image = document.getElementsByClassName("img1")[0];
image.setAttribute("src",randomdiceimage);


var image2 = document.getElementsByClassName("img2")[0];
image2.setAttribute("src",randomdiceimage2);



if(randomNumber1>randomNumber2){
    document.querySelector("h2").innerHTML="Gana player 1"
}else if(randomNumber1<randomNumber2){
    document.querySelector("h2").innerHTML="Gana player 2"
}else{
    document.querySelector("h2").innerHTML="Empate"
}