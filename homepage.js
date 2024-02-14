
let opacity = 0;
let intervalID = 0;

  const tag = document.getElementById("test");
  tag.addEventListener('onload', fadeIn);

  function fadeIn(){
    intervalID = setInterval(show, 200);
  }
  // // style property returns the values of an elemen'ts style attribute
  // const h1_tag = document.querySelector('#test')
  // h1_tag.addEventListener('click', function(){
  //   h1_tag.style.color = 'red';
  // })
  // // setTimeout(scrollLeft, 25);

  // // scrollLeft();

  function show(){
    // opacity = Number(window.getComputedStyle(tag).getPropertyValue("opacity"));
    console.log(opacity);
    if (opacity < 1) {
      opacity = opacity + 0.1;
      tag.style.opacity = opacity
    } else {
      clearInterval(intervalID);
    }

  }
