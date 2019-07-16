
function keyPressed(e) {
    const k = e.keyCode;
    if(k === 65){
        document.querySelector(".a").classList.add("key-pressed");
        let audio = new Audio('./audio/fast.mp3');
        audio.play();
    }
    if(k === 83){
        document.querySelector(".s").classList.add("key-pressed");
        let audio = new Audio('./audio/baligator5.mp3');
        audio.play();
    }
    if(k === 68){
        document.querySelector(".d").classList.add("key-pressed");
        let audio = new Audio('./audio/baligator4.mp3');
        audio.play();
    }
    if(k === 70){
        document.querySelector(".f").classList.add("key-pressed");
        let audio = new Audio('./audio/baligator3.mp3');
        audio.play();
    }
    if(k === 71){
        document.querySelector(".g").classList.add("key-pressed");
        let audio = new Audio('./audio/baligator2.mp3');
        audio.play();
    }
    if(k === 72){
        document.querySelector(".h").classList.add("key-pressed");
        let audio = new Audio('./audio/baligator.mp3');
        audio.play();
    }
    if(k === 74){
        document.querySelector(".j").classList.add("key-pressed");
        let audio = new Audio('./audio/alligatorHiss.mp3');
        audio.play();
    }
    if(k === 75){
        document.querySelector(".k").classList.add("key-pressed");
        let audio = new Audio('./audio/alligator3.mp3');
        audio.play();
    }
}
function keyRemoved (e){
    const k = e.keyCode;
    if(k === 65){
        document.querySelector(".a").classList.remove("key-pressed")
    }
    if(k === 83){
        document.querySelector(".s").classList.remove("key-pressed")
    }
    if(k === 68){
        document.querySelector(".d").classList.remove("key-pressed")
    }
    if(k === 70){
        document.querySelector(".f").classList.remove("key-pressed")
    }
    if(k === 71){
        document.querySelector(".g").classList.remove("key-pressed")
    }
    if(k === 72){
        document.querySelector(".h").classList.remove("key-pressed")
    }
    if(k === 74){
        document.querySelector(".j").classList.remove("key-pressed")
    }
    if(k === 75){
        document.querySelector(".k").classList.remove("key-pressed")
    }
}
document.addEventListener("keydown", keyPressed, false);
document.addEventListener("keyup", keyRemoved,false);

console.log(333);

