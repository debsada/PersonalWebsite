
let opacity = 0;
let intervalID = 0;
const tag = document.getElementById("test");

  function fadeIn(){
    intervalID = setInterval(show, 200);
  }

  function show(){
    console.log(opacity);
    if (opacity < 1) {
      opacity = opacity + 0.1;
      tag.style.opacity = opacity
    } else {
      clearInterval(intervalID);
    }

  }
