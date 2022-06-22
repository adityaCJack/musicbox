
//Main piano code starts from here

//Click Event
for (let i=0; i<=8; i++) {
    var a = document.querySelectorAll("div.main-buttons> button")[i]
        if (a) {a.addEventListener("click", function () {
        var button = this.innerHTML;
        mySound(button);
        buttonAni(button);
    })
}
//Keypress Event
    document.addEventListener("keydown", function(e){
        var button2 = e.key;
        mySound(button2.toUpperCase())
        buttonAni(button2)
    })
}

//Playing sound
function mySound(button){
   switch (button) {
    case "A":
        var audio = new Audio("sounds/notes_A.mp3")
        audio.play()
        break;
    
    case "S":
        var audio = new Audio("sounds/notes_B.mp3")
        audio.play()
        break; 
        
    case "D":
        var audio = new Audio("sounds/notes_C.mp3")
        audio.play()
        break;

    case "F":
        var audio = new Audio("sounds/notes_D.mp3")
        audio.play()
        break;

    case "H":
        var audio = new Audio("sounds/notes_E.mp3")
        audio.play()
        break;

    case "J":
        var audio = new Audio("sounds/notes_F.mp3")
        audio.play()
        break;

    case "K":
        var audio = new Audio("sounds/notes_G.mp3")
        audio.play()
        break;

    case "L":
        var audio = new Audio("sounds/notes_Ab.mp3")
        audio.play()
        break;
   
    
   }
}

//Button Animation
function buttonAni (currentKey) {
    document.querySelector("." + currentKey.toLowerCase()).classList.add("button-clicked");
    setTimeout(function(){
        document.querySelector("." + currentKey.toLowerCase()).classList.remove("button-clicked");
    }, 100)
}








