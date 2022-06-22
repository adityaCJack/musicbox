for(let i=0;i<7;i++)
{
document.querySelectorAll("button")[i].addEventListener("click", function() {
    var button = this.innerHTML;
    sound(button);
    buttonAni(button);
    });
}

document.addEventListener("keydown", function(e) {
    sound(e.key);
    buttonAni(e.key);
})

function sound(key) {
    switch(key) {
        case "w": 
         var a = new Audio("sounds/crash.mp3");
         a.play();
         break;

         case "a": 
         var a = new Audio("sounds/kick-bass.mp3");
         a.play();
         break;
         
         case "s": 
         var a = new Audio("sounds/snare.mp3");
         a.play();
         break;
         
         case "d": 
         var a = new Audio("sounds/tom-1.mp3");
         a.play();
         break;
         
         case "j": 
         var a = new Audio("sounds/tom-3.mp3");
         a.play();
         break;
         
         case "k": 
         var a = new Audio("sounds/tom-4.mp3");
         a.play();
         break;
         
         case "l": 
         var a = new Audio("sounds/crash.mp3");
         a.play();
         break; 
    }
}

function buttonAni (currentKey) {
    document.querySelector("." + currentKey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("." + currentKey).classList.remove("pressed");
    }, 100)
}