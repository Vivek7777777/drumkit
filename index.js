// alert("hi");

var drumss = document.querySelectorAll(".drum");
var numberofdrums = drumss.length;

// sound when clicked
for(var i = 0;i<numberofdrums;i++){
    drumss[i].addEventListener("click" , function (){
        // this.style.color = "white";
            makeSound(this.innerHTML);
            buttonAnimation(this.innerHTML);
        } );
    }
    
    // sound using keyboard
    document.addEventListener("keypress", function(ev){
        // console.log(ev);
        makeSound(ev.key);
        buttonAnimation(ev.key);
} )

function makeSound(sound){

    switch (sound) {
            case "w":
                var audio1 = new Audio("sounds/tom-1.mp3");
                audio1.play();
                break;
            case "a":
                var audio1 = new Audio("sounds/tom-2.mp3");
                audio1.play();
                break;
            case "s":
                var audio1 = new Audio("sounds/tom-3.mp3");
                audio1.play();
                break;
            case "d":
                var audio1 = new Audio("sounds/tom-4.mp3");
                audio1.play();
                break;
            case "j":
                var audio1 = new Audio("sounds/snare.mp3");
                audio1.play();
                break;
            case "k":
                var audio1 = new Audio("sounds/crash.mp3");
                audio1.play();
                break;
            case "l":
                var audio1 = new Audio("sounds/kick-bass.mp3");
                audio1.play();
                break;
            
            default:
                break;
        }
}

//adding animation by adding class 
function buttonAnimation(x){
    var anim = document.querySelector("." + x);
    anim.classList.add("pressed");
    setTimeout(function(){
        anim.classList.remove("pressed");
    }, 100 );
}