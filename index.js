
//document.querySelectorAll("button")[0].addEventListener("click",handleClick);
//document.querySelectorAll("button")[1].addEventListener("click",handleClick);
//document.querySelectorAll("button")[2].addEventListener("click",handleClick);
//document.querySelectorAll("button")[3].addEventListener("click",handleClick);
//document.querySelectorAll("button")[4].addEventListener("click",handleClick);
//document.querySelectorAll("button")[5].addEventListener("click",handleClick);
//document.querySelectorAll("button")[6].addEventListener("click",handleClick);
//document.querySelectorAll("button")[7].addEventListener("click",handleClick);

for(var i=0;i<7;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var innerHTML1=this.innerHTML;
    mallSounds(innerHTML1);
    buttonAnimation(innerHTML1);


  });
}

document.addEventListener("keypress",function(event){
  mallSounds(event.key);
  buttonAnimation(event.key);
});
function mallSounds(key){
  switch (key) {
    case "w":
      var crash=new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kick=new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      var snare=new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1=new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2=new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3=new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4=new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default: console.log(key);
}

}

function buttonAnimation(currentKey){
  var butt=document.querySelector("."+currentKey);
  butt.classList.toggle("pressed");
  setTimeout(function(){
    butt.classList.toggle("pressed");
  },100);

}
